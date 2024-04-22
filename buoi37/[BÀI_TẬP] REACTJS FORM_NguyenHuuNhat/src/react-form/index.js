import React, { Component } from 'react';
import InputForm from './inputForm';
import TableInfo from './tableInfo';
import Search from './search';

export default class StudentForm extends Component {
  render() {
    return (
      <>
        <InputForm/>
        <Search/>
        <TableInfo/>
      </>
    )
  }
}
