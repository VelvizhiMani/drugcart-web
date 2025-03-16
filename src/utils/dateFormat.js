import moment from 'moment';

export const DateFormat = (unixtime) => {
  const date = moment(unixtime).format('L');
  return date;
};

export const DateMonthFormat = (unixtime) => {
  const date = moment(unixtime).format('LL');
  return date;
};