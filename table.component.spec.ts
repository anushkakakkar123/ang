import { TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

describe('TableComponent', () => {
let tableComponent: TableComponent;
beforeEach(async () => {
  const http = TestBed.inject(HttpClient);
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
  
  const url = 'https://api.example.com/leaves';
  const component = await TestBed.inject(TableComponent);
  const http = TestBed.inject(HttpClient);
  
  const response = await http.get(url);
  const data = response.json();
  const rowData = await data.data.map((item: any) => {
  return {
  name: item.name,
  leaveType: item.leaveType,
  startDate: item.startDate,
  endDate: item.endDate,
  teams: item.teams
  };
  });
  
  component.rowData = rowData;
  
  expect(component.rowData).toEqual(JSON.parse(expectedData));
  
  });
});