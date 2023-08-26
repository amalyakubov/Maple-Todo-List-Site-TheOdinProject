import { setIntiialProjects, setStartProject } from './item-constructor';
import './style.css';
import { loadToday } from './today.js';

if (!localStorage.getItem('Work')) {
    setStartProject();
    setIntiialProjects();
}
loadToday();