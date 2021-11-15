import React from 'react';
import styled from 'styled-components';
import {Container} from '../data';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Container>
                    <Text>Copyright @ Your Website 2021 | By Intern Developer</Text>
                </Container>
            </FooterContainer>
        </>
    )
}
const FooterContainer = styled.div`
    height: 60px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;


const Text = styled.p`
font-size: 1rem;
text-align: center;
color: #fff;
`;
export default Footer
