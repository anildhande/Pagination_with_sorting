import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const baseUrl = ' http://localhost:3000/data';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  filter(arg0: (res: any) => any): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  getAllPosts(): Observable<any>{
    return this.http.get(baseUrl);
  }
}
