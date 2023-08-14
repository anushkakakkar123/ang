import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective,Validators } from '@angular/forms';


@Component({

  selector: 'app-leaveapp',

  templateUrl: './leaveapp.component.html',

  styleUrls: ['./leaveapp.component.css']

})

export class LeaveAppComponent implements OnInit {

  addLeave: FormGroup;

leaveArr = ['Casual Leave', 'Earned Leave', 'Sick Leave'];

  constructor(private builder: FormBuilder,private http: HttpClient) {}

  ngOnInit() {

    this.addLeave = this.builder.group({

      name: new FormControl('',[Validators.required]),

      leave_type: new FormControl('',[Validators.required]),


      start_date: new FormControl('',[Validators.required]),

      end_date: new FormControl('',[Validators.required]),

      teams: new FormControl('',[Validators.required]),

      file: new FormControl('',[Validators.required]),

      reporter: new FormControl('',[Validators.required])

    })


  }


  isSickLeave() {

    const leaveType = this.addLeave.get('leaveType');

    if (typeof leaveType === 'string') {
      return leaveType === 'sick';

    } else {
      return false
    }

  }
  
  onSubmit() {

    if (this.addLeave.valid) {
    
    this.submitData();
    
    }
    
    }
    
     
    
    submitData() {
    
    const formData = this.addLeave.value
    
; // Wrap the form data in an array
    console.log(formData)
    
    this.http.post('http://10.0.0.147:8080/postData', formData)
    
    .subscribe(
    
    (response: any) => {
    
    console.log('Data submitted successfully:', response.message);
    
    this.addLeave.reset(); // Reset the form after successful submission
    
    },
    
    error => {
    
    console.error('Error submitting data:', error);
    
    }
    
    );
    
    }
    
    }