import { setIntiialProjects } from './item-constructor';
import './style.css';
import { loadToday } from './today.js';

if (!localStorage.getItem('Work')) {
    setIntiialProjects();
}
loadToday();