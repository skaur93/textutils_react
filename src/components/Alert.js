import React from 'react'

function Alert(props) {

  const capitalize = (word) => {
    let aword = word.toLowerCase();
    return aword.charAt(0).toUpperCase()+aword.slice(1);
  }
  return (
   
    <div style={{height:'50px'}}>
     { props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {capitalize(props.alert.type)} : 
        {props.alert.message}
       </div>}
    </div>
   
  )
}

export default Alert
