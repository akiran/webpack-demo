import React from 'react'
import classnames from 'classnames'
import './button.css'

export function LargeButton(props) {
  return <Button>{props.children}</Button>
}

export default function Button(props) {
  const className = classnames(props.className||'', 'button', {
    'button-success': props.type === 'success',
    'button-warning': props.type === 'warning',
    'button-error': props.type === 'error'
  })
  return <button className={className}>{props.children}</button>
}
