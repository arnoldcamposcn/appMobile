
import React, {JSX} from 'react';
import {StatusBar, useColorScheme, View, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = {
    children: React.ReactNode;
};

const MainTemplate = ({children}: Props): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
    const safePadding = '5%';

    return (
        <View style={{backgroundColor}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundColor}
            />
            <ScrollView style={{backgroundColor}}>
                <View style={{paddingRight: safePadding}}>
                </View>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                        paddingHorizontal: safePadding,
                        paddingBottom: safePadding,
                    }}>
                    {children}
                </View>
            </ScrollView>
        </View>
    );
};

export default MainTemplate;
