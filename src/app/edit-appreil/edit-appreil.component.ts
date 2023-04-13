import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppreilService } from '../services/appreil.service';

@Component({
  selector: 'app-edit-appreil',
  templateUrl: './edit-appreil.component.html',
  styleUrls: ['./edit-appreil.component.scss']
})
export class EditAppreilComponent implements OnInit{
  defaultOnOff = 'Eteint';

  constructor(private appreilService: AppreilService,
              private router: Router){}
  ngOnInit(){

  }

  onSubmit(form: NgForm){
    //console.log(form.value);
    const name= form.value['name'];
    const status= form.value['status'];
    this.appreilService.addAppreil(name, status);
    this.router.navigate(['/appreils']);

  }

}
