import React from "react";
import { View, FlatList } from "react-native";
import styles from './Meals.style';
import MealsCard from "../../components/MealsCard";

import useFetch from "../../hooks/useFetch";
import config from "../../../config";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Meals = ({route, navigation}) => {

    const { strCategory } = route.params;
    const { error, loading, data } = useFetch(`${config.API_MEALS}${strCategory}`);
    
    const handleSelected = ({idMeal}) => {
        navigation.navigate('Detail', {idMeal})
    }

    const renderMeals = ({item}) => {
        return(
            <MealsCard meal={item} onTouch={() => handleSelected(item.idMeal)} />
        );
    };

    if(loading) {
        return <Loading />;
    }

    if(error) {
        return <Error />;
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={data.meals}
                renderItem={renderMeals} 
                keyExtractor={item => item.idMeal}
                />
        </View>
    );
};

export default Meals;