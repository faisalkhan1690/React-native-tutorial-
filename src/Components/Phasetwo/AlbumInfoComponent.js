import React, {Component} from 'react';
import Header from '../Phaseone/HeaderComponent'
import {View,Text,FlatList,TouchableWithoutFeedback} from 'react-native';
import Card from  '../Phaseone/CardComponent'
import CardSection from  '../Phaseone/CardSectionComponent'

class AlbumInfoComponent extends Component {

    state={listData:[]}

    async componentWillMount(){
        await this.props.libraryListState();
        this.setState({listData:this.props.librariesData.libraries});

    }


     async getAlbumData(item){
        console.warn(item.id)
        await this.props.libraryDataState(item.id);
        alert(this.props.librariesData.librariesInfo);

    }

    rerderListItem(item){
        
        return(
            <CardSection>
            <TouchableWithoutFeedback onPress={()=>{
               this.getAlbumData(item);
            }}>
            
                <Text style={styles.titleStyle}>
                    {item.title}
                </Text>
        </TouchableWithoutFeedback>
        </CardSection>
        );
    }

    render() {
        return ( 
            <View>
                 <FlatList
                    data={this.state.listData}
                    renderItem={({item})=>this.rerderListItem(item)}
                />
            </View>
        );

    }
}

const styles={
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
}

export default AlbumInfoComponent;