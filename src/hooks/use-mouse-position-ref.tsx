import { useEffect, useRef } from "react"

interface MousePosition {
  x: number
  y: number
}

export function useMousePositionRef() {
  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -((e.clientY / window.innerHeight) * 2 - 1)
      
      mousePositionRef.current = { x, y }
    }

    const handleMouseLeave = () => {
      mousePositionRef.current = { x: 0, y: 0 }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, []) // Remove containerRef dependency since we're using window

  return mousePositionRef
}