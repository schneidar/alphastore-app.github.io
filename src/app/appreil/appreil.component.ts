import { Component, Input, OnInit } from '@angular/core';
import { AppreilService } from '../services/appreil.service';

@Component({
  selector: 'app-appreil',
  templateUrl: './appreil.component.html',
  styleUrls: ['./appreil.component.scss']
})
export class AppreilComponent implements OnInit{
  //appreilName= "télévision";
  @Input() appreilName: string;
  @Input() appreilStatus: String;
  @Input() indexOfAppreil: number;

  constructor(private appreilService: AppreilService){}

  ngOnInit(): void {
    
  }
  getStatus(){
    return this.appreilStatus;
  }
  getColor() {
    if (this.appreilStatus === 'allumé') {
      return "green";
    } else if (this.appreilStatus === 'éteint') {
      return "red";
    } else { return '';}
  }

  onSwitchOn(){
    this.appreilService.switchOnOne(this.indexOfAppreil);
  }

  onSwitchOff(){
    this.appreilService.switchOffOne(this.indexOfAppreil);
  }
}
