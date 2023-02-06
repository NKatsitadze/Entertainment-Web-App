import styled from "styled-components";

import bookmarkEmpty from '../../public/assets/icon-bookmark-empty.svg';
import bookmarkFull from '../../public/assets/icon-bookmark-full.svg';
import iconPlay from '../../public/assets/icon-play.svg';
import movieIcon from '../../public/assets/icon-category-movie.svg';
import tvIcon from '../../public/assets/icon-category-tv.svg';
import oval from '../../public/assets/oval.png';

import { useDispatch } from "react-redux";
import { toggler } from "../store/contentReducer";
     

type contentType = {
    category: string;
    isBookmarked: boolean;
    isTrending: boolean;
    rating: string;
    thumbnail: {
        regular: {
            small: string;
            medium: string;
            large: string;
        };
        trending?: {
            small: string;
            large: string;
        };
    };
    title: string;
    year: number;
}

type trendingType = {
    eachTrending: contentType;
}  

const SliderComp = function({eachTrending}:trendingType) {

    const dispatch = useDispatch();

    const toggleHandler = function() {
        dispatch(toggler({obj:eachTrending}))
    }

    return(
        <EachBox>
            <div className="play-box">
                <img src={iconPlay} alt="play icon" />
                <span>Play</span>
            </div>
            <img className="trending-img" src={eachTrending.thumbnail.trending!.large} alt="trending image" />
            <div onClick={toggleHandler} role='button' className="bookmark"><img src={eachTrending.isBookmarked ? bookmarkFull : bookmarkEmpty} alt="bookmark icon" /></div>
            <div className="info-box">
                <div className="info">
                    <span>{eachTrending.year}</span>
                    <img className="oval" src={oval} alt="dot" />
                    <span className="img-category"><img src={eachTrending.category === 'Movie' ? movieIcon : tvIcon} alt="movie icon" />{eachTrending.category}</span>
                    <img className="oval" src={oval} alt="dot" />
                    <span>{eachTrending.rating}</span>
                </div>
                <div className="title slide">{eachTrending.title}</div>
            </div>
        </EachBox>
    )
}

export default SliderComp;

const EachBox = styled.div`
    max-width: 93%;
    height: 14.4rem;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;

    &:hover .play-box {
        opacity: 1;
        pointer-events: auto;
    }

    .play-box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.8rem;
        gap: 1.1rem;
        background: rgba(255, 255, 255, 0.25);
        height: 3rem;
        width: 7rem;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        transition: all 0.15s;

        span {
            font-size: 1.12rem;
            font-weight: 500;
        }
    }

    &:hover .trending-img {
        filter: brightness(0.5);
    }

    .trending-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.9);
        transition: all 0.15s;
    }

    .bookmark {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        background: var(--Dark-Blue);
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
        &:hover {
            background: rgba(255,255,255,0.5);
        }
    }
    
    .info-box {
        position: absolute;
        left: 1.5rem;
        bottom: 0%;

        .info {
            font-size: 1rem;
            opacity: 0.75;
            display: flex;
            gap: 0.5rem;

            .img-category {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .oval {
                height: 3px;
                width: 3px;
                align-self: center;
            }
        }

        .title {
            font-size: 1.5rem;
            font-weight: 500;
        }
        .slide {
            margin: 3px 0px 1rem 0px;
        }
    }

        @media(max-width: 32.5em) {
            max-width: 93%;
            height: 8.75rem;

            .play-box {
                height: 2.7rem;
                width 6.7rem;
            }

            .bookmark {
                top: 0.5rem;
                right: 0.5rem;
            }

            .info-box {
                left: 1rem;
                bottom: 0.5rem;
        
                .info {
                    font-size: 0.75rem;
                }
        
                .title {
                    font-size: 0.9375rem;
                    margin: 4px 0rem;
                }
            }
        }
`