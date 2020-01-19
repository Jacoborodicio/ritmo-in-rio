import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get().subscribe((response: any[]) => {
      console.log('response: ', response);
      this.posts = response;
    });
  }

}
