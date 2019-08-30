import 'bootstrap/dist/css/bootstrap.min.css';
import CommonModal from './component/common.js';
import DetailModel from './component/detail.js';
import DeleteModal from './component/delete.js';
import EditModal from './component/edit.js';
import React, {Component} from 'react';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokelist    : [],
      tempData    : [],
      modelEdit   : false,
      modelState  : false,
      modelDetail : false,
      modelDelete : false,
    }
  }

  toggleModel = () => {
    this.setState({modelState: !this.state.modelState});
  }

  closeBut = () => {
    this.setState({modelState: false});
  }

  saveBut = value => {
    let tempState = this.state.pokelist;
    tempState.push(value);
    this.setState({pokelist:tempState,modelState:false});
  }

  useDetail = value => {
    console.log(value);
    
    this.setState({modelDetail:true,tempData:value});
  }

  closeDetail = () => {
    this.setState({modelDetail:false});
  }

  useEdit = value => {
    this.setState({modelEdit:true,tempData:value});
  }

  saveEdit = data => {
    let tempState = this.state.pokelist;
    tempState[data.index] = data.value;
    
    this.setState({pokelist:tempState,modelEdit:false});
  }

  closeEdit = () => {
    this.setState({modelEdit:false});
  }

  useDelete = value => {
    this.setState({modelDelete:true,tempData:value});
  }

  saveDelete = () => {
    let tempState = this.state.pokelist;
    let index = this.state.tempData.data.index;
    tempState.splice(index - 1,1);
    
    this.setState({pokelist:tempState,modelDelete:false});
  }

  closeDelete = () => {
    this.setState({modelDelete:false});
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <button onClick={this.toggleModel} className="btn btn-primary">Create</button>
        </nav>

        <div className="container col-lg-7 bg-light mt-3">
          {this.state.pokelist.length > 0 ? 
          <List useDetail={this.useDetail}  useEdit={this.useEdit} useDelete={this.useDelete} data={this.state.pokelist}/>:null}
        </div>

        {this.state.modelState ? 
        <CommonModal saveBut={this.saveBut} closeBut={this.closeBut} />:null}

        {this.state.modelDetail ? 
        <DetailModel data={this.state.tempData} closeBut={this.closeDetail} />:null}

        {this.state.modelEdit ? 
        <EditModal data={this.state.tempData} saveBut={this.saveEdit} closeEdit={this.closeEdit} />:null}

        {this.state.modelDelete ? 
        <DeleteModal data={this.state.tempData} saveBut={this.saveDelete} closeBut={this.closeDelete} /> : null}
      </React.Fragment>
    );
  }
}

const List = props => {
  return (
    <React.Fragment>
      <table className="table table-default text-center" >
        <thead>
          <tr>
            <th>Name</th><th>Type</th><th>Gender</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(
            (data,index) => <tr key={index}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.gender}</td>
              <td className="d-block d-md-none">
              <button className="btn btn-block btn-secondary">Menu</button>
              </td>
              <td className="d-none d-md-block">
                <button onClick={props.useDetail.bind(this,{index,data})} className="btn btn-sm btn-block btn-primary mr-2">Detail</button>
                <button onClick={props.useEdit.bind(this,{index,data})} className="btn btn-sm btn-block btn-secondary mr-2">Edit</button>
                <button onClick={props.useDelete.bind(this,{index,data})} className="btn btn-sm btn-block btn-danger mr-2">Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
}