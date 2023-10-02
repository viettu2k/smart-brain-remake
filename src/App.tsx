import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PARTICLES_OPTIONS } from './const';
import Login from './pages/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <Login />,
  },
]);

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className='w-full h-full '>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={PARTICLES_OPTIONS}
      />
      <div className='w-full h-full'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
