import styled from 'styled-components';

const styleButton = (
    variant: string,
    width?: string,
    height?: string,
    size?: string
) => {
    let styles = null;
    let widthStyles = null;
    let sizeStyles = null;
    let heightStyles = null;

    //define the theme of the button: outline / solid / colour
    if (variant === 'outline'){
        styles = `
        border: 1px solid palevioletred;
        background-color: white;
        color: palevioletred;
        `
    } else if (variant === 'warning'){
        styles  = `
        background: #ff0000bd;
        border: none;
        color: white;
        `
    } else {
        styles  = `
        background: palevioletred;
        border: none;
        color: white;
        `
    }

    //allow the size to be define to better suit the caller presentation components
    if(width !== undefined){
        widthStyles = `width: ${width}`;
    } else {
        widthStyles = `width: 100%`;
    }

    //additional option to make the button smaller to better suit the presentation component
    if(size !== undefined && size === 'small'){
        sizeStyles = `
        padding: 5px 5px; 
        margin: 0 5px;
        `;
    } else {
        sizeStyles = `
        padding: 15px 40px;
        margin-top:10px;
        margin-bottom:10px;
        `;
    }

    //allow buttons to be fullsize of other defined sizes
    if(height !== undefined){
        heightStyles = `
            height: ${height};
        `;
    }

  
    const StyledButton = styled.button`
        
        border-radius: 4px;
        font-size:1em;
        cursor: pointer;
        ${styles}
        ${widthStyles}
        ${sizeStyles}
        ${heightStyles}
        :hover {
            opacity: 0.25
        }
    `;

    return StyledButton;
}

export default styleButton;