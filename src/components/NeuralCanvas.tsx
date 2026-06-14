import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Animated neural-network backdrop: drifting nodes connected by faint
 * emerald synapses that brighten as nodes near each other. Pure canvas,
 * no dependencies, and fully disabled when reduced motion is preferred.
 */
export function NeuralCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let frame = 0

    const ACCENT = '0, 227, 143'
    const LINK_DISTANCE = 150

    const seedNodes = () => {
      const count = Math.min(64, Math.floor((width * height) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seedNodes()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.35
            ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `rgba(${ACCENT}, 0.7)`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      frame = requestAnimationFrame(draw)
    }

    resize()

    if (reduceMotion) {
      // Render a single static frame instead of animating.
      draw()
      cancelAnimationFrame(frame)
    } else {
      frame = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}
