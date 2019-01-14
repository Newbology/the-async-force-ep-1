'use strict';

const requestInfoPerson4 = new XMLHttpRequest();

function createRequestInfoPerson4() {
  const person = JSON.parse(this.responseText);
  const person4Name = document.querySelector('#person4Name');
  person4Name.innerHTML = person.name;

  const requestHome = new XMLHttpRequest();

  function requestET4Home() {
    const home = JSON.parse(this.responseText);
    const requestHome = document.querySelector('#person4HomeWorld');
    requestHome.innerHTML = home.name;
  }

  requestHome.addEventListener('load', requestET4Home);
  requestHome.open('GET', person.homeworld);
  requestHome.send();
}
requestInfoPerson4.addEventListener('load', createRequestInfoPerson4);
requestInfoPerson4.open('GET', 'https://swapi.co/api/people/4/');
requestInfoPerson4.send();

/*
      Person14 request
*/

const requestInfoPerson14 = new XMLHttpRequest();

function createRequestInfoPerson14() {
  const person = JSON.parse(this.responseText);
  const person14Name = document.querySelector('#person14Name');
  person14Name.innerHTML = person.name;

  const requestSpecies = new XMLHttpRequest();

  function request14Species() {
    const species = JSON.parse(this.responseText);
    const requestSpecies = document.querySelector('#person14Species');
    requestSpecies.innerHTML = species.name;
  }

  requestSpecies.addEventListener('load', request14Species);
  requestSpecies.open('GET', person.species);
  requestSpecies.send();
}
requestInfoPerson14.addEventListener('load', createRequestInfoPerson14);
requestInfoPerson14.open('GET', 'https://swapi.co/api/people/14/');
requestInfoPerson14.send();

/*
 *      Film List
 */

const requestInfoFilmList = new XMLHttpRequest();

function createRequestFilmList() {
  const filmResponse = JSON.parse(this.responseText);
  const filmList = document.querySelector('#filmList');
  const films = filmResponse.results;

  films.forEach(film => {
    let filmItemList = document.createElement('li');
    filmItemList.className = 'film';
    filmList.appendChild(filmItemList);

    let filmTitle = document.createElement('h2');
    filmTitle.className = 'filmTitle';
    filmTitle.innerHTML = film.title;
    filmItemList.appendChild(filmTitle);

    let planetHead = document.createElement('h3');
    planetHead.className = 'planets';
    filmItemList.appendChild(planetHead);

    let planetFilmName = document.createElement('ul');
    planetFilmName.className = 'planetFilmName';
    filmItemList.appendChild(planetFilmName);

    let planetsList = film.planets;

    planetsList.forEach(planet => {
      let requestForPlanets = new XMLHttpRequest();

      const planetReqListener = () => {
        const planetInfo = JSON.parse(requestForPlanets.responseText);

        let planetItem = document.createElement('li');
        planetItem.className = 'planets';
        planetFilmName.appendChild(planetItem);

        let planetName = document.createElement('h4');
        planetName.className = 'planetNames';
        planetName.innerHTML = planetInfo.name;
        planetItem.appendChild(planetName);
      };
      requestForPlanets.addEventListener('load', planetReqListener);
      requestForPlanets.open('GET', planet);
      requestForPlanets.send();
    });
  });
}

requestInfoFilmList.addEventListener('load', createRequestFilmList);
requestInfoFilmList.open('get', 'https://swapi.co/api/films/');
requestInfoFilmList.send();
