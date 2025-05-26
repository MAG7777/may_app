import type React from "react";
import { useState } from "react";

const ControlledForm: React.FC = () => {
    const [value, setValue] = useState<string>("");

    const handelSubmit =(event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        alert("Form have been sent")

    }

   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
   }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <label>
                    <input type="text" value={value} onChange={handleOnChange}/>
                </label>
                <button type="submit">Sumbmit</button>
            </form>
        </>
    )

}

export default ControlledForm;