import request from 'superagent';

export default {
  getWeatherData(coord) {
    const url = `/weather/${coord.lat},${coord.lon}`;

    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, res) => {
          if (err || !res.ok) {
            reject('Failed to retrieve data');
          } else {
            resolve(res.body);
          }
        });
    });
  }
};
