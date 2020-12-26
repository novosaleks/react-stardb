export default class StarAPI {
    _url = 'https://swapi.dev/api/';
    _assetsURL = 'https://starwars-visualguide.com/assets/img/';

    _getResponseFromServer = async url => {
        const req = await fetch(this._url + url);

        if (!req.ok) {
            throw new Error(`request on ${req.url} failed with code: ${req.status}.`);
        }

        return await req.json();
    };

    getAllPeople = async () => {
        const people = await this._getResponseFromServer('people/');

        return people.results.map(this._transformPerson);
    };

    getPersonByID = async id => {
        const person = await this._getResponseFromServer(`people/${id}`);

        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const planets = await this._getResponseFromServer('planets/');

        return planets.results.map(this._transformPlanet);
    };

    getPlanetByID = async id => {
        const planet = await this._getResponseFromServer(`planets/${id}`);

        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const starships = await this._getResponseFromServer('starships/');

        return starships.results.map(this._transformStarship);
    };

    getStarshipByID = async id => {
        const starship = await this._getResponseFromServer(`starships/${id}`);

        return this._transformStarship(starship);
    };

    getPersonURL = id => {
        return `${this._assetsURL}characters/${id}.jpg`;
    };

    getPlanetURL = id => {
        return `${this._assetsURL}planets/${id}.jpg`;
    };

    getStarshipURL = id => {
        return `${this._assetsURL}starships/${id}.jpg`;
    };


    _getIDFromURL(url) {
        const regExp = /\d*(?=\/$)/;
        return url.match(regExp);
    }

    _transformPlanet = (planet) => {
        return {
            id: +this._getIDFromURL(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        };
    };

    _transformPerson = (person) => {
        return {
            id: +this._getIDFromURL(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        };
    };

    _transformStarship = starship => {
        return {
            id: +this._getIDFromURL(starship.url),
            name: starship.name,
            model: starship.modules,
            capacity: starship.cargo_capacity,
            cost: starship.cost_in_credits,
        };
    };
}