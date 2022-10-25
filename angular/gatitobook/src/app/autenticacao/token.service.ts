import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  KEY = 'token';

  retornaToken() {
    return localStorage.getItem(this.KEY) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(this.KEY, token);
  }

  excluirToken() {
    localStorage.removeItem(this.KEY);
  }

  possuiToken() {
    return !this.retornaToken;
  }
}
