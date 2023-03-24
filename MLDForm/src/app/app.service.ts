import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = 'https://benepik.in/yorker/api/brandForm';
  constructor(private http: HttpClient) { }

  postAPI(data: any) {
    const headers = new HttpHeaders().set('Authorization', 'IrAuCxwLhBO49H7iqAxLpJ6ZRfK47C0Ia2DHFFZn')
    return this.http.post(this.apiUrl, data, { headers });
  }
}
