export class AddressBook{
    name:String;
    number:String;
    address:String;
    city:String;
    pincode:number;
    state:String;

    constructor(name:String,number:String,address:String,city:String,pincode:number, state:String){
            this.name=name;
            this.state=state;
            this.number=number;
            this.city=city;
            this.pincode=pincode;
            this.address=address;
    }
}