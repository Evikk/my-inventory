import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../items/Item';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateItemComponent implements OnInit {

  public choice: number;
  public items:Item[];
  editForm: FormGroup;


  constructor(private itemService:ItemService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    
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

  onSubmit() {
    this.itemService.updateItem(this.editForm.value).subscribe(x => {
    this.modalService.dismissAll('Yes')});
  }

  ngOnInit(): void {
    
    this.itemService.getChoice().subscribe((value) => {
      this.choice = value;
    });

    
  }

}
