import React, {Component,createRef} from 'react';

export default class EditModal extends Component {
    constructor(props) {
      super(props);
      this.name = new createRef();
      this.type = new createRef();
      this.gender = new createRef();
    }
  
    saveState = () => {
      const value = {
        name:this.name.current.value,
        type:this.type.current.value,
        gender:this.gender.current.value
      };
      const index = this.props.data.index;
      return this.props.saveBut({index,value});
    }
  
    render() {
      const data = this.props.data.data;
      return (
        <div className="model-screen">
          <div className="model-content p-3 bg-light rounded">
              <input ref={this.name} className="form-control mb-2" placeholder={`name`} defaultValue={data.name} />
              <input ref={this.type} className="form-control mb-2" placeholder={`type`} defaultValue={data.type}  />
              <input ref={this.gender} className="form-control mb-2" placeholder={`gender`} defaultValue={data.gender}  />
              <button onClick={this.saveState} className="btn btn-primary mr-1">Edit</button>
              <button onClick={this.props.closeEdit} className="btn btn-danger">Close</button>
          </div>
        </div>
      );
    }
  }