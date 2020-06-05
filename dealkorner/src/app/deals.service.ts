import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deal } from '../models/deal';


@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private http: HttpClient) {}

  getAllDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>('http://localhost:3000/deal');
  }
}
