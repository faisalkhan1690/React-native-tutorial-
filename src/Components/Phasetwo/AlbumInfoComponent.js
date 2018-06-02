import React, {Component} from 'react';
import Header from '../Phaseone/HeaderComponent'
import {
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import Card from  '../Phaseone/CardComponent'
import CardSection from  '../Phaseone/CardSectionComponent'

class AlbumInfoComponent extends Component {

    state={
        listData:[],
        description:"",
        selectedId:"",
        isExpend:false
    }

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    async componentWillMount(){
        await this.props.libraryListState();
        this.setState({listData:this.props.librariesData.libraries});

    }


     async getAlbumData(item){
         if(this.state.selectedId===item.id && this.state.isExpend){
            this
            this.setState({
                isExpend:false,
                selectedId:"",
                description:""
            })
         }else{
            await this.props.libraryDataState(item.id);
            this.setState({
                isExpend:true,
                selectedId:item.id,
                description:this.props.librariesData.librariesInfo
            });
         }
        
        

    }

    showDescription(id){
        return(
            this.state.selectedId===id?
                this.state.isExpend?
                    <CardSection>
                        <Text style={{flex:1,paddingLeft:15}}>
                            {this.state.description}
                        </Text>
                    </CardSection>
                    :
                    <View/>
            :
            <View/>
        )
    }

    rerderListItem(item){
        return(
            <View>
                <CardSection>
                    <TouchableWithoutFeedback onPress={() => {
                        this.getAlbumData(item);
                    }}>

                        <Text style={styles.titleStyle}>
                            {item.title}
                        </Text>

                    </TouchableWithoutFeedback>
                </CardSection>
                {this.showDescription(item.id)}
            </View>
        );
    }

    render() {
        return ( 
            <View>
                 <FlatList
                    extraData={this.state}
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