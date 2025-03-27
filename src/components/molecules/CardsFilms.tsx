import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Film } from '../../types/film';
import { translate } from '../../locales/functions';

interface Props {
    film: Film;
}

const CardsFilms = ({ film }: Props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const styles = getStyles(isDarkMode);

    return (
        <View style={styles.card}>
           <Text style={styles.title}>{translate('film', 'title')}: {film.title}</Text>
            <Text style={styles.text}>🎬 {translate('film', 'episode_id')}: {film.episode_id}</Text>
            <Text style={styles.text}>🎥 {translate('film', 'director')}: {film.director}</Text>
            <Text style={styles.text}>👤 {translate('film', 'producer')}: {film.producer}</Text>
            <Text style={styles.text}>📅 {translate('film', 'release_date')}: {film.release_date}</Text>
        </View>
    );
};

const getStyles = (isDarkMode: boolean) =>
    StyleSheet.create({
        card: {
            backgroundColor: isDarkMode ? '#1e1e1e' : '#f9f9f9',
            padding: 16,
            marginVertical: 8,
            borderRadius: 10,
            shadowColor: isDarkMode ? '#000' : '#ccc',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            color: isDarkMode ? '#fff' : '#000',
            marginBottom: 8,
        },
        text: {
            fontSize: 14,
            color: isDarkMode ? '#ddd' : '#333',
            marginBottom: 4,
        },
    });

export default CardsFilms;