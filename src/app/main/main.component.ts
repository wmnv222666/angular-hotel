import { Component } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [NgbModal]
})
export class MainComponent {

  popeleinfo: any = {
    numberarry: ['1', '2', '3', '4', '5'],
    nub: '1'}

  constructor(private modalService: NgbModal, private calendar: NgbCalendar) {}

  models;
  model: NgbDateStruct;
  open(content) {
    this.modalService.open(content);
  }
}

