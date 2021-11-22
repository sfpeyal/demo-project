import React from 'react';
import styled from 'styled-components';
import avatar1 from "../assets/avatar1.jpeg";
import { imageZoomEffect, TitesStyles } from "./ReusableStyles";


export default function Testimonials() {
    return <Section>
        <div className="container">
            <div className="title">
                <h1>
                    <span>What</span> Customers says
                </h1>
            </div>
            <div className="testimonials">
                <div className="testimonial">
                    <div className="image">
                        <img src={avatar1} alt="Avatar" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Natus iste vel excepturi nostrum optio nulla.</span>
                    </p>
                </div>
                <div className="testimonial">
                    <div className="image">
                        <img src={avatar1} alt="Avatar" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Natus iste vel excepturi nostrum optio nulla.</span>
                    </p>
                </div>
                <div className="testimonial">
                    <div className="image">
                        <img src={avatar1} alt="Avatar" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Natus iste vel excepturi nostrum optio nulla.</span>
                    </p>
                </div>
            </div>
        </div>
    </Section>;
}
const Section = styled.section`
    margin: 5vw;
    background: linear-gradient(to right, tomato, tomato);
    padding: 0.2rem;
    border-radius: 1.5rem;
    position: relative;
    .container{
        margin: 0.5rem;
        padding-top: 1vw;
        padding-bottom: 4vw;
        background-color: white;
        border-radius: 1rem;
        ${TitesStyles};
        .title{
            position: absolute;
            top: -1rem;
            left: 25%;
            padding: 0 2rem;
            background-color: white;
        }
        .testimonials{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 6vw;
            background-color: white;
            margin-top: 3vw;
            .testimonial{
                display: flex;
                flex-direction: column;
                padding: 0 4vw;
                align-items: center;
                text-align: center;
                gap: 1rem;
                p{
                    font-size: 1.1rem;
                    line-height: 2rem;
                    letter-spacing: 0.1rem;
                }
                ${imageZoomEffect};
                .image{
                    overflow: hidden;
                    width: max-content;
                    max-height: 10rem;
                    border-radius: 10rem;
                    img{
                        height: 10rem;
                    }
                }
            }
        }
    }

`;
