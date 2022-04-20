
export class BottleNumber {

  constructor(number) {
    this.number = number;
  }

  container() {
    return 'bottles';
  }

  pronoun() {
    return 'one';
  }

  quantity() {
    return this.number.toString();
  }

  action() {
    return `Take ${this.pronoun(this.number)} down and pass it around`;
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  static canHandle() {
    return true;
  }

  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
  }

  static for(number) {
    // Simple Switch based factory
    // switch(number) {
    //   case 0: return new BottleNumber0(number);
    //   case 1: return new BottleNumber1(number);
    //   case 6: return new BottleNumber6(number);
    //   default: return new BottleNumber(number);
    // }

    // Dynamic factory
    // let bottleNumberClass;
    //
    // try {
    //   bottleNumberClass = eval(`BottleNumber${number}`);
    // } catch (e) {
    //   bottleNumberClass = BottleNumber;
    // }
    //
    // return new bottleNumberClass(number);

    // Example with a map
    // let bottleNumberClass;
    // bottleNumberClass = {
    //   0: BottleNumber0,
    //   1: BottleNumber1,
    //   6: BottleNumber6
    // }[number] || BottleNumber;

    // Another example
    // const bottleNumberClass = [
    //   BottleNumber6,
    //   BottleNumber1,
    //   BottleNumber0,
    //   BottleNumber
    // ].find(candidate => candidate.canHandle(number));


    const bottleNumberClass = BottleNumber.registry.find(candidate =>
      candidate.canHandle(number));
    return new bottleNumberClass(number);
  }

}
BottleNumber.registry = [BottleNumber];

export class BottleNumber0 extends BottleNumber {

  static canHandle(number) {
    return number === 0;
  }

  quantity() {
    return 'no more';
  }

  action() {
    return 'Go to the store and buy some more';
  }

  successor() {
    return BottleNumber.for(99);
  }
}
BottleNumber.register(BottleNumber0);

export class BottleNumber1 extends BottleNumber {

  static canHandle(number) {
    return number === 1;
  }

  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }
}
BottleNumber.register(BottleNumber1);

export class BottleNumber6 extends BottleNumber {

  static canHandle(number) {
    return number === 6;
  }

  container() {
    return 'six-pack';
  }

  quantity() {
    return '1';
  }
}
BottleNumber.register(BottleNumber6);