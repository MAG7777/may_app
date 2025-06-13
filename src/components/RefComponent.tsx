import { useRef } from "react";

export const RefComponent = ()=>{
    const inputRef = useRef<HTMLInputElement | null>(null);

    const focuseInput = ()=>{
        if(inputRef.current){
            inputRef.current.focus()

        }

    }
    return(
        <div>
            <input  ref={inputRef} type="text" />
            <button onClick={focuseInput}>Focuse on input</button>
        </div>
    );
};