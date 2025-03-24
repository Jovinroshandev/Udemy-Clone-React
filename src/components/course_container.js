import course1 from "../image/course_7.jpg"
import course2 from "../image/course_1.jpg"
import course3 from "../image/course_5.jpg"
import course4 from "../image/course_2.jpg"
import course5 from "../image/course_3.jpg"
import course6 from "../image/course_4.jpg"
import course7 from "../image/course_6.jpg"
import course8 from "../image/course_8.jpg"

function CourseContainer(){
    return(
        <div class="course-container-parent">
        <h1 class="course-container__title">All the skills you need in one place</h1>
        <p class="course-container__desc">From critical skills to technical topics, Udemy supports your professional development</p>
        <div class="course-container__child">
            <div class="course-box">
                <img src={course1} alt="course-image"/>
                <div class="card-content">
                    <h2>100 Days to Larn Java: The Complete Prof..</h2>
                    <p class="course-box__author-namae">John Mario Leo</p>
                    <p class="course-box__rating">4.5 ⭐⭐⭐⭐</p>
                    <p class="course-box__amount">&#8377;400 <del>1,450</del></p>
                </div>
            </div>
            <div class="course-box">
                <img src={course2} alt=""/>
                <div class="card-content">
                    <h2>Learn Advance Python</h2>
                    <p class="course-box__author-namae">Jovin Roshan</p>
                    <p class="course-box__rating">5 ⭐⭐⭐⭐⭐</p>
                    <p class="course-box__amount">&#8377;400 <del>1,590</del></p>
                </div>
            </div>
            <div class="course-box">
                <img src={course3} alt=""/>
                <div class="card-content">
                    <h2>The Complete Full-Stack Web Development</h2>
                    <p class="course-box__author-namae">Josphine Mary</p>
                    <p class="course-box__rating">3.4 ⭐⭐⭐</p>
                    <p class="course-box__amount">&#8377;399 <del>2,500</del></p>
                </div>
            </div>

            <div class="course-box">
                <img src={course4} alt=""/>
                <div class="card-content">
                    <h2>Fullstack Web Development with Jo</h2>
                    <p class="course-box__author-namae">Call me Jo</p>
                    <p class="course-box__rating">5 ⭐⭐⭐⭐⭐</p>
                    <p class="course-box__amount">&#8377;600 <del>4000</del></p>
                </div>
            </div>
            <div class="course-box">
                <img src={course5} alt=""/>
                <div class="card-content">
                    <h2>Personal Development and Self Confidence</h2>
                    <p class="course-box__author-namae">Stew Johnson</p>
                    <p class="course-box__rating">3.4 ⭐⭐⭐</p>
                    <p class="course-box__amount">&#8377;8099 <del>12,500</del></p>
                </div>
            </div>
            <div class="course-box">
                <img src={course6} alt=""/>
                <div class="card-content">
                    <h2>Data Analistic and Large Data Processing</h2>
                    <p class="course-box__author-namae">Ashok Kumar</p>
                    <p class="course-box__rating">4.5 ⭐⭐⭐⭐</p>
                    <p class="course-box__amount">&#8377;799 <del>2,000</del></p>
                </div>
            </div>
            <div class="course-box">
                <img src={course7} alt=""/>
                <div class="card-content">
                    <h2>Startup Business Idea & Tips</h2>
                    <p class="course-box__author-namae">Mohan Babu</p>
                    <p class="course-box__rating">3.4 ⭐⭐⭐</p>
                    <p class="course-box__amount">&#8377;399 <del>2,500</del></p>
                </div>
            </div>
            <div class="course-box">
                <img src={course8} alt=""/>
                <div class="card-content">
                    <h2>Sound Engineering Course</h2>
                    <p class="course-box__author-namae">Manoj Kumar</p>
                    <p class="course-box__rating">2.4 ⭐⭐</p>
                    <p class="course-box__amount">&#8377;599 <del>4,000</del></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CourseContainer