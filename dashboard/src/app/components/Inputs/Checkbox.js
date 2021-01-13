import React from 'react';

const Checkbox = ({ label, value, onChange }) => {
  return(
    <div className="Checkbox">
      <input type="checkbox" checked={value} onChange={onChange} />
      <span>&nbsp;{label}</span>
    </div>
  )
}

export default Checkbox;