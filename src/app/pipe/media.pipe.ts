import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(obj: any): number {
    return (obj.nota1 + obj.nota2) / 2;
  }

}
