import { downTo } from './helpers';

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
    switch(number) {
      case 0:
        return (
          'No more bottles of beer on the wall, '
          + 'no more bottles of beer. \n'
          + 'Go to the store and buy some more, '
          + '99 bottles of beer on the wall. \n'
        );
      case 1:
        ...
      case 2:
        ...
      default:
        ...
    }
  }
}
