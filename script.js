const button = document.getElementById('btn');
button.addEventListener('click', () => {
  let x = getRandomInt(0, 9);
  let place;
    if (x < 4){
      place = 
    }else if (x > 3 && x < 7) {

    }else if (x > 6 && x < 10) {

    }
});

getRandomInt(min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
