import React, { useState, useEffect } from 'react';
import { Text,  FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://bobsburgers-api.herokuapp.com/characters/',
            {
                method: "get",
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            },
        )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);

    return (
        <SafeAreaView>
            <FlatList 
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem= {({item}) => {
                return(
                    <TouchableOpacity onPress={() => { navigation.navigate('Detail', item) }} 
                    style={{ flex:1, height: 188, marginHorizontal: 5, marginBottom: 10, backgroundColor: '#e15f41', borderWidth: 1, borderRadius: 18, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={{ uri: item.image }} style={{ width: 100, height: 100, resizeMode:'contain' }}/>
                    <Text style={{ color: '#fff', textAlign:'center' }}>{item.name}</Text>
                    </TouchableOpacity >
                );
            }}
            />
            
        </SafeAreaView>

    );
}

export default HomeScreen;
