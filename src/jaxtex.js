import React from 'react'
import MathJax from 'react-mathjax'

function TeX(props) {
  return <MathJax.Node inline formula={props.formula}/>
}

export default TeX

