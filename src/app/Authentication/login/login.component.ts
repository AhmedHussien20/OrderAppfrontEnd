import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserLogin } from 'src/app/Contracts/IUserLogin';
import { UserLoginService } from 'src/app/Services/UserLoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = this._fb.group({
    userName:[null, [ Validators.required]],
    password:[null, [Validators.minLength(3)]]

  });

  constructor(
    private _fb:FormBuilder,
    private router: Router,
    private userLoginService:UserLoginService) { 

  }

  ngOnInit(): void {
  }

  async submitForm(){
    if(!this.loginForm.valid){
      alert("Form is Invalid");
    }else{
      var body:IUserLogin = this.loginForm.value;
      try{
        var response = await this.userLoginService.login(body).subscribe(x=>{
          localStorage.setItem('token', x.accessToken);
          this.router.navigateByUrl('/orderlist');
        });
        
      }catch(e){
        console.log(e);
      }

    }
  }

}
