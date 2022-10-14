import { Component } from '@angular/core';
import {UsersService} from './users.service'
import {User} from './_models/user'
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first_name: any;
  title = 'UserInfo';
  data: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  users: User [] = [];
  constructor(private usersService:UsersService){}
  ngOnInit():void{
    this.postList();
  }
  postList():void{
    this.usersService.getAllPosts().subscribe((res)=>{
      this.data = res;
      console.warn(this.data);
      
    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.postList();
  }

  onTableSizeChange(event:any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }
Search(){
  if(this.first_name == ''){
    this.ngOnInit()
  }else{
    this.users = this.usersService.filter(res=>{
      return res.firstName.toLocaleLowerCase().match(this.first_name.toLocaleLowerCase());
    })
  }
}

}
