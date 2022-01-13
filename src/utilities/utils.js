import moment from 'moment';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const utils = {
  width,
  height,
  formattedDate: (date = new Date()) => moment(date).format('Do MMM'),
  formattedDateTime: (date = new Date()) =>
    moment(date).format('Do MMM h:mm A'),
};

export default utils;
