import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

// esta clase proporciona metodos para formatear el estilo del mensaje.

constructor() { }
// recive un string y retonar un okCallback de cualquier tipo.
  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      } else {

      }
    });
  }

  // Se setean los mensajes del alertify. como no sé importo a travez de npm, si hay algún error de tipeo
  // El compilador se caerá pero no tirará ningúna clase de error. Be careful.

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
