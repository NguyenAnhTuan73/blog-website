import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container} from '../data';
import {Link} from 'react-router-dom';
import BgImage from '../assets/bg3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({duration:2000
        })
    },[]);
    return (
        <>
            <HomeSection>
                <Container>
                    <HomeContainer data-aos="fade-up"
                        data-aos-duration="2000">
                        <Heading>Welcome to my Blog Website</Heading>
                        <Desc>Click Get Started for our latest blog posts and to be 
                            the first to know when we go live!
                        </Desc>
                        <Button to='/blog'>Get Started</Button>
                    </HomeContainer>
                </Container>
            </HomeSection>
        </>
    )
}
const HomeSection = styled.div`
height: 100vh;
width:100vw;
position: relative;
background-image:linear-gradient(180deg,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 1)), url(${BgImage});
background-position: center;
background-size: cover;
background-repeat: no-repeat;

`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 200px;
    color: #fff;
`;

const Heading = styled.h1`
    font-size: 3rem;
    margin-bottom: 10px;
    @media screen and (max-width:960px){
        font-size: 2.5rem;
    }
`;

const Desc = styled.p`
    font-size: 1rem;
    margin-bottom: 20px;
`;

const Button = styled(Link)`
    color:#fff;
    border: 1px solid #fff;
    border-radius:5px;
    padding: 0.5rem 2rem;
    margin-top: 20px;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.5s ease-in-out;
    &:hover {
        color: #000;
        background-color: #fff;
        border: 1px solid #000;
        ;
    }
`;


export default Home
