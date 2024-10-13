import { IconContext } from 'react-icons';
import { BiFoodMenu } from "react-icons/bi";
import { BiDoughnutChart } from "react-icons/bi";
import { NavLink, useLocation } from 'react-router-dom';
import '../menu.css'
import {GiForkKnifeSpoon} from "react-icons/gi";

const MENU_ICONS = {
    '': <BiDoughnutChart />,
    'foods': <GiForkKnifeSpoon />,
    'history': <BiFoodMenu/>,
}

function MenuItem({destination, displayName}) {
    const location = useLocation()
    const currPath = location.pathname.split("/")[1] ?? "";

    const iconStyle = {
        'color': currPath===destination ? 'var(--primary-highlight)' : 'var(--black)',
        'size': '2rem',
    }

    return (<>
        <NavLink to={`/${destination}`}>
            <div className='vertical-container center'>
                <IconContext.Provider value={iconStyle}>
                    {MENU_ICONS[destination]}
                </IconContext.Provider>
                <span className="non-link black">{displayName}</span>
            </div>
        </NavLink>
    </>);
}

export default MenuItem;