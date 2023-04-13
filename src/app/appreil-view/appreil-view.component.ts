import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppreilService } from '../services/appreil.service';
@Component({
  selector: 'app-appreil-view',
  templateUrl: './appreil-view.component.html',
  styleUrls: ['./appreil-view.component.scss']
})
export class AppreilViewComponent implements OnInit{
  
  isAuth = false;
  appreils: any[];
  latest_date : string;

  lastUpdate: Promise<Date>  = new Promise(
    (resolve, reject) => {
      const today = new Date();
      setTimeout(
        () => {
          resolve(today);
          console.log(today);
        }, 2000
      );
    }
  )

  appareilSubscription: Subscription;
  constructor(private appreilService: AppreilService){
    setTimeout(
       () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    //this.appreils = this.appreilService.appreilss;
    this.appareilSubscription = this.appreilService.appreilSubject.subscribe(
      (appreils: any[]) => {
        this.appreils = appreils;
      }
    );
    this.appreilService.emitAppreilSubject();
  }
  onAllumer(){
    this.appreilService.switchOnAll();
  }

  onEteindre(){
    this.appreilService.switchOffAll();
  }
  
  onSave(){
    this.appreilService.saveAppreilsToServer();
  }

  onFetch() {
    this.appreilService.getAppreilsFromServer();
  }
}
