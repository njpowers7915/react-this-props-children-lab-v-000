// Code ThemedDecoration Component Here
import React from 'react'

export default class ThemedDecorations extends React.Component {
  render () {
    const childrenWithClassName = React.Children.map(this.props.children,
    child => {
      return (
        <div className={this.props.theme}>
          <p>{child}</p>
        </div>
      )
    })
    return(
      <div className='themedDecorations'>
        {childrenWithClassName}
      </div>
    )
  }
}
