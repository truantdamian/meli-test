const useCurrency = () => {
    
    const getCurrencySimbol = (currencyId)=>{
        switch(currencyId){
            case 'ARS':
                return '$';
            case 'USD':
                return 'U$S';
            default:
                return '$';
        }
    }
    return [getCurrencySimbol];
}

export default useCurrency;
