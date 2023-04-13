import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  //title= 'Sabeur'
  secondes: number;
  counterSubscription: Subscription;

  constructor(){}
  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (valeur:number) => {
        this.secondes = valeur;
      }
    )

    /*counter.subscribe(
    (value: number) => {
      this.secondes = value;
    },
    (error: any) => {
      console.log('une erreur a été recontrée !');
    },
    () => {
      console.log('observable completé');

    }
    );*/
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}

