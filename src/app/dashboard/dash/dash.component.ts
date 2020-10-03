import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  
  public choice: number;

  constructor(private itemService:ItemService) {

  }
  ngOnInit() {
    this.itemService.getChoice().subscribe((value) => {
      this.choice = value;
    });
  }

}
