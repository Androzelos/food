import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";
import Entypo from '@expo/vector-icons/Entypo';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                removeClippedSubviews={true}
                ListEmptyComponent={() => {
                    return (
                        <View style={styles.noResult}>
                            <Entypo name="emoji-sad" size={40} color="gray" />
                            <Text>No results found</Text>
                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    noResult: {
        // Oturumu
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: 150,
        // Teması
        borderRadius: 5,
        backgroundColor: '#DDD',
        // Mesafesi
        marginBottom: 5,
        marginLeft: 14,
        padding: 10,
        // Gölgesi
        // shadowColor: '#000',
        // shadowOffset: { width: -1, height: 0 },
        // shadowOpacity: 0.3,
        // shadowRadius:  4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    }
})

export default ResultsList;