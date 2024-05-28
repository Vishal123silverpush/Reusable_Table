import { Component,HostListener } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';
import { style } from '@angular/animations';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  roles:any[]=[];
  columns:string[]=[ 'id' , 'firstName' , 'lastName' , 'role','username'];
  pageSize: number = 10;
  page:number=1;
  showTable: boolean = true;
  constructor(private http:HttpClient,private router: Router){
    
  }
  isTableVisible(): boolean {

    return  this.router.url !== '/users' && (this.router.url !== '/roles') 
  }
  // totalPages:number=1;
  currentPage:number=1;
  // constructor() {
   
  // }
  getRoles( ){
    this.http.get(`http://dummyjson.com/users`).subscribe( (role:any) => {
      console.log('roles data:::',role);
      this.roles=role.users;
      // this.totalPages = Math.ceil(this.roles. / pageSize);

    })
  }
  ngOnInit(){
   this.getRoles()
  }
  act(){
    
  }
}
