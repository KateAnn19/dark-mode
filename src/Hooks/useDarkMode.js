import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from 'react';



export const useDarkMode = (key, initialValue) => {
const[darkMode, setDarkMode] = useLocalStorage(key, initialValue);


useEffect(() => {
    let body = document.querySelector('body');
    if(darkMode === true){
        body.classList.add('dark-mode');
    }
    else{
        body.classList.remove('dark-mode');
    }
}, [darkMode])

return [darkMode, setDarkMode];

}