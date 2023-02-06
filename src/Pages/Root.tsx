import styled from 'styled-components';

import Navigation from '../Components/Navigation';
import Input from '../Components/Input';
import ScrollToTop from '../Components/ScrollToTop';

import { Outlet } from 'react-router-dom';

const Root = function() {

    return (
        <MainLayout>
            <Navigation />
            <div className='content-box'>
                <Input />
                <Outlet />
            </div>
            <ScrollToTop />
        </MainLayout>
        )
}

export default Root;

const MainLayout = styled.div`
    background : var(--Dark-Blue);
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    padding-top: 2rem;
    padding-left: 2rem;
    display: flex;
    gap: 2.25rem;

    .content-box {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

        @media(max-width: 48em) {
            flex-direction: column;
            gap: 2rem;
            padding-left: 1.5rem;
            padding-top: 1.5rem;
        }

            @media(max-width: 32.5em) {
                padding-top: 0rem;
                padding-left: 1rem;
                gap: 1.5rem;
            }
`