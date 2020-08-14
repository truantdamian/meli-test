import useFetch from "./useFetch";
import { useState, useEffect } from "react";

const useDetail = (id) => {

    let item = {id:id,
        title:'',
        price:{price:'',currency_id:''},
        picture:'',
        condition:'',
        free_shiipping:false,
        sold_quantity:0,
        category_id:'',
        description:''
    };

    const initData = {author:{name:'damián',lastname:'truant'}, item:{...item}};

    const {sendRequest} = useFetch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({error:false,message:''});
    const [data, setData] = useState(initData);

    const getDetail=async(id)=>{
        const response =  await sendRequest(`https://api.mercadolibre.com/items/${id}`);
        if(response!=null){
            console.log(response);
            const {id,title,price,condition,shipping,pictures,sold_quantity,currency_id,category_id}= response;
            const {free_shiipping} = shipping;
            return {id,title,price:{price,currency_id},picture:pictures.length>0?pictures[0].url:'',condition,free_shiipping,sold_quantity,category_id};
        }

        return item;
    }

    const getDescription = async(id)=>{
        const response =  await sendRequest(`https://api.mercadolibre.com/items/${id}/description`);
        if(response!=null){
            const {plain_text} = response;
            return plain_text;
        }

        return '';
    }

    useEffect(() => {

        const detailData = async()=>{

            setData(initData);
            if(id!==''){

                setLoading(true);
                
                const item = await getDetail(id);
                const description = await getDescription(id);

                setData({...data, item:{...item,description:description}
                });

                setLoading(false);

            }
        }

        detailData();

    }, [id]);

    return [loading,error,data];




}




export default useDetail;