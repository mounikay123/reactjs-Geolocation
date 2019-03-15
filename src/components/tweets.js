import React, { Component } from "react";
// import GettingDetails from '../components/functionalComExample'
class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [],
            names: ''
        }
    }
  
    handleSubmit = (event) => {
        event.preventDefault();
        const { names, input } = this.state;
        if (!names) {
            alert("please add something ")
        }
        else if (input.indexOf(names) > -1) {
            alert("allready exists")
            this.setState({names:''})
        }
        else {
            this.setState((prevState) => ({ input: prevState.input.concat(names) ,names:''}))
        }


    }
    handleRemove = () => {
        this.setState(() => ({ input: [] }))
    }

    particularClick = (index) => {
        this.setState((pre) => ({ input: pre.input.filter(val => val !== index),names:"" }))
    }
    render() {

        return (
            <div>
                <button type="button" className="btn btn-lg btn-primary align-center">What Should I Do</button>
                <div className="panel ">
                    <div className="panel-header options-bac col-md-12">
                        <div className="col-md-6">
                            <label className="pull-left">Your Options</label>
                        </div>
                        <div className="col-md-6">
                            <button type="button" className="btn btn-sm btn-light pul-right align-center" onClick={this.handleRemove}>Remove All</button>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div><form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.names} name="option" onChange={(event) => this.setState({ names: event.target.value })} />
                            <button type="submit" className="btn btn-xs btn-primary" >Add Options</button>
                        </form>
                            <div>
                                {
                                    this.state.input.map((val, i) => {
                                        return (
                                            <ul key={i}>
                                                <div className="container contain"  >
                                                    {val}
                                                    <button type="button" onClick={() => this.particularClick(val)}>remove</button>
                                                </div>
                                            </ul>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
                {/*<div>
                    <GettingDetails test6={this.state.input}  test8={this.handleRemove}/>
                </div>*/}
            </div>
        )
    }
}

export default Tweet;