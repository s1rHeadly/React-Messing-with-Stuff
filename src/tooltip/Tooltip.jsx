import React, { useRef, useState, useEffect } from 'react'

const Tooltip = ({children, text}) => {

  const [isVisible, setIsVisible] = useState(false);
  const toolRef = useRef(null)

  useEffect(() => {
   const toolContainer = toolRef.current;

   toolContainer.addEventListener("mouseover", function(){
    setIsVisible(true)
   })

   toolContainer.addEventListener("mouseout", function(){
    setIsVisible(false)
   })

   return () => {
    toolContainer.removeEventListener("mouseover", function(){
      setIsVisible(true)
     })
  
     toolContainer.removeEventListener("mouseout", function(){
      setIsVisible(false)
     })
   }
  }, [isVisible]);

  return (

    <div
      className='tooltip-container' ref={toolRef}>
      <span class="material-symbols-outlined">
info
</span>
        {isVisible &&  <div className="tooltip">
            {text}
        </div>
     }
    </div>
  )
}

export default Tooltip