import {photoArr} from "./photoArr";
import {mainImg, pagnationContainer} from "./domElements";



export function goToNextPhoto(){
    let nextPhotoPosition;
    let photoPositionStrValue = mainImg.dataset.id;
    let photoPosition = Number(photoPositionStrValue);
    let arrLength = photoArr.length;


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
    resetActivePagElement();
    selectMatchingPagElement();
}

export function goToPreviousPhoto(){
    let prevPhotoPosition;
    let photoPositionStrValue = mainImg.dataset.id;
    let photoPosition = Number(photoPositionStrValue);
    let arrLength = photoArr.length;


    if(photoPosition > 0){
        prevPhotoPosition = photoPosition - 1;
        mainImg.dataset.id = String(prevPhotoPosition);
        mainImg.src = photoArr[prevPhotoPosition];
    }
    else if (Number(mainImg.dataset.id) === 0){
        prevPhotoPosition = arrLength-1;
        mainImg.dataset.id = String(prevPhotoPosition);
        mainImg.src = photoArr[prevPhotoPosition];
    }
    resetActivePagElement();
    selectMatchingPagElement();
}

export function createPagnationCircles(){
    photoArr.forEach((photo, i)=>{
        let pagElement = document.createElement('div')
        pagElement.dataset.id = i
        pagElement.classList.add('pagIcon');
        if(mainImg.dataset.id === pagElement.dataset.id){
            pagElement.classList.add('selectedPhoto');
        }
        pagnationContainer.append(pagElement);
    });
}


function resetActivePagElement(){
    document.querySelector('.selectedPhoto').classList.remove('selectedPhoto');
}
function selectMatchingPagElement(){

    Array.from(document.querySelectorAll('.pagIcon')).map(pagElement => {
        if(mainImg.dataset.id === pagElement.dataset.id){
            pagElement.classList.add('selectedPhoto');
        }
    })
}