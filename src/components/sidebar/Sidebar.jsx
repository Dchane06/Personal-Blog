import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.ibb.co/p1BCcwY/me.jpg" alt="me" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusamus veniam quisquam amet impedit iusto nostrum, illum, in, 
                    a neque accusantium!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-github"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}
