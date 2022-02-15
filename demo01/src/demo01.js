import React, {Component, Fragment} from "react";
class Demo01 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: '',
      list: ['一', '二']
    }
  }
  render () {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputVal} onChange={this.changeInput.bind(this)}/>
          <button onClick={this.addList.bind(this)}>增加</button>
          <ul>
            {
              this.state.list.map(item => {
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }
  changeInput (e) {
    console.log(this.state);
    this.setState({
      inputVal: e.target.value
    })
  }
  addList () {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
    console.log(this.state.list);
  }
}

export default Demo01