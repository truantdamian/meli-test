import useFetch from "./useFetch";
import { useState, useEffect } from "react";

const useSearch = (query) => {

    const initData = {author:{name:'damián',lastname:'truant'},categories:[], items:[]};
    const {sendRequest} = useFetch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({error:false,message:''});
    const [data, setData] = useState(initData);

    const getCategories = (response)=>{
        const result = response.available_filters.find(x=>x.id==='category');
        if(result){
            return result.values.sort((a,b)=>a.results>b.results).map(x=>x.name);
        }
        return [];
    };

    useEffect(() => {

        const searchData = async()=>{

            setData(initData);
            if(query!==''){
                setLoading(true);
                const response =  await sendRequest(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
                if(response!=null){
                    const categories = getCategories(response);
                    setData({...data,categories:categories,items:[...response.results.slice(0,4)]});
                }
                                
                setLoading(false);

            }
        }

        searchData();

    }, [query]);

    return [loading,error,data];

}


export default useSearch;