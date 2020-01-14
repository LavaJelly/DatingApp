import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

// el modelo del root que se inyecta es el App.Module.ts de la carpeta padre.
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  // Creamos una instancia del servicio que nos ayudará a majenar los jwt token.
  jwtHelper = new JwtHelperService();

  // Variable en cual se va a guardar el decodedToken.
  decodedToken: any;

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any ) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        console.log(this.decodedToken);
      }
    })
  );
}

register(model: any) {
  // este metodo retorna un observable, así que para usarlo tenemos que subscribirnos a él.
  return this.http.post(this.baseUrl + 'register', model);
}

// Método que retorna un true si el token es valido o un false si ya expiró.
loggedIn() {
  // Conseguimos el token del local storage.
  const token = localStorage.getItem('token');
  // Se valida si el token ya expiró y retorna true o false.
  return !this.jwtHelper.isTokenExpired(token);
}

}
