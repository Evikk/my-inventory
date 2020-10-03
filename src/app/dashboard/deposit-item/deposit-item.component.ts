import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../items/Item';

@Component({
  selector: 'app-deposit-item',
  templateUrl: './deposit-item.component.html',
  styleUrls: ['./deposit-item.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DepositItemComponent implements OnInit {

  public items:Item[];
  public choice: number;
  default: number = 1;
  deposit: number;

  constructor(private itemService:ItemService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
    this.itemService.getItemById(this.choice).subscribe(
      items => {
      this.items = items;
  });
  }

  onSubmit(event: any){
    this.modalService.dismissAll();
    this.deposit = event.target.userDeposit.value;
    this.itemService.depositItem(this.choice, this.deposit, this.items).subscribe()
  }


  ngOnInit(): void {
    this.itemService.getChoice().subscribe((value) => {
    this.choice = value;
  });
  this.itemService.getItemById(this.choice).subscribe(
    items => {
    this.items = items;
});  }

}
