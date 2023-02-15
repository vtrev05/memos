import React from 'react'

const Multiplicacion = ({number}) => {
    console.log('Me renderizo')
    return (
      <div>{number * 2}</div>
    )
  }


const MultiplicacionMemo = React.memo(Multiplicacion,({
    prevProps,
    nextProps
}) => {
  if (prevProps.number !== nextProps.number) {
    return(false) 
  }
  return true
})

export default MultiplicacionMemo