import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Loader from './components/Loader'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='h-screen w-screen'>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Canvas>
    </div>
  </React.StrictMode>,
)
