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
                <MenuItem destination="" displayName="Home"/>
                <MenuItem destination="schedules" displayName="Pläne"/>
                <MenuItem destination="exercises" displayName="Übungen"/>
            </nav>
        </footer>
    </>);
}