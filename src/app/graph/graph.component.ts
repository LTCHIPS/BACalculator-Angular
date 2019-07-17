import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    let chart = c3.generate({
    bindto: '#chart',
        data: {
            columns: [
                ['data1', 50, 20, 10, 40, 15, 25]
            ]
        }
    });
}

}
