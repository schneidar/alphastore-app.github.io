import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss'],
  providers: [DatePipe]
})
export class MonPremierComponent  {
  constructor(){
    
  }

}
