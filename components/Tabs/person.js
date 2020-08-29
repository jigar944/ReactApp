import React, { Component } from 'react';
import {View,FlatList,Image, ImageComponent} from 'react-native';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import ImageMeme from './ImageMeme';
export default class person extends Component{



    state = {
        data: [],
        Location:[],
        URL:[]
    }
 

    async componentDidMount(){
      this.getDATA();

    }

    async getDownloadURL(L){
        console.log(L);
        const url = await storage()
                        .ref(L)
                        .getDownloadURL();   
        var t = this.state.URL.concat(url);
        this.setState({URL:t});
      

    }

    async getDATA(){
                database()
                .ref('/Data')
                .once('value')
                .then(snapshot => {
                    this.setState({data:snapshot.val()});
                    const list = this.state.data;
                    list.splice(null, 1);
                    this.setState({data:list});
                    const Loc = this.state.data.map((imgURL => imgURL.image))
                    this.setState({Location:Loc});

                    Loc.map((Location =>{
                        this.getDownloadURL(Location);
                       
                    }));

                   

                       


  });
    }
  
   
    render() {
        console.log(this.state.URL);
        
        return (
            <View>
                <ImageMeme URL = {this.state.URL}/>
            </View>
        );
       
    }
}

