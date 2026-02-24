'use client'

import { useEffect, useRef } from 'react'

interface ParticleData {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  alpha: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0
    let animId: number
    const particles: ParticleData[] = []

    function createParticle(): ParticleData {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.05,
      }
    }

    function resize() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
    }

    function loop() {
      ctx!.clearRect(0, 0, W, H)

      // Ambient gold blob top-left
      const grd = ctx!.createRadialGradient(W * 0.15, H * 0.2, 0, W * 0.15, H * 0.2, W * 0.4)
      grd.addColorStop(0, 'rgba(0,212,255,0.07)')
      grd.addColorStop(1, 'transparent')
      ctx!.fillStyle = grd
      ctx!.fillRect(0, 0, W, H)

      // Ambient amber blob bottom-right
      const grd2 = ctx!.createRadialGradient(W * 0.85, H * 0.7, 0, W * 0.85, H * 0.7, W * 0.35)
      grd2.addColorStop(0, 'rgba(167,139,250,0.05)')
      grd2.addColorStop(1, 'transparent')
      ctx!.fillStyle = grd2
      ctx!.fillRect(0, 0, W, H)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          Object.assign(p, createParticle())
        }
        ctx!.save()
        ctx!.globalAlpha = p.alpha
        ctx!.fillStyle = '#00d4ff'
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.restore()
      }

      animId = requestAnimationFrame(loop)
    }

    resize()
    for (let i = 0; i < 80; i++) particles.push(createParticle())

    window.addEventListener('resize', resize)
    loop()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
