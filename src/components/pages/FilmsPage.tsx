import React, { JSX, useEffect } from 'react';
import { getFilm } from '../../services/swapiService.js';
import CardsFilms from '../molecules/CardsFilms.tsx';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks.ts';

const Films = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const { films, loading, error } = useAppSelector(state => state.planet);

    useEffect(() => {
        dispatch(getFilm());
    }, [dispatch]);
    if (loading) { return <ActivityIndicator size="large" color="#00f" />; }
    if (error) { return <Text>Error: {error}</Text>; }

    return (
        <View>
            <FlatList
                data={films}
                renderItem={({ item }) => <CardsFilms film={item} />}
            />
        </View>
    );
};

export default Films;