import { useEffect, useRef } from 'react'
import './FloatingCircles.css'

type Circle = {
  x: number
  y: number
  vx: number
  vy: number
}

function FloatingCircles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const circles = Array.from(
      container.querySelectorAll<HTMLDivElement>('.circle')
    )

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const positions: Circle[] = circles.map(() => ({
      x: centerX + (Math.random() - 0.5) * 400,
      y: centerY + (Math.random() - 0.5) * 300,

      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
    }))

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    let mouseSpeed = 1
    let targetSpeed = 1

    let lastMouseX = mouseX
    let lastMouseY = mouseY

    let animationFrame: number

    const handleMouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - lastMouseX
      const deltaY = event.clientY - lastMouseY

      const distance = Math.sqrt(
        deltaX * deltaX + deltaY * deltaY
      )

      /*
       * Quanto mais rápido o mouse,
       * maior a velocidade dos círculos.
       */
      targetSpeed = Math.min(
        1 + distance * 0.15,
        8
      )

      mouseX = event.clientX
      mouseY = event.clientY

      lastMouseX = event.clientX
      lastMouseY = event.clientY
    }

    const animate = () => {
      /*
       * Aceleração mais perceptível
       */
      mouseSpeed +=
        (targetSpeed - mouseSpeed) * 0.08

      /*
       * Quando o mouse para,
       * volta gradualmente para a velocidade normal.
       */
      targetSpeed +=
        (1 - targetSpeed) * 0.025

      const width = window.innerWidth
      const height = window.innerHeight

      circles.forEach((circle, index) => {
        const position = positions[index]
        const size = circle.offsetWidth

        /*
         * Movimento
         */
        position.x += position.vx * mouseSpeed
        position.y += position.vy * mouseSpeed

        /*
         * Bordas
         */
        if (
          position.x <= -size ||
          position.x >= width
        ) {
          position.vx *= -1
        }

        if (
          position.y <= -size ||
          position.y >= height
        ) {
          position.vy *= -1
        }

        /*
         * Centro do círculo
         */
        const centerX = position.x + size / 2
        const centerY = position.y + size / 2

        /*
         * Distância do mouse
         */
        const dx = centerX - mouseX
        const dy = centerY - mouseY

        const distance = Math.sqrt(
          dx * dx + dy * dy
        )

        /*
         * Área de influência do mouse
         */
        const interactionRadius = 300

        if (
          distance < interactionRadius &&
          distance > 0
        ) {
          const force =
            (interactionRadius - distance) /
            interactionRadius

          /*
           * Repulsão mais forte
           */
          position.vx +=
            (dx / distance) *
            force *
            0.25

          position.vy +=
            (dy / distance) *
            force *
            0.25
        }

        /*
         * Limita a velocidade
         */
        const maxVelocity = 5

        position.vx = Math.max(
          -maxVelocity,
          Math.min(maxVelocity, position.vx)
        )

        position.vy = Math.max(
          -maxVelocity,
          Math.min(maxVelocity, position.vy)
        )

        circle.style.transform = `
          translate3d(
            ${position.x}px,
            ${position.y}px,
            0
          )
        `
      })

      animationFrame =
        requestAnimationFrame(animate)
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    animate()

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="floating-circles"
    >
      <div className="circle circle--small" />
      <div className="circle circle--medium" />
      <div className="circle circle--large" />
    </div>
  )
}

export default FloatingCircles