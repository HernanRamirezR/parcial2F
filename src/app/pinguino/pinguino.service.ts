import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pinguino } from './pinguino';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PinguinoService {
  private apiUrl = environment.baseUrl ;

constructor(private http:HttpClient) { }

getPinguinos(): Observable<Pinguino[]> {
  return this.http.get<Pinguino[]>(this.apiUrl);
}

}
