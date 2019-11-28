import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';
import { WorksheetService } from '../service/worksheet/worksheet.service';
import { Router } from '@angular/router';
import { WorksheetReq } from '../models/worksheet-req';
import { IncomeGrpResp } from '../models/income-grp-resp';
import { TransactionService } from '../service/transaction/transaction.service';
import { TrxMonthReq } from '../models/trx-month-req';

@Component({
  selector: 'app-month-tab',
  templateUrl: './month-tab.component.html',
  styleUrls: ['./month-tab.component.css']
})
export class MonthTabComponent implements OnInit {

  @Input()
  month: number = 0;

  trx: Transaction[];
  trxCol: string[] = ["No.", "Date", "Income", "Expense", "Channel", "Dr", "Cr", "Remarks"];
  
  constructor(private trxService: TransactionService, private router : Router) { }

  
  ngOnInit() {
    let req = new TrxMonthReq();
    req.currency = 'USD';
    //let dt = new Date();
    let mStr = '';
    let mon = this.month + 1;
    if (mon < 10) {
      mStr = '0' + mon;
    } else {
      mStr = '' + mon;
    }
    let dt = new Date(mStr + '/01/2019');
    
    let month = dt.getMonth();
    let year = dt.getFullYear();
    let firstDay = new Date(year, month, 1);

    req.localDateTime = firstDay;
    console.log('date: ' + firstDay);
    const monthlyObservble = this.trxService.getCurrentMonthTransaction(req);
    monthlyObservble.subscribe((respData : any) => {
      if (respData != null) {
        this.trx = <Transaction[]>respData['Transaction'];
      }
    });
  }

  updateTabPage(month : number) {

  }

}
