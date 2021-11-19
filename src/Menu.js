import { Link } from "react-router-dom";
import './Menu.css'
import posts from './postData';

function Menu({menus}) {
    return (
        <>
            {menus.map ((menu, id) => {
                return (
                    <Link key={id} to={menu.url} className="menu-item">{menu.name}</Link>
                )
            })}
            {/* 개별 지정했을 때 */}
            {/* <Link to="/about" className="menu-item">ABOUT</Link> */}
            {/* <Link to="/posts" className="menu-item">POST</Link> */}

            {/* Post 메뉴 */}
            {/* {posts.map((post, id) => {
                return (
                    <Link key={id} to={`/posts/${id}`} className="menu-item">{post.title}</Link>
                )
            })} */}
        </>
    )
}

export default Menu