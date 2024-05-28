import { Component,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent {




userName:string="";
  @Input() columns:string[]= [];
  @Input() data:any[]= [];
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.getList()
  }
  getList(){
    this.http.get(`http://dummyjson.com/users`).subscribe( (user:any) => {
      this.userList=user.users;
      this.userName= user.users["firstName"]
      console.log(this.userName);
      
    })
  }
  userList:any[]=[];
  arr1:any;
  // selectone:any;
filteredData:any[]=[];
  selectone:string="Select one"

filterUsers(e:any){
  // console.log('select event:',e.target.value);
  const selectedValue = e.target.value;
  

   if(selectedValue){
    this.filteredData = this.userList.filter((row:any)=> {
      // console.log("rows",row.campaign_name)
  
          return row.campaign_name=selectedValue;
      });
      console.log('Filtered Data:', this.filteredData);
      this.userList=this.filteredData

      
   }
   else if(selectedValue==this.selectone){
    this.userList=this.arr1
   }
  


  
}
  // @Output () onEdit = new EventEmitter<any>();
  // @Output () onDelete = new EventEmitter<any>();

  // edit(item: any) {
  //   this.onEdit.emit(item);
  // }
  // deleteRecord(item: any) {
  //   this.onDelete.emit(item);
  // }







//   filterId:string='';
// [x: string]: any;
  // constructor(private http:HttpClient){
    // this.getData(this.page,this.pageSize);
  // }
  // userList: any[]=[];
  // Math!: Math;
//   userList:any;
//   totalPages: number=1;
//   currentPage: number = 1;
// pageSize: number = 10;
// page:number=1;
// autoHide: boolean = true; 
// responsive: boolean = true
// directionLinks: boolean = true; 
// labels = {
//     screenReaderPaginationLabel: 'Pagination',
//     screenReaderPageLabel: 'Page',
//     screenReaderCurrentLabel: 'currentPage'
// };
// arr1:any[]=[];



  // getData(page: number, pageSize: number){
  //   let body={
  //     "startDate": "",
  //     "endDate": "",
  //     "page": page,
  //     "pageSize": pageSize,
  //     "campaign_name": [],
  //     "order_by": "desc",
  //     "order_by_name": "running_date"
  //   }
  //   const pageSizeValue = pageSize;
    

    // this.http.get('https://dummyjson.com/users').subscribe((response: any) => {
    //     console.log('response data--->', response);
  
        // this.arr1=response.results.facebook_mnet_reports;
        // for(let i=0;i<10;i++){
        //   this.arr1[i]=response.results.facebook_mnet_reports[i];
        // }
        // this.userList = response.users;
        // this.userList=response.results.facebook_mnet_reports;
       
        // this.arr1=[]
        // this.totalPages = Math.ceil(response.users / pageSize);

        // console.log(this.arr1)
    // });
 
  // }
  
  // filterBy(idInput: HTMLInputElement) {
  //   if (idInput.value) {
  //     this.userList = this.userList.filter(u => u.campaign_name1 === idInput.value)
  //   }
  // }
// search
  // campaign_name1:any;

  // campName:any;
  // arr2:any[]=[]
  // campList:any[]=[];
  // getList(){
  //   this.http.get(`https://jperf.silverpush.co/api/v1/getAllMnetCampaigns`).subscribe((data:any)=>{
  //     console.log('campaigns data-->',data);
      
  //     this.campList=data.results;
  //     this.campaign_name1= data.results["campaign_name"]
  //     // console.log("camplist",this.campList);
      

  //   })
  // }
  


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
//   selectone:string="Select one"
// users:any[]=[]
//   ngOnInit(){
//     this.getData(this.page,this.pageSize);
//     this.getList();
//   }
  
  // pageChanged(event:number) {
  //   this.currentPage = event;

    // this.getData(this.page,this.pageSize);
    // this.j=this.j+10;
    // this.page++;


  // }
  // Next() {
  //   if(this.currentPage<this.totalPages){
  //         this.currentPage++;
  //         this.page++;
  //         this.pageChanged(this.currentPage)
  //         this.arr1=[]
  //       // this.userList=this.arr1;


  //       }

  // }
  // onPrev(){
  //   if(this.currentPage>1){
  //         this.currentPage--;
          
  //         this.page--;
  //         this.pageChanged(this.currentPage)
  //         this.arr1=[]
          // this.userList=this.arr1;

        // console.log(this.arr1)

    
  //       }
  // }
  // filteredData:any[]=[];
  // filter(e:any){
  //   // console.log('select event:',e.target.value);
  //   const selectedValue = e.target.value;
    

  //    if(selectedValue){
  //     this.filteredData = this.userList.filter((row:any)=> {
  //       // console.log("rows",row.campaign_name)
    
  //           return row.campaign_name=selectedValue;
  //       });
  //       console.log('Filtered Data:', this.filteredData);
  //       this.userList=this.filteredData
        
  //    }
  //    else if(selectedValue==this.selectone){
  //     this.userList=this.arr1
  //    }
  
    
  
}
