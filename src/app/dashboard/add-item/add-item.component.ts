import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from '../../services/item.service'
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  providers: [NgbModalConfig, NgbModal]
})


export class AddItemComponent implements OnInit{
  constructor(config: NgbModalConfig, private modalService: NgbModal, private itemService:ItemService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  selectedUser: ItemService;
  editForm: FormGroup;

  open(content) {
    this.modalService.open(content);
  }

  onSubmit() {
    this.itemService.updateItem(this.editForm.value).subscribe(x => {
    this.modalService.dismissAll()});
  }

  ngOnInit(){
    this.editForm = new FormGroup({          
      'name':new FormControl(null),
      'description':new FormControl(null),
      'amount':new FormControl(null)

 })
  }

}
