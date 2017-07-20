import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
public users: any;

  constructor() { 
    this.users = [
      {id: 1,name: "test user 1",email: "testemail1@mailinator.com",phone: "9999999991"},
      {id: 2,name: "test user 2",email: "testemail2@mailinator.com",phone: "9999999992"},
      {id: 3,name: "test user 3",email: "testemail3@mailinator.com",phone: "9999999993"},
      {id: 4,name: "test user 4",email: "testemail4@mailinator.com",phone: "9999999994"},
      {id: 5,name: "test user 5",email: "testemail5@mailinator.com",phone: "9999999995"},
      {id: 6,name: "test user 6",email: "testemail6@mailinator.com",phone: "9999999996"},
    ];

  }

   
  getUser(id){
     let user =  this.users.find(x => x.id === id)
     return user;
  };

  getUserIndex(user){
    return this.users.indexOf(user);
  }

  ListUsers(){
    return this.users;
  };

  createUser(user){
    this.users.push(user);
    return this.users;
  }

  deleteUser(id){
    let user =  this.getUser(id)
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return this.users;
  }

  updateUser(userObj,id){
    let user =  this.getUser(id);
    let user_index = this.getUserIndex(user);
    
    this.users[user_index] = userObj;
    console.log(this.users);
    // return user;
  }

}
