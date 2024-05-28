import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  roles:any[]=[];
  columns:string[]=[ 'id' , 'firstName' , 'lastName' , 'role','username'];
  pageSize: number = 10;
  page:number=1;
  constructor(private http:HttpClient){}
  totalPages:number=1;
  currentPage:number=1;
  arr:any[]=[];
  j:number=0;
  getRoles(currentPage: number,pageSize: number){
    this.http.get(`http://dummyjson.com/users`).subscribe( (role:any) => {
    
      this.arr=role.users;
      // console.log(this.arr);
      
      if(Array.isArray(this.arr)){
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        this.roles = this.arr.slice(startIndex, endIndex);
        this.totalPages = Math.ceil(role.length / pageSize);
      // console.log(this.roles);
      
      }
      this.totalPages = Math.ceil(role.length / 10);
      this.j=this.j+this.pageSize;
    })
  }
 userName:string="";
  getList(){
    this.http.get(`http://dummyjson.com/users`).subscribe( (user:any) => {
      this.userList=user.users;
      this.userName= user.users["role"]
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
    this.filteredData = this.arr.filter((row:any)=> {
      // console.log("rows",row.campaign_name)
  
          return row.role == selectedValue;
      });
      console.log('Filtered Data:', this.filteredData);
      this.roles=this.filteredData

      
   }
   else if(selectedValue==this.selectone){
    this.roles=this.arr
   }  
}


  ngOnInit(){
    this.getRoles(this.page,this.pageSize);
    this.getList()
   
  }
  pageChanged(event:number) {
    this.currentPage = event;
    // this.page++;

    this.getRoles(this.page,this.pageSize);
    // this.j=this.j+10;
    // this.page++;


  }

  Next(event:number) {
    
      this.currentPage++;
      this.page++;
      // this.pageChanged(this.currentPage)
      this.roles=[];
    this.getRoles(this.page,this.pageSize);
    // console.log(this.currentPage)

      // this.arr1=[]
    // this.userList=this.arr1;


  }
  onPrev(event:number){
  
      this.currentPage--;
      
      this.page--;
      this.roles=[];

      // this.pageChanged(this.currentPage)
    this.getRoles(this.page,this.pageSize);
    // this.arr1=[]
      // console.log(this.currentPage)
      // this.userList=this.arr1;

    // console.log(this.arr1)


    
  }
}
