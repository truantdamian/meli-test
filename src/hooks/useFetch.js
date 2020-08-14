
const useFetch = () => {

    const sendRequest = (url)=>{
        return fetch(url)
        .then(resp => {
            
            if(!resp.ok){
                return null;
            }
            return resp.json()
        })
        .then(data => {
                return data;
            }
        )
        .catch(({message}) => {
            return null;
        });
    }

    return {sendRequest};
}

export default useFetch;
