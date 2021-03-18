import React from 'react';
import CourseCard from '../CourseCard'
import { courses } from '../../database';

const Courses = ({handleAddItemToCart}) => {

    return (
    <main>
        <section>
        {courses.map((course, index) => 
          <CourseCard 
          key={index}
          img={course.url} 
          title={course.name}
          price={course.price}
          handleAddItemToCart={handleAddItemToCart}
          />
        )}
        </section>
      </main>
    )
}

export default Courses;