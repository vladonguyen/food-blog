import { useState } from "react";


export default function usePersistedState(key, defaultValue){
const [state, setState] = useState(()=>{
    const persistedState = localStorage.getItem(key);
    if(persistedState){
       return JSON.parse(persistedState)
    }

    return defaultValue;
});

const setPersistedState = (value) => {
    setState(value);
    let  serilizedValue;
    if(typeof value === 'function'){
        serilizedValue = JSON.stringify(value(state));
    }
    else {
        serilizedValue = JSON.stringify(value);
    }

    localStorage.setItem(key, serilizedValue);
}

return [
state,
setPersistedState,
];
}