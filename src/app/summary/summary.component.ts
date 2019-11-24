import { Component, OnInit } from '@angular/core';
import { WorksheetService } from '../service/worksheet/worksheet.service';
import { Router } from '@angular/router';
import { IncomeGrpResp } from '../models/income-grp-resp';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  nonTrxCol: string[] = ["Income", "August"];
  incGrpResp: IncomeGrpResp[];
  totalIncome: number;

  constructor(private worksheetService: WorksheetService, private router : Router) { }

  ngOnInit() {

    const annualObservble = this.worksheetService.getAnnualTransaction(new Date('08/01/2019'), 'USD');
    annualObservble.subscribe((respData : any) => {
      if (respData != null) {
        this.incGrpResp = <IncomeGrpResp[]>respData['Income Group'];
        this.totalIncome = respData['Total Income']
      }
    });
  }  

}
