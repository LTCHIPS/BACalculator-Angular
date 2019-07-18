import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  data : any;

  getData() 
  {
    let temp = this.data;
    return temp;

  }

  clearData()
  {
    this.data = undefined;

  }

  setData(dataToSet:any) 
  {
    this.data = dataToSet;

  }

  hasData()
  {
    return this.data === undefined ? false : true;

  }

}
