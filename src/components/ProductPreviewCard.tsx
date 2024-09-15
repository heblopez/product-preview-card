import iconCart from '../assets/icon-cart.svg'
import productMobileImg from '../assets/image-product-mobile.jpg'
import productDesktopImg from '../assets/image-product-desktop.jpg'

export default function ProductPreviewCard() {
  return (
    <article className='bg-white rounded-lg overflow-hidden max-w-[425px] mx-auto md:max-w-[600px] md:flex md:items-stretch md:justify-center md:gap-4'>
      <figure className='md:self-stretch md:w-1/2'>
        <img src={window.innerWidth >= 768 ? productDesktopImg : productMobileImg} alt="product-preview" className='md:w-full md:h-full md:object-cover' />
      </figure>
      <div className='p-6 gap-2 flex flex-col md:w-1/2 md:self-center'>
        <p className='text-xs uppercase tracking-[0.25rem] mb-1'>Perfume</p>
        <h1 className='font-title text-title font-bold text-very-dark-blue leading-none mb-1'>Gabrielle Essence Eau De Parfum</h1>
        <p className='text-paragraph my-1'>A flora, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className='flex items-center my-2 justify-start gap-5'>
          <p className='font-title text-title text-primary font-black'>$149.99</p>
          <p className='text-paragraph line-through text-xs'>$169.99</p>
        </div>
        <button className='bg-primary text-white rounded-md p-3 flex gap-3 items-center justify-center hover:bg-primary-hover'>
          <img src={iconCart} alt="Cart icon" />
          <p className='font-bold'>Add to Cart</p>
        </button>
      </div>
    </article>
  )
}
