import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.rating}>{result.rating} Stars {result.review_count} Review</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 14,
        marginBottom: 20,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    rating: {
        fontSize: 14,
        color: '#888',
    },
})

export default ResultsDetail;