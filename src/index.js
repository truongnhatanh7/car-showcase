import { Canvas } from '@react-three/fiber'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='h-screen w-screen'>
      <Canvas>
        <App />
      </Canvas>
    </div>
  </React.StrictMode>,
)
