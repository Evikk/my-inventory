import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../items/Item';

@Component({
  selector: 'app-withdraw-item',
  templateUrl: './withdraw-item.component.html',
  styleUrls: ['./withdraw-item.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class WithdrawItemComponent implements OnInit {

  public items:Item[];
  public choice: number;
  default: number = 1;
  withdraw: number;
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
    this.withdraw = event.target.userWithdraw.value;
    this.itemService.depositItem(this.choice, this.withdraw, this.items).subscribe()
  }

  ngOnInit(): void {
    this.itemService.getChoice().subscribe((value) => {
    this.choice = value;
  });
  this.itemService.getItemById(this.choice).subscribe(
    items => {
    this.items = items;
});
  }


}
