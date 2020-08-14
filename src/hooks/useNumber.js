

const useNumber = () => {
    
    const getFormatNumber = (value,decimals)=>{

        if(value.toString().trim()===''){
            return ['',''];
        }

        const separate = value.toString().split('.');
        const thousands = separate[0].split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join(''); 
        let decimalpart= 0
        if(separate[1]){
            decimalpart = separate[1];
        }

        if(decimals===0){
            return [thousands, '']
        }

        
        return [thousands, parseFloat(`0.${decimalpart}`).toFixed(decimals).split('.')[1]]
    }

    return [getFormatNumber]
}

export default useNumber;