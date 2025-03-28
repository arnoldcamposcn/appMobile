
import React, { JSX } from 'react';
import { Text, useColorScheme, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = {
    title: string;
    children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>
                {title}
            </Text>
            <Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}>
                {children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
});

export default Section;
