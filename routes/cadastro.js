import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button, Icon } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const cadastro = ({navigation}) => {
    return (
  
      <NavigationContainer>
  
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
  
        
      <View style={ {flexDirection:"column", top:"50px"}}>
        <Text style={{textAlign:"center", fontSize:"60px",backgroundColor:"blue"}}> Cadastro </Text>      
      </View>   
   
  
  
      <View style={{top: "80px", width:"200px", borderWidth:"1px", left:"834px"}}> 
  
        <Input placeholder="Nome" style={{width:"10px"}}/>
        <Input placeholder="E-mail" style={{width:"10px"}}/>
        <Input placeholder="Senha" style={{width:"10px"}}/>
      </View>
  
  
      <View style={{flex:1, top:"120px", alignItems:"center"}}> 
    
          <Button title="Cadastrar" style={{ paddingTop: 10, width:"100px" }} />
      </View>
  
  
  
    
  
        </View>
        </NavigationContainer>
  
    ); 
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  export default cadastro;
  