import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Observable, elementAt } from 'rxjs';
import { PaginatorModule } from "primeng/paginator";
// interface FormFields {
//   username: string;
//   email: string;
//   password: string;
// }

// interface FormErrors {
//   username?: string;
//   email?: string;
//   password?: string;
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
[x: string]: any;
Math=Math;

constructor(private http:HttpClient){
  // this.getData(this.page,this.pageSize);
}
// public getJsonValue:any;
// public postJsonValue:any;
// userList:any;
// ngOnInit(){
//   // this.getMethod();
// }

// getMethod(){
//   this.http.get('https://jsonplaceholder.typicode.com/users?pGE').subscribe((data:any)=>{
//     this.userList=data;
//     console.log('userList',this.userList);
    
//   });

// data=[
// {Id:1,Name:'Vishal',Username:'Vishal01',Email:'abc@gmail.com',Phone:646138418},
// {Id:2,Name:'Emily',Username:'Emily02',Email:'emily@example.com',Phone:789456123},
// {Id:3,Name:'Michael',Username:'Mike03',Email:'mike@gmail.com',Phone:123789456},
// {Id:4,Name:'Sarah',Username:'Sarah04',Email:'sarah@example.com',Phone:456123789},
// {Id:5,Name:'John',Username:'JohnDoe05',Email:'john_doe@gmail.com',Phone:789123456},
// {Id:6,Name:'Jennifer',Username:'Jen06',Email:'jen@example.com',Phone:159357852},
// {Id:7,Name:'David',Username:'David07',Email:'david@example.com',Phone:852963741},
// {Id:8,Name:'Amanda',Username:'Mandy08',Email:'amanda@gmail.com',Phone:369258147},
// {Id:9,Name:'Chris',Username:'Chris09',Email:'chris@example.com',Phone:741852963},
// {Id:10,Name:'Jessica',Username:'Jess10',Email:'jessica@gmail.com',Phone:951753852},
// {Id:11,Name:'Matthew',Username:'Matt11',Email:'matt@example.com',Phone:753951852},
// {Id:12,Name:'Lisa',Username:'Lisa12',Email:'lisa@gmail.com',Phone:357951852},
// {Id:13,Name:'Ryan',Username:'Ryan13',Email:'ryan@example.com',Phone:159753486},
// {Id:14,Name:'Michelle',Username:'Shell14',Email:'michelle@gmail.com',Phone:852369147},
// {Id:15,Name:'Kevin',Username:'Kevin15',Email:'kevin@example.com',Phone:369852147},
// {Id:16,Name:'Hannah',Username:'Hannah16',Email:'hannah@gmail.com',Phone:456789123},
// {Id:17,Name:'Andrew',Username:'Andy17',Email:'andy@example.com',Phone:123456789},
// {Id:18,Name:'Samantha',Username:'Sam18',Email:'sam@gmail.com',Phone:789123654},
// {Id:19,Name:'Daniel',Username:'Danny19',Email:'daniel@example.com',Phone:654789321},
// {Id:20,Name:'Rachel',Username:'Rachel20',Email:'rachel@gmail.com',Phone:321654987},
// {Id:21,Name:'Tyler',Username:'Ty21',Email:'tyler@example.com',Phone:987654321},
// {Id:22,Name:'Kayla',Username:'Kayla22',Email:'kayla@gmail.com',Phone:654987321},
// {Id:23,Name:'Brandon',Username:'Bran23',Email:'brandon@example.com',Phone:321987654},
// {Id:24,Name:'Taylor',Username:'Tay24',Email:'taylor@gmail.com',Phone:987321654},
// {Id:25,Name:'Alex',Username:'Alex25',Email:'alex@example.com',Phone:456789321},
// {Id:26,Name:'Courtney',Username:'Court26',Email:'courtney@gmail.com',Phone:321456987},
// {Id:27,Name:'Justin',Username:'Jus27',Email:'justin@example.com',Phone:987654123},
// {Id:28,Name:'Brittany',Username:'Brit28',Email:'brittany@gmail.com',Phone:654321789},
// {Id:29,Name:'Nathan',Username:'Nate29',Email:'nathan@example.com',Phone:321789654},
// {Id:30,Name:'Lauren',Username:'Lau30',Email:'lauren@gmail.com',Phone:789654321},

// ]
// pageSize=5;
// currentpage=1;
currentPage: number = 1;
pageSize: number = 10;
page:number=1
totalItems:number=1;
userList: any;
// userList:any;

// getMethod(){
  //   this.http.get('https:jperf.silverpush.co/api/v1/getAllFacebookMnetReports').subscribe((data:any)=>{
  //     this.userList=data;
  //     console.log('userList',this.userList);
      
  //   });
getData(page: number, pageSize: number){
  let body={
    "startDate": "",
    "endDate": "",
    "page": page.toString(),
    "pageSize": pageSize.toString(),
    "campaign_name": [],
    "order_by": "desc",
    "order_by_name": "running_date"
  }
  this.http.post('https://jperf.silverpush.co/api/v1/getAllFacebookMnetReports',body).subscribe((response: any) => {
    console.log('response data--->',response);
    
    this.userList = response.results.facebook_mnet_reports;
    this.totalItems = response.results.totalcount;
    // console.log(this.totalItems)
  });
  console.log(this.userList);
  console.log(this.totalItems)



}



ngOnInit() {
  this.getData(this.page, this.pageSize)
 
}

// loadData() {
//   this.getData(this.currentPage, this.pageSize)
//     .subscribe((response: any) => {
//       this.userList = response.data;
//       this.totalItems = response.totalItems;
//     });
// }

onPageChange(event:any,page:number) {
  this.currentPage = page;
  this.getData(page,this.pageSize); 
  this.currentPage =  this.userList.slice(event.currentPage*event.pageSize,
    event.currentPage*event.pageSize + event.pageSize);
//     const startIndex = event.currentPage * event.pageSize;
// const endIndex = startIndex + event.pageSize;
// this.currentPage = this.totalItems.slice(startIndex, endIndex);
  
}


// 





  // ele:any=document.getElementById('btn1');
  // full:any=document.getElementsByClassName('lpage');
  // clk(){
  //   this.full.style.backgroundColor='red'
  // }

  // userform: FormGroup =new FormGroup({
  //   id:new FormControl('0'),
  //   name:new FormControl(''),
  //   username:new FormControl(''),
  //   email:new FormControl('')
  // })

 

  
}
