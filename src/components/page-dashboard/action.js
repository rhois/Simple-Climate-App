import { ActionTypes } from '../../store/action-types';
import { config } from '../../config';
import moment from 'moment';

export const url = {
  LIST_TEMP: '/data/2.5/forecast/daily',
};

export const updateTempList = (data, totalTemp, totalVariance) => ({
  type: ActionTypes.UPDATE_DATA_TEMPERATURE,
  temperature: data.map(({
    id,
    date,
    temp,
    variance,
  }) => ({
    id,
    date,
    temp,
    variance,
  })),
  totalTemp,
  totalVariance,
  isLoaded: true,
});

export const fetchTemperature = (city) => dispatch => {
  let listUrl = url.LIST_TEMP;
  if(city) {
    listUrl = `${url.LIST_TEMP}?q=${city}&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1`;
  }
  return fetch(config.url + listUrl, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json())
  .then((data) => {
    if (data) {
      let totalTemp = 0;
      let totalVariance = 0;
      const dataList = data.list.map((item, index) => {
        totalTemp += item.temp.day/(data.list).length;
        totalVariance += (item.temp.max - item.temp.min)/(data.list).length;
        return {
          id: index,
          date: moment.unix(item.dt).format('YYYY-MM-DD'),
          temp: item.temp.day,
          variance: (item.temp.max - item.temp.min).toFixed(2),
        };
      });
      dispatch(updateTempList(dataList, totalTemp, totalVariance));
    }
  }) // parses response to JSON
};

export default {
    fetchTemperature,
};
