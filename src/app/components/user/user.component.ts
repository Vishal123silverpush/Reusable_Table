import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: any[]=[];
  // columns:string[]=['id','firstName','lastname','email'];
  columns: string[] = ['id','firstName','lastName','maidenName','email','phone'];
  currentPage:number=1;
  pageSize:number=10;
  page:number=1;
  totalPages:number=1;
  arr:any[]=[];
  j:number=0;
  constructor(private http:HttpClient){}
  ngOnInit(){
   this.getUsers(this.currentPage,this.pageSize);
   this.getList()
  }
  getUsers(currentPage:number,pageSize:number){
    this.http.get(`http://dummyjson.com/users?page=${currentPage}&pageSize=${pageSize}`).subscribe( (user:any) => {
      console.log(user)
      this.users=user.users
      this.arr=user.users;
      console.log(this.arr);
      
      if(Array.isArray(this.arr)){
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        this.users = this.arr.slice(startIndex, endIndex);
        this.totalPages = Math.ceil(user.length / pageSize);
      console.log(this.users);
      
      }
    })
  }

  pageChanged(event:number) {
    this.currentPage = event;
    // this.page++;

    this.getUsers(this.page,this.pageSize);
    // this.j=this.j+10;
    // this.page++;


  }
  filteredData:any[]=[];
  selectone:string="Select one"
  userList:any[]=[];

  getList(){
    this.http.get(`http://dummyjson.com/users`).subscribe( (user:any) => {
      this.userList=user.users;
      // this.users= user.users["role"]
      console.log(this.userList);
      
    })
  }
filterUsers(e:any){
  // console.log('select event:',e.target.value);
  const selectedValue = e.target.value;
  

   if(selectedValue){
    this.filteredData = this.arr.filter((row:any)=> {
      // console.log("rows",row.campaign_name)
  
          return row.email == selectedValue;
      });
      console.log('Filtered Data:', this.filteredData);
      this.users=this.filteredData

      
   }
   else if(selectedValue==this.selectone){
    this.users=this.arr
   }  
}


  Next(event:number) {
    
      this.currentPage++;
      this.page++;
      // this.pageChanged(this.currentPage)
      this.users=[];
    this.getUsers(this.page,this.pageSize);
    console.log(this.currentPage)

      // this.arr1=[]
    // this.userList=this.arr1;


  }
  onPrev(event:number){
  
      this.currentPage--;
      
      this.page--;
      this.users=[];

      // this.pageChanged(this.currentPage)
    this.getUsers(this.page,this.pageSize);
    // this.arr1=[]
      console.log(this.currentPage)
      // this.userList=this.arr1;

    // console.log(this.arr1)


    
  }
}
