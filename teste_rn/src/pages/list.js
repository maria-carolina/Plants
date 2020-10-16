import React, { Component } from 'react';
import api from '../services/api'

import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class List extends Component{
    state = {
        plants: null
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = async () => {
       try{
            var response = await api.get('/plant');
            
        }catch(error){
            console.log(error);
        }
        
        
        this.setState({
            plants: response.data
        })
    }
    
    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#90EE90'
            }}>
                <FlatList
                    data={this.state.plants}
                    renderItem={({item}) => (
                        <View style={{
                            height: 150,
                            borderWidth: 0.5,
                            borderRadius: 5,
                            borderColor: '#8FBC8F',
                            margin: 10,
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            alignItems: 'center'

                        }}>
                            <Image
                                source={require('../img/plant-avatar.png')}
                                style={{
                                    resizeMode: 'stretch',
                                    width: 150,
                                    height: 100,
                                }}
                            />
                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                            <Text style={{
                                fontFamily: 'roboto',
                                fontWeight: 'bold',
                                fontSize: 22,
                                margin: 5
                            }}>
                                {item.name}
                            </Text> 
                            <Text style={{
                                fontFamily: 'roboto',
                                fontSize: 16,
                                color: '#999',
                                margin: 5
                            }}>
                                {item.scientific_name}
                            </Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}