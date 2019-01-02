export default function photoGallaryReducer(state =[], action) {
  switch(action.type) {
    case 'CREATE_PHOTO_GALLARY':
     /* state.push(action.photoGallary);
      return state;*/
      return [...state, Object.assign({}, action.photoGallarys)];

    default:
      return state;
  }

}
