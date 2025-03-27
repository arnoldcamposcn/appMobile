import React from 'react';
import {
    TextInput,
    StyleSheet,
    View
} from 'react-native';

interface Props {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    placeholder?: string;
}

const Search = ({ searchTerm, setSearchTerm, placeholder = 'Buscar personaje...' }: Props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#888"
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 14,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
});

export default Search;