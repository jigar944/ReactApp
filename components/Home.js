import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Container, Button,Header,Left,Right,Icon,Body,Title,Tab,Tabs,TabHeading } from 'native-base';
import auth from '@react-native-firebase/auth';
import Userstore from '../android/src/Userstore';

export default class Home extends Component {


  logout = () =>{

          auth()
        .signOut()
        .then(() => {console.log('User signed out!'),
                    Userstore.isLoggedIn = false;

                    });

  }

  render() {

      return (
        <Container>
          <Header style={{backgroundColor:"#254478"}}>
            <Left/>
            <Body >
              <Title >Header</Title>
            </Body>
            <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            </Right>
          </Header>
         
                  <Tabs>
                          <Tab heading={ <TabHeading style={{backgroundColor:"#254478"}}><Icon name="camera" style={{color:"#ffffff"}}/><Text style={{marginLeft:5,color:"#ffffff"}} >Camera</Text></TabHeading>}/>
                          <Tab heading={ <TabHeading style={{backgroundColor:"#254478"}}><Icon name="person" style={{color:"#ffffff"}}/><Text style={{marginLeft:5,color:"#ffffff"}} >Chat</Text></TabHeading>}/>
                          <Tab heading={ <TabHeading style={{backgroundColor:"#254478"}}><Icon name="camera" style={{color:"#ffffff"}}/><Text style={{marginLeft:5,color:"#ffffff"}} >Call</Text></TabHeading>}/>
                  </Tabs>
          
       
                  <View style = {styles.Header}>
                          <Text style = {{fontSize:20,margin:20,color:"#000000"}}>Hello ! Welcome to home page ! {Userstore.username}</Text>
                          <Button block info onPress = {this.logout}>
                                      <Text>Logout</Text>
                          </Button>
                  </View>
          </Container>
      );

  }
}

const styles = StyleSheet.create({
    Header:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:"center",
        margin:5
      },
      Tabs:{
        backfaceVisibility:'visible',
        backgroundColor:"#ffffff"
       
      }
});