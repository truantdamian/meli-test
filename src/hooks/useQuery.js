import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useQuery = (query) => {
    
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const result = new URLSearchParams(location.search).get(query);
        setSearchQuery(result!==null?result:'');
    }, [location,query]);

    return [searchQuery];
}

export default useQuery;
