/*
npm install --save redux react-redux
*/

import React, { Component } from 'react';
import Layout from './Layout';
import Counter from './Counter';
import {createStore} from 'redux';

function data (state = []){
  return state;
}

const store = createStore(data);

console.log(data);

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Counter />
      </Layout>
    );
  }
}
