import { WhalesService } from './../../services/whales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-whale',
  templateUrl: './new-whale.component.html',
  styleUrls: ['./new-whale.component.scss']
})
export class NewWhaleComponent implements OnInit {
  newWhale : any = {
    name: "",
    image: "",
    description: "",
    length:"",
    weight: "",
    scientificName: ""
  }


  constructor( private whaleService:WhalesService) { }

  ngOnInit(): void {

  }

  send(){
    console.log(this.newWhale);
    this.whaleService.postWhale(this.newWhale).subscribe()
  }


}
 