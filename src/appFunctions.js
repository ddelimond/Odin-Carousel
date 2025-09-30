import {photoArr} from "./photoArr";
import {mainImg} from "./domElements";



export function goToNextPhoto(){
    let photoPosition = Number(mainImg.dataset.id);
    let arrLength = photoArr.length;
    let nextPhotoPosition;


    if((photoPosition < arrLength ) && photoPosition !== arrLength-1){
        nextPhotoPosition =  photoPosition + 1;
        mainImg.dataset.id = String(nextPhotoPosition);

        mainImg.src = photoArr[nextPhotoPosition];
    }
    else if (photoPosition === arrLength-1){
        nextPhotoPosition = 0;
        mainImg.dataset.id = String(nextPhotoPosition);
        mainImg.src = photoArr[nextPhotoPosition];
    }
}

export function goToPreviousPhoto(){
    let photoPosition = Number(mainImg.dataset.id);
    let arrLength = photoArr.length;
    let prevPhotoPosition;


    if(photoPosition > 0){
        prevPhotoPosition = photoPosition - 1;
        mainImg.dataset.id = String(prevPhotoPosition);
        mainImg.src = photoArr[prevPhotoPosition];
    }
    else if (photoPosition === 0){
        prevPhotoPosition = arrLength-1;
        mainImg.dataset.id = String(prevPhotoPosition);
        mainImg.src = photoArr[prevPhotoPosition];
    }
}