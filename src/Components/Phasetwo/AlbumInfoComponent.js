import React, {Component} from 'react';
import Header from '../Phaseone/HeaderComponent'
import {View,Text,FlatList,TouchableWithoutFeedback} from 'react-native';
import Card from  '../Phaseone/CardComponent'
import CardSection from  '../Phaseone/CardSectionComponent'

class AlbumInfoComponent extends Component {

    state={listData:[]}

    async componentWillMount(){
        await this.props.libraryState();
        console.warn(this.props);
        this.setState({listData:this.props.librariesData.libraries});

    }


    rerderListItem(item){
        
        return(
            <TouchableWithoutFeedback onPress={()=>{
                alert("Id:"+item.id); 
            }}>
            <CardSection>
                <Text style={styles.titleStyle}>
                    {item.title}
                </Text>
            </CardSection>
        </TouchableWithoutFeedback>
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