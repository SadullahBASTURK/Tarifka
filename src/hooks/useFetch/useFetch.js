import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config";

function useFetch(URL){
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          const {data: responseData} = await axios.get(URL);
          setData(responseData);
          setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
        };

    useEffect (() => {
        fetchData();
    }, []);

    return {error, loading, data};
}

export default useFetch;