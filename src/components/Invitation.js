// Code Invitation Component Here
import React from 'react'

export default class Invitation extends React.Component {
  render () {
    const children = React.Children.map(this.props.children,
    child => {
      return (
        <div>{child}</div>
      )
    })
    return(
      <div id='invitation'>
        <h1>You&#39;ve been invited!</h1>
          {children}
      </div>
    )
  }
}
