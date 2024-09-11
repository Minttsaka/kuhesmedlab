"use client"

import React, { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Html } from '@react-three/drei'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import * as THREE from 'three'
import { HelpCircle, Group, Search, Book, Zap } from 'lucide-react'

interface FeatureProps {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  link: string;
  position: [number, number, number];
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, color, title, description, link, position }) => {
  const [hovered, setHovered] = useState(false)
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1
      mesh.current.rotation.y = Math.cos(state.clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={mesh}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? color : 'white'} />
      </mesh>
      <Html distanceFactor={10}>
        <Card className="w-64 bg-black/50 backdrop-blur-md border-none">
          <CardContent className="p-4">
            <Icon className="h-8 w-8 mb-2" style={{ color }} />
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-sm text-gray-300 mb-4">{description}</p>
            <Button asChild variant="outline" size="sm">
              <a href={link} className="no-underline">Explore</a>
            </Button>
          </CardContent>
        </Card>
      </Html>
    </group>
  )
}

const FloatingParticles = () => {
  const count = 1000
  const mesh = useRef<THREE.Points>(null!)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      mesh.current.geometry.attributes.position.array[i3 + 1] = particlesPosition[i3 + 1] + Math.sin(time + particlesPosition[i3]) * 0.1
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" />
    </points>
  )
}

const Scene = () => {
  const { camera } = useThree()
  camera.position.z = 10

  const features: FeatureProps[] = [
    {
      icon: HelpCircle,
      color: '#10B981',
      title: 'Support',
      description: 'Connect with resources and expertise.',
      link: "/support",
      position: [-4, 2, 0]
    },
    {
      icon: Group,
      color: '#3B82F6',
      title: 'Forum',
      description: 'Discuss latest developments and trends.',
      link: "/community/feed",
      position: [-2, -2, 2]
    },
    {
      icon: Search,
      color: '#8B5CF6',
      title: 'Research',
      description: 'Drive innovation in medical lab science.',
      link: "/mw/research",
      position: [2, 2, -2]
    },
    {
      icon: Book,
      color: '#FBBF24',
      title: 'Survey',
      description: 'Build advanced survey forms.',
      link: "/survey",
      position: [4, -2, 0]
    },
    {
      icon: Zap,
      color: '#F97316',
      title: 'Collaboration',
      description: 'Real-time global collaboration.',
      link: "/signin",
      position: [0, 3, 3]
    },
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingParticles />
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </>
  )
}

export default function BeautifulCard() {
  return (
    <div className="w-full h-screen relative">
      <Canvas>
        <Scene />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-4xl font-bold text-black text-opacity-80 mb-2">MLS Scientist Platform</h1>
        <p className="text-xl text-gray-300">Explore our Solutions</p>
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <Badge variant="secondary" className="text-xs font-extralight">
          Kuhesmedlab standing at the forefront
        </Badge>
      </div>
    </div>
  )
}