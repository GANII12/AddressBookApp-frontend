import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookService } from '../address-book.service';
import { AddressBook} from '../AddressBook';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  addressbook: AddressBook = new AddressBook("","","","",0,"")
  id: any = this.route.snapshot.paramMap.get('id')
  constructor(private router:Router, private route:ActivatedRoute, private service:AddressBookService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.addressbook);
    this.service.addAddress(this.addressbook).subscribe((data:any) =>{
      console.log("Data Added Successfully");
      this.router.navigate(["homepage"]);
    })
  }

  onCancel(){
    this.router.navigate(["homepage"]);
  }

  updateAddressBookData(){
    this.service.updateAddressBookById(this.addressbook,this.id).subscribe((data:any) =>{
      this.router.navigate(["homepage"]);
    });
  }
}
