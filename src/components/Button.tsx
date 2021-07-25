import { type } from 'os';
import React from 'react';
import styled from 'styled-components';

type Props = {
    label: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
}

const StyledButton = styled.button`
 background-color: rgb(255, 180, 5);
 border-radius: 8px;
 border: transparent;
 font-size: 24px;
`;

const Button: React.FC<Props> = ({ label, position, width, height }) => {

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


    return (
        <StyledButton style={styles}>
            {label}
        </StyledButton>
    );
};

export default Button;