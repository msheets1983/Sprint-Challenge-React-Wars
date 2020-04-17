// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    border: 3px grey solid;
    border-radius: 5px;
    margin: 20px;
    width: 45%;
    background-color: rgba(250, 190, 88, 0.375);
    .Header {
        color: red;
    }
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 28px;
    }
    h3 {
        font-size: 24px;
    }
    p {
        color: White;
        font-size: 20px;
    }
`
function Character(props) {
    return (
        <StyledDiv>
            <h1 className='Name Header'>Name: {props.name}</h1>
            <h2 className='Birthday Header'>Birthday: {props.birthYear}</h2>
            <h3 className='Gender Header'>Gender: {props.gender}</h3>
            <p className='info'>Height: {props.height} centimeters.</p>
            <p className='info'>Weight: {props.weight} kilograms.</p>
        </StyledDiv>
    )
}

export default Character