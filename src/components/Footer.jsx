import React from 'react';
import styled from 'styled-components';
import logo from "../assets/FoodYummy.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";



export default function Footer() {
    return (
        <div className="footer">
            <Section>
                <div className="brand container">
                    <img src={logo} alt="Logo" />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quaerat!
                    </p>
                    <ul>
                        <li><AiFillInstagram /></li>
                        <li><FaFacebookF /></li>
                        <li><GrLinkedinOption /></li>
                        <li><BsTwitter /></li>
                    </ul>
                </div>
                <div className="about container">
                    <div className="title">
                        <h3>About Us</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, non a architecto exercitationem debitis optio adipisci.
                    </p>
                </div>
                <div className="contact container">
                    <div className="title">
                        <h3>Contact Us</h3>
                    </div>
                    <p>+994125364</p>
                    <p>foodyummy@gmail.com</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </Section>
            <LowerFooter className="lower__footer">
                <h2>
                    copyright &copy; 2021 <span>Food Yummy</span>
                </h2>
            </LowerFooter>
        </div>
    );
}


const Section = styled.footer`
    margin: 0;
    background: linear-gradient(to right, tomato, #fa3f1e);
    color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    padding: 4vw;
    p{
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
    }
    ul{
        display: flex;
        list-style-type: none;
        gap: 4vw;
        margin-top: 2vw;
        li{
            padding: 0.8rem;
            border-radius: 2rem;
            background-color: white;
            transition: 0.3s ease-in-out;
            cursor: pointer;
            svg{
                display: flex;
                justify-content: center;
                align-items: center;
                color: tomato;
                font-size: 1.6rem;
                transition: 0.3s ease-in-out;
            }
            &:hover{
                background-color: black;
                svg{
                    transform: scale(1.2);
                }
            }
        }
    }
    img{
        filter: brightness(0) invert(1);
        width: 10vw;
    }
    .container{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3{
            font-size: 2rem;

        }
    }
`;


const LowerFooter = styled.div`
    margin: 0;
    text-align: center;
    background-color: black;
    color: white;
    padding: 1rem;
    h2{
        span{
            color: tomato;
            text-transform: uppercase;
        }
    }
`;