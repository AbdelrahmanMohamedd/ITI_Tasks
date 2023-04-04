import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(Message: any, ...args: unknown[]): unknown {
    return Message.split("").join("*");
  }

}
