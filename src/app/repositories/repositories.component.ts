import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service';
import {Repository} from '../repository';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  providers: [ServiceService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repository;
    public searchRepo: string;
   

    searchRepos(any) {
        this.searchRepo = '';

    }

    constructor(public gitRepoRequest: ServiceService ) { }

  ngOnInit() {
     
      this.gitRepoRequest.gitRepos(this.searchRepo);

}
}

