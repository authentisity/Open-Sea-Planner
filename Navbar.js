import './App.css';

function Navbar(props){
    return (
        <div id="nav-header">
            <a href="/index.html">
                <img src={require("./fish.png")} alt="not loaded" id="logo"></img>
            </a>
            <div id="menu">
                <ul>
                    <li class="menu-style">Hello World</li>
                </ul>
                <span id="current-location">{props.location + "\n" + props.zip}</span>
            </div>
        </div>
    );
}

export default Navbar;