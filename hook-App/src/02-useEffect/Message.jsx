import { useEffect } from "react"

export const Message= () => {

    useEffect(() => {
      
        window.addEventListener('mousemove', (event) => {
            console.log(event);
        })
    
      return () => {
        
      }
    }, [])
    
    
  return (
    <>
        <h3>Usuario ya existente</h3>
    </>
  )
}
