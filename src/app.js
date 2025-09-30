import './style.css'

import {prevBtn, nextBtn} from "./domElements";
import {goToNextPhoto, goToPreviousPhoto} from "./appFunctions";

prevBtn.addEventListener('click', ()=>{
    goToPreviousPhoto();
});

nextBtn.addEventListener('click', ()=>{
    goToNextPhoto();
});

