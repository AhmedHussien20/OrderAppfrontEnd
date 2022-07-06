// Angular
import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable()
export class HttpUtilsService {
  /**
   * Prepare query http params
   * @param queryParams: QueryParamsModel
   */
  getFindHTTPParams(queryParams): HttpParams {
    return new HttpParams()
      .set('lastNamefilter', queryParams.filter)
      .set('sortOrder', queryParams.sortOrder)
      .set('sortField', queryParams.sortField)
      .set('pageNumber', queryParams.pageNumber.toString())
      .set('pageSize', queryParams.pageSize.toString());
  }

  /**
   * get standard content-type
   */
  getHTTPHeaders(): HttpHeaders {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      });
    return headers;
  }
  
}
