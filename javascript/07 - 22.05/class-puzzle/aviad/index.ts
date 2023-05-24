export {}

// Class - puzzle 1:
function printState(string) {
    if (typeof string !== 'string' || string.length === 0) {
      console.log('המחרוזת ריקה או לא תקינה.');
      return;
    }
  
    const firstChar = string[0];
    const lastChar = string[string.length - 1];
  
    console.log('התו הראשון:', firstChar);
    console.log('התו האחרון:', lastChar);
  }
  printState('Hello');
  