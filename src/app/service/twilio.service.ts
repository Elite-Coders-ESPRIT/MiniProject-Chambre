import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwilioService {
  private apiUrl = 'https://api.twilio.com/2010-04-01/Accounts/AC7fcae88a63e227b5ad8aca69f26ea0d6/Messages';
  private authToken = '68b719c190830d455192b434517ac788';
  private twilioPhoneNumber = '+12174412598';



 constructor(private http: HttpClient) {}
 sendSMS(to: string, body: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(`YOUR_TWILIO_SID:${this.authToken}`),
  });

  const payload = `To=${encodeURIComponent(to)}&From=${encodeURIComponent(this.twilioPhoneNumber)}&Body=${encodeURIComponent(body)}`;

  return this.http.post<any>(this.apiUrl, payload, { headers });
}
}
