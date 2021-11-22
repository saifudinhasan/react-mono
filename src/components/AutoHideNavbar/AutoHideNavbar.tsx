import { ReactNode, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { useWindowScroll } from "@sh4/hooks"

interface Options {
  height: number
  children: ReactNode
  delay?: number
  className?: string
}

const AutoHideNavbar = ({height, children, className, delay = 0}: Options): JSX.Element => {

  const { direction } = useWindowScroll(delay)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (window.pageYOffset < height) setShow(true)
    if (direction === "down") setShow(false)
    if (direction === "up" || direction === undefined) setShow(true)
    return () => setShow(false)
  }, [direction, height])

  return (
    <Navbar show={show} height={height} className={className}>
      {children}
    </Navbar>
  )
}

export default AutoHideNavbar

const Navbar = styled.div<{ show: boolean, height: number }>`
  height: ${({height}) => `${height}px`};
  width: 100%;
  position: fixed;
  transition: .3s;
  ${({show, height}) => show 
    ? css`transform: translateY(0px);` 
    : css`transform: translateY(-${height}px);`
  }
`