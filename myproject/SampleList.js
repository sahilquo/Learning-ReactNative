import React from "react";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SampleList = () => {

    const [people, setPeople] = useState([
        { name: 'Sahil', id: '1' },
        { name: 'Paras', id: '2' },
        { name: 'Kunal', id: '3' },
        { name: 'Abhi', id: '4' },
        { name: 'Nipun', id: '5' },
        { name: 'Gaurav', id: '6' },
        { name: 'Rahul', id: '7' },
        { name: 'Kapil', id: '8' },
    ]);

    const pressHandler = (item) => {
        console.log(`Pressed ${item.name}`);
        setPeople((oldList) => {
            return oldList.filter((oldItem) => oldItem.id != item.id);
        })
    };

    return (
        <View style={styles.container}>

            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* {<ScrollView>
                {
                    people.map(item =>
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                }
            </ScrollView>} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    item: {
        flex: 1,
        padding: 20,
        backgroundColor: 'pink',
        margin: 20,
        fontSize: 28,
        textAlign: 'center'
    }
})

export default SampleList;