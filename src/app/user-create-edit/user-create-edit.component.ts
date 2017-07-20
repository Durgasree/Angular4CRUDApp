import { Component, OnInit } from '@angular/core';
import { UsersService } from '.././users.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-user-create-edit',
  templateUrl: './user-create-edit.component.html',
  styleUrls: ['./user-create-edit.component.css'],
  providers: [UsersService]
})

export class UserCreateEditComponent implements OnInit {
  id: number;
   private sub: any;
   user: any;
   updated_user: boolean;
  constructor(public router: Router,private route: ActivatedRoute,private usersService: UsersService) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['user_id'];
       this.user = this.usersService.getUser(this.id);
             
    });
    
  }
 
 updateUser(user){
   this.usersService.updateUser(user,this.id)
   this.updated_user = true;
   this.router.navigateByUrl('/user/'+this.user.id+"?name="+user.name+"&email="+user.email+"&phone="+ user.phone+"&id="+user.id);
 }

 ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
