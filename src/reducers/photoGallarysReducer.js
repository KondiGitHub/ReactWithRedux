export default function photoGallaryReducer(state =[], action) {
  switch(action.type) {
    case 'CREATE_PHOTO_GALLARY':
    return [...state, Object.assign({}, action.photoGallarys)];
    case 'NEXT_PHOTO':
    {
       let indexYear = action.year;
       let foundIndex = state.galaries.findIndex(element => element.year === Number(indexYear));
      let index1 = state.galaries[foundIndex].nextIndex+1;
      if(index1>=state.galaries[foundIndex].maxIndex){
        index1 =0;
      }
      if(foundIndex == 0) {
        return {
          galaries :[
            {
              ...state.galaries[foundIndex],
              nextIndex: index1
            },
          ...state.galaries.slice(foundIndex + 1)
          ]
        };
      }else {
        return {
          galaries : [
            ...state.galaries.slice(0, foundIndex), // everything before current post
            {
              ...state.galaries[foundIndex],
              nextIndex: index1
            },
            ...state.galaries.slice(foundIndex + 1) // everything after current post
          ]
        } ;
      }
    }
    case 'PREVIOUS_PHOTO':
    {
      let indexYear = action.year;
      let foundIndex = state.galaries.findIndex(element => element.year === Number(indexYear));
      let index1 = state.galaries[foundIndex].nextIndex-1;
      if(index1<0){
        index1 =0;
      }
      if(foundIndex == 0) {
        return {
          galaries :[
            {
              ...state.galaries[foundIndex],
              nextIndex: index1
            },
            ...state.galaries.slice(foundIndex + 1)
          ]
        };
      }else {
        return {
          galaries : [
            ...state.galaries.slice(0, foundIndex), // everything before current post
            {
              ...state.galaries[foundIndex],
              nextIndex: index1
            },
            ...state.galaries.slice(foundIndex + 1) // everything after current post
          ]
        } ;
      }
    }
    default:
      return state;
  }

}
