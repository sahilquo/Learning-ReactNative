import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import { globalStyles } from '../styles/global';

const movieUrl = 'https://reactnative.dev/movies.json';

const MovieList = () => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(movieUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setTitle(json.title);
                setDescription(json.description);
                setData(json.movies)
            })
            .catch((error) => {
                alert(error)
            });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={[globalStyles.boldText, styles.title]}>{title}</Text>
            <View style={styles.list}>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => {
                        return (
                            <Card>
                                <Text style={styles.item}>{item.releaseYear} - {item.title}</Text>
                            </Card>
                        );
                    }}
                />
            </View>
            <Text style={[globalStyles.normalText, styles.description]}>{description}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        padding: 12,
        color: 'red',
    },
    item: {
        fontSize: 18,
        color: 'black'
    },
    description: {
        alignSelf: 'center',
        padding: 8,
        color: 'green'
    }
});

export default MovieList;