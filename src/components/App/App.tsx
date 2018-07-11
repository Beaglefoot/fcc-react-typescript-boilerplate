import * as React from 'react';
import { connect } from 'react-redux';

import TestableComponent from '../TestableComponent/TestableComponent';

import { container, icon } from './App.scss';
import reactIcon from 'assets/react-icon.svg';

export interface Props {
  msg: string;
}

const App = (props: Props) => {
  return (
    <div className={container}>
      <h1>freeCodeCamp React Boilerplate</h1>
      <div className={icon} dangerouslySetInnerHTML={{ __html: reactIcon }} />
      <TestableComponent />
      <p>{props.msg}</p>
    </div>
  );
};

const mapStateToProps = ({ msg }: Props) => ({ msg });

export default connect(mapStateToProps)(App);
