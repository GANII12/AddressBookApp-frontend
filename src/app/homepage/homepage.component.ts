import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../address-book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  addressbook: any
  constructor(private router:Router, private service: AddressBookService) { }

  ngOnInit(): void {
    this.service.getAddressBook().subscribe((data: any)=> {
      console.log(data);
      this.addressbook=data;
    })
  }

  onAddAddress(){
    this.router.navigate(["form"]);
  }

  updateById(id:any){
    this.router.navigate(['update',id])
  }

  deleteAddressBookById(id:number){
    this.service.deleteAddressBookById(id).subscribe((date: any) =>{
      this.ngOnInit();
      this.router.navigate(["homepage"]);
    });
  }
}
