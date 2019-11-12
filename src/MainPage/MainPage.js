import React, { Fragment } from 'react';
import { Header } from './Header/Header';
import { Sidebar } from'./Sidebar/Sidebar';
import { Information } from './Information/Information';
import { Footer } from './Footer/Footer';

export const MainPage = () => {
    return(
        <Fragment>
        <div className="wrapper">
            <div className="root-box">

                <Header />
                <div className="main">
                    <Sidebar />
                    <Information />
                </div>

            </div>
        </div>

        <div className="footer">
            <Footer />
        </div>
        </Fragment>
    )
};