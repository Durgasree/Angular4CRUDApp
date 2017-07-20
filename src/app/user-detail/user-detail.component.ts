import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '.././users.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UsersService]
})

export class UserDetailComponent implements OnInit {
  id: number;
  private sub: any;
  current_user: any;
  constructor(private route: ActivatedRoute,private usersService: UsersService) { }
  
  ngOnInit() {
    let new_user_obj;
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['user_id'];
       this.current_user = this.usersService.getUser(this.id);
       this.route.queryParams.subscribe(qparams => {
        new_user_obj = qparams
       })
       
       if(new_user_obj.name){
         this.current_user = new_user_obj;
       }
       
       else{
         this.current_user = this.usersService.getUser(this.id);
       }       

    });
  }

  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  
}


