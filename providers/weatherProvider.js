class WeatherProvider {

    constructor() {
    }

    getCurrentWeatherFromZip(zip) {
        return fetch(`/current/zip/${zip}`)
        .then((res) => res.json())
        .then((resJSON) => {
            return resJSON();
        }).catch((err) => {
            console.error(err);
        })   
    }

    getCurrentWeatherFromCoord(lat, lon) {
        //eturn axios.get(`/current/coord/${lat}&${lon}`);
    }

    getForecastFromZip(zip) {
        // /return axios.get(`/forcast/zip/${zip}`);
    }

    getForecastFromCoord(lat, lon) {
        //return axios.get(`/forcast/coord/${lat}&${lon}`);
    }
}
export default WeatherProvider;