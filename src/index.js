module.exports = function check(str, bracketsConfig) {
  isCorrect = true;

  isCorrect = isCorrect && str.length % 2 === 0;

  let str2 = str;
  
  while (str2 !== '') {
    let tempStr = str2;
    
    bracketsConfig.forEach(config => {
        str2 = str2.split(config.join('')).join('');
    })

    if(str2 === tempStr) {
      str2 = '';
      isCorrect = false;
    }
  }


  return isCorrect;
}



