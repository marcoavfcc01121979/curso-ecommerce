import React from 'react';

const InputSimples = ({ type, label, value, onChange }) => {
  return(
    <div className="InputSimples">
      <label>{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputSimples;