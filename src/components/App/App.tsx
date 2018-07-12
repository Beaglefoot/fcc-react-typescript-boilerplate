import * as React from 'react';
import { connect } from 'react-redux';

import TestableComponent from '../TestableComponent/TestableComponent';

import { container, icon } from './App.scss';
import reactIcon from 'assets/react-icon.svg';

export interface IProps {
  msg: string;
}

const App = (props: IProps) => {
  return (
    <div className={container}>
      <h1>freeCodeCamp React Boilerplate</h1>
      <div className={icon} dangerouslySetInnerHTML={{ __html: reactIcon }} />
      <TestableComponent />
      <p>{props.msg}</p>
    </div>
  );
};

const mapStateToProps = ({ msg }: IProps) => ({ msg });

export default connect(mapStateToProps)(App);
