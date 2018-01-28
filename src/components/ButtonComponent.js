import React from "react";
import { TouchableOpacity,Text } from "react-native";

const ButtonComopent = () => {

const {buttonStyle,buttonText}=styles;

return (
    <TouchableOpacity style={buttonStyle}>
        <Text style={buttonText}>click me !!!</Text>
    </TouchableOpacity>
    );
};

const styles = {
  buttonStyle: {
      flex:1,
      alignSelf:'stretch',
      backgournd:'#fff',
      borderRadius:5,
      borderWidth:1,
      borderColor:'#007aff',
      marginLeft:5,
      marginRight:5
  }, 
  buttonText: {
    alignSelf:'center',
    color:'#007aff',
    fontSize:18,
    fontWeight:'600',
    paddingTop:10,
    paddingBottom:10
  }
};

export default ButtonComopent;
