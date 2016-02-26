export default {
  getWeatherData(coord) {
    const url = `/weather/${coord.lat},${coord.lon}`;
    return fetch(url)
      .then(r => {
        if (!r.ok) {
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
