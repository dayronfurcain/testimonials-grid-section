import { useState } from 'react'
import { data } from '../data'
import Card from './components/Card'

function App() {
  const [users] = useState(data)

  return (
    <main className='min-h-screen flex items-center  justify-center bg-[hsl(212.73,_44%,_95.1%)] '>
      <div className='grid gap-6 justify-items-center xl:grid-cols-4 xl:justify-items-stretch xl:w-[1106px] xl:h-[572px]'>
        {users.map((user) => (
          <Card {...user} key={user.id} />
        ))}
      </div>
    </main>
  )
}

export default App
