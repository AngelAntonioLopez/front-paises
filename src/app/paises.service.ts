import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  paisesURL = "https://test-paises.herokuapp.com/paises?";
  constructor(private httpClient: HttpClient) {}
  
    public paises(page:number, size:number, order:string, asc:boolean ): Observable<any> {
      return this.httpClient.get<any>(this.paisesURL + `page=${page}&size=${size}&order=${order}&asc=${asc}`); 
    }

   
}
