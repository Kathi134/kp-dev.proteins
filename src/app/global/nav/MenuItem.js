import { IconContext } from 'react-icons';
import { FaFolder } from 'react-icons/fa'
import { GoHomeFill } from "react-icons/go";
import { IoBarbell } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';
import '../menu.css'

const MENU_ICONS = {
    '': <GoHomeFill/>,
    'schedules': <FaFolder/>,
    'exercises': <IoBarbell style={{float: 'right'}}/>,
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