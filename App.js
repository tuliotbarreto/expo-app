/* import { StatusBar } from 'expo-status-bar';
import react from "react";
import { StyleSheet, Text, View } from 'react-native';*/ 


/* import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button, Icon } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
*/ 
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cadastro from './routes/cadastro';


const indexScreen = ({navigation}) => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>


    <View style={ {flexDirection:"column", top:"50px"}}>
      <Text style={{textAlign:"center", fontSize:"60px",backgroundColor:"blue"}}> Login</Text>      
    </View>   
 


    <View style={{top: "80px", width:"200px", borderWidth:"1px", left:"834px"}}> 

      <Input placeholder="Login" style={{width:"10px"}}/>
      <Input placeholder="Senha" style={{width:"10px"}}/>
    </View>


    <View style={{flex:1, top:"120px", alignItems:"center"}}> 
      <Button title="Logar" style={{ paddingTop: 10, width:"100px" }} />
        <Button  onPress={()=>navigation.navigate('Cadastrow')} title="Cadastrar" style={{ paddingTop: 10, width:"100px" }} />
    </View>

    </View>
 

  );  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});



function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={indexScreen} />
<Stack.Screen name="Cadastrow" component={cadastro} />
</Stack.Navigator>
</NavigationContainer>
);
}




export default App;
