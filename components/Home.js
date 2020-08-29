import React, { Component } from 'react';
import {Text,StyleSheet} from 'react-native';
import {Container, Button,Header,Left,Right,Icon,Body,Title,Tab,Tabs,TabHeading } from 'native-base';
import auth from '@react-native-firebase/auth';
import Userstore from '../android/src/Userstore';
import Person from './Tabs/person';

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
                          <Tab heading={ <TabHeading style={{backgroundColor:"#254478"}}><Icon name="person" style={{color:"#ffffff"}}/><Text style={{marginLeft:5,color:"#ffffff"}} >Chat</Text></TabHeading>}>
                              <Person/>
                          </Tab>
                          <Tab heading={ <TabHeading style={{backgroundColor:"#254478"}}><Icon name="camera" style={{color:"#ffffff"}}/><Text style={{marginLeft:5,color:"#ffffff"}} >Call</Text></TabHeading>}/>
                  </Tabs>
          
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
        backgroundColor:"#ffffff",
       
      }
});