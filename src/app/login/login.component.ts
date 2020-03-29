import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle: string ="Sign In";

  key:string = "";
  keyMessage: string ="";
  passwordMessage : string = "";

  password:string ="";

  constructor() { }

  ngOnInit(): void {
  }

  validateFields(): boolean{
    
    this.keyMessage =  (this.key.trim() == "") ? "Email or phonenumber is required." : "";

    this.passwordMessage = (this.password.trim() == "") ? "Password is required." : "";

    return this.key.trim() !== "" && this.password.trim() !== "" ? true :false;
  }


  loginHuman(): void{

    if(this.validateFields()){
      console.log('Valid')
    }else{
      console.log('Invalid')
    }

    console.log(this.key,this.password);
  }

}
