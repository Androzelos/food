import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result)

    // İşte buna kaza derim
    //Seni canlı canlı yuat
    // vaafsgvdufhıbasnojfsaşfi

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={
                    Array.isArray(result.image_url) 
                        ? result.image_url 
                        : [result.image_url]
                }
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={{ height: 200, width: 300 }} source={{ uri: item }} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ResultsShowScreen;