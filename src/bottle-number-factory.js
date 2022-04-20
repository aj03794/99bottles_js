import {BottleNumber, BottleNumber0, BottleNumber1} from './ bottle-number';

export class BottleNumberFactory {
  static for(number) {
    switch(number) {
      case 0: return new BottleNumber0(number);
      case 1: return new BottleNumber1(number);
      default: return new BottleNumber(number);
    }
  }
}