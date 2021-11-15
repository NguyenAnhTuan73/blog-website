import styled, {createGlobalStyle} from "styled-components";
import Img1 from '../src/assets/img1.jpg';
import Img2 from '../src/assets/img2.jpg';
import Img3 from '../src/assets/img3.jpg';
import Img4 from '../src/assets/img4.jpg';
import Img5 from '../src/assets/img5.jpg';
import Img6 from '../src/assets/img6.jpg';
import Img7 from '../src/assets/img7.jpg';
import Img8 from '../src/assets/img8.jpg';
import Img9 from '../src/assets/img9.jpg';
import Img10 from '../src/assets/img10.jpg';
import Img11 from '../src/assets/img11.jpg';
import Img12 from '../src/assets/img12.jpg';

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;
    z-index: 1;
    @media screen and (max-width:991px) {
        padding-left: 30px;
        padding-right: 30px;
    }

`;

export const BlogData = [
    {
        id: 1,
        title: 'Paris, France',
        description: 'What is HTML and why should you learn it?',
        image: Img1,
        date: 'November, 13, 2021'
    },
    {
        id: 2,
        title: 'Wadi Musa, Jordan',
        description: 'What is HTML and why should you learn it?',
        image: Img2,
        date: 'November, 13, 2021'
    },
    {
        id: 3,
        title: 'Khwaeng Wat Arun, Thailand',
        description: 'What is HTML and why should you learn it?',
        image: Img3,
        date: 'November, 13, 2021'
    },
    {
        id: 4,
        title: 'Abud, Indonesia',
        description: 'What is HTML and why should you learn it?',
        image: Img4,
        date: 'November, 13, 2021'
    },
    {
        id: 5,
        title: 'New York, United States',
        description: 'What is HTML and why should you learn it?',
        image: Img5,
        date: 'November, 13, 2021'
    },
    {
        id: 6,
        title: 'Marrakesh, Marocco',
        description: 'What is HTML and why should you learn it?',
        image: Img6,
        date: 'November, 13, 2021'
    },
    {
        id: 7,
        title: 'Banaue, Philippines',
        description: 'What is HTML and why should you learn it?',
        image: Img7,
        date: 'November, 13, 2021'
    },
    {
        id: 8,
        title: 'Macows, Rusia',
        description: 'What is HTML and why should you learn it?',
        image: Img8,
        date: 'November, 13, 2021'
    },
    {
        id: 9,
        title: 'Alaska, Canada',
        description: 'What is HTML and why should you learn it?',
        image: Img9,
        date: 'November, 13, 2021'
    },
    {
        id: 10,
        title: 'HalongBay, VietNam',
        description: 'What is HTML and why should you learn it?',
        image: Img10,
        date: 'November, 13, 2021'
    },
    {
        id: 11,
        title: 'Schwangau, Deutschland',
        description: 'What is HTML and why should you learn it?',
        image: Img11,
        date: 'November, 13, 2021'
    },
    {
        id: 12,
        title: 'Roma, Italy',
        description: 'What is HTML and why should you learn it?',
        image: Img12,
        date: 'November, 13, 2021'
    },

]