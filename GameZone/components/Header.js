import React from 'react';
import { Button, StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { globalStyles } from '../styles/global';
import { getHeaderTitle } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react';

const Header = ({ navigation, title, showDrawerIcon, showBackButton, onBackPressed }) => {
    useEffect(() => {
        navigation.setOptions({
            swipeEnabled: showDrawerIcon
        });
    }, []);

    return (
        <ImageBackground
            source={require('../assets/images/game_bg.png')}
            style={styles.container}>
            {showDrawerIcon ? <Icon size={24} color="black" name="menu"
                onPress={() => {
                    navigation.openDrawer();
                }} />
                : null}
            {showBackButton ? <Icon size={24} color="black" name="arrow-back"
                onPress={() => {
                    onBackPressed();
                }} /> : null}
            <View style={styles.content}>
                <Image
                    source={require('../assets/images/heart_logo.png')}
                    style={styles.icon} />
                <Text
                    style={[globalStyles.boldText, styles.title]}
                >
                    {title}
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#333'
    },
    icon: {
        width: 24,
        height: 24,
        marginEnd: 8
    }
});

export default Header;