import Navbar from "../src/components/navbar"
import Menu from "../src/components/menu"
import BannerImage from "../src/components/banner_image"
import CourseContainer from "../src/components/course_container"
import Topics from "../src/components/topics"
import Polpular from "../src/components/popular"
import Footer from "../src/components/footer"
import "./style.css"

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Menu></Menu>
            <BannerImage></BannerImage>
            <CourseContainer></CourseContainer>
            <Topics></Topics>
            <Polpular></Polpular>
            <Footer></Footer>
        </div>
    )
}

export default App