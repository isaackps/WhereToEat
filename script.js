const button = document.getElementById('btn');
const displayLocation = document.getElementById('ans');
//const newDiv = document.createElement('div');
let counter = 0;


button.addEventListener('click', () => {
  let x = getRandomInt(0, 11);
  let place;

  if (counter = 0) {
    if (x < 4){
      place = 'Shaw Food Republic';
      displayLocation.append(place);
      counter++;
    } else if (x > 3 && x < 7) {
      place = 'Orchard Towers';
      displayLocation.append(place);
      counter++;
    } else if (x > 6 && x < 10) {
      place = 'Tangs Food Market';
      displayLocation.append(place);
      counter++;
    } else if (x == 10) {
      place = 'SOMETHING EXPENSIVE! HANS TREAT!';
      displayLocation.append(place);
      counter++;
    }
  } else {
    if (x < 4){
      place = 'Shaw Food Republic';
      displayLocation.innerHTML = place;
    } else if (x > 3 && x < 7) {
      place = 'Orchard Towers';
      displayLocation.innerHTML = place;
    } else if (x > 6 && x < 10) {
      place = 'Tangs Food Market';
      displayLocation.innerHTML = place;
    } else if (x == 10) {
      place = 'SOMETHING EXPENSIVE! HANS TREAT!';
      displayLocation.innerHTML = place;
    }
    //counter = 0;
  }

});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
