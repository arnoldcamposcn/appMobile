import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { People } from '../../types/people';
import { translate } from '../../locales/functions'; 

type RootStackParamList = {
    DetallesPersonaje: { people: People };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'DetallesPersonaje'>;

const TemplatePeoples = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const styles = getStyles(isDarkMode);
    const route = useRoute<DetailsScreenRouteProp>(); 
    const { people } = route.params;

    return (
        <View style={styles.container}>
              <Text style={styles.title}>{people.name}</Text>
                <Text style={styles.text}>📏 {translate('people', 'height')}: {people.height} cm</Text>
                <Text style={styles.text}>⚖️ {translate('people', 'mass')}: {people.mass} kg</Text>
                <Text style={styles.text}>💇‍♂️ {translate('people', 'hair_color')}: {people.hair_color}</Text>
                <Text style={styles.text}>🖐️ {translate('people', 'skin_color')}: {people.skin_color}</Text>
                <Text style={styles.text}>👀 {translate('people', 'eye_color')}: {people.eye_color}</Text>
                <Text style={styles.text}>🎂 {translate('people', 'birth_year')}: {people.birth_year}</Text>
                <Text style={styles.text}>🚻 {translate('people', 'gender')}: {people.gender}</Text>
        </View>
    );
};

const getStyles = (isDarkMode: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
            padding: 20,
            justifyContent: 'center',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: isDarkMode ? '#fff' : '#000',
            marginBottom: 10,
        },
        text: {
            fontSize: 16,
            color: isDarkMode ? '#ddd' : '#333',
            marginBottom: 5,
        },
    });

export default TemplatePeoples;
