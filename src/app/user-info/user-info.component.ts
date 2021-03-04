
import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service';
import {Repository} from '../repository';
import {User} from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  providers: [ServiceService],
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public searchMe = 'FrancineU';
  public githubUser: string;


  users: User ;
  repository: Repository;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest: ServiceService, public userRepos: ServiceService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}
}