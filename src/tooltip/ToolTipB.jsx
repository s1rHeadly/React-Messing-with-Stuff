import React, { useState } from 'react'


const ToolTipB = ({text, children}) => {

  const [isVisible, setIsVisible] = useState(false);

  return (
      <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(prevState => !prevState)}
      onMouseLeave={() => setIsVisible(prevState => !prevState)}
      >
        {children}
        {isVisible &&  <div className="tooltip">{text}</div>}
      </div>
  )
}

export default ToolTipB