export function createPhotoGallary(photoGallarys) {

  return {
    type: 'CREATE_PHOTO_GALLARY',
    photoGallarys
  };

}

export function nextPhoto(year) {

  return {
    type: 'NEXT_PHOTO',
      year
  };

}

export function previousPhoto(year) {

  return {
    type: 'PREVIOUS_PHOTO',
    year
  };

}
