import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from './DetailsCard.style';

const DetailsCard = ({detail, onSelectWatch}) => {

    return(
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image style={styles.image} source={{uri: detail.strMealThumb}} />
            </View>
            <Text style={styles.text}>{detail.strMeal}</Text>
            <Text style={styles.area}>{detail.strArea}</Text>
            <Text style={styles.desc}>{detail.strInstructions}</Text>
            <TouchableOpacity onPress={onSelectWatch} style={styles.button} >
                <Text style={styles.button_text}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailsCard;