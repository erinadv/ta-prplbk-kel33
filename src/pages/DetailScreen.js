import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';


function DetailScreen({ route, navigation }) {
    /* Get the param */
    const { id, name, image, gender, age, occupation, hairColor, voicedBy } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#fff' }}>

            <Image
                source={{ uri: image }}
                style={{
                    top: 15,
                    width: 200,
                    height: 250,
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: '#e15f41',
                    resizeMode: 'contain',
                }} />
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.txtP}>Name: {name}</Text>
            <Text style={styles.txtP}>Age: {age} <br/>
            Gender: {gender}
            </Text>
            <Text style={styles.txtP}></Text>
            <Text style={styles.txtP}>Occupation: {occupation}</Text>
            <Text style={styles.txtP}>Hair Color: {hairColor}</Text>
            <Text style={styles.txtP}>Voiced: {voicedBy}</Text>
                </View>
            

            <View style={{ margin: 50 }}>
                {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
                <Button title="Go Back" onPress={() => navigation.goBack()} color='#e15f41'/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    txtP: {
        color: '#e15f41',
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
    }
})

export default DetailScreen;