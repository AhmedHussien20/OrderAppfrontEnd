import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormArray, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderHeaderService } from '../Services/OrderHeaderService';
import * as moment from 'moment';
@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.scss']
})
export class OrderformComponent implements OnInit {
  //orderdetails!: FormArray; 
  form!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private api:OrderHeaderService
  ) { }
  displayedColumns: string[] = ['itemNo', 'itemDescription', 'quantity', 'price','total'];
  ngOnInit(): void {
    this.loadform(null);
    this.AddRow();
  }
   
   loadform(item:any){
    this.form=new FormGroup({
      customerName:new FormControl (item?.customerName,Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])
      ),
      orderDate: new FormControl (item?.orderDate,Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])),
      address:new FormControl (item?.address,Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])),
      phoneNo:new FormControl (item?.phoneNo,Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])),
      orderDetails:this._fb.array([])
    });
   }
   get orderDetails() : FormArray {
    return this.form.get("orderDetails") as FormArray
  }
  trackByFn(index: any, item: any) {
    return index;
 }
  total = 0;
   
  neworderdet(): FormGroup {
    return this._fb.group({  
      itemNo:new FormControl(''),
      itemDescription:new FormControl(''),
      quantity:new FormControl(''),
      price:new FormControl(''),
      total:new FormControl('')  
    })
  }
  AddRow() {
    this.orderDetails.push(this.neworderdet());
  }
  submitForm(){
    const model = JSON.parse(JSON.stringify(this.form.getRawValue()));
    model.orderDate = moment(this.form.controls.orderDate.value).format(
      'YYYY-MM-DD'
    );
     
    console.log(model);
     
   this.api.Addorder(model).subscribe(res=>{
    if(res)
    this.router.navigate(['/orderlist']);
   });
  }
   
  removerow(i:number){
 
    this.orderDetails.removeAt(i);
  }
}
