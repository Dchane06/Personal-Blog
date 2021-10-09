import './post.css';

export default function Post() {
    return (
        <div className="post">
            <div className="postImg">
                <img className="postImg" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.w3schools.com%2Fcss%2Fimg_mountains.jpg&f=1&nofb=1" alt="river" />
            </div>
            <div className="postInfo">
                <div className="postsCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Debitis vero sapiente reiciendis facere beatae soluta consectetur laborum. 
                                    Nam nulla repellat, ipsam adipisci, aperiam eaque numquam quidem laudantium, possimus natus cumque.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Debitis vero sapiente reiciendis facere beatae soluta consectetur laborum. 
                                    Nam nulla repellat, ipsam adipisci, aperiam eaque numquam quidem laudantium, possimus natus cumque.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Debitis vero sapiente reiciendis facere beatae soluta consectetur laborum. 
                                    Nam nulla repellat, ipsam adipisci, aperiam eaque numquam quidem laudantium, possimus natus cumque.</p>          
        </div>
    )
}
