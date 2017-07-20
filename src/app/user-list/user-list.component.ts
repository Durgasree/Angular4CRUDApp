import { Component, OnInit } from '@angular/core';
import {UsersService} from '.././users.service'
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService,Modal]
})
export class UserListComponent implements OnInit {

  constructor(private usersService: UsersService,overlay: Overlay, public modal: Modal) {}
  users = this.usersService.ListUsers(); 
  title = 'Users List';
  newUser = {id: (this.users.length + 1)};
  setNewUser(){
    this.newUser = {id: (this.users.length + 1)};
  }
  createUser(){
    this.usersService.createUser(this.newUser);
    this.setNewUser();
  };
  deleteUser(userId){
    this.usersService.deleteUser(userId);
    this.setNewUser();
  };
  viewUser(userId){
   let user = this.usersService.getUser(userId);
   console.log(user)
  }
  

  ngOnInit() {
  }

}
