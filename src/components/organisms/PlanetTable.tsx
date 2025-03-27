import React from 'react';
import { translate } from '../../locales/functions'; 
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    useColorScheme,
} from 'react-native';


interface Planet {
    name: string;
    climate: string;
    population: string;
    terrain: string;
}

interface Props {
    planets: Planet[];
}

const PlanetTable = ({ planets }: Props) => {
    const isDarkMode = useColorScheme() === 'dark';

    const styles = getStyles(isDarkMode);

    const renderItem = ({ item }: { item: Planet }) => (
        <View style={styles.row}>
            {/* <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.climate}</Text>
            <Text style={styles.cell}>{item.population}</Text>
            <Text style={styles.cell}>{item.terrain}</Text> */}
            <Text style={styles.cell}>{translate('planet', 'name')}: {item.name}</Text>
            <Text style={styles.cell}>{translate('planet', 'climate')}: {item.climate}</Text>
            <Text style={styles.cell}>{translate('planet', 'population')}: {item.population}</Text>
            <Text style={styles.cell}>{translate('planet', 'terrain')}: {item.terrain}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.header]}>
                <Text style={[styles.cell, styles.headerText]}>Nombre</Text>
                <Text style={[styles.cell, styles.headerText]}>Clima</Text>
                <Text style={[styles.cell, styles.headerText]}>Población</Text>
                <Text style={[styles.cell, styles.headerText]}>Terreno</Text>
            </View>
            <FlatList
                data={planets}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
            />
        </View>
    );
};

const getStyles = (isDarkMode: boolean) =>
    StyleSheet.create({
        container: {
            backgroundColor: isDarkMode ? '#121212' : '#ffffff',
            padding: 8,
            borderRadius: 10,
        },
        row: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: isDarkMode ? '#333' : '#ccc',
            paddingVertical: 8,
        },
        header: {
            backgroundColor: isDarkMode ? '#1e1e1e' : '#f0f0f0',
        },
        headerText: {
            fontWeight: 'bold',
            color: isDarkMode ? '#fff' : '#000',
        },
        cell: {
            flex: 1,
            textAlign: 'center',
            color: isDarkMode ? '#ddd' : '#222',
        },
    });

export default PlanetTable;


