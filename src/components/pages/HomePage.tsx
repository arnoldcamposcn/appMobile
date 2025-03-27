// src/pages/Home.tsx
import React, { JSX, useEffect } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';
import { getPlanet } from '../../services/swapiService.js';
import PlanetTable from '../organisms/PlanetTable.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks.ts';

const Home = (): JSX.Element => {

    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.planet);

    useEffect(() => {
        dispatch(getPlanet());
    }, [dispatch]);
    if (loading) { return <ActivityIndicator size="large" color="#00f" />; }
    if (error) { return <Text>Error: {error}</Text>; }

    return (

        <View>
            <PlanetTable planets={data || []} />
        </View>
    );

};

export default Home;
