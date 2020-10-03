import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from './Item';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html'
})


export class ItemsComponent implements OnInit {
    
    items:Item[];
    selectedItem:Number;
    selects:Item[];
    choice:number;

    constructor(private itemService:ItemService) {
        
    }
    onItemSelect(selectedItem) {
        
        if(selectedItem != '0'){
            this.itemService.setChoice(selectedItem);
            this.itemService.getItemById(selectedItem).subscribe(
                items => {
                console.log(items, this.items);
                this.items = items;
            });
        } else {
            this.itemService.setChoice(selectedItem);
            this.itemService.getAllItems().subscribe(
                items => {
                this.items = items;
            });
            
        }
      }
   
    ngOnInit() {
       
        this.itemService.getAllItems().subscribe(
            items => {
            this.items = items;
        });

        this.itemService.getIds().subscribe(
            selects => {
            this.selects = selects;
        });

        // this.selects = this.itemService.getIds();
        
    }
    
}