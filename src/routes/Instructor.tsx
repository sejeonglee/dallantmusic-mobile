import React from 'react';
import './Instructor.css';
import StudentCard from '../components/StudentCard';
import IndicatorTitle from '../components/IndicatorTitle';

import { getStudents } from '../data';
/**
 * 강사 페이지
 */
class Instructor extends React.Component {
  /**
   *
   * @return {JSX.Element} Instructor Menu Page
   */
  render(): JSX.Element {
    const instName = '이해정';
    // eslint-disable-next-line no-unused-vars
    const studentDataList = getStudents();
    return (
      <div>
        <header>
          <data className="name">{instName}</data>
          <text>강사님</text>
        </header>
        <section className="container">
          <nav>
            <IndicatorTitle>전체 학생</IndicatorTitle>
          </nav>

          <div className="cardlist">
            {studentDataList.map((student) => (
              <StudentCard
                name={student.name}
                lessons={student.lessonList}
                key={student.id}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Instructor;
