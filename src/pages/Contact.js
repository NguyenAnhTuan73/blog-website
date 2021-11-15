import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container} from '../data';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        Aos.init({duration:1000,
        offset: 400})
    },[]);
    return (
        <ContactSection>
            <Container>
                <FormRow>
                    <FormContainer data-aos="fade-up"
                        data-aos-duration="2000">
                        <form autoComplete='off'>
                        <Label>First Name</Label>
                        <InputStyle type='text' name='firstname' id='firstname'/>
                        <Label>Last Name</Label>
                        <InputStyle type='text' name='lastname' id='lastname'/>
                        <Label>Email</Label>
                        <InputStyle type='email' name='email' id='email'/>
                        <Label>Phone</Label>
                        <InputStyle type='number' name='number' id='phone'/>
                        <Label>Leave us a message...</Label>
                        <TextareaStyle rows='5' id='message' name='massage'/>
                        <SendButton to='/' type='button'>SEND</SendButton>

                        </form>
                    </FormContainer>
                </FormRow>
            </Container>
        </ContactSection>
    )
}
const ContactSection = styled.section`
background-color: #000;
`;
const FormRow = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 120px 0;

`;
const FormContainer = styled.div`
background-color: #040404;
padding: 2rem 4rem;
width: 50%;
border-radius: 5px;
@media screen and (max-width: 960px) {
    padding: 2rem;
}
`;

const Label = styled.label`
font-weight: 600;
margin-bottom: 5px;
color: #fff;
`;
const InputStyle = styled.input`
    border-bottom: 1px solid #fff;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    background-color: transparent;
    padding: 1rem 0;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 30px;
`;

const TextareaStyle = styled.textarea`
    border-bottom: 1px solid #fff;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    background-color: transparent;
    padding: 1rem 0;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 30px;

`;

const SendButton = styled(Link)`
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export default Contact
