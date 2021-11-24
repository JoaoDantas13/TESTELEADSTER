import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuarios } from '../classes/usuarios';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  list (){
    return this.http.get<Usuarios>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
