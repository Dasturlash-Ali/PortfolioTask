import React from 'react'
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <div>
        <Header/>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout;