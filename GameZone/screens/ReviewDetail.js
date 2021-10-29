import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../components/Card';
import { ratingImages } from '../styles/global';
import Header from '../components/Header';

const ReviewDetail = ({ route, navigation }) => {
    const { title, body, rating } = route.params;

    const onBackPressed = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={[globalStyles.container, styles.container]}>
            <Header
                title='Review Detail'
                navigation={navigation}
                showBackButton={true}
                onBackPressed={onBackPressed} />
            <View style={styles.card}>
                <Card>
                    <Text style={globalStyles.boldText}>{title}</Text>
                    <Text style={globalStyles.normalText}>{body}</Text>
                    <View style={styles.rating}>
                        <Text style={globalStyles.normalText}>GameZone Rating:</Text>
                        <Image source={ratingImages.ratings[rating]} />
                    </View>

                    {/* <Button
                    title='Change'
                    onPress={() => navigation.setOptions({ title: 'Hello' })} /> */}
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    card: {
        paddingVertical: 8,
        marginHorizontal: 4
    },
    rating: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#eee',
        borderTopWidth: 1,
        marginTop: 12
    }
})

export default ReviewDetail;