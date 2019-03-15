import React, { Component } from 'react';

class ResultCalculator extends Component {
   
    render() {
       

        return (
            <div >
                <div className="calcultor-body">
                    <div className="button-sty">
                        <button name="(" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>(</button>
                        <button name="CE" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>CE</button>
                        <button name=")" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>)</button>
                        <button name="C" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>C</button><br />

                        <button name="1" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)} >1</button>
                        <button name="2" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>2</button>
                        <button name="3" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>3</button>
                        <button name="+" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>+</button><br />

                        <button name="4" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>4</button>
                        <button name="5" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>5</button>
                        <button name="6" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>6</button>
                        <button name="-" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>-</button><br />

                        <button name="7" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>7</button>
                        <button name="8" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>8</button>
                        <button name="9" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>9</button>
                        <button name="*" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>*</button><br />


                        <button name="." className="button clickbutton" onClick={e => this.props.calButton(e.target.name)} >.</button>
                        <button name="0" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>0</button>
                        <button name="=" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>=</button>
                        <button name="/" className="button clickbutton" onClick={e => this.props.calButton(e.target.name)}>÷</button><br />
                    </div>
                </div>
            </div>
        )
    }
}
export default ResultCalculator;