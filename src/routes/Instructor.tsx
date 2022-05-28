import React from 'react';
import './Instructor.css';
import { getStudents } from '../data';
/**
 * 강사 페이지
 */
class Instructor extends React.Component {
  /**
   *
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    const instName = '이해정';
    // eslint-disable-next-line no-unused-vars
    const students = getStudents();
    return (
      <div>
        <header>
          <data className="name">{instName}</data>
          <text>강사님</text>
        </header>
        <section className="container">
          <nav
            style={{
              backgroundColor: 'white',
            }}
          >
            전체 학생
          </nav>

          <div className="cardlist">
            <StudentCard />
            <StudentCard />
            <StudentCard />
          </div>
        </section>
      </div>
    );
  }
}

/**
 * 학생 목록 카드
 */
class StudentCard extends React.Component {
  /**
   *
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    const studentName = '유승헌';
    const remainedLessons = 10;
    return (
      <div className="studentcard">
        <div className="studentcardlabel">
          <label className="studentName">{studentName}</label>
          <label className="remainedLessons">
            남은 수업 횟수: {remainedLessons} 회
          </label>
        </div>
      </div>
    );
  }
}

export default Instructor;
