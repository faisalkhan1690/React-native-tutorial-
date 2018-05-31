import { LIBRARY_FETCH } from './Constants';
import data from '../LibraryList.json'

export const libraryState = () => (dispatch: any) => {
    dispatch({
      type: LIBRARY_FETCH,
      listData: data
    })
}
