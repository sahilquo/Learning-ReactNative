import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from '../components/Card';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';
import ReviewForm from './ReviewForm';

const ReviewItem = ({ item, onReviewClicked }) => {
    return (
        <TouchableOpacity onPress={() => onReviewClicked(item)}>
            <Card>
                <Text style={globalStyles.boldText}>{item.title}</Text>
            </Card>
        </TouchableOpacity>
    );
}

const Home = ({ navigation }) => {
    const [openModal, setOpenModal] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Fresh Air!', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta catch them all!', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not so Fantasy!', rating: 3, body: 'lorem ipsum', key: '3' },
    ])

    const onReviewClicked = (item) => {
        navigation.navigate('ReviewDetail', item);
    }

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currenReviews) => {
            return [...currenReviews, review];
        });

        setOpenModal(false);
    }

    return (
        <View style={[globalStyles.container, styles.container]}>
            <Header
                title='GameZone'
                navigation={navigation}
                showDrawerIcon={true} />

            <Modal
                visible={openModal}
                animationType='slide'>
                <View style={{ padding: 12 }}>
                    <View style={styles.modalToolbar}>
                        <Text style={[globalStyles.boldText, styles.title]}>
                            Add Review
                        </Text>
                        <Icon
                            name='close'
                            size={24}
                            style={styles.close}
                            onPress={() => setOpenModal(false)} />
                    </View>
                    <ReviewForm addReview={addReview} />
                </View>
            </Modal>

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
            <Icon
                name='add'
                size={28}
                color='#fff'
                style={styles.add}
                onPress={() => {
                    setOpenModal(true);
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    list: {
        paddingTop: 8,
        flex: 1
    },
    add: {
        backgroundColor: 'red',
        width: 60,
        height: 60,
        alignSelf: 'flex-end',
        marginEnd: 16,
        marginBottom: 16,
        borderRadius: 30,
        elevation: 8,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        flex: 1
    },
    modalToolbar: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8,
        marginBottom: 8
    },

    close: {

    }
})

export default Home;