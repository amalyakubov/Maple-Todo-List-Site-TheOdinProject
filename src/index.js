import { millisecondsToHours } from 'date-fns';
import './style.css';
import { getDisplayDate} from './time.js';
import { loadToday } from './today.js';

loadToday();

console.log(getDisplayDate());