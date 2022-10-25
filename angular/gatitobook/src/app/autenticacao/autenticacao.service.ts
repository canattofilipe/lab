import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(user: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:3000/user/login',
        {
          userName: user,
          password: senha,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((resp) => {
          const authToken = resp.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken);
        })
      );
  }
}
