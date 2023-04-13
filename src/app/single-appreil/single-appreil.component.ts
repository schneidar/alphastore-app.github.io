import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppreilService } from '../services/appreil.service';

@Component({
  selector: 'app-single-appreil',
  templateUrl: './single-appreil.component.html',
  styleUrls: ['./single-appreil.component.scss']
})
export class SingleAppreilComponent implements OnInit{

  name?: string = 'Appreil';
  status?: string = 'Statut';

  constructor(private appareilServie: AppreilService,
              private route: ActivatedRoute){}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilServie.getAppreilById(+id)?.name;
    this.status = this.appareilServie.getAppreilById(+id)?.status;
  }

}
