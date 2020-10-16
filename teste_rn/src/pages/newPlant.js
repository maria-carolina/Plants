import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import ImageUpload from './image';

export default class NewPlant extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <Formik
                    initialValues={{
                        name: '',
                        scientific_name: '',

                    }}
                    onSubmit={(values) => {
                        values.name = '',
                        scientific_name = ''
                    }}
                >
                    {({values, handleChange, handleSubmit})=> (
                        <View style={{padding: 20}}>
                            <Text
                                style={{
                                    fontSize: 22,
                                    marginBottom: 20,
                                    alignSelf: 'center'
                                }} 
                            >Nova planta</Text>
                            <Text>Nome:</Text>
                            <TextInput
                                value={values.name}
                                onChangeText={handleChange('name')}
                                style={{
                                    borderBottomWidth: .5,
                                    marginBottom: 20,
                                    padding: 5
                                }}
                            />
                            <Text>Nome Cientifico:</Text>
                            <TextInput
                                value={values.scientific_name}
                                onChangeText={handleChange('scientific_name')}
                                style={{
                                    borderBottomWidth: .5,
                                    marginBottom: 20,
                                    padding: 5
                                }}
                            />
                            <ImageUpload />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#8FBC8F',
                                    elevation: 5,
                                    shadowColor: '#cecece',
                                    borderRadius: 5,
                                    width: 150,
                                    height: 50,
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18
                                    }}
                                >Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                </Formik>
            </View>
        )
    }
}