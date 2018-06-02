import { LIBRARY_FETCH, LIBRARY_INFO_FETCH, LIBRARY_LIST_FETCH } from './Constants';
import data from '../LibraryList.json'
import dataInfo from '../LibraryData.json'

export const libraryListState = () => (dispatch: any) => {
    dispatch({
      type: LIBRARY_LIST_FETCH,
      listData: data
    })
}

export const libraryDataState = (id) => (dispatch: any) => {

  var albumData="hello";

  for (var i in dataInfo){
  
    if(dataInfo[i].id===id){
      console.warn("info1",dataInfo[i].description)
      albumData=dataInfo[i].description;
      break;
    }
  }

  dispatch({
    type: LIBRARY_INFO_FETCH,
    listInfoData: albumData
  })
}
