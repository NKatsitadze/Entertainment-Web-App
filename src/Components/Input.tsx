import styled from "styled-components";

import { useDispatch } from "react-redux";
import {  searcherWord } from "../store/contentReducer";

import search from '../../public/assets/icon-search.svg';

import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const Input = function() {
    const dispatch = useDispatch();

    const searchWord = useSelector((state:RootState) => state.content.searchWord);

    const changeHandler = function(e: React.ChangeEvent<HTMLInputElement>) : void {
        dispatch(searcherWord({word: e.target.value}))
    }

    return (
        <Wrap>
            <img className="search-icon" src={search} alt="search icon" />
            <input value={searchWord} onChange={changeHandler} type='search' className="search-input" placeholder="Search for movies or TV series" />
        </Wrap>
    )
}

export default Input;

const Wrap = styled.div`
    padding-top: 1.7rem;
    display: flex;
    align-items: center;
    width: calc(100% - 2.25rem);
    

    .search-icon {
        height: 2rem;
        width: 2rem;
        margin-right: 1.5rem;
        margin-bottom: 1rem;
    }

    .search-input {
        padding-bottom: 1rem;
        width: 100%;
        background: transparent;
        color: var(--Pure-White);
        height: 100%;
        caret-color: var(--Red);
        font-size: 1.5rem;
        font-weight: 300;
        font-family: 'Outfit';
        border: none;
        position: relative;
        border-bottom: 1px solid transparent;

        &:focus {
            outline: none;
            border-bottom: 1px solid var(--Greyish-Blue);
        }

        &::before {
            content: '';
            position: absolute;
            bottom: 0%;
            left: 0%;
            width: 100%;
            height: 1px;
            background: red;
        }

        &:focus::placeholder {
            color: transparent;
        }


        &::placeholder {
            color: #FFF;
            font-weight: 300;
            font-size: 1.2rem;
            font-family: 'Outfit';
            opacity: 0.5;
        }
    }

        @media(max-width: 48em) {
            width: calc(100% - 1.5rem);
            padding-top: 0rem;

            .search-input {
                border-bottom: none;
                &:focus {
                    border-bottom: none;
                }
            }
        }

            @media(max-width: 32.5) {
                .search-icon {
                    height: 1.5rem;
                    width: 1.5rem;
                    margin-right: 1rem;
                    margin-bottom: 0.7rem;
                }

                .search-input {
                    font-size: 1.5rem;

                    &::placeholder {
                        font-size: 1rem;
                    }
                }
            }
`