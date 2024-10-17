import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='flex justify-between pt-4'>
            <div className='flex items-center gap-12'>
                <Image
                    src={"/me.jpg"}
                    width={400}
                    height={400}
                    alt='me'
                    className='rounded-full h-[72px] w-[72px]' />
                <div>Abdishakoor</div>
            </div>
            <ul className='flex items-center gap-8'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header