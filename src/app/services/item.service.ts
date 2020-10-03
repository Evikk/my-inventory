import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../items/Item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  baseUrl:string =  'http://localhost:3000/api/items';
  
  // items = [
  //   {id: 1, name: 'Dell Latitude', description: 'i5 Intel Core', amount: 3},
  //   {id: 2, name: 'Xiaomi Redmi 8', description: '64GB Memory', amount: 5},
  //   {id: 3, name: 'Apple iPad', description: '10.2 inch, 32GB Memory', amount: 8}
  // ];

  private choice: BehaviorSubject<number>;

  currentAmount: any;

  constructor(private http:HttpClient) {
    this.choice = new BehaviorSubject<number>(0);
  }

  getChoice(): Observable<number> {
    return this.choice.asObservable();
  }
  setChoice(newValue): void {
    this.choice.next(newValue);
  }

  getAllItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl)
  }

  getItemById(id: number): Observable<any> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`, this.httpOptions)
  }
  
  addItem(item:Item):Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item, this.httpOptions);
  }

  updateItem(item:Item):Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${item.id}`, item, this.httpOptions)
  }
  
  deleteItem(item:Item):Observable<Item> {
    return this.http.delete<Item>(`${this.baseUrl}/${item.id}`, this.httpOptions)
  }

  depositItem(id:number, deposit:number, item:any){
    item = this.http.get<Item>(`${this.baseUrl}/${id}`, this.httpOptions)
    this.currentAmount = this.http.get<Item[]>(`${this.baseUrl}/${item.amount}`)
    this.currentAmount = this.currentAmount + deposit
    return this.http.put(`${this.baseUrl}/${item.amount}/`, this.currentAmount, this.httpOptions)
  }

  withdrawItem(id:number, withdraw:number, item:any){
    item = this.http.get<Item>(`${this.baseUrl}/${id}`, this.httpOptions)
    this.currentAmount = this.http.get<Item[]>(`${this.baseUrl}/${item.amount}`)
    this.currentAmount = this.currentAmount - withdraw
    return this.http.put(`${this.baseUrl}/${item.amount}/`, this.currentAmount, this.httpOptions)
  }

  

  getIds() {
    return this.http.get<Item[]>(this.baseUrl)
  }

}
