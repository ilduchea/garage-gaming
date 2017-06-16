import { Pipe, PipeTransform } from '@angular/core';
import { Gamer } from './gamer.model';
import { GamerService } from './gamer.service';

@Pipe({
  name: 'availability',
  pure: false
})

export class AvailabilityPipe implements PipeTransform {

  constructor(
    private gs: GamerService
  ) { }

  transform(value: any, availability: string): Gamer[] {
    let filteredGamers = [];
    if (availability === 'all') {
      filteredGamers = value;  
    } else {
      value.forEach(gamer => {
        if (gamer.availability === availability) {
          filteredGamers.push(gamer);
        }
      });
    }
    return filteredGamers;
  }

}
