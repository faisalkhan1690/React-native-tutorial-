import { connect } from 'react-redux';
import AlbumInfoComponent from '../Components/Phasetwo/AlbumInfoComponent'
import { libraryState } from '../Services/Phasetwo/LibraryAction';
 

const mapStateToProps = (state) => ({
     librariesData : state.librariesReducer
});

const mapDispatchToProps = (dispatch) => ({ 
      libraryState: () => dispatch(libraryState())
});

const AlbumInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumInfoComponent);

export default AlbumInfo;  