import React from 'react';
import styled from 'styled-components';
import { TitesStyles } from "./ReusableStyles";


export default function Newsletter() {
    return <Section>
        <div className="title">
            <h1>
                <span>Subscribe</span> Newsletter
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem beatae molestias soluta similique. Natus assumenda, pariatur amet incidunt eum dolore quidem sint repellat ducimus sapiente!</p>
        </div>
        <div className="container">
            <input type="text" placeholder="Search for food ... " />
            <button>Search</button>
        </div>
    </Section>;
}


const Section = styled.section`
    border: 0.01rem solid black;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    ${TitesStyles};
    .container{
        background: linear-gradient(to right, tomato, tomato);
        padding: 0.3vw;
        input{
            border: none;
            padding: 1.5rem 8rem 1.5rem 1rem;
            font-size: 1.3rem;
            &:focus{
                outline: none;
            }
        }
        button{
            padding: 1rem 5rem;
            background-color: transparent;
            border: none;
            font-size: 1.3rem;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.5rem;
            transition: 0.3s ease-in-out;
            cursor: pointer;
            &:hover{
                letter-spacing: 0.6rem;
                padding: 1rem 4.7rem;
            }
        }
    }
`;