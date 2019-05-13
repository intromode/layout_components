// import styles from './index.css';
// ul.className = styles.dogs

const rootDiv = document.getElementById('root');

const ul = document.createElement('ul');

const roverli = document.createElement('li');
roverli.textContent = 'rover';

const spotli = document.createElement('li');
spotli.textContent = 'spot';

const joeli = document.createElement('li');
joeli.textContent = 'joe';

const bingoli = document.createElement('li');
bingoli.textContent = 'bingo';

ul.appendChild(roverli);
ul.appendChild(spotli);
ul.appendChild(joeli);
ul.appendChild(bingoli);


rootDiv.appendChild(ul);

ul.style.backgroundColor = 'red';




