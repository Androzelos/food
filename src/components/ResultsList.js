import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";
import Entypo from '@expo/vector-icons/Entypo';
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
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
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
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

export default withNavigation(ResultsList);