import type React from "react";
import { useRef } from "react";

function UncontrolledForm() {

    const inputRef = useRef<HTMLInputElement>(null);

    const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const inputValue = form.elements.namedItem("name") as HTMLInputElement;

        console.log(inputValue.value);

    }


    // The same code but now using useRef hook


    const handelSubmit2 = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Using !.
        // This is a non-null assertion operator followed by a property access
        // console.log("Name:", inputRef.current!.value);

        //Using if condidtion
        if (inputRef.current) {
            console.log("Name:", inputRef.current.value);
        }

    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <label>
                    <input type="text" name="name" />
                </label>

                <button type="submit">Sumbmit uncontrolled</button>
            </form>


            <form onSubmit={handelSubmit2}>
                <label>
                    <input type="text" name="surname" ref={inputRef} />
                </label>

                <button type="submit">Sumbmit uncontrolled</button>
            </form>
        </>
    )

}

export default UncontrolledForm;