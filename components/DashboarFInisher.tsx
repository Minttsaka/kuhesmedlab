"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion'
import * as THREE from 'three'
import Banner from './Banner'

// ... (Previous components: FloatingElement, GlowingButton, ParallaxText, useVelocity, wrap remain unchanged)
const FloatingElement = ({ children }: { children: React.ReactNode }) => {
  const y = useMotionValue(0)
  const x = useMotionValue(0)

  useAnimationFrame((t) => {
    y.set(Math.sin(t / 1000) * 10)
    x.set(Math.cos(t / 1000) * 10)
  })

  return (
    <motion.div style={{ x, y }} className="inline-block">
      {children}
    </motion.div>
  )
}

const GlowingButton = ({ children }: { children: React.ReactNode }) => (
  <button className="relative px-6 py-3 font-bold text-white rounded-full group">
    <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
    <span className="relative">{children}</span>
  </button>
)

const ParallaxText = ({ children, baseVelocity = 100 }: { children: string, baseVelocity?: number }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="text-5xl font-bold text-white flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span className="block mr-6">{children} </span>
        <span className="block mr-6">{children} </span>
        <span className="block mr-6">{children} </span>
        <span className="block mr-6">{children} </span>
      </motion.div>
    </div>
  )
}

const useVelocity = (value: any) => {
  const velocityX = useMotionValue(0)
  const previousValue = useRef(value.get())

  useAnimationFrame(() => {
    const currentValue = value.get()
    const delta = currentValue - previousValue.current
    const velocity = delta / (1 / 60) // Assuming 60 FPS
    velocityX.set(velocity)
    previousValue.current = currentValue
  })

  return velocityX
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
    const material = new THREE.MeshNormalMaterial()
    const torusKnot = new THREE.Mesh(geometry, material)
    scene.add(torusKnot)

    camera.position.z = 30

    const animate = () => {
      requestAnimationFrame(animate)
      torusKnot.rotation.x += 0.01
      torusKnot.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    animate()
    setIsLoaded(true)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-0" style={{ opacity: isLoaded ? 0.2 : 0 }} />
}

export default function DashboardFinisher() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const y = useTransform(scrollYProgress, [0, 1], [0, -500])

  return (
    <div className="relative  py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <ThreeBackground />
      <Banner />
    </div>
  )
}