import React, {Component,createRef} from 'react';
export default class CommonModal extends Component {
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
  
      return this.props.saveBut(value);
    }
  
    render() {
      return(
        <div className="model-screen">
          <div className="model-content p-3 bg-light rounded">
            <input ref={this.name} className="form-control mb-2" placeholder={`name`} />
            <input ref={this.type} className="form-control mb-2" placeholder={`type`} />
            <input ref={this.gender} className="form-control mb-2" placeholder={`gender`} />
            <button onClick={this.saveState} className="btn btn-primary mr-1">Create</button>
            <button onClick={this.props.closeBut} className="btn btn-danger">Close</button>
          </div>
        </div>
      );
    }
  }