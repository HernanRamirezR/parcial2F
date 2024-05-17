import { Component, OnInit, Input} from '@angular/core';
import { Pinguino } from '../pinguino';

@Component({
  selector: 'app-pinguino-detail',
  templateUrl: './pinguino-detail.component.html',
  styleUrls: ['./pinguino-detail.component.css']
})
export class PinguinoDetailComponent implements OnInit {

  @Input() PinguinoDetail!: Pinguino; 

  constructor() { }

  ngOnInit() {
  }

}
