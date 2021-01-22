import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    return <View>
        <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
        <Text style={styles.textStyle}>Heloo guys</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;