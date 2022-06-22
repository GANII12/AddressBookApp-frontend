import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(private http:HttpClient) { }
  addAddress(addressBook:any){
    return this.http.post("http://localhost:8085/addressBook/create",addressBook);
  }
  getAddressBook(){
    return this.http.get("http://localhost:8085/addressBook/get");
  }

  deleteAddressBookById(id:number){
    return this.http.delete("http://localhost:8085/addressBook/delete/"+id);
  }

  updateAddressBookById(addressbookdata:any,id:number){
    return this.http.put("http://localhost:8085/addressBook/update/"+id,addressbookdata)
  }
}
