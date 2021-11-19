import { Link, NavLink, useLocation, useParams, useSearchParams } from "react-router-dom";
import posts from "../postData";
import './Post.css'

function Post() {
  const params = useParams();
  const post = posts[params.postId];
  const [searchParams, setSearchParams] = useSearchParams()
  // Link에 스타일 주기 위해서 NavLink로 변경해서 스타일을 추가
  const applyActiveColor = ({isActive}) => (isActive? {color:'orangered'} : {color:''})

  // URL 쿼리스트링 값을 사용자가 입력한 키워드로 설정함(변경함)
  const changeQueryString = (e) => {
      const filter = e.target.value
      if (filter) {
          setSearchParams({filter})
      } else {
          setSearchParams({})
      }
  }

  // 스프래드 연산자로 인해서 props = {key, style, className}
  const QueryNavLink = ({ to, children, ...props}) => {
      const location = useLocation();
      console.log(location)
      return <NavLink to={to + location.search} {...props}>{children}</NavLink>
  }
  return (
    <>
        {/* 쿼리스트링을 이용한 검색 */}
        <br/>
        <input className="filter-post" placeholder="Search post..." value={searchParams.get('filter') || ""} 
        onChange={changeQueryString}/>

        {/* 특정 블로그 포스트 보여주기 */}
        {post?
            <div className="post-container">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <span>{post.created}</span>
            </div> :
            <h1>POST PAGE</h1>}

        {/* 블로그 전체목록 보여주기 */}
        {/* {posts.map( (post, id) => {
            return (
                <NavLink key={id} to={`/posts/${id}`} className="post-item" style={applyActiveColor}>{post.title}</NavLink>
            )
        })} */}
        {posts.filter( post => {
            const filter = searchParams.get('filter')
            if (!filter) return true;
            const title = post.title.toLowerCase()
            return title.includes(filter.toLowerCase())
        }).map( (post, id) => {
            return (
                <QueryNavLink key={id} to={`/posts/${id}`} className="post-item" style={applyActiveColor}>{post.title}</QueryNavLink>
            )}
        )}

    </>
  );
}

export default Post;
