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

type ContentCreatorType = {
    searchWord: string;
    content: contentType[];
}        

const ContentCreator = function({content, searchWord}:ContentCreatorType) {
    const dispatch = useDispatch();

    let copy = [...content];
    let reversedContent = copy.reverse(); /* Reversing so there would not be many same movies at the start of page, just for a better visual */
    
    const filteredContent = reversedContent.filter(each => {
        return each.title.toLowerCase().includes(searchWord);
    })

    const bookmarkHandler :any  = function(arg: contentType) {
        dispatch(toggler({obj: arg}));
    }

    return (
        <>
        {searchWord.length !== 0 ? <Result>Found {filteredContent.length} results for '{searchWord}'</Result> : null}
        <Wrap>
        {filteredContent.map((each) => {
            return <div key={each.title} className="movie-box">
                        <div className="image-container">
                            <div className="play-box">
                                <img src={iconPlay} alt="play icon" />
                                <span>Play</span>
                            </div>
                            <img className="img" src={each.thumbnail.regular.large} alt="trending image" />
                            <div onClick={bookmarkHandler.bind(null, each)} role='button' className="bookmark"><img src={each.isBookmarked ? bookmarkFull : bookmarkEmpty} alt="bookmark icon" /></div>
                        </div>
                        <div className="info-box">
                            <div className="info">
                                <span>{each.year}</span>
                                <img className="oval" src={oval} alt="dot" />
                                <img src={each.category === 'Movie' ? movieIcon : tvIcon} alt="movie/tv icon" />
                                <span>{each.category}</span>
                                <img className="oval" src={oval} alt="dot" />
                                <span>{each.rating}</span>
                            </div>
                            <div className="title">{each.title}</div>
                        </div>
                    </div>
        })}
        </Wrap>
        </>
    )
}

export default ContentCreator;

const Result = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    letter-spacing: -0.5px;
    margin-bottom: 2rem;
    margin-top: 1rem;

        @media(max-width: 48em) {
            margin-bottom: 1.5rem;
        }

            @media(max-width: 32.5em) {
                font-size: 1.25rem;
            }
`

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 2.5rem;
    row-gap: 2rem;
    width: calc(100% - 2.25rem);

    .movie-box {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
       

    .image-container {
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover .play-box {
            opacity: 1;
            pointer-events: auto;
        }

        &:hover .img {
            filter: brightness(0.9);
            transform: scale(1);
            transform: rotate(0.0001deg);
        }
        
        .play-box {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.9rem;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.25);
            height: 3rem;
            width: 7rem;
            border-radius: 1.8rem;
            opacity: 0;
            pointer-events: none;
            cursor: pointer;
            transition: all 0.15s;
            z-index: 5;

            span {
                font-weight: 500;
                font-size: 1.125rem;
            }
        }
    
        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
            transition: all 0.15s;
            transform: scale(1.05);
            backface-visibility: none;
        }
    
        .bookmark {
            position: absolute;
            top: 1rem;
            right: 1rem;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            background: var(--Dark-Blue);
            opacity: 0.55;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover {
                background: rgba(255,255,255,0.5);
            }
        }
    }

        .info-box {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .info {
                font-size: 0.8rem;
                font-weight: 300;
                opacity: 0.75;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .oval {
                height: 3px;
                width: 3px;
                align-self: center;
            }
        }

        .title {
            font-weight: 500;
            font-size: 1.125rem;
        }
    }

        @media(max-width: 48em) {
            grid-template-columns: repeat(3, 1fr);
            width: calc(100% - 1.5rem);
            column-gap: 1.875rem;
            row-gap: 1.5rem;
        }

            @media(max-width: 32.5em) {
                grid-template-columns: repeat(2, 1fr);
                column-gap: 1rem;
                row-gap: 1rem;
                width: calc(100% - 1rem);

                .movie-box {
                    .image-container {
                        .bookmark {
                            top: 0.5rem;
                            right: 0.5rem;
                        }

                        .play-box {
                            height: 2.5rem;
                            width: 6.5rem;

                            span {
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
    
`