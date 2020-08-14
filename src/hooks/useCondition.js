
export const useCondition = () => {
    
    const getCondition = (condition)=>{
        switch(condition){
            case 'used':
                return 'usado';
            case 'new':
                return 'nuevo';
            default:
                return '';
        }
    }
    return [getCondition];
}
