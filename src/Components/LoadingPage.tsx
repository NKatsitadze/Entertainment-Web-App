import styled from "styled-components";

const LoadingPage = function() {
    return (
        <LoadingWrap>
            <div className="spinner"></div>
        </LoadingWrap>
    )
}

export default LoadingPage;

const LoadingWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-2.25rem);

    @keyframes spinner {
        0% {
          transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
          transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }

    .spinner {
        display: flex;
        position: relative;
        
    }

    .spinner::before {
        position: absolute;
        left: 50%;
        top: 50%;
        animation: 1.5s linear infinite spinner;
        animation-play-state: inherit;
        border: solid 0.5rem #161D2F;
        border-bottom-color: #FC4747;
        border-radius: 50%;
        content: "";
        height: 15rem;
        width: 15rem;
        transform: translate3d(-50%, -50%, 0);
        will-change: transform;
}

    @media(max-width: 48em) {
        position: fixed;
        transform: translateX(-1rem);
        top: 8%;
    }
`