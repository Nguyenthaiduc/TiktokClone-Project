import Header from '../components/Header';
import Sidebar from './Sidebar';
import React from 'react';

interface PropTypes {
    children?: React.ReactNode;
}

const DefaultLayout: React.FC<PropTypes> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
