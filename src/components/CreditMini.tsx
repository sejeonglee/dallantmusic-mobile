/* eslint-disable no-unused-vars */
import React from 'react';
import './CreditMini.css';

enum LessonType {
  type50 = 'type50',
  type75 = 'type75',
  type100 = 'type100',
  typePostPay = 'typePostPay',
}

type CreditMiniProps = {
  lessonType: LessonType;
};

/**
 * Mini 달란트 컴포넌트
 */
class CreditMini extends React.Component<CreditMiniProps> {
  /**
   *
   * @return {JSX.Element} Single credit component
   */
  render(): JSX.Element {
    return (
      <div
        className="creditMiniCircle"
        style={{
          backgroundColor:
            this.props.lessonType == LessonType.type50
              ? '#FFF07E'
              : this.props.lessonType == LessonType.type75
              ? '#83A4F7'
              : this.props.lessonType == LessonType.type100
              ? '#D898FF'
              : this.props.lessonType == LessonType.typePostPay
              ? '#FD7B7B'
              : 'black',
        }}
      />
    );
  }
}

export { CreditMini, LessonType };
