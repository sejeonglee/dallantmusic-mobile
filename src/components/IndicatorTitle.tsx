/* eslint-disable no-unused-vars */
import React from 'react';
import './IndicatorTitle.css';

type IndicatorTitleProps = {
  children: string;
};
/**
 * 헤더에 해당하는 인디케이터의 텍스트 꾸미기 컴포넌트
 */
class IndicatorTitle extends React.Component<IndicatorTitleProps> {
  /**
   *
   * @return {JSX.Element} Single credit component
   */
  render(): JSX.Element {
    return (
      <div className="indicatorBar">
        <div className="titleBox">{this.props.children}</div>
      </div>
    );
  }
}

export default IndicatorTitle;
