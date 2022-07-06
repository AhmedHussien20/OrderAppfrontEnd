import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { OrderHeaderService } from '../Services/OrderHeaderService';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.scss']
})
export class OrderHeaderComponent implements OnInit {
  searchParameters: any = {
    pageNumber: 1,
    pageSize: 10,
    search: '',
  };
  total = 0;
  displayedColumns: string[] = ['Id', 'CustomerName', 'OrderDate','Address','Phone', 'Action'];
  ordersdata: any[] = [];
  constructor(private Api: OrderHeaderService) { }

  ngOnInit(): void {
    this.loadlist();

  }
  loadlist() {
    this.Api.getAllOrder(this.searchParameters)
      .pipe(
        finalize(() => {
        })
      )
      .subscribe(
        (res) => {
          this.ordersdata = res.data
          this.total = res.total;
        },
        (error) => {

        }
      );
  }

  onPageChanged(event) {
    this.searchParameters.pageNumber = event.pageIndex + 1;
    this.searchParameters.pageSize = event.pageSize;
    this.loadlist();
  }
  onSearchChange(){
    this.searchParameters.pageNumber = 1;
    this.loadlist();
  }
  viewDetails(element){

  }
}
