import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Array<any>;
  totalpages: Array<number>;

  page = 0;
  size = 2;
  order = "id";
  asc = true;
  isFirst = false;
  isLast = false;

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.cargarPaises();
  }

  cargarPaises() {
    this.paisesService.paises(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.paises = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        console.log(data);
        this.totalpages = new Array(data['totalPages']);
      },
      err => {
        console.log("it fails");
        console.log(err.error);
      }
    );
  }

  sort(): void {
    this.asc = !this.asc;
    this.cargarPaises();
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarPaises();
      console.log(this.page);
    }
  }

  forward(): void{
    if(!this.isLast){
      this.page++;
      this.cargarPaises();
      console.log(this.page);
    }
  }

  setPage(page: number): void{
    this.page = page;
    this.cargarPaises();
  }

  setOrder(order:string){
    this.order = order;
    this.cargarPaises();
  }

}
