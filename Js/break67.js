var value = randomNumber(100);

function randomNumber(maxNumber) { 
  return Math.floor(Math.random() * Math.floor(maxNumber)); 
}

document.writeln("Random number is " + value);

for(var count = 1; count <= 100; ++count) {
  if(count == value)
    break;
  document.writeln("<br/>Count is: " + count + "<br/>");
}

document.writeln("broke out of loop at count " + count);
