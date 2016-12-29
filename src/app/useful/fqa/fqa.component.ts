import { Component, OnInit } from '@angular/core';
import { FqaService } from './fqa.service';

@Component({

  templateUrl: './fqa.component.html',
  styleUrls: [ './fqa.component.css' ],
  providers: [ FqaService ],
})

export class FqaComponent implements OnInit {
  constructor( private fqaService: FqaService ) { }

  fqa: { question: string, answer: string }[];

  ngOnInit() {
    this.fqa = this.fqaService.getFqa();
  }

}
