import styled, {createGlobalStyle} from "styled-components";
import blogimg1 from '../src/assets/img1.jpg';
import blogimg2 from '../src/assets/img2.jpg';
import blogimg3 from '../src/assets/img3.jpg';
import blogimg4 from '../src/assets/img4.jpg';
import blogimg5 from '../src/assets/img5.jpg';
import blogimg6 from '../src/assets/img6.jpg';
import blogimg7 from '../src/assets/img7.jpg';
import blogimg8 from '../src/assets/img8.jpg';
import blogimg9 from '../src/assets/img9.jpg';
import blogimg10 from '../src/assets/img10.jpg';
import blogimg11 from '../src/assets/img11.jpg';
import blogimg12 from '../src/assets/img12.jpg';
import { logRoles } from "@testing-library/dom";

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
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg1,
        date: 'November, 13, 2021'
    },
    {
        id: 2,
        title: 'Wadi Musa, Jordan',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg2,
        date: 'November, 13, 2021'
    },
    {
        id: 3,
        title: 'Khwaeng Wat Arun, Thailand',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg3,
        date: 'November, 13, 2021'
    },
    {
        id: 4,
        title: 'Abud, Indonesia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg4,
        date: 'November, 13, 2021'
    },
    {
        id: 5,
        title: 'New York, United States',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg5,
        date: 'November, 13, 2021'
    },
    {
        id: 6,
        title: 'Marrakesh, Marocco',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg6,
        date: 'November, 13, 2021'
    },
    {
        id: 7,
        title: 'Banaue, Philippines',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg7,
        date: 'November, 13, 2021'
    },
    {
        id: 8,
        title: 'Macows, Rusia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg8,
        date: 'November, 13, 2021'
    },
    {
        id: 9,
        title: 'Alaska, Canada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg9,
        date: 'November, 13, 2021'
    },
    {
        id: 10,
        title: 'HalongBay, VietNam',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg10,
        date: 'November, 13, 2021'
    },
    {
        id: 11,
        title: 'Schwangau, Deutschland',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg11,
        date: 'November, 13, 2021'
    },
    {
        id: 12,
        title: 'Roma, Italy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam numquam odio? Repudiandae ut adipisci iste, quis excepturi earum nobis!',
        image: blogimg12,
        date: 'November, 13, 2021'
    },

]