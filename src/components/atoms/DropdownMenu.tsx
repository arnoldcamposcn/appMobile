import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuOptions = [
    { label: 'Planetas', screen: 'Home' },
    { label: 'Películas', screen: 'Peliculas' },
    { label: 'Personajes', screen: 'Personajes' },
];

const DropdownMenu = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation();

    const toggleModal = () => setIsModalVisible(prev => !prev);

    const navigateTo = (screen: string) => {
        setIsModalVisible(false);
        navigation.navigate(screen as never);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={toggleModal}
                style={styles.menuButton}
                accessibilityRole="button"
                accessibilityLabel="Abrir menú"
            >
                <Text style={styles.menuText}>☰</Text>
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                transparent
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={toggleModal}
                    activeOpacity={1}
                />

                <View style={styles.modalContainer}>
                    {menuOptions.map(({ label, screen }) => (
                        <TouchableOpacity
                            key={screen}
                            style={styles.menuItem}
                            onPress={() => navigateTo(screen)}
                            accessibilityRole="menuitem"
                            accessibilityLabel={`Ir a ${label}`}
                        >
                            <Text style={styles.menuItemText}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    menuButton: {
        padding: 10,
    },
    menuText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    menuItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuItemText: {
        fontSize: 18,
        color: '#333',
    },
});

export default DropdownMenu;
