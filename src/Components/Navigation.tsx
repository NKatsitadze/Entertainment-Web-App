import styled from "styled-components";
import { useState } from 'react';

import { NavLink, useLocation } from "react-router-dom";

import RedIcon from '../../public/assets/logo.svg';
import HomeIcon from "../svgs/HomeIcon";
import MovieIcon from "../svgs/MovieIcon";
import TvIcon from "../svgs/TvIcon";
import BookmarkIcon from "../svgs/BookmarkIcon";
import Avatar from '../../public/assets/image-avatar.png';

import { useDispatch } from "react-redux";
import { searcherWord } from "../store/contentReducer";

const Navigation = function() {
    const { pathname } = useLocation();
    const [active, setActive] = useState<string>(pathname.slice(1));
    const [hover, setHover] = useState<string>('');

    const dispatch = useDispatch();

    const navClickHandler = function() {
        setActive('');
        dispatch(searcherWord({word: ''}))
    }

    return (
        <NavWrap>
            <div className="nav-box">
                <div className="red">
                    <NavLink role='button' onClick={navClickHandler} to=''><img className="home" src={RedIcon} alt="Home icon" /></NavLink>
                </div>
                <div className="links">
                    <NavLink onMouseLeave={() => setHover('')} onMouseOverCapture={() => setHover('home-hovering')} onClick={()=> setActive('')} to=''><HomeIcon  active={active} hover={hover} /></NavLink>
                    <NavLink onMouseLeave={() => setHover('')} onMouseOverCapture={() => setHover('movies-hovering')} onClick={()=> setActive('movies')} to='movies'><MovieIcon  active={active} hover={hover} /></NavLink>
                    <NavLink onMouseLeave={() => setHover('')} onMouseOverCapture={() => setHover('tvseries-hovering')} onClick={()=> setActive('tv-series')} to='tv-series'><TvIcon  active={active} hover={hover} /></NavLink>
                    <NavLink onMouseLeave={() => setHover('')} onMouseOverCapture={() => setHover('bookmarked-hovering')} onClick={()=> setActive('bookmarked')} to='bookmarked'><BookmarkIcon  active={active} hover={hover} /></NavLink>
                </div>
                <div className="image-box">
                    <img src={Avatar} alt="avatar image" />
                </div>
            </div>
        </NavWrap>
    )
}

export default Navigation;

const NavWrap = styled.div`
    background: var(--Semi-Dark-Blue);
    height: 95vh;
    max-height: 60rem;
    min-height: 30rem;
    padding: 2rem 2rem;
    border-radius: 1.25rem;

    .nav-box {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        

        .links {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
            margin-top: 4.7rem;
        }

        .home {
            width: 2rem;
            height: 1.56rem;
        }

        img {
            height: 1.25rem;
            width: 1.25rem;

        }
        
        .image-box {
            margin-top: auto;
            height: 2.5rem;
            width: 2.5rem;
            border: 1px solid #FFFFFF;
            border-radius: 50%;

            img {
                height: 100%;
                width: 100%;
            }
        }
    }


        @media(max-width: 48em) {
            height: 4.5rem;
            max-height: auto;
            min-height: auto;
            width: calc(100% - 1.5rem);
            padding: 1.5rem 1.5rem;

            .nav-box {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .links {
                    flex-direction: row;
                    align-items: center;
                    margin-top: 0rem;
                }

                .image-box {
                    margin-top: 0rem;
                }
            }
        }

            @media(max-width: 32.5em) {
                width: 100%;
                padding-left: 0rem;

                .nav-box {
                    padding: 1rem 0rem;

                    .links {
                        gap: 1.5rem;

                        *{
                            transform: scale(0.93);
                        }
                    }

                    .home {
                        width: 1.5rem;
                        height: 1.25rem;
                    }

                    .image-box {
                        height: 1.5rem;
                        width: 1.5rem;
                    }
                }
            }
`