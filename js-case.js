function oddishOrEvenish(n) {
    const number = n.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += Number(number[i]);
    }
    
    if (sum % 2 == 0) {
      return "Even"
    } else if (sum % 2 == 1) {
      return "Odd"
    }
  }
  oddishOrEvenish(13)