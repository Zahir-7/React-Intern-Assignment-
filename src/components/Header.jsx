import React from 'react'
import ChevronDouble from '../assets/Header-assets/Chevron Double.png'
import Eye from '../assets/Header-assets/Eye.png'
import ArrowSort from '../assets/Header-assets/Arrow Sort.png'
import ArrowAutofit from '../assets/Header-assets/Arrow Autofit.png'
import Filter from '../assets/Header-assets/Filter.png'
import Share from '../assets/Header-assets/Share.png'
import ArrowDownload from '../assets/Header-assets/Arrow Download.png'
import ArrowUpload from '../assets/Header-assets/Arrow Upload.png'
import ArrowSplit from '../assets/Header-assets/Arrow Split.png'

const Header = () => {
    return (
        <div className='flex items-center justify-between mx-4 mt-2'>

            {/* Left Side */}
            <div className="flex gap-2 items-center text-[#121212] ">
                <div className='flex x-2 gap-1 items-center'>
                    <span className='text-sm'>Tool bar</span>
                    <img src={ChevronDouble} alt="Chevron Image" className='w-4 h-4 ' />
                </div>
                <span className='w-px h-6 text-[#EEE] border'></span>
                <div className="flex items-center gap-1 ">
                    <img src={Eye} alt="Eye" className='h-5 w-5 ml-2' />
                    <span className='ml-2 mr-3 text-sm'>Hide Fields</span>
                    <img src={ArrowSort} alt="ArrowSort" className='h-5 w-5' />
                    <span className='mr-3 text-sm'>Sort</span>
                    <img src={Filter} alt="ArrowSort" className='h-5 w-5 ml-2' />
                    <span className='mr-3 text-sm'>Filter</span>
                    <img src={ArrowAutofit} alt="ArrowSort" className='h-5 w-5 ml-2' />
                    <span className='mr-3 text-sm'>Cell view</span>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 text-[#545454] ">
                <button className='cursor-pointer flex items-center border border-[#EEE] bg-[#FFF] pt-2 pb-2 rounded-md'>
                    <img src={ArrowDownload} alt="ArrowDownload" className='w-5 h-5 ml-3' />
                    <span className='ml-1 mr-3 text-sm'>Import</span>
                </button>
                <button className='cursor-pointer flex items-center border border-[#EEE] bg-[#FFF] pt-2 pb-2 rounded-md'>
                    <img src={ArrowUpload} alt="ArrowUpload" className='w-5 h-5 ml-3' />
                    <span className='ml-1 mr-3 text-sm'>Export</span>
                </button>
                <button className='cursor-pointer flex items-center border border-[#EEE] bg-[#FFF] pt-2 pb-2 rounded-md'>
                    <img src={Share} alt="Share" className='w-5 h-5 ml-3' />
                    <span className='ml-1 mr-3 text-sm'>Share</span>
                </button>
                <button className='cursor-pointer flex items-center border border-[#EEE] bg-[#4B6A4F] px-6 pt-2 pb-2 rounded-md'>
                    <img src={ArrowSplit} alt="ArrowSplit" className='w-5 h-5 ml-3' />
                    <span className='ml-1 mr-3 text-[#FFF] text-sm'>New Action</span>
                </button>
            </div>

        </div>
    )
}

export default Header
