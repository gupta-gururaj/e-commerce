import { Injectable, EventEmitter } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable()
export class DataServices {
  Products: Post[] = [];
  OrgProducts: Post[] = [];
  isDataAvailable: boolean = false;
  loggedIn = false;
  email = '';
  openCart = false;
}
