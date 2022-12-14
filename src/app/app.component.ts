import { AuthService } from './servcies/auth.service';
import { DataServices } from './servcies/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Post } from './model/post.model';
import { PostsService } from './servcies/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'e-com';
  isFetching = false;
  error = null;

  constructor(
    private postsService: PostsService,
    public dataServices: DataServices,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.dataServices.Products = posts;
        this.dataServices.OrgProducts = this.dataServices.Products;
        this.dataServices.isDataAvailable = true;
      },
      error: (error) => {
        this.isFetching = false;
        this.error = error.message;
      },
    });
    // setTimeout(() => {
    //   this.dataServices.isDataAvailable = true;
    //   console.log(this.loadedPosts[0]);
    // }, 5000);
  }
}
