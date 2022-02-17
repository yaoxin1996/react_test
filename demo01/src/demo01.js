import React, { Component, Fragment } from 'react'
import './demo01.css'

class Demo01 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: '',
      list: ['罗']
    }
  }
  render () {
    return (
      <Fragment>
        <div onKeyUp={this.enterAdd.bind(this)}>
          <input className='input' value={this.state.inputVal} onChange={this.getInput.bind(this)}></input>
          <button onClick={this.clickBtn.bind(this)}>add</button>
          <ul>
            {
              this.state.list.map((item, index) => {
                return <li key={item} onClick={this.delItem.bind(this, index)}>{item}</li>
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }
  getInput (e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  clickBtn (e) {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }
  delItem (i) {
    this.state.list.splice(i, 1)
    this.setState({
      list: this.state.list
    })
  }
  enterAdd (e) {
    if (e.keyCode == 13 && this.state.inputVal) {
      this.clickBtn()
    }
  }
}

export default Demo01