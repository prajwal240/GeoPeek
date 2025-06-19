import Image from 'next/image';
import Homeimg from '../public/images/home.svg';
import Homelist from './components/homelist';


export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center mt-[2px] mb-[2px]'>
        <h3 className="text-[6vw] font-bold text-emerald-900">Welcome to GeoPeek</h3>
      </div>
      <div className='flex justify-center items-center'>
        <Image src={Homeimg} alt='homeimage' className='mx-[2px] mb-[2px] w-[90vw] h-auto rounded-md border-[1px] border-emerald-900' />
      </div>
      <div className='flex justify-center items-center mt-[2px] mb-[2px]'>
        <h5 className="text-[5vw] font-bold text-emerald-900">Know about the world</h5>
      </div>
      <div className='flex justify-center text-center mx-[2px] mb-[2px]'>
        <p>Welcome to GeoPeek, your quick and reliable source for detailed country information. Explore key facts like languages, capital cities, currencies, and flags. Learn about each country's region, size, and whether it’s landlocked or coastal. Discover if a nation is part of the United Nations and easily locate it on Google Maps. Whether for study, travel, or curiosity, GeoPeek brings the world closer to you.</p>
      </div>
      <Homelist/>
      <div className='flex justify-center items-center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15012476.797226146!2d86.1663593!3d23.2738!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749397229117!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='mx-[2px] mb-[2px] w-[90vw] h-[50vh] rounded-md border-[1px] border-emerald-900' />
      </div>
    </>
  );
}
