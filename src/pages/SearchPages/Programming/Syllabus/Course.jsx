import React from "react";
import "./Course.css";

const Course = () => {
  const courses = [
    {
      title: "C PROGRAMMING",
      link: "https://www.ittrainingnepal.com/c-programming-training",
      img: "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-646b29f03ee6f3.99424262.webp",
    },
    {
      title: "MACHINE LEARNING",
      link: "https://www.ittrainingnepal.com/machine-learning-with-python",
      img: "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-646b2a26154081.33671467.webp",
    },
    {
      title: "C++ PROGRAMMING",
      link: "https://www.ittrainingnepal.com/c++-programming-training",
      img: "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-646b428c099db0.42595012.webp",
    },
    {
      title: "REST API",
      link: "https://www.ittrainingnepal.com/rest-api",
      img: "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-646b41fdb88083.12271952.webp",
    },
    {
      title: "PHP TRAINING",
      link: "https://www.ittrainingnepal.com/php-training",
      img: "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-646b34dccc98c7.09778457.webp",
    },
    {
      title: "LARAVEL TRAINING",
      link: "https://www.ittrainingnepal.com/laravel-php-framework-course",
      img: "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-646b326890d655.90472166.webp",
    },
    {
      title: "ASP.NET TRAINING",
      link: "https://www.ittrainingnepal.com/asp.net-training",
      img: "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-646b2b0fdd8cb4.44854972.webp",
    },
    {
      title: "JAVA TRAINING",
      link: "https://www.ittrainingnepal.com/java-training",
      img: "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-646b3220ea5f09.90092102.webp",
    },
  ];

  return (
    <section className="course mb-5" data-aos="fade-up">
      <div className="container-fluid">
        <h2 className="h4 mb-3">Related Courses</h2>
        <div className="course-slider">
          {courses.map((course, index) => (
            <div className="course-slider__item" key={index}>
              <div className="course-card card shadow">
                <a className="course-card__img-wrapper" href={course.link}>
                  <img src={course.img} alt={course.title} />
                </a>
                <div className="p-4 card-body">
                  <div className="card-title h5 mb-0 fw-medium">
                    <a
                      className="text-decoration-none text-dark"
                      href={course.link}
                    >
                      {course.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
