import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Float } from '@react-three/drei'

function Model({ modelPath, scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(modelPath)
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.7
    }
  })

  return (
    <primitive
      ref={meshRef}
      object={scene.clone()}
      scale={scale}
      rotation={rotation}
    />
  )
}

const Tech3DCard = ({ icon }) => {
  return (
    <div className='bg-black-100 border border-black-50 hover:border-zinc-600 rounded-2xl p-5 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-xl group min-h-[280px]'>
      <div className='w-full h-44 relative'>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#4cc9f0" />
          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
              <Model
                modelPath={icon.modelPath}
                scale={icon.scale}
                rotation={icon.rotation}
              />
            </Float>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
          </Suspense>
        </Canvas>
      </div>

      <div className='text-center mt-2'>
        <h4 className='text-white font-bold text-lg group-hover:text-cyan-400 transition-colors'>
          {icon.name}
        </h4>
        <p className='text-xs text-white-50 mt-0.5'>{icon.role}</p>
      </div>
    </div>
  )
}

export default Tech3DCard
