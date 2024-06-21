interface Props {
  name: string
  title: string
  quote: string
  image: string
}

function Card({ name, image, title, quote }: Props) {
  return (
    <article className='rounded-lg px-8 py-6 font-barlow-semi-condensed w-[max(327px,_calc(100%_-_3rem))] grid gap-4 xl:w-auto'>
      <div className='flex items-center gap-4'>
        <div className='card__img w-8 h-8 border-2 border-white rounded-full'>
          <img
            //src={new URL(`../assets/${image}`, import.meta.url).href}
            src={`/${image}`}
            alt={image.replace('./src/assets/', '')}
            className='rounded-full'
          />
        </div>
        <div className='grid text-xs'>
          <span className='card__name text-white font-semibold text-sm'>
            {name}
          </span>
          <span className='card_verified text-white/50 font-medium text-xs'>
            Verified Graduate
          </span>
        </div>
      </div>
      <h2 className='card__title text-white font-semibold text-xl'>{title}</h2>
      <p className=' card__quote text-white/70 font-medium text-[13px]'>
        " {quote} "
      </p>
    </article>
  )
}

export default Card
