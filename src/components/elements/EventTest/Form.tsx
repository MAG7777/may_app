import type React from "react";

const Form: React.FC = () => {
    function handelSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert("Form have been sent")

    }

    function handleMouseOver() {
        alert("Mouse over");
    }

    function handeMouseOut() {
        alert("Mouse out");

    }

    function handleInputFocus(){
        console.log("Focus on input")
    }

    function handleInputBlur(){
       console.log("blur")
    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <button type="submit">Submit</button>
                <input type="test" onFocus={handleInputFocus} onBlur={handleInputBlur}/>
            </form>

            <button style={{ width: "100px", height: "50px" }} onMouseOver={handleMouseOver} onMouseOut={handeMouseOut}>
                Mouse event
            </button>
        </>
    )

}

export default Form;