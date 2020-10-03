import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../items/Item';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DeleteItemComponent implements OnInit {

  public choice: number;
  public items:Item[];
  

  constructor(private itemService:ItemService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.itemService.getChoice().subscribe((value) => {
      this.choice = value;
    });
    this.itemService.getItemById(this.choice).subscribe(
      items => {
      this.items = items;
  });
    this.modalService.open(content);
    this.itemService.getItemById(this.choice).subscribe(
      items => {
      this.items = items;
  });
  }

  onDelete(item:Item) {
    this.itemService.deleteItem(item).subscribe()
  }

  ngOnInit(): void {
  //     this.itemService.getChoice().subscribe((value) => {
  //     this.choice = value;
  //   });
  //   this.itemService.getItemById(this.choice).subscribe(
  //     items => {
  //     this.items = items;
  // });
    
  }

}