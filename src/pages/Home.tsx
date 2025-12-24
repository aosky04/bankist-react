import { useState } from 'react'

function Home({ msg }: { msg: string }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold text-red-400">{msg}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Button: {count}</button>
    </>
  )
}

export default Home
