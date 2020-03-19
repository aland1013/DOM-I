updateTimer = () => {
  msTens.textContent++;
  if (msTens.textContent === '10') {
    msTens.textContent = '0';
    msHundreds.textContent++;
    if(msHundreds.textContent === '10') {
      msHundreds.textContent = '0';
      secondOnes.textContent++;
      if (secondOnes.textContent === '10') {
        secondOnes.textContent = '0'
        secondTens.textContent = '1'
      }
    }
  }
}

const secondTens = document.querySelector('#secondTens');
secondTens.textContent = '0';

const secondOnes = document.querySelector('#secondOnes');
secondOnes.textContent = '0';

const msHundreds = document.querySelector('#msHundreds');
msHundreds.textContent = '0';

const msTens = document.querySelector('#msTens');
msTens.textContent = '0';

let timer;

document.querySelector('#btn').addEventListener('click', () => {
  timer = window.setInterval(updateTimer, 10);
  document.querySelector('#btn').outerHTML = '<button id="btn" disabled>Start</button>';

  setTimeout(() => { 
    clearInterval(timer); 
    document.querySelector('.digits').classList.toggle('redDigit');
    secondTens.textContent = '1';
    secondOnes.textContent = '0';
    msHundreds.textContent = '0';
    msTens.textContent = '0';
  
  }, 10000);
});

