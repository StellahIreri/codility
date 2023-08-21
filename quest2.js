function solution(riddle) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const riddleArray = riddle.split('');
    
    for (let i = 0; i < riddleArray.length; i++) {
      if (riddleArray[i] === '?') {
        for (let j = 0; j < alphabet.length; j++) {
          const prevChar = i > 0 ? riddleArray[i - 1] : '';
          const nextChar = i < riddleArray.length - 1 ? riddleArray[i + 1] : '';
          
          if (alphabet[j] !== prevChar && alphabet[j] !== nextChar) {
            riddleArray[i] = alphabet[j];
            break;
          }
        }
      }
    }
    
    return riddleArray.join('');
  }
  
  // Tests
  console.log(solution("ab?ac?")); 
  console.log(solution("rd?e?wg??")); 
  console.log(solution("????????")); 
  