import React, { JSX } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import ListPeople from '../organisms/ListPeople.tsx';
import Search from '../organisms/Search.tsx';
import { usePeople } from '../../hooks/usePeople.ts';

const PeoplePage = (): JSX.Element => {
    const { searchTerm, setSearchTerm, filteredPeople, loading, error } = usePeople();

    if (loading) return <ActivityIndicator size="large" color="#00f" />;
    if (error) return <Text>Error: {error}</Text>;

    return (
        <View>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {filteredPeople.length === 0 ? (
                <Text style={styles.noResults}>Resultado no encontrado</Text>
            ) : (
                <FlatList
                    data={filteredPeople}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => <ListPeople people={item} />}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    noResults: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
});

export default PeoplePage;
