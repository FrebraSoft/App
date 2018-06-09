import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  constructor() { }

  store(obj) {
    return localStorage.setItem('AUTH', JSON.stringify(obj));
  }

  getUser() {  
    return (this.checkAuth()) ? JSON.parse(localStorage.getItem('AUTH')) : {};
  }

  checkAuth() {  
    return !(localStorage.getItem('AUTH') == null);
  }

  signOut() {
    localStorage.setItem("AUTH", null)
    localStorage.removeItem("AUTH");
    localStorage.clear();
    return true;
  }
}