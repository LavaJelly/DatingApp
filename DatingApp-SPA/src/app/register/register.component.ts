import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // el import del Input sirve para pasar datos de la clase padre(home) a la clase hija(register)
  // @Input() valuesFromHome: any ya no era necesarios los values, así que comentaré esto para no perder el import.
  // el import del Output sirve para emitir un evento(angular core) de la clase hija(register) a la clase padre(home)
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  // traemos el servicio authservice como argumento para hacer uso del metodo register().
  // de la misma forma imporamos el servicio AlertifyService para formatear mensajes.
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    // nos suscribimos a el metodo register importado desde authservice.
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    // Acá es donde se usa el output para emitir un false
    // que será "interceptado" por el home.component.html en la etiqueta (cancelRegister)
    this.cancelRegister.emit(false);
    console.log('candelled');
  }

}
