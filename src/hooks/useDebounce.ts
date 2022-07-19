import { useState, useEffect } from 'react';

const useDebounce  = (value : string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(()=> {
        const handler = setTimeout(()=> setDebouncedValue(value),delay)

        return () => clearTimeout(handler);
    },[value])
    
    return debouncedValue;
}

export default useDebounce;
