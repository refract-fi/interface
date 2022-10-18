import moment from 'moment';
import { formatMoment } from 'utils/func';

export const refractDurations = [
  {
    label: formatMoment(moment.duration(1, 'h').humanize()),
    duration: moment.duration(1, 'h').asSeconds(),
  },
  {
    label: formatMoment(moment.duration(1, 'd').humanize()),
    duration: moment.duration(1, 'd').asSeconds(),
  },
  {
    label: formatMoment(moment.duration(7, 'd').humanize()),
    duration: moment.duration(7, 'd').asSeconds(),
  },
  {
    label: formatMoment(moment.duration(1, 'M').humanize()),
    duration: moment.duration(1, 'M').asSeconds(),
  },
  {
    label: formatMoment(moment.duration(1, 'y').humanize()),
    duration: moment.duration(1, 'y').asSeconds(),
  },
  {
    label: 'NEVER',
    duration: null,
  },
];
