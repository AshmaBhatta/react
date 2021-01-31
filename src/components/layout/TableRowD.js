import React, { Component } from 'react';
import axios from 'axios';

class TableRowD extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/api/donor/delete'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.FullName}
          </td>
          <td>
            {this.props.obj.Email}
          </td>
          <td>
            {this.props.obj.bGroup}
          </td>
          <td>
            {this.props.obj.Address}
          </td>
          <td>
          <button style={{
                width: "10rem",
                height:"8rem",
                borderRadius: "3px",
                letterSpacing: "1px",
                marginBottom: "2rem"
              }}
              onClick ={()=> ('/index-donor')}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
               Send Request 

            </button>
          </td>
          
        </tr>
    );
  }
}

export default TableRowD;