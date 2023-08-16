import { ComponentFixture, TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaveAppComponent } from './leaveapp.component';
import { HttpClientModule } from '@angular/common/http';

describe('LeaveAppComponent', () => {
let component: LeaveAppComponent;
let fixture: ComponentFixture<LeaveAppComponent>;

beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [LeaveAppComponent],
imports: [ReactiveFormsModule, HttpClientTestingModule],
providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
}).compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(LeaveAppComponent);
component = fixture.componentInstance;
});

it('should create the component', () => {
expect(component).toBeTruthy();
});

it('should be invalid when the form is empty', () => {
expect(component.addLeave.valid).toBeFalsy();
});


it('should disable the submit button if the form is invalid', () => {
const form = component.addLeave;
// Do not set any values, the form will remain invalid
fixture.detectChanges();
const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
expect(submitButton.disabled).toBe(true);
});
});