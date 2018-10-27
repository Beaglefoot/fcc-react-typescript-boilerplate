import * as React from 'react';
import { hot } from 'react-hot-loader';
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
      <h1>TypeScript React Boilerplate</h1>
      <div className={icon} dangerouslySetInnerHTML={{ __html: reactIcon }} />
      <TestableComponent />
      <p>{props.msg}</p>
    </div>
  );
};

const mapStateToProps = ({ msg }: IProps) => ({ msg });

export default hot(module)(connect(mapStateToProps)(App));
