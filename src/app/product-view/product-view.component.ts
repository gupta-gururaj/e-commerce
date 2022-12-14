import { ProductComponent } from './../product/product.component';
import { Post } from './../model/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  @Input() product!: Post;

  ngOnInit() {
    console.log('my value', this.product);
  }
}
