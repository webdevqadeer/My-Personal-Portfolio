import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'

export function App() {
  const [count, setCount] = useState(0)

  return (
 <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>  )
}
