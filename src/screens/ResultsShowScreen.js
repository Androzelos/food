import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { API_Search_By_ID } from "../hooks/useResults";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [IDApi ,result, errorMessage] = API_Search_By_ID(id)

    return (
        <View>
            <Text>Results Show</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ResultsShowScreen;