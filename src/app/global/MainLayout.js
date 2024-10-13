import './index.css'
import Header from './Header';
import MenuItem from "./nav/MenuItem";
import './menu.css'

export default function MainLayout({children}) {
    return (<>
        <Header/>

        <main>
            <div id="children-container">{children}</div>
        </main>

        <footer>
            <nav className='horizontal-container evenly'>
                <MenuItem destination="" displayName="Track"/>
                <MenuItem destination="foods" displayName="Foods"/>
                <MenuItem destination="history" displayName="History"/>
            </nav>
        </footer>
    </>);
}