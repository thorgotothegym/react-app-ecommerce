import { createContext} from 'react';

export const MyContext = createContext([
    {
        image: '',
        title: '',
        price: 0,
        description: '',
        id: 0,
        addToCart: false,
    }
]);