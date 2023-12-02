import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators} from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{

  constructor(private fb: FormBuilder,private service:HttpService){}

  recordForm!: FormGroup;
  
  public userData: any[] = [];

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.recordForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
     
    });
  }

  onSubmit() {
    if (this.recordForm.valid) {
      const recordData = this.recordForm.value;
      this.service.createRecord(recordData).subscribe(
        (response) => {
          console.log('Record created successfully:', response);
          this.userData = response;
          

          // Reset the form after successful submission
          this.recordForm.reset();
        },
        (error) => {
          console.error('Error creating record:', error);
        }
      );
    }
  }
 

}
