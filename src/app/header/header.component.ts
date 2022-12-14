import { AuthService } from './../servcies/auth.service';
import { Post } from './../model/post.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataServices } from '../servcies/data.service';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  searchTerm = '';
  allowSearchingProduct = false;
  modalRef: MdbModalRef<CartComponent> | null = null;

  constructor(
    public dataServices: DataServices,
    private router: Router,
    private authService: AuthService
  ) // private cartComponent: CartComponent,
  // private modalService: MdbModalService
  {}

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url === '/') {
      this.allowSearchingProduct = true;
    } else {
      this.allowSearchingProduct = false;
    }
    // this.dataServices.Products = this.filteredOptions;
  }

  public reAdd() {
    if (this.searchTerm == '') {
      this.dataServices.Products = this.dataServices.OrgProducts;
    }
  }

  public searchProduct(value: string): void {
    const filterValue = value.toLowerCase();
    this.dataServices.Products = this.dataServices.OrgProducts;
    this.dataServices.Products = this.dataServices.Products.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  openModal() {
    // this.modalRef = this.modalService.open(cartComponent);
  }
}
