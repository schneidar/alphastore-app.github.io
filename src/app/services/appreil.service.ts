export class AppreilService {
    appreilss = [
        {
          name: 'Machine à laver',
          status: 'allumé'
        },
        {
          name:'Télévision',
          status:'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
    
      ]

      switchOnAll() {
        for(let appreil of this.appreilss){
            appreil.status = 'allumé' 
        }
      }

      switchOffAll() {
        for(let appreil of this.appreilss){
            appreil.status = 'éteint'
        }
      }

      switchOnOne(index : number){
        this.appreilss[index].status = 'allumé';
      }

      switchOffOne(index: number){
        this.appreilss[index].status = 'éteint'
      }
} 