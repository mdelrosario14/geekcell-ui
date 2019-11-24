import { Component, OnInit } from '@angular/core';
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

  trx: Transaction[];
  trxCol: string[] = ["No.", "Date", "Income", "Expense", "Channel", "Dr", "Cr", "Remarks"];
  
  constructor(private trxService: TransactionService, private router : Router) { }

  
  ngOnInit() {
    let req = new TrxMonthReq();
    req.currency = 'USD';
    req.localDateTime = new Date('08/01/2019');


    const incomeObsrvble = this.trxService.getCurrentMonthTransaction(req);
    incomeObsrvble.subscribe((respData : any) => {
      if (respData != null) {
        this.trx = <Transaction[]>respData['Transaction'];
      }
    });
  }

}
