import { WhalesService } from './../../services/whales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-whale',
  templateUrl: './form-whale.component.html',
  styleUrls: ['./form-whale.component.scss']
})
export class FormWhaleComponent implements OnInit {
name: string = "";
scientificName: string ="";

  constructor(private whaleService: WhalesService) { }

  ngOnInit(): void {
  } 

  send():void{
    // this.whaleService.postWhale({name: this.name, scientificName: this.scientificName})
  }

}
