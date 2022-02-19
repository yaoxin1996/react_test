import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Demo01Item extends Component {
  constructor (props) {
    super(props)
    this.delItem = this.delItem.bind(this)
  }
  render() { 
    return (
      <li onClick={this.delItem.bind(this)}>{this.props.content}</li>
    )
  }
  delItem () {
    this.delItem = this.props.delItem()
  }
}

Demo01Item.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  delItem: PropTypes.func
}
 
export default Demo01Item;