import AlbumInfoComponent from '../../Components/Phasetwo/AlbumInfoComponent';
import { libraryState } from '../Phasetwo/LibraryAction';
import {LIBRARY_FETCH} from '../Phasetwo/Constants';


const initialState = {
  libraries: []
}

export default function LibraryReducer(state=initialState, action) {
    switch (action.type) {
      case LIBRARY_FETCH:
        return {
          ...state,
          libraries: action.listData,
  
        }
       default:
        return state
    }
}  