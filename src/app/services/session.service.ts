import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user = {
    username: ''
  };

  // subject to hold isLoggedIn value (default = false)
  private _isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // check if user is in localStorage
    let userString = window.localStorage.getItem('user');
    try {
      if (userString) { this.user = JSON.parse(userString); }
      else { console.log('user was not found'); }

      // update _isLoggedInSubject on construction
      this._isLoggedInSubject.next(!!userString);
    }
    catch(err) {
      console.log('could not parse user');
    }
  }

  getSession() {
    return this.user;
  }

  setSession(username = '') {
    // save to memory
    this.user.username = username;

    // save to localStorage
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem('user', userString);

    // update subject
    this._isLoggedInSubject.next(true);
  }

  clearSession() {
    this.user.username = '';
    window.localStorage.removeItem('user');
    this._isLoggedInSubject.next(false);
  }

  isLoggedInAsAObservable() {
    return this._isLoggedInSubject.asObservable();
  }
}
