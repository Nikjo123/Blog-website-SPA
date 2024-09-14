import Header from './Header.js'
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

export default Layout;