import styled ,{css}from "styled-components";

const sizes = {
    small: {
        fontSize: "0.8em",
        padding: "5px 10px",
        width: "100px",
    },
    medium: {
        fontSize: "1em",
        padding: "10px 20px",
        width: "150px",
    },
    large: {
        fontSize: "1.2em",
        padding: "15px 30px",
        width: "200px",
    },
};


export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    width: 200px;
    margin: 0 auto;
    background: palevioletred;
    color:white;

    ${(props)=> props.primary && css`
    background: black;
    color:white
    `};

    ${(props)=> props.disabled && css`
    opacity: 0.5;
    cursor:not-allowed
    `}
`;


//------------  Style extension ----------------///

export const DangerButton = styled(Button)`
background-color: red;
`


// export const Button = styled.button`
//     padding: 10px 20px;
//     font-size: 16px;
//     border: none;
//     cursor: pointer;
//     width: 200px;
//     margin: 0 auto;
//     background-color: ${(props)=>(props.$primary ? "palevioletred" : "white")};
//     color:${(props)=>(props.$primary ? "white" : "palevioletred")};
//     &:hover{
//     background-color:blue
//     }
// `;


// export const Button = styled.button`
//     padding: ${(props) => sizes[props.$size]?.padding || sizes.medium.padding};
//     font-size: ${(props) => sizes[props.$size]?.fontSize || sizes.medium.fontSize};
//     border: none;
//     cursor: pointer;
//     width: ${(props) => sizes[props.$size]?.width || sizes.medium.width};;
//     margin: 0 auto;
//     background-color: yellow;
//     color:${(props) => (props.$highlighted ? "red" : "white")};
//     &:hover{
//     background-color:blue
//     }
// `;

// export const Button = styled.button`
//     padding: 10px 20px;
//     font-size: 16px;
//     border: none;
//     cursor: pointer;
//     width: 200px;
//     margin: 0 auto;
//     background-color: yellow;
//     color:${(props)=>(props.$highlighted ? "red" : "white")};
//     &:hover{
//     background-color:blue
//     }
// `;


