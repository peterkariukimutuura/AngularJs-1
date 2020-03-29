import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pageTitle: string = "Sign Up";

  name: string = "";
  email: string = "";
  phoneNumber: string = "";
  physicalAddress: string = "";
  password: string = "";

  nameMessage: string;
  emailMessage: string;
  phoneNumberMessage: string;
  addressMessage: string;
  passwordMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  validateFields(): boolean {

    this.nameMessage = (this.name.trim() == "") ? "Name is required." : "";

    this.emailMessage = (this.email.trim() == "") ? "Email is required." : "";

    this.phoneNumberMessage = (this.phoneNumber.trim() == "") ? "Phonenumber is required." : "";

    this.addressMessage = (this.physicalAddress.trim() == "") ? "Physical Address is required." : "";

    this.passwordMessage = (this.password.trim() == "") ? "Password is required." : "";

    return this.name.trim() !== "" && this.email.trim() !== "" && this.phoneNumber !== "" && this.physicalAddress !== "" && this.password !== "" ? true : false;
  }


  registerHuman(): void {
    if (this.validateFields()) {
      console.log("valid");
    } else {
      console.log("In valid");
    }
  }

}
