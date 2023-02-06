import styled from "styled-components";

import { RootState } from "../store/store";
import { useSelector } from "react-redux";

import ContentCreator from "../Components/ContentCreator";

const BookmarkedContentPage = function() {
    const allContent = useSelector((state:RootState) => state.content.data);
    const searchWord = useSelector((state:RootState) => state.content.searchWord);

    const bookmarkedMoviesContent = allContent.filter(each => {
        return each.isBookmarked && each.category === "Movie"
    })

    const bookmarkedTvContent = allContent.filter(each => {
        return each.isBookmarked && each.category === 'TV Series'
    })

    return (
        <Wrap>
        {searchWord.length === 0 ? <h2 className='bookmarked-title'>Bookmarked Movies</h2> : null}
        <ContentCreator content={bookmarkedMoviesContent} searchWord={searchWord} />
        {searchWord.length === 0 ? <h2 className='bookmarked-title'>Bookmarked TV Series</h2> : null}
        <ContentCreator content={bookmarkedTvContent} searchWord={searchWord} />
        </Wrap>
    )
}

export default BookmarkedContentPage;

const Wrap = styled.div`
    padding-bottom: 3rem;

    .bookmarked-title {
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

                .bookmarked-title {

                    font-size: 1.25rem;
                    margin: 1rem 0rem;
                }
            }
`