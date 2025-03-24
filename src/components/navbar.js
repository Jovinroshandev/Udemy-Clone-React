import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar()
{
    return (
        <div className="Navbar">

            <div className="Navbar__s1">
                <h1 className="Navbar__s1__arrow">^</h1>
                <h1 className="Navbar__s1__title">Udemy</h1>
            </div>

            <div className="Navbar__s2">
                <p className="Navbar__s2__button">Explore</p>
            </div>

            <div className="Navbar__s3">
                <div className="Navbar__s3__search_icon">
                    <i className="fa-solid fa-magnifying-glass" style={{color:'#000000'}}></i>
                </div>
                <div className="Navbar__s3__search_box">
                    <input type="text" placeholder="Search for anything"/>
                </div>
            </div>
            <div className="Navbar__s4">
                <div className="udemy_business">
                    <p className="udemy_business__head">Udemy Business</p>
                    <p className="udemy_business__msg">Get your team access to over 27,000 top Udemy courses, anytime, anywhere
                    </p>
                </div>
                <div className="team_on_udemy">
                    <p className="team_on_udemy__head">Teach on Udemy</p>
                    <p className="team_on_udemy__msg">Turn what you know into an opportunity and reach millions around the world
                    </p>
                </div>
                <div className="my_learning">
                    <p className="my_learning__head">My Learning</p>
                    <p className="my_learning__msg">You are not purchase any course yet!</p>
                </div>
                <div className="favorite_icon">
                    <p className="favorite_icon__head"><i className="fa-regular fa-heart" style={{color:'#000000'}}></i></p>
                    <p className="favorite_icon__msg">Your wishlist is empty</p>
                </div>
                <div className="shopping_cart">
                    <p className="shopping_cart__head"><i className="fa-solid fa-cart-shopping" style={{color:'#000000'}}></i></p>
                    <p className="shopping_cart__msg">Your cart is empty</p>
                </div>
                <div className="bell_icon">
                    <p className="bell_icon__head"><i className="fa-regular fa-bell" style={{color:'#000000'}}></i></p>
                    <p className="bell_icon__msg">No notifications</p>
                </div>
            </div>
            <div className="Navbar__s5">
                <i className="fa-solid fa-bars" style={{color:'#000000'}}></i>
            </div>
        </div>
    )
}

export default Navbar;
