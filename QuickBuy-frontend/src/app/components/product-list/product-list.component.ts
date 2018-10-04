import { ProductModel } from './../../shared/models/product.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  // products: ProductModel[] = [new ProductModel('id', 'banana', 'anna@gmail.com', 5, 40, 'others',
  // 'https://upload.wikimedia.org/wikipedia/commons/6/69/Banana_%28white_background%29.jpg', 'desc'),
  // new ProductModel('id', 'apple', 'john@gmail.com', 2, 90, 'others',
  // 'https://pl.wikipedia.org/wiki/ThinkPad#/media/File:Lenovo_ThinkPad_X1_Ultrabook.jpg', 'desc')];
  products: ProductModel[] = [];
  @Input() keyword: string;
  @Input() category: string;
  isLoaded = false;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
   //  console.log(this.keyword);
    // console.log(this.category);
   //// this.searchService
    //  .getAll()
    //  .subscribe(products => (this.products = products), error => console.log(error));
  /*  if (!this.isLoaded) {
      this.searchService
      .getAll()
      .subscribe(products => (this.products = products), error => console.log(error));
      this.isLoaded = true;
      console.log('i am here');
    } */
  }
  ngOnChanges() {
    if (this.keyword === '' && this.category === '') {
      this.searchService
      .getAll()
      .subscribe(products => (this.products = products), error => console.log(error));
    } else if (this.keyword !== '' && this.category !== '') {
      this.searchService
      .getProductsByNameAndCategory(this.keyword, this.category)
      .subscribe(products => (this.products = products), error => console.log(error));
    } else if (this.keyword !== '') {
      this.searchService
      .getProductsByName(this.keyword)
      .subscribe(products => (this.products = products), error => console.log(error));
    } else {
      this.searchService
      .getProductsByCategory(this.category)
      .subscribe(products => (this.products = products), error => console.log(error));
    }
   }

}