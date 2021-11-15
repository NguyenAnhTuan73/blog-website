import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container} from '../data';
import {Link} from 'react-router-dom';
import {BlogData} from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
    useEffect(() => {
        Aos.init({duration:1000,
        offset: 300})
    },[]);
    return (
        <>
            <BlogSection>
                <Container>
                    <CardRow data-aos="fade-up"
                        data-aos-duration="3000">
                        {BlogData.map((item, index)=>{
                            return( 
                                <Card key={item.id} data-aos="fade-up" >
                                    <CardLink  to=''>
                                        <CardImg src={item.image} />
                                    </CardLink>
                                    <CardDate>{item.date}</CardDate>
                                    <CardLink to=''>
                                        <CardHeading>{item.title}</CardHeading>
                                        <CardDesc>{item.description}</CardDesc>
                                    </CardLink>
                            </Card>
                            )
                        })}
                    </CardRow>
                </Container>
            </BlogSection>
        </>
    )
}

const BlogSection = styled.div`
background-color: #000;
`;
const CardRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex:33.333%;
    max-width: 33.333%;
    padding: 3rem 0.5rem;


    @media screen and (max-width:960px){
        flex:  50%;
        max-width: 50%;
    }
    @media screen and (max-width:600px){
        flex:  100%;
        max-width: 100%;
    }
`;
const CardLink = styled(Link)`
color: #fff;
`;
const CardImg = styled.img`
width: 100%;
max-height: 350px;
object-fit: cover;
`;
const CardDate = styled.span`
color: #777;
font-style: italic;
font-size: 0.9rem;;
`;

const CardHeading = styled.h3`
font-size: 1.5rem;
margin: 10px 0;
height: 3rem;
&:hover {
    color: #4b59f7;
    transition: all 0.5s ease-in-out;

}
`;

const CardDesc = styled.p`
font-size: 1rem;
padding-top: 10px;
line-height: 1.5rem;
max-height: 8rem;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
text-overflow: ellipsis;
word-break: break-word;

`;

export default Blog
