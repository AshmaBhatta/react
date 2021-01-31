import React, { Component } from 'react';
import axios from 'axios';
import TableRowD from './TableRowD';

export default class IndexD extends Component {

  constructor(props) {
      super(props);
      this.state = {patient: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/api/donor/')
        .then(response => {
          this.setState({ patient: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRowD(){
      return this.state.patient.map(function(object, i){
          return <TableRowD obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Donor List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>FullName</th>
                <th>Email</th>
                <th>bGroup</th>
                <th>Address</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRowD() }
            </tbody>
          </table>
        </div>
      );
    }
  }
  