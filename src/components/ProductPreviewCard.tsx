import iconCart from '../assets/icon-cart.svg'
import productMobileImg from '../assets/image-product-mobile.jpg'

export default function ProductPreviewCard() {
  return (
    <article className='bg-white rounded-lg overflow-hidden'>
      <figure>
        <img src={productMobileImg} alt="product-preview" />
      </figure>
      <div className='p-6 gap-2 flex flex-col'>
        <p className='text-xs uppercase tracking-[0.25rem] mb-1'>Perfume</p>
        <h1 className='font-title text-title font-bold text-very-dark-blue leading-none mb-1'>Gabrielle Essence Eau De Parfum</h1>
        <p className='text-paragraph my-1'>A flora, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className='flex items-center my-2 justify-start gap-5'>
          <p className='font-title text-title text-primary font-black'>$149.99</p>
          <p className='text-paragraph line-through text-xs'>$169.99</p>
        </div>
        <button className='bg-primary text-white rounded-md p-3 flex gap-3 items-center justify-center'>
          <img src={iconCart} alt="Cart icon" />
          <p className='font-bold'>Add to Cart</p>
        </button>
      </div>
    </article>
  )
}
