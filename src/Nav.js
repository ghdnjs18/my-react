import Button from "./Button";
import './Nav.css'

function Nav({menus}) {
    const navigate = (url) => {
        window.location.href = url
    }
    return (
        <div className="nav-container">
            {menus.map(menus => {
                return(
                    <Button size='small' handleClick={() => navigate(menus.siteUrl)}>{menus.siteTitle}</Button>
                )
            })}
        </div>
    )
}

export default Nav