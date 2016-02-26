const appid = '9356168e7073c0f5191649e50c2441c8';
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';

export default {
  getWeatherData(cityName) {
    const url = `${weatherUrl}?q=${cityName}&appid=${appid}&units=imperial`;
    return fetch(url)
      .then(r => {
        if (!r.ok) {
          console.log('why?', r)
          return Promise.reject({
            status: r.status,
            statusText: r.statusText
          });
        }
        return r;
      })
      .then(r => r.json());
  }
}
