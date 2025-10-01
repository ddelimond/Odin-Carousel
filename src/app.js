import './style.css'

import {prevBtn, nextBtn} from "./domElements";
import {createPagnationCircles, goToNextPhoto, goToPreviousPhoto} from "./appFunctions";

prevBtn.addEventListener('click', ()=>{
    goToPreviousPhoto();
});

nextBtn.addEventListener('click', ()=>{
    goToNextPhoto();
});

createPagnationCircles();