import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello World
        <div className='button-container'>
          <Button type='success'>Success Button</Button>
          <Button type='warning'>Warning Button</Button>
          <Button type='error'>Error Button</Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'))
