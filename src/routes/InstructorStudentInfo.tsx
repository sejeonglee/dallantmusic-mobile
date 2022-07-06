import React from 'react';
import './InstructorStudentInfo.css';

import IndicatorTitle from '../components/IndicatorTitle';
import Backlink from '../components/Backlink';

import { getStudentInfo, StudentInfoType } from '../data';
import { ReactComponent as DallantMusicHeader } from '../dallant_header.svg';

/**
 * 강사 페이지에서 학생을 클릭했을 때 나오는 페이지
 */
class InstructorStudentInfo extends React.Component {
  /**
   *
   * @return {JSX.Element} Instructor Menu Page
   */
  render(): JSX.Element {
    const studentKey = 17; // 예시: props로 받아올 것
    // eslint-disable-next-line no-unused-vars
    const studentInfo: StudentInfoType = getStudentInfo(studentKey);
    return (
      <div>
        <header>
          <div
            style={{
              margin: 'auto',
              width: '87%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Backlink path="/instructor" />
            <DallantMusicHeader />
            <div style={{ width: '40', height: '40' }} />
          </div>
          <div className="underline"></div>
        </header>
        <section className="studentinfo">
          <data className="name">{studentInfo.name}</data>
          <text>강사님</text>
        </section>
        <section className="container">
          <nav>
            <IndicatorTitle>전체 학생</IndicatorTitle>
          </nav>

          {/* <div className="cardlist">
            {studentDataList.map((student) => (
              <StudentCard
                name={student.name}
                lessons={student.lessonList}
                key={student.id}
              />
            ))}
          </div> */}
        </section>
      </div>
    );
  }
}

export default InstructorStudentInfo;
