import React from "react";
import { FlatList } from "react-native";
import config from "../../../config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import CategoriesCard from "../../components/CategoriesCard";
import useFetch from "../../hooks/useFetch";

const Categories = ({navigation}) => {
    const {error, loading, data} = useFetch(config.API_CATEGORIES);

    const handleCategoriesSelect = (strCategory) => {
        navigation.navigate('Meals', {strCategory});
    };

    const renderCategories = ({item}) =>{
        return(
        <CategoriesCard 
        category={item} 
        onSelect={() => handleCategoriesSelect(item.strCategory)} 
        />
        );
    };

    if(loading) {
        return <Loading />;
    }

    if(error) {
        return <Error />;
    }

    return <FlatList 
    data={data.categories} 
    renderItem={renderCategories} 
    keyExtractor={item => item.idCategory}
    />;
};

export default Categories;