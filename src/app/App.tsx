import { lazy, Suspense } from 'react'
import {
  BrowserRouter, Link, Route, Routes
} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Link to="/farm_animal">Farm Animals 🐄</Link>
      <p>Yee haw</p>
    </div>
  )
}

// Lazy load ComponentB so that the build only includes
const ComponentB = lazy(async () => await import('./ComponentB'))

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading moos...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/farm_animal" element={<ComponentB />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
