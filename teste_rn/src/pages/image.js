import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker'
function ImageUpload(){
    const [avatar, setAvatar] = useState();
    return(
        <View style={{
            flexDirection: 'row',
            padding: 5,
            marginBottom: 10
        }}>
            <Image 
                source={avatar ? avatar : require('../img/plant-avatar.png')} style={{
                    width: 200, 
                    height: 200, 
                    margin: 5,
                    borderRadius: 100
                }}
            />
            <TouchableOpacity
                style={{
                    padding: 5,
                    borderWidth: 1,
                    borderRadius: 5,
                    height: 50,
                    width: 100,
                    alignSelf: 'center',
                    marginLeft: 5
                }}
                onPress={() => ImagePicker.launchCamera({title:'Selecione uma imagem',
                storageOptions:{
                    skipBackup: true,
                    path: 'images'
                }}, 
                (response)=>{
                    if(response.didCancel) return;
                    if(response.error) return;

                    const source = {uri: response.uri}

                    setAvatar(source);
                })}
            >
                <Text>Adicione uma imagem</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ImageUpload;