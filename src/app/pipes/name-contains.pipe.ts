import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Pipe({
  name: 'nameContains'
})
export class NameContainsPipe implements PipeTransform {

  transform(value:Pokemon[], searched:string): Pokemon[] {
    return value.filter(
      current => current.name.toLowerCase().includes(searched.toLowerCase())
    )
  }

}
