import React from 'react';
import styled from 'styled-components'
import Button from './Button';

const Calculator = () => {

    const Container = styled.div`
    `;

    const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4 , 80px);
    grid-template-rows: repeat(5 , 80px);
    grid-gap: 10px;
    `

    return (
        <Container>
            <Grid>
                <Button label="AC" position={[0,0]} width={2} />
                <Button label="OOPS" position={[2,0]} width={2}  />
                <Button label="9" position={[0,1]} />
                <Button label="8" position={[1,1]} />
                <Button label="7" position={[2,1]} />
                <Button label="6" position={[0,2]} />
                <Button label="5" position={[1,2]} />
                <Button label="4" position={[2,2]} />
                <Button label="3" position={[0,3]} />
                <Button label="2" position={[1,3]} />
                <Button label="1" position={[2,3]} />

            </Grid>
        </Container>
    );
};

export default Calculator;