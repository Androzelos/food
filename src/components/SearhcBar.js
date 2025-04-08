import React, { cloneElement } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#DDDDDD",
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 5,
        padding: 8,
        height: 50,
    },
    inputStyle: {
        fontSize: 15,
        flex: 1
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 5,
        fontSize: 25,
    }
});

export default SearchBar;