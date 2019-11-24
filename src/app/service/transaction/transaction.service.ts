import { Injectable } from '@angular/core';
import { TrxMonthReq } from 'src/app/models/trx-month-req';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientService } from '../httpClient/httpClient.service';
import { HelperService } from '../util/helper.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClientService: HttpClientService, private helperService: HelperService) { }
  

  getCurrentMonthTransaction(trxReq : TrxMonthReq) : any {
    const errDefault: String = 'Unable to get monthly transaction in the Geek Cell server.';
    const trxMonthObservable = new Observable(observer => {
      setTimeout(() =>  {
        this.httpClientService.getMonthlyTransaction(trxReq).then(
          (ret) => {
            if (ret != null) {              
              observer.next(ret);
            } else {
              console.log('response is invalid');
              observer.next(null);
            }
          }).catch((err) => {
              if (err.error != null)  {
                console.log(err.error.errorMsg);
                observer.next(err.error.errorMsg);
              } else {
                console.log(errDefault);
                observer.next(errDefault);
              }
              
            });
      }, 1000);
      
      
      });
      return trxMonthObservable;
  }
}
