import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { People } from '../../types/people';
import { translate } from '../../locales/functions'; 

interface Props {
    people: People;
}

const ListPeople: FC<Props> = ({ people }) => {
    const { colors } = useTheme();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'DetallesPersonaje'>>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetallesPersonaje', { people })}>
            <View style={styles(colors).card}>
                <Text style={styles(colors).title}>{translate('people', 'name')}: {people.name}</Text>
                <Text style={styles(colors).text}>📏{translate('people', 'height')}: {people.height} cm</Text>
                <Text style={styles(colors).text}>⚖️{translate('people', 'mass')}: {people.mass} kg</Text>
                <Text style={styles(colors).text}>💇‍♂️{translate('people', 'hair_color')}: {people.hair_color}</Text>
                <Text style={styles(colors).text}>🚻{translate('people', 'gender')}: {people.gender}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = (colors: any) =>
    StyleSheet.create({
        card: {
            backgroundColor: colors.card,
            padding: 16,
            marginVertical: 8,
            borderRadius: 10,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 2 },
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.title,
            marginBottom: 8,
        },
        text: {
            fontSize: 14,
            color: colors.text,
            marginBottom: 4,
        },
    });

export default ListPeople;