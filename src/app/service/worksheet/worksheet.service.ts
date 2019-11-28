import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpClient/httpClient.service';
import { HelperService } from '../util/helper.service';
import { WorksheetReq } from 'src/app/models/worksheet-req';
import { Observable } from 'rxjs';
import { IncomeGrpResp } from 'src/app/models/income-grp-resp';

@Injectable({
  providedIn: 'root'
})
export class WorksheetService {
  

  constructor(private httpClientService: HttpClientService, private helperService: HelperService) { }
  

  getAnnualTransaction(currDate: Date, curr: string) : any {
    const errDefault: String = 'Unable to get monthly transaction in the Geek Cell server.';
    const wsAnnualObservable = new Observable(observer => {
      setTimeout(() =>  {
        this.httpClientService.getAnnualTransaction(currDate, curr).then(
          (ret) => {
            if (ret != null) {              
              observer.next(ret);
            } else {
              console.log('response is invalid');
              observer.next(null);
            }
          }).catch((err) => {
              if (err.error != null) {
                console.log(err.error.errorMsg);
                observer.next(err.error.errorMsg);
              } else {
                console.log(errDefault);
                observer.next(errDefault);
              }
              
            });
      }, 1000);
      
      
      });
      return wsAnnualObservable;
  }

  
}
