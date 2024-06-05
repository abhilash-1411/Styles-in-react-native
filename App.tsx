
import React from 'react';
import Exstyles from './style'

import {StyleSheet, Text, View,
} from 'react-native';
const App=()=>{
  return (
    <View>
    
      <Text style={{fontSize:30,backgroundColor:'green',margin:4}}>Style in React-Native</Text>
      <Text style={styles.textBox}>Style in React-Native</Text>
      <Text style={styles.textBox}>Style in React-Native</Text>
      <Text style={Exstyles.textBox}> External Style in React-Native</Text>
      <Text style={[styles.textBox,Exstyles.textBox,{marginTop:10,height:100}]}> External,Internal,Inline Style in React-Native</Text>
    </View>
      );
   
       
}
const styles=StyleSheet.create({
  textBox:{
    color:'red',
    backgroundColor:'blue',
    fontSize:30,
    marginBottom:10,
    padding:5,
    borderRadius:10,
    height:60,
    textAlignVertical:'center',
    textAlign:'center',
    borderWidth:2,
    borderColor:'red'


  }
})
 
export default App;
