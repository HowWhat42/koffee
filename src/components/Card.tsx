import Star from '../assets/Star.svg'
import Star_fill from '../assets/Star_fill.svg'
import { Coffee } from '../App'

const Card = ({ coffee }: { coffee: Coffee }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='relative'>
        <img src={coffee.image} alt='coffeeImage' className='rounded-xl' />
        {coffee.popular && <p className='absolute top-2 left-2 text-dark text-[10px] px-2 py-1 bg-accent rounded-full'>Popular</p>}
      </div>
      <div className='flex justify-between items-center'>
        <h3 className='text-light text-base'>{coffee.name}</h3>
        <p className='text-dark text-xs bg-success px-2 py-1 rounded-md'>{coffee.price}</p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          {coffee.votes > 0 ? <img src={Star_fill} alt='star' /> : <img src={Star} alt='empty star' />}
          <p className='text-light text-sm'>{coffee.rating} {coffee.votes > 0 ? <span className='text-primary'>({coffee.votes} votes)</span> : <span className='text-primary'>No ratings</span>}</p>
        </div>
        {coffee.available ? null : <p className='text-sm text-danger'>Sold out</p>}
      </div>
    </div>
  )
}

export default Card