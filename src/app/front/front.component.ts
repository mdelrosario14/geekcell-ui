import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpClient/httpClient.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.load();
  }

}
