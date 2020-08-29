import React, { Component } from 'react';
import {View,Image,FlatList} from 'react-native';

class ImageMeme extends Component{

    render(){
        return(
            <View style={{backgroundColor:"#000000"}}>
            <FlatList 
                    data={this.props.URL}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                        <Image style={{ justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 400,
                                    margin:20}}
                                    source={{ uri: item }} />
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                />
                </View>
        )
    }


}

export default ImageMeme;