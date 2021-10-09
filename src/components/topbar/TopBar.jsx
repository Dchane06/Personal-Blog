import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="top-icon fab fa-github"></i>
            <i className="top-icon fab fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>


                </ul>
            </div>
            <div className="topRight">
            <img className="topImg" src="https://i.ibb.co/p1BCcwY/me.jpg" alt="me" border="0" />
            <i className="top-search fas fa-search"></i>
                            </div>
        </div>
    )
}