import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewItem = ({ item, onReviewClicked }) => {
    return (
        <TouchableOpacity onPress={() => onReviewClicked(item)}>
            <Text style={globalStyles.boldText}>{item.title}</Text>
        </TouchableOpacity>
    );
}

const Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Fresh Air!', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta catch them all!', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not so Fantasy!', rating: 3, body: 'lorem ipsum', key: '3' },
    ])

    const onReviewClicked = (item) => {
        navigation.navigate('ReviewDetail', item);
    }

    return (
        <View style={globalStyles.container}>
            <View style={styles.list}>
                <FlatList
                    data={reviews}
                    renderItem={({ item }) => {
                        return (
                            <ReviewItem item={item} onReviewClicked={onReviewClicked} />
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'red'
    }
})

export default Home;