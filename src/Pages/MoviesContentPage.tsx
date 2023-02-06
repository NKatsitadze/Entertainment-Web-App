import styled from "styled-components";

import { RootState } from "../store/store";
import { useSelector } from "react-redux";

import ContentCreator from "../Components/ContentCreator";

const MoviesContentPage = function() {
    const allContent = useSelector((state:RootState) => state.content.data);
    const searchWord = useSelector((state:RootState) => state.content.searchWord);

    const moviesContent = allContent.filter(each => {
        return each.category === 'Movie'
    })

    return (
        <Wrap>
        {searchWord.length === 0 ? <h2 className='movies-title'>Movies</h2> : null}
        <ContentCreator content={moviesContent} searchWord={searchWord} />
        </Wrap>
    )
}

export default MoviesContentPage;

const Wrap = styled.div`
    padding-bottom: 3rem;

    .movies-title {
        font-weight: 300;
        font-size: 2rem;
        letter-spacing: -0.5px;
        margin: 1.5rem 0rem;
    }

        @media(max-width: 48em) {
            padding-bottom: 2rem;
        }

            @media(max-width: 32.5em) {
                padding-bottom: 1rem;

                .movies-title {
                    font-size: 1.25rem;
                    margin: 1rem 0rem;
                }
            }
`