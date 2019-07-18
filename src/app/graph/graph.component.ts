import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { TransferService } from '../transfer.service';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private transferServ:TransferService) { }

  data : any[];

  ngOnInit() {
    if (this.transferServ.hasData() == true)
      this.data = this.transferServ.getData();
    else
      alert("Graph has no data to plot.");

  }
  ngAfterViewInit() {

    let chart = c3.generate({
    bindto: '#chart',
        data: {
            columns: [
                ['Your BAC'].concat(this.data)
            ]
        }
    });
}

}
