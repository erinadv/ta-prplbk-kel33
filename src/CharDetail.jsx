import React from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
import App from './App';

const DetailScreen = ({ route, navigation }) => {
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
        }}
      />
      <View style={{ alignItems: 'flex-start' }}>
        <Text style={styles.txtP}>Name: {name}</Text>
        <Text style={styles.txtP}>Age: {age}</Text>
        <Text style={styles.txtP}>Gender: {gender}</Text>
        <Text style={styles.txtP}>Occupation: {occupation}</Text>
        <Text style={styles.txtP}>Hair Color: {hairColor}</Text>
        <Text style={styles.txtP}>Voiced: {voicedBy}</Text>
      </View>

      <Button
              style={{
                backgroundColor: "rgb(8, 236, 38)",
                borderRadius: "10px",
                fontSize: "20px",
                color: "black",
              }}
              onClick={App}
            >
              Back
            </Button>
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