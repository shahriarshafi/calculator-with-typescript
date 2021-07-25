import { type } from 'os';
import React from 'react';
import styled from 'styled-components';

export enum ButtonType{
    Number,
    Operation
}


type Props = {
    label: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
    type?: ButtonType;
}

const StyledButton = styled.button`
 background-color: #727171;
 color: #fff;
 border-radius: 8px;
 border: transparent;
 font-size: 24px;
`;

const Button: React.FC<Props> = ({ label, position, width, height , type = ButtonType.Operation }) => {

    const styles: React.CSSProperties = {};
    if (position) {
        styles.gridColumnStart = position[0] + 1;
        styles.gridRowStart = position[1] + 1;
    }
    if(width){
        styles.gridColumnEnd = `span ${width}`;
    }
    if(height){
        styles.gridRowEnd =`span ${height}`
    }
    if(type === ButtonType.Number){
        styles.color = "#000";
        styles.backgroundColor ="#e48900";

    }


    return (
        <StyledButton style={styles}>
            {label}
        </StyledButton>
    );
};

export default Button;