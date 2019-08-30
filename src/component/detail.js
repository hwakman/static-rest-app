import React, {Component} from 'react';

export default class DetailModel extends Component {
    render() {
      const data = this.props.data.data;
      return (
        <div className="model-screen">
          <div className="model-content p-3 bg-light rounded">
              <table className="table table-striped" style={{minWidth:`400px`}}>
                <thead><tr><th style={{width:`15%`}}></th><th>Detail</th></tr></thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{data.name}</td>
                  </tr>
  
                  <tr>
                    <td>Type</td>
                    <td>{data.type}</td>
                  </tr>
  
                  <tr>
                    <td>Gender</td>
                    <td>{data.gender}</td>
                  </tr>
                </tbody>
              </table>
              <button style={{float:`right`}} onClick={this.props.closeBut} className="btn btn-danger">Close</button>
          </div>
        </div>
      );
    }
  }