import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppreilService {

    appreilSubject = new Subject<any[]>();

    private appreilss = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'allumé'
        },
        {
          id: 2,
          name:'Télévision',
          status:'allumé'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
    
      ]

      constructor(private httpClient: HttpClient){}

      emitAppreilSubject(){
        this.appreilSubject.next(this.appreilss.slice());
      }

      getAppreilById(id: number){
        const appreil = this.appreilss.find(
          (appreilObject) => {
            return appreilObject.id === id;
          }
        );
        return appreil;
      }

      switchOnAll() {
        for(let appreil of this.appreilss){
            appreil.status = 'allumé' 
        }
        this.emitAppreilSubject();
      }

      switchOffAll() {
        for(let appreil of this.appreilss){
            appreil.status = 'éteint'
        }
        this.emitAppreilSubject();
      }

      switchOnOne(index : number){
        this.appreilss[index].status = 'allumé';
        this.emitAppreilSubject();
      }

      switchOffOne(index: number){
        this.appreilss[index].status = 'éteint'
        this.emitAppreilSubject();
      }

      addAppreil(name: string, status: string){
        const appreilObject = {
          id: 0,
          name: '',
          status: '',
        }
        appreilObject.name = name;
        appreilObject.status = status;
        appreilObject.id = this.appreilss[(this.appreilss.length - 1)].id + 1;
        this.appreilss.push(appreilObject);
        this.emitAppreilSubject();
      }

      saveAppreilsToServer(){
        this.httpClient
        .put('https://http-client-demo-73bec-default-rtdb.europe-west1.firebasedatabase.app/appreils.json',this.appreilss)
        .subscribe(
          () => {
            console.log('enregistrement terminer');
          },
          (error) => {
            console.log('Erreur de sauvegarde ' + error);
          }
        )
      }

      getAppreilsFromServer() {
        this.httpClient
        .get< any[] >('https://http-client-demo-73bec-default-rtdb.europe-west1.firebasedatabase.app/appreils.json')
        .subscribe(
          (response) => {
            this.appreilss = response;
            this.emitAppreilSubject();
          },
          (error) => {
            console.log('erreur de chargement !' + error);
          }
        );
      }
} 