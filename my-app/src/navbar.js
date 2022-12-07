import './style.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
//replacement of the a tag with Link
//replacement of href with to
export default function Navbar() {
  
  return (
    <nav className="nav">
      <Link to ="/" className="site-title">
        Save the Forest
      </Link>
      <ul>
        <CustomLink to="/endanimals">Endangered Aminals</CustomLink>
        <CustomLink to ="/inpeople">Indigenous People</CustomLink>
        <CustomLink to="/charities">Charities</CustomLink>
      </ul>
    </nav>
  )
}
//Helps that the tab will be highligthed when on the page, clicked on
function CustomLink({to, children, ...props}){
//const path = window.location.pathname 
//adding const to work with react router
//helps for tab to be highlighted when on page 
const resolvedPath =useResolvedPath(to)
const isActive = useMatch({path: resolvedPath.pathname,end:true})
return(
  <li className = {isActive ? "active" : ""}>
      <Link to ={to}{...props}>
        {children}
        </Link>
  </li>
)
}