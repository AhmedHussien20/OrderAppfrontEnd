import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IUserLogin, IUserRegist } from '../Contracts/IUserLogin';

@Injectable()
export class UserLoginService{

    constructor(private http:HttpClient) {
       

    }

    login(userData:IUserLogin):Observable<any>{
        return this.http.post('https://localhost:44365/api/Auth/Login',userData);
    }
     

}