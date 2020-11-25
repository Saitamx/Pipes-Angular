import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contraseña'
})
export class ContraseñaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
