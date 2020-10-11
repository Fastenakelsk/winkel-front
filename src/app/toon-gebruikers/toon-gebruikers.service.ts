import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Gebruiker } from '../../shared/models/gebruiker';

@Injectable({ providedIn: 'root' })
export class GebruikersService {

  constructor(
    private http: HttpClient,
  ) {}

  getGebruikers(): Observable<Gebruiker>{
    return this.http.get<Gebruiker>(`${environment.apiUrl}/gebruikers`);
  }

}
