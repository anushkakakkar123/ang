import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveAppComponent } from './leaveapp.component';

describe('LeaveAppComponent', () => {
  let component: LeaveAppComponent;
  let fixture: ComponentFixture<LeaveAppComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LeaveAppComponent],
    });
    fixture = await TestBed.createComponent(LeaveAppComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with the correct properties', async () => {
    await fixture.whenStable();
    const form = component.addLeave;
    expect(form.controls['name'].value).toBe('');
    expect(form.controls['leave_type'].value).toBe('');
    expect(form.controls['start_date'].value).toBe('');
    expect(form.controls['end_date'].value).toBe('');
    expect(form.controls['teams'].value).toBe('');
    expect(form.controls['file'].value).toBe('');
    expect(form.controls['reporter'].value).toBe('');
  });

  it('should disable the submit button if the form is invalid', async () => {
    await fixture.whenStable();
    const form = component.addLeave;
    form.controls['name'].setValue('');
    form.controls['leave_type'].setValue('');
    form.controls['start_date'].setValue('');
    form.controls['end_date'].setValue('');
    form.controls['teams'].setValue('');
    form.controls['file'].setValue('');
    form.controls['reporter'].setValue('');
    const debugElement = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(debugElement.querySelector('button[type="submit"]').disabled).toBe(true);
  });

  it('should enable the submit button if the form is valid', async () => {
    await fixture.whenStable();
    form.controls['name'].setValue('John Doe');
    form.controls['leave_type'].setValue('Casual Leave');
    form.controls['start_date'].setValue('2023-01-01');
    form.controls['end_date'].setValue('2023-01-03');
    form.controls['teams'].setValue('Engineering');
    form.controls['file'].setValue('');
    form.controls['reporter'].setValue('Shivay');
    expect(fixture.element.querySelector('button[type="submit"]').disabled).toBe(false);
  });
});
