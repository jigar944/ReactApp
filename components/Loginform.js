import React, { Component } from 'react';
import {View,StyleSheet,StatusBar,Image} from 'react-native';
import { Button, Item, Input,Text, Label,Icon } from 'native-base';
import auth from '@react-native-firebase/auth';
import Userstore from '../android/src/Userstore';



export default class Loginform extends Component {


        state = {
            username:'',
            password:'',
            error:'Login Failed'

        }

      

        signup = () => {

                  auth()
                  .signInWithEmailAndPassword(this.state.username,this.state.password)
                  .then(() => {
                    console.log('User account created & signed in!');
                    Userstore.username = this.state.username;
                    Userstore.isLoggedIn =true;
                  
                    
                  })
                  .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                      console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                      console.log('That email address is invalid!');
                    }

                    console.error(error);
                  });

        }

    render() {
      return (
                <View style = {styles.Header}>
                    <View style = {styles.Container}>
                                <Image style={{width:100,height:100}}
                                    source = {require('../android/Image/bg.jpg')}/> 
                    </View>
                    <View style = {styles.Form}>
                        <Item floatingLabel last style = {styles.Item}>
                            <Label style={{color:'#ffffff', marginBottom:20}}>Username</Label>
                            <Input onChangeText={username => this.setState({username:username})}/>
                        </Item>
                        <Item floatingLabel last style = {styles.Item}>
                            <Label style={{color:'#ffffff'}}>Password</Label>
                            <Input secureTextEntry={true} onChangeText={password => this.setState({password:password})}/>
                        </Item>
                        <Button block info style={styles.Button} onPress = {this.signup}>
                            <Text>Login</Text>
                        </Button>
                       
                    </View>
                    <View style={styles.footer}>
                            <Text>Don't have an account yet ?</Text>
                            <Text style={{marginLeft:10, fontWeight:'bold',fontSize:15}}>Sign in</Text>
                    </View>
                </View>

        );
        }
}

const styles = StyleSheet.create({
    Container:{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent:"center",
      color: '#ffffff',
      marginBottom:10
  
  
    },
    Form:{
      flex:2,
      justifyContent:"flex-start",
      margin:15
  
    
    },
    Header:{
        marginTop:10,
        flex:1,
        backgroundColor:'#12515E'
      },
    Item:{
      padding:10,
      marginTop:10
    },
    Button:{
      marginTop:20,
    
    },
    footer:{
      flex:1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"flex-end",
      marginBottom:20

    }
  
  });