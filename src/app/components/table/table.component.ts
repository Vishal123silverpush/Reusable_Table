
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit} from '@angular/core';
// import { PaginationControlsComponent } from 'ngx-pagination';
// import { NgxPaginationModule } from 'ngx-pagination';
import { Injectable } from '@angular/core';
// import { NgModel } from '@angular/forms';
// import { NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
// import { FilterpipePipe } from 'src/app/filterpipe.pipe';
// import { NgSelectOption } from '@angular/forms';
import { UserComponent } from '../user/user.component'; 
import { RolesComponent } from '../roles/roles.component';

// import { every } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  filterId:string='';
[x: string]: any;
  constructor(private http:HttpClient){
    // this.getData(this.page,this.pageSize);
  }
  // userList: any[]=[];
  // Math!: Math;
  userList:any;
  totalPages: number=1;
  currentPage: number = 1;
pageSize: number = 10;
page:number=1;
autoHide: boolean = true; 
responsive: boolean = true
directionLinks: boolean = true; 
labels = {
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'Page',
    screenReaderCurrentLabel: 'currentPage'
};
arr1:any[]=[];



  getData(page: number, pageSize: number){
    let body={
      "startDate": "",
      "endDate": "",
      "page": page,
      "pageSize": pageSize,
      "campaign_name": [],
      "order_by": "desc",
      "order_by_name": "running_date"
    }
    const pageSizeValue = pageSize;
    

    this.http.post('https://jperf.silverpush.co/api/v1/getAllFacebookMnetReports', body).subscribe((response: any) => {
        console.log('response data--->', response);
  
        this.arr1=response.results.facebook_mnet_reports;
        // for(let i=0;i<10;i++){
        //   this.arr1[i]=response.results.facebook_mnet_reports[i];
        // }
        // this.userList = response.results.facebook_mnet_reports;
        this.userList=response.results.facebook_mnet_reports;
       
        // this.arr1=[]
        this.totalPages = Math.ceil(response.results.totalCount / pageSize);

        // console.log(this.arr1)
    });
 
  }
  
  // filterBy(idInput: HTMLInputElement) {
  //   if (idInput.value) {
  //     this.userList = this.userList.filter(u => u.campaign_name1 === idInput.value)
  //   }
  // }
// search
  campaign_name1:any;

  campName:any;
  // arr2:any[]=[]
  campList:any[]=[];
  getList(){
    this.http.get(`https://jperf.silverpush.co/api/v1/getAllMnetCampaigns`).subscribe((data:any)=>{
      console.log('campaigns data-->',data);
      
      this.campList=data.results;
      this.campaign_name1= data.results["campaign_name"]
      // console.log("camplist",this.campList);
      

    })
  }
  


//   throttle(getData(page,pagesize), 300): {
//     let throttled = false;
//     return function(...args) {
//         if (!throttled) {
//             throttled = true;
//             setTimeout(() => {
//                 func.apply(this, args);
//                 throttled = false;
//             }, delay);
//         }
//     };
// }

   
  // get totalP(): number {
  //   return (this.totalPages);
  // }
  // onNext():void{
  //   if(this.currentPage<this.totalPages){
  //     this.currentPage++;
  //     this.pageChanged(this.currentPage)
  //   }
  // }
  // onPrev():void{
  //   if(this.currentPage>1){
  //     this.currentPage--;
  //     this.pageChanged(this.currentPage)

  //   }
  // }
  selectone:string="Select one"
users:any[]=[]
  ngOnInit(){
    this.getData(this.page,this.pageSize);
    this.getList();
  }
  
  pageChanged(event:number) {
    this.currentPage = event;

    this.getData(this.page,this.pageSize);
    // this.j=this.j+10;
    // this.page++;


  }
  Next() {
    if(this.currentPage<this.totalPages){
          this.currentPage++;
          this.page++;
          this.pageChanged(this.currentPage)
          this.arr1=[]
        // this.userList=this.arr1;


        }

  }
  onPrev(){
    if(this.currentPage>1){
          this.currentPage--;
          
          this.page--;
          this.pageChanged(this.currentPage)
          this.arr1=[]
          // this.userList=this.arr1;

        // console.log(this.arr1)

    
        }
  }
  filteredData:any[]=[];
  filterCampaign(e:any){
    // console.log('select event:',e.target.value);
    const selectedValue = e.target.value;
    

     if(selectedValue){
      this.filteredData = this.userList.filter((row:any)=> {
        // console.log("rows",row.campaign_name)
    
            return row.campaign_name ===selectedValue;
        });
        console.log('Filtered Data:', this.filteredData);
        this.userList=this.filteredData
        
     }
     else if(selectedValue==this.selectone){
      this.userList=this.arr1
     }
    


    
  }
}

// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
