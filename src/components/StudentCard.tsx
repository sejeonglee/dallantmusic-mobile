import React from 'react';
import { Lesson } from '../data';
import { CreditMini, LessonType } from '../components/CreditMini';

import './StudentCard.css';

type StudentCardProps = {
  name: string;
  lessons: Array<Lesson>;
};

/**
 * 학생 목록 카드
 */
class StudentCard extends React.Component<StudentCardProps> {
  /**
   *
   * @return {JSX.Element}
   */
  render(): JSX.Element {
    const studentName = this.props.name;
    const remainedLessons = this.props.lessons.reduce((acc, currentValue) => {
      if (currentValue.lessonType == LessonType.typePostPay) {
        return acc - 1;
      } else {
        return acc + 1;
      }
    }, 0);
    return (
      <div className="studentcard">
        <div className="studentcardlabel">
          <label className="studentName">{studentName}</label>
          <label className="remainedLessons">
            남은 수업 횟수: {remainedLessons} 회
          </label>
          <label className="creditMinis">
            {this.props.lessons.slice(0, 10).map((lesson) => (
              <CreditMini
                key={lesson.lessonKey}
                lessonType={lesson.lessonType}
              ></CreditMini>
            ))}
          </label>
        </div>
      </div>
    );
  }
}

export default StudentCard;
