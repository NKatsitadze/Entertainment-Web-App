import styled from "styled-components";

import SliderComp from "./SliderComp";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const Trendings = function() {
    const allContent = useSelector((state:RootState) => state.content.data);

    const trendings = allContent.filter((each) => {
        return each.isTrending
    })

    return (
        <TrendingsWrap>
            <h2 className="title">Trending</h2>
            <Splide options={{
                    autoplay: true,
                    interval: 4000,
                    type: "loop",
                    perPage: 3.5,
                    focus:  0,
                    gap: "0rem",
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                        1440: {
                            perPage: 2.5,
                            gap:  '0rem',
                        },
                        768: {
                            perPage: 1.5,
                            gap:  '0rem',
                        },
                    }
                }}
                aria-label="Trending Movies">

                {trendings.map((eachTrending) => {
                    return <SplideSlide key={eachTrending.title}><SliderComp eachTrending={eachTrending} /></SplideSlide>
                })}
                
            </Splide>
        </TrendingsWrap>
    )
}

export default Trendings;

const TrendingsWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2.5rem;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }

    .title {
        font-weight: 300;
        font-size: 2rem;
        letter-spacing: -0.5px;
        margin: 1.5rem 0rem;
        cursor: auto;
    }

    .slider-box {
        display: flex;
        padding-top: 1.5rem;
    }

            @media(max-width: 32.5em) {
                margin-bottom: 1.5rem;

                .title {
                    font-size: 1.25rem;
                    margin: 1rem 0rem;
                }
            }

`