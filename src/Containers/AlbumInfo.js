import { connect } from 'react-redux';
import AlbumInfoComponent from '../Components/Phasetwo/AlbumInfoComponent'
import { libraryListState, libraryDataState} from '../Services/Phasetwo/LibraryAction';
 

const mapStateToProps = (state) => ({
     librariesData : state.librariesReducer
});

const mapDispatchToProps = (dispatch) => ({ 
  libraryListState: () => dispatch(libraryListState()),
  libraryDataState: (id) => dispatch(libraryDataState(id))
});

const AlbumInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumInfoComponent);

export default AlbumInfo;  