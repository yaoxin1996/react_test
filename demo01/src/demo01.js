import React, { Component, Fragment } from 'react'
import './demo01.css'

class Demo01 extends Component {
  constructor (prop) {
    super(prop)
    this.state = {
      inputVal: '',
      list: ['罗', '飞', '大', '魔', '王']
    }
  }
  render () {
    return (
      <Fragment>
        {/* 注释 */}
        <div  onKeyUp={this.addVal.bind(this)}>
          <label htmlFor='Luofei'>罗飞</label>
          <input id='Luofei' className='input' onChange={this.changeVal.bind(this)} value={this.state.inputVal}></input>
          <button onClick={this.addVal.bind(this)}>add</button>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <li
                    key={item + index}
                    onClick={this.delItem.bind(this, item)}
                    dangerouslySetInnerHTML={{ __html: item }}
                    >
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }
  changeVal (e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  addVal (e) {
    if ((e.keyCode == 13 || e._reactName === 'onClick') && this.state.inputVal !== '') {
      this.setState({
        list: [...this.state.list, this.state.inputVal],
        inputVal: ''
      })
    }
  }
  delItem (e) {
    console.log(e);
    let arr
    if (this.state.list.length > 0) {
      arr = this.state.list.filter(item => {
        return item != e
      })
    }
    this.setState({
      list: arr
    })
  }
}

export default Demo01