import AlbumInfoComponent from '../../Components/Phasetwo/AlbumInfoComponent';
import { libraryState } from '../Phasetwo/LibraryAction';
import {LIBRARY_FETCH, LIBRARY_LIST_FETCH, LIBRARY_INFO_FETCH} from '../Phasetwo/Constants';


const initialState = {
  libraries: []
}

export default function LibraryListReducer(state=initialState, action) {
    switch (action.type) {
      case LIBRARY_LIST_FETCH:
        return {
          ...state,
          libraries: action.listData,
  
        }
      case LIBRARY_INFO_FETCH:
        return {
          ...state,
          librariesInfo: action.listInfoData,

        }
      default:
        return state
    }
} 