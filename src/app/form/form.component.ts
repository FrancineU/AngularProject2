import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Search} from '../search';
import {ServiceService} from '../services/service.service';
import {Repository} from '../repository';
import {User} from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    searchInfo = new Search('');
    @Output() getName = new EventEmitter<Search>();

    searchFor(data){
        this.getName.emit(data.value.find);
        console.log(data.value.find)
        data.reset();
    }

    public searchMe = '';
    public githubUser: string;
  
    users: User ;
    repository: Repository;
    public searchRepo: string;

  
  
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
  
  
    searchRepos() {
        this.searchRepo = '';
      
  
    }
  }