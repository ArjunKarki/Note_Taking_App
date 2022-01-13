import moment from 'moment';

const utils = {
  formattedDate: (date = new Date()) => moment(date).format('Do MMM'),
};

export default utils;
