import { Component, Injectable, Input } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Post } from '../model/post.model';
import { DataServices } from '../servcies/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Post;

  ngOnInit() {
    // console.log('my value', this.product);
  }
  constructor(public dataServices: DataServices) {}

  onProductClick(event: Event) {
    console.log('clicked');
  }
}
