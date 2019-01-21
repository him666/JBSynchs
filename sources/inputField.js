import React from 'react'

const InputField = ({name, label, onChange, placeholder, required, value, maxLength, alpha, alphanum, autoFocus, type, className}) => {
  let handleChange = (e) => {
    onChange(e)
  }
  
  return (
    <div>
      <input
		autoFocus={autoFocus}
		type={type}
		name={name}
		id={name}
		className={className}
		placeholder={placeholder}
		value={value}
		maxLength={maxLength}
		autoComplete="off"
		onChange={handleChange} />
    </div>
  )
}

export default InputField;