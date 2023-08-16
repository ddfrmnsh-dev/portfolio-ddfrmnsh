import Image from 'next/image'

import Profile from  '../../public/profile.png'
import Button from '@/components/Button'

type Props = {}

export default function Page({}: Props) {
  return (
    <>
      <div className='container'>
        <div className='w-full self-center px=2'>
          <div className='relative mt-10'>
            <Image 
            src={Profile} 
            alt="Dede Firmansah"
            className='max-w-full mx-auto' 
            width={350}
            height={350}
            />
            <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fbbf24
                                  "
                  d="M43.4,-42.8C51,-35.8,48.3,-17.9,47.6,-0.7C46.9,16.5,48.2,33,40.6,44.9C33,56.8,16.5,64,2,62C-12.5,60,-25,48.8,-37.5,36.9C-50,25,-62.6,12.5,-62.7,-0.1C-62.7,-12.6,-50.3,-25.2,-37.8,-32.2C-25.2,-39.2,-12.6,-40.5,2.6,-43.2C17.9,-45.8,35.8,-49.7,43.4,-42.8Z"
                  transform="translate(100 100) scale(0.9)"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className='max-w-xl self-center px-4 my-5 justify-center'>
          <h1 className='text-base font-semibold text-primary md:text-xl'>
            Halo Semua ✌, saya
            <span className='block font-bold text-dark text-3xl mt-1 md:4xl'>
              Dede Firmansah
            </span>
          </h1>
          <h2 className='font-medium text-secondary text-lg mb-2 md:text-2xl'>
            Student & <span className='text-dark'>Content Creator</span>
          </h2>
          <p className='font-medium text-secondary mb-4 leading-relaxed'>
            Learning from scratch.
            <span className='text-dark font-bold'> Programming & Design.</span>
          </p>
          <Button name="Hubungi Saya" link=''/>
        </div>
        <div className='w-full px-4 mb-6'>
          <h4 className='font-bold uppercase text-primary text-2xl my-3'>
            Tentang Saya           
          </h4>
          <h2 className='font-bold text-dark text-xl md:text-2xl mb-5'>
            Deskripsi Singkat Mengenai Saya ✌ 😀
          </h2>
          <p className='font-medium text-secondary max-w-2xl text-md text-justify'>
            Seorang Fresh Graduate, Jurusan Information System dengan pengalaman
            mengembangkan Website dengan CMS/LMS ataupun dengan framework. Saya
            merupakan pribadi yang cermat dan teliti dalam bekerja. Bisa cepat
            beradaptasi dengan pekerjaan tim maupun individual.
          </p>
        </div>
        <div className='w-full px-4 mb-6'>
          <h3 className='font-semibold text-dark text-2xl mb-4'> 
            Mari berteman dengan saya !
          </h3>
          <p className='font-medium text-secondary max-w-2xl text-md text-justify'>
            Tak kenal maka Tak sayang, pepatah yang sering kita dengar dalam
            kehidupan sehari - hari. Saya Dede Firmansah Mahasiswa Universita Budi
            Luhur dan saya berasal dari{" "}
            <span>
              <a 
              href="https://id.wikipedia.org/wiki/Kota_Tangerang"
              className="font-bold text-neutral-500">
                Kota Tangerang
              </a>
            </span>
            , Saya memiliki hobi berpetualang dari menyusuri Alam dan melakukan
            hiking di beberapa Gunung / Bukit.
          </p>
        </div>
      </div>
    </>
  )
}
