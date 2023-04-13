import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit{

  userForm: FormGroup;
 

  constructor(private formBuilder: FormBuilder,
              private userservice:UserService,
              private router: Router){}

  ngOnInit(): void {
    this.initForm();  
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', [Validators.email, Validators.required]],
      drinkPreference:['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser : User = new User(
    formValue['firstName'],
    formValue['lastName'],
    formValue['email'],
    formValue['drinkPreference'],
    formValue['hobbies'] ? formValue['hobbies'] : []
    );
    
    this.userservice.addUser(newUser);
    this.router.navigate(['/users']);
  
  }

  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}
