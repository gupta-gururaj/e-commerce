import { PostsService } from './../servcies/posts.service';
import { Component, OnInit } from '@angular/core';
import { DataServices } from '../servcies/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    public dataServices: DataServices
  ) {}

  ngOnInit(): void {}
}
