import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = function() {

    return (
        <ErrWrap>
            <h2>Hola!</h2>
            <h2>Page Not Found</h2>
            <Link className="link" to='/'>HOME</Link>
        </ErrWrap>
    )
}

export default ErrorPage;

const ErrWrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--Dark-Blue);

    h2 {
        color: var(--Red);
    }

    .link {
        text-decoration: none;
        color: #FFF;
        font-size: 2rem;
        margin: 2rem 0rem;

        &:hover {
            color: var(--Red);
        }
    }
`