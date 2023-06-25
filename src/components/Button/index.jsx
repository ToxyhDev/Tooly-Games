import React from 'react'

export default function Button({
  id,
  className,
  textClassName,
  svgClassName,
  text,
  icon,
  click,
}) {
  return (
    <button key={id} className={`${className} button`} onClick={click}>
      {icon === undefined ? null : (
        <div
          className={`button__svg--center ${
            svgClassName !== undefined ? svgClassName : ''
          }`}
        >
          {icon}
        </div>
      )}

      {text !== undefined ? <p className={textClassName}>{text}</p> : undefined}
    </button>
  )
}
