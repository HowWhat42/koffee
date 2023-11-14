import { useEffect, useState } from 'react'
import bgCoffee from './assets/bg-cafe.jpg'
import Card from './components/Card'
import vector from './assets/vector.svg'
import { twMerge } from 'tailwind-merge'

export interface Coffee {
  id:        number;
  name:      string;
  image:     string;
  price:     string;
  rating:    number;
  votes:     number;
  popular:   boolean;
  available: boolean;
}


function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([])
  const [filter, setFilter] = useState<string>('All Products')

  const fetchCoffees = async () => {
    const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    const data = await response.json()
    setCoffees(data)
  }

  useEffect(() => {
    fetchCoffees()
  }, [])

  useEffect(() => {
    if (filter === 'All Products') {
      setFilteredCoffees(coffees)
    } else {
      setFilteredCoffees(coffees.filter((coffee) => coffee.available))
    }
  }, [coffees, filter])

  return (
    <div className='flex justify-center'>
      <img src={bgCoffee} alt='bgCoffee' className='fixed top-0 -z-20' />
      <div className='bg-grey relative w-full max-w-md lg:max-w-2xl xl:max-w-6xl p-16 my-20 xl:my-40 rounded-2xl z-0 overflow-hidden'>
          <img src={vector} alt="vector" className='absolute top-8 right-[-12%] lg:right-[14%] xl:right-[28%]' style={{zIndex: -1}} />
          <div className='flex flex-col items-center z-10'>
            <h1 className='text-light text-3xl text-center'>Our Collection</h1>
            <p className='text-primary text-base my-4 max-w-sm lg:max-w-lg text-center'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className='flex gap-8 mb-8'>
              <button className={twMerge('text-light px-4 py-2 rounded-lg hover:bg-primary/80', filter === 'All Products' && 'bg-primary')} onClick={() => setFilter('All Products')}>All Products</button>
              <button className={twMerge('text-light px-4 py-2 rounded-lg hover:bg-primary/80', filter === 'Available' && 'bg-primary')}  onClick={() => setFilter('Available')}> Available Now</button>
            </div>
            <div className='flex flex-col lg:grid grid-cols-2 xl:grid-cols-3 gap-10'>
              {filteredCoffees.map((coffee) => (
                <Card key={coffee.id} coffee={coffee} />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
