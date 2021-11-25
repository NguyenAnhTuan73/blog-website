import React, {useState} from 'react';
import styled from 'styled-components';
import {Container} from '../data';
import {Link} from 'react-router-dom';
import { FaPooStorm, FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>
                        <FaPooStorm style={{fontSize:'30px'}}/>
                        <h2>STORM</h2>
                    </NavLogo>
                    <MobileIcon onClick={handleClick} >
                        {click ? <FaTimes/> :  <FaBars/> }
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem><NavLinks to='/'>Home</NavLinks></NavItem>
                        <NavItem><NavLinks to='/blog'>Blog</NavLinks></NavItem>
                        <NavItem><NavLinks to='/about'>About</NavLinks></NavItem>
                        <NavItem><NavLinks to='contact'>Contact</NavLinks></NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}
const Nav = styled.div`
    background-color: #000;
    height: 60px;
    width: 100vw;
    

    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    font-size: 1.2rem;
    color:#fff;

`;
const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    ${Container};
`;

const NavLogo = styled(Link)`
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    justify-self: start;
    cursor: pointer;
    align-items: center;
    color: #fff;
    text-decoration: none;
    h2 {
        font-size: 1.5rem;
        margin-left: 0.2rem;
    }
`;
const MobileIcon = styled.div`
    display:none;
    color: #fff;
    @media screen and (max-width:960px){
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(-100%, -50%);
        right:  0;
        font-size: 1.8rem;
        cursor: pointer;
        padding: 10px;
        &:hover {
            transition: all 0.3s linear;
            color: #4b59f7;
        }
    }

    
`;
// part-right
const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    @media screen and (max-width:960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 50vh;
        position: absolute;
        top: 60px;
        left: ${({click})=> (click ? 0 : '-100%') };
        opacity: ${({click})=> (click ? 1 : 0) };
        background-color: #000;
        transition: 0.5s;
    }

`;

const NavItem = styled.li`
    height: 60px;
    display:flex;
    align-items: center;
    padding: 0 0.8rem;
`;

const NavLinks = styled(Link)`
    color: #fff;
    font-weight: 500;
    &:hover {
    transition: all 0.3s linear;
    transform: translateY(-1px);
    color: #4b59f7;
    }                
    @media screen and (max-width:960px){
        padding: 0 1rem;
        width: 100%;
    
    }
`;


export default Navbar
