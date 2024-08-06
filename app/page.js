'use client'
import Animation from './components/Animation';
import Wormhole from './components/Wormhole';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh'}}>
        <Animation/>
        <Wormhole width='800px' height='750px'/>
    </div>
  );
}
