import './App.css';

function Navbar(props){
    return (
        <div id="nav-header">
            <a href="/index.html">
                <img src={require("./fish.png")} alt="not loaded" id="logo"></img>
            </a>
            <ul id="menu">
                {/* <li class="menu-style">Hello World</li> */}
                <li class="location">{props.location}Test1</li>
                <li class="location">{props.zip}Test2</li>
            </ul>
            <input type="text" placeholder="Search by " id="search-bar" onKeyDown={SearchGo()}></input>
            <button type="submit" id="search-button"><img src={require("./fish.png")} alt="not loaded" id="button-icon"></img></button>
        </div>
    );
}

export default Navbar;
function SearchGo(){}
