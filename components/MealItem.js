import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style = {styles.mealItem}>
            <TouchableOpacity 
                onPress = {props.onSelectMeal}>
                <View>
                    <View style = {{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground 
                            source = {{uri: props.image}}
                            style = {styles.bgImage}
                        >
                            <View style = {styles.titleContainer}>
                                <Text 
                                    style = {styles.title}
                                    numberOfLines = {1}>
                                {props.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style = {{...styles.mealRow, ...styles.mealDetail}} >
                        <Text> {props.duration}m </Text>
                        <Text> {props.complexity.toUpperCase()} </Text>
                        <Text> {props.affordability.toUpperCase()} </Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },

    mealItem: {
        height: 250,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 10
    },

    mealHeader: {
        height: '85%'
    },

    mealDetail: {
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },

    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },

    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    
});

export default MealItem;