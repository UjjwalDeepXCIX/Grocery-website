import React, { useEffect, useState } from 'react';
import loaderImage from '../../assets/images/loading.gif';
import TopBar from '../../components/topbar/TopBar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Layout = ({ children }) => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setLoader(false);

    }, [loader])
    return (
        <>
            {loader ?
                <div className='loader'>
                    <img src={loaderImage} alt='Loader' width={'50px'} height={'50px'} />
                </div>
                :
                <div className='layout'>
                    <TopBar />
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            }
        </>
    )
}

export default Layout