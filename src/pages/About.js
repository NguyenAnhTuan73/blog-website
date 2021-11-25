import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container} from '../data';
import AboutImg from '../assets/aboutimg.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({duration:3000,
        })
    },[]);
    return (
        <>
        <AboutSection>
            <Container>
                <AboutRow>
                    <AboutLeft>

                    <AboutImage src={AboutImg} alt='photo'  
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    />
                    </AboutLeft>

                    <AboutText data-aos="fade-left"
                    data-aos-offset="250"
                    data-aos-easing="ease-in-sine">
                        <Heading>Hi! I'm Jonh Don</Heading>
                        <SubTitle>I am a travel blogger</SubTitle>
                        <Text>I'm a paragraph. Click here to add your own text and edit me.
                            It's easy. Just click 'Edit Text' or double click me to add your own content and make changes 
                            to the font. Feel free to drag and drop me anywhere you like on your page. 
                            I'm a great place for you to tell a story and let your users know a little more about you.
                        </Text>
                        <Text>This is a great space to write long text about your company and your services. 
                            You can use this space to go into a little more detail about your company. 
                            Talk about your team and what services you provide.
                            Tell your visitors the story of how you came up with the idea for your business and what 
                            makes you different from your competitors. 
                            Make your company stand out and show your visitors who you are.</Text>
                    </AboutText>

                </AboutRow>
            </Container>
        </AboutSection>
            
        </>
    )
}
const AboutSection = styled.div`
    background-color: #000;
    height: 100vh;
    padding-bottom:2rem ;
    @media screen and (max-width: 678px) {
        height: 100%;
    }

`;
const AboutRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 120px 0;
    margin: 0 100px;
    @media screen and (max-width: 960px){
        /* flex-direction: column; */
        margin: 0;
        padding: 60px 0;
    }
    @media screen and (max-width: 678px){
        flex-direction: column;
        margin: 0;
        padding: 60px 0;
    }

`;
const AboutLeft = styled.div`
    padding:0 10px;
    @media screen and (max-width: 678px){
        display: flex;
        justify-content: center;
    }
`;
const AboutImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
    margin: 0 auto;

    @media screen and (max-width: 678px){
        
        width: 80%;
    }
`;
const AboutText = styled.div`
    padding: 0 20px;
    color: #fff;
    @media screen and (max-width: 678px) {
        padding: 20px;
    }

`;
const Heading = styled.h1`
    font-size: 2rem;
    @media screen and (max-width: 678px){
        text-align: center;
    }
`;
const SubTitle = styled.span`
    font-size: 1.3rem;
    @media screen and (max-width: 678px){
        display: flex;
        justify-content: center;
    }
`;
const Text = styled.p`
    text-align: justify;
    margin: 20px 0;
    line-height: 1.2;
    font-size: 1.1rem;
    @media screen and (max-width: 960px){
        line-height: 1;
    }
    @media screen and (max-width: 678px){
        font-size: 1rem;
        line-height: 1.2;

    }
`;

export default About;
