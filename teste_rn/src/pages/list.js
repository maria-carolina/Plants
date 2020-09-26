import React, { Component } from 'react';

import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const DATA = ['um', 'dois', 'três']

export default class List extends Component{
    
    render(){
        return(
            <View style={style.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => (
                        <Text>
                            {item}
                        </Text> 
                    )}
                />
            </View>
        );
    }
}