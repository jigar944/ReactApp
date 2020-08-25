import React, { Component } from 'react';
import {View,StyleSheet,StatusBar,Image} from 'react-native';
import Loginform from './components/Loginform';
import {observer}     from 'mobx-react'
import Home from './components/Home';
import UserStore from './android/src/Userstore';
class App extends Component {



  render() {


    if(UserStore.isLoggedIn){
    
      return(  <View style = {styles.Header}>
        <StatusBar
            backgroundColor="#1c313a"
            barStyle = "light-content"
            />
             <Home/>
      </View>);
    
    }
    else{
      return(  <View style = {styles.Header}>
        <StatusBar
            backgroundColor="#1c313a"
            barStyle = "light-content"
            />
             <Loginform/>
      </View>);
    
    }
  }
}
export default observer(App);
const styles = StyleSheet.create({
  Container:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent:"center",
    color: '#ffffff',
    marginBottom:10


  },
  Header:{
    flex:1,
    backgroundColor:'#12515E'
  },
  Form:{
    flex:2,
    justifyContent:"flex-start",

  
  },
  Item:{
    padding:10,
    marginTop:10
  },
  Button:{
    marginTop:20
  },
  footer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center"
  }

});