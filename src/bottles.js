import {capitalize, downTo} from '../lib/helpers';
import {BottleNumber} from './ bottle-number';

export class Bottles {

  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {

    const bottleNumber = BottleNumber.for(number);

    return (
      capitalize(`${bottleNumber} of beer on the wall, `)
      + `${bottleNumber} of beer.\n`
      + `${bottleNumber.action()}, `
      + `${bottleNumber.successor()} of beer on the wall.\n`
    );
  }

}

// When we get to the verse 2 test, there are couple of different ways we could get that test to pass
// export class Bottles {
//
//   verse(number) {
    // Opinion here is that it is better to have this which removes the
    // ${number === 1 ? 'bottle' : 'bottles'} conditional
    // if (number === 2) {
    //   return (
    //     '2 bottles of beer on the wall, '
    //     + '2 bottles of beer.\n'
    //     + 'Take one down and pass it around, '
    //     + '1 bottle of beer on the wall.\n'
    //   );
    // }
    // return (
    //   `${number} bottles of beer on the wall, `
    //   + `${number} bottles of beer.\n`
    //   + 'Take one down and pass it around, '
    //   + `${--number} ${number === 1 ? 'bottle' : 'bottles'} of beer on the wall.\n`
    // );
//     return (
//       `${number} bottles of beer on the wall, `
//       + `${number} bottles of beer.\n`
//       + 'Take one down and pass it around, '
//       + `${number - 1} bottles of beer on the wall.\n`
//     );
//   }
// }