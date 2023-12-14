import React from "react";
import { View, Text, TouchableWithoutFeedback, ImageBackground } from "react-native";
import styles from './MealsCard.style';

const MealsCard = ({meal, onTouch}) => {
    return(
        <TouchableWithoutFeedback onPress={onTouch}>
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <ImageBackground
                        style={styles.image}
                        source={{uri: meal.strMealThumb}}
                    >
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                        {meal.strMeal}</Text>
                    </ImageBackground>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MealsCard;