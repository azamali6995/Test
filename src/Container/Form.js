import React, { Component } from "react";
import { addToCart, removeToCart, updateToCart } from "../redux/Action/action";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      Name: "",
      Id: "",
      Update: false,
      UpdateData : { } 
    };
  }

  handleClick = () => {
    this.props.addToStore(this.state);
    this.setState({ Name: "", Id: "" });
  };
  deleteHandler =(Id)=>{
      this.props.removeToCart(Id);
  }
  editHandler = (data)=>{
    this.setState ({Name: data.Name , Id: data.Id, Update:true, UpdateData : data })
  }
  UpdateHandler = (data) => {
    const data1 = {Name: this.state.Name, Id: this.state.Id}
    this.props.UpdateHandler(data1)
  }

  render() {
    return (
      <div>
        <form>
        <input    
            type="text"
            name="Id"
            value={this.state.Id}
            placeholder="Enter Id"
            onChange={(e) => this.setState({ Id: e.target.value })}
          />
          <br />
          <br />
          <input
            type="text"
            name="Name"
            value={this.state.Name}
            placeholder="Enter Name"
            onChange={(e) => this.setState({ Name: e.target.value })}
          />
          <br />
          <br />
          <br />
          <br />
          {this.state.Update === true? 
          <button type = 'button' onClick ={()=> this.UpdateHandler(this.state.UpdateData)}>Update</button>:
          <button type='button' onClick={() => this.handleClick()}>Submit</button>
          }
        </form>

        <h5>All post </h5>

        {this.props.formData &&
          this.props.formData.formData.map((data) => (
            <div>
              <h4>{data.Name}</h4>
              <h4>{data.Id}</h4>

              <button onClick ={()=> this.editHandler(data)}>Edit</button>
              <button onClick ={()=> this.props.deleteHandler(data.Id)} >Delete</button>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formData: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToStore: (data) => dispatch(addToCart(data)),
  deleteHandler :(data) => dispatch(removeToCart(data)),
  UpdateHandler : (data) => dispatch(updateToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);