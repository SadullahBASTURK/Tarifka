import React from "react";
import { View, FlatList, Linking } from "react-native";
import styles from './Detail.style';
import DetailsCard from "../../components/DetailsCard";

import useFetch from "../../hooks/useFetch";
import config from "../../../config";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Detail = ({route}) => {

    const {idMeal} = route.params;
    console.log("id meal: ", idMeal);
    const { error, loading, data } = useFetch(`${config.API_DETAIL}${idMeal}`);

    const renderDetail = ({item}) => {
        return(
            <DetailsCard detail={item} 
                onSelectWatch={() => {Linking.openURL(item.strYoutube)}}
            />);
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
                renderItem={renderDetail}
                keyExtractor={item => item.idMeal}
            />
        </View>
    );
};

export default Detail;