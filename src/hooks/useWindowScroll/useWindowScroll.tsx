import { throttle } from "lodash"
import { useCallback, useEffect, useMemo, useState } from "react"

interface Scroll {
  x: number
  y: number
  direction: "up" | "down" | "right" | "left" | undefined
}

const useWindowScroll = (delay = 0): Scroll => {

  
  // Getter for actual X & Y position ...
  const getYOffset = useCallback((): number => window.pageYOffset, [])
  const getXOffset = useCallback((): number => window.pageXOffset, [])


  // The state ...
  const [scroll, setScroll] = useState<Scroll>({
    x: getXOffset(),
    y: getYOffset(),
    direction: undefined,
  })


  // Get current directional scroll ...
  const getScrollDirection = useCallback((prevScroll: Scroll) => {
    
    const xOffset = getXOffset() // actual X
    const yOffset = getYOffset() // actual Y
    const { x: prevX, y: prevY } = prevScroll // current X & Y from prevScroll state
    
    if (prevX !== undefined && prevY !== undefined && xOffset !== undefined && yOffset !== undefined) {
      if (prevY > yOffset) return "up"
      if (prevY < yOffset) return "down"
      if (prevX > xOffset) return "left"
      if (prevX < xOffset) return "right"
    }
  }, [getXOffset, getYOffset])


  // The scroll observer ...
  const scrollObserver = useCallback(() => {
    const xOffset = getXOffset()
    const yOffset = getYOffset()
      setScroll((prevScroll) => ({
        x: xOffset,
        y: yOffset,
        direction: getScrollDirection(prevScroll)
      }))
  }, [getYOffset, getXOffset, getScrollDirection])


  // Handle scroll observer with throttle or no ...
  const handleScroll = useMemo(() => delay > 0 
    ? throttle(scrollObserver, delay)
    : scrollObserver
  , [delay, scrollObserver])
  

  // Event Listener ...
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", scrollObserver)
  }, [handleScroll, scrollObserver])

  return scroll
}

export default useWindowScroll