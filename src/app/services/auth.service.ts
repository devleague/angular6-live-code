import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private backend: BackendService,
    private session: SessionService
  ) { }

  register(data) {
    return this.backend.register(data);
  }

  login(data) {
    return this.backend.login(data)
    .then((response) => {
      return this.session.setSession(data.username);
    });
  }

  logout() {
    return this.backend.logout()
    .then((response) => {
      return this.session.clearSession();
    });
  }
}
