import { TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { HttpClientModule } from '@angular/common/http';

describe('TableComponent', () => {
let tableComponent: TableComponent;

beforeEach(async () => {
await TestBed.configureTestingModule({
declarations: [
TableComponent
],
imports: [
HttpClientModule
]
});

tableComponent = await TestBed.inject(TableComponent);

});

it('should fetch data from the server', async () => {
  const expectedData: string = '{"data": [{"name": "John Doe", "leave_type": "sick", "start_date": "2023-03-08", "end_date": "2023-03-10", "teams": "Engineering"}, {"name": "Jane Doe", "leave_type": "casual", "start_date": "2023-03-09", "end_date": "2023-03-11", "teams": "Marketing"}]';

await tableComponent.ngOnInit();

expect(tableComponent.rowData).toEqual(JSON.parse(expectedData));

});

});