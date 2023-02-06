import styled from "styled-components";

import Trendings from "../Components/Trendings";
import ContentCreator from "../Components/ContentCreator";

import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const AllContentPage = function() {

    const allContent = useSelector((state:RootState) => state.content.data);
    const searchWord = useSelector((state:RootState) => state.content.searchWord);

    return (
        <AllWrap>
            {searchWord.length === 0 ? <Trendings /> : null}
            {searchWord.length === 0 ? <h2 className="rec-title">Recommended for you</h2> : null }
            <ContentCreator content={allContent} searchWord={searchWord} />
        </AllWrap>
    )
}

export default AllContentPage;

const AllWrap = styled.div`
    padding-bottom: 3rem;

    .rec-title {
        font-weight: 300;
        font-size: 2rem;
        letter-spacing: -0.5px;
        margin-bottom: 2rem;
    }

        @media(max-width: 48em) {
            padding-bottom: 2rem;

            .rec-title {
                margin-bottom: 1.5rem;
            }
        }

            @media(max-width: 32.5em) {
                padding-bottom: 1rem;

                .rec-title {
                    font-size: 1.25rem;
                    margin-bottom: 1.5rem;
                }
            }
`