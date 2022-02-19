import React, {Component, Fragment} from 'react'
import Demo01Item from './demo01_item'

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
        <div onKeyUp={this.keyup.bind(this)}>
          <input
            ref={(input) => this.input = input}
            value={this.state.inputVal}
            onChange={this.changeVal.bind(this)}></input>
          <button>Add</button>
          <ul>
            {
              this.state.list.map((item, index) => {
                {/**
                  return <li key={item}>{item}</li>
                */}
                return (
                  <Demo01Item
                    key={item}
                    content={item}
                    index={index}
                    delItem={this.delItem.bind(this)}
                    ></Demo01Item>
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }
  changeVal () {
    console.log(this.input);
    this.setState({
      inputVal: this.input.value
    })
  }
  keyup (e) {
    if (e.keyCode === 13) {
      this.setState({
        list: [...this.state.list, this.state.inputVal],
        inputVal: '',
      }, () => {
        console.log(this.state.list.length);
      })
    }
  }
  delItem (i) {
    this.state.list.splice(i, 1)
    this.setState({
      list: this.state.list
    })
  }

}

export default Demo01