import Image from 'next/image'
import logo from '../../../public/Logo.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-white py-16 px-6 font-raleway">
            <div className="max-w-7xl mx-auto">
                <div className='grid grid-cols-1 lg:flex lg:justify-between gap-y-10 md:space-y-0 relative'>
                    <div className='space-y-3'>
                        <Image
                            src={logo}
                            width={214}
                            height={1}
                            alt='logo MOC' />
                        <p className='text-sm font-normal text-[#4B5563] font-quicksand'>Learn Anytime, Grow Anytime</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16'>
                        <div className='space-y-4'>
                            <h1 className='font-raleway text-2xl font-semibold text-[#111827]'>Moklet Open Course</h1>
                            <div className='flex flex-col font-normal text-lg gap-y-4 text-[#4B5563]'>
                                <Link href="#" className='hover:text-blue-500'>Tentang Kami</Link>
                                <Link href="#" className='hover:text-blue-500'>Hubungi Kami</Link>
                                <Link href="#" className='hover:text-blue-500'>Kebijakan Privasi</Link>
                                <Link href="#" className='hover:text-blue-500'>Syarat Penggunaan</Link>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <h1 className='font-raleway text-2xl font-semibold text-[#111827]'>Menu Utama</h1>
                            <div className='flex flex-col font-normal text-lg gap-y-4 text-[#4B5563]'>
                                <Link href="#" className='hover:text-blue-500'>Beranda</Link>
                                <Link href="#" className='hover:text-blue-500'>Jelajahi</Link>
                                <Link href="#" className='hover:text-blue-500'>Tentang Kami</Link>
                            </div>
                        </div>
                    </div>
                <div className='lg:absolute lg:top-28'>
                    <h1 className='font-quicksand font-medium text-lg text-[#121212] lg:mt-7'>&copy; Lorem Ipsum 2024 Copyright</h1>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer