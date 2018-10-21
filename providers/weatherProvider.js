class WeatherProvider {

    constructor() {
    }


    getCurrentWeatherFromZip(zip) {
        return fetch(`https://funny-weather.herokuapp.com/current/zip/${zip}`)
            .then((res) => res.json())
            .then((resJSON) => {
                return resJSON;
            }).catch((err) => {
                console.error(err);
            })
    }

    getCurrentWeatherFromCoord(lat, lon) {
        return fetch(`https://funny-weather.herokuapp.com/current/coord/${lat}&${lon}`)
            .then((res) => res.json())
            .then((resJSON) => {
                return resJSON;
            }).catch((err) => {
                console.error(err);
            })
    }

    getForecastFromZip(zip) {
        return fetch(`https://funny-weather.herokuapp.com/forcast/zip/${zip}`)
            .then((res) => res.json())
            .then((resJSON) => {
                return resJSON;
            }).catch((err) => {
                console.error(err);
            })
    }

    getForecastFromCoord(lat, lon) {
        return fetch(`https://funny-weather.herokuapp.com/forcast/coord/${lat}&${lon}`)
            .then((res) => res.json())
            .then((resJSON) => {
                return resJSON;
            })
    }
}
export default WeatherProvider;