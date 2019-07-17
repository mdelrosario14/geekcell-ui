import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }


    fromJSON(json) {
      for (var propName in json)
          this[propName] = json[propName];
      return this;
  }

}
