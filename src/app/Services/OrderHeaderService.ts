import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { OrderHeader } from '../Contracts/IOrderHeader';
import { IUserLogin, IUserRegist } from '../Contracts/IUserLogin';
import { PaginatedResult } from '../model/pagination';
import { map } from 'rxjs/operators';
import { IDataSourceResult } from '../model/data-source-result';
import { HttpUtilsService } from '../util/http-utils.service';

const API_URL = 'https://localhost:44365/api/OrderHeader';


@Injectable({
  providedIn: "root"
})
export class OrderHeaderService{

    constructor(private http:HttpClient,private httpUtils: HttpUtilsService) {
       

    }
    

    getAllOrder( body: any) : Observable<IDataSourceResult<OrderHeader>>{
        const httpHeader = this.httpUtils.getHTTPHeaders();
        return this.http
          .post<any>(API_URL, body, { headers: httpHeader })
          .pipe(map((x) => x.data));
    }
     
    Addorder(body:any){
        const httpHeader = this.httpUtils.getHTTPHeaders();
        return this.http
          .post<any>(API_URL+'/AddOrder', body, { headers: httpHeader });
           
    }

}