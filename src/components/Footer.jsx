import Add from '../assets/Table-assets/Add.png'

const Footer = () => {
  return (
    <div className="w-[1440px] h-1  ">
      <div className="h-full w-full border-t flex border-[#EEE] items-center py-5 pl-8.5 bg-white relative bottom-4.5">
        <div className='py-2 px-4 border-t-2 text-[#3E5741] font-semibold border-[#4B6A4F] bg-[#E8F0E9]'>All Orders</div>
        <div className='py-2 px-4 text-[#757575]'>Pending</div>
        <div className='py-2 px-4 text-[#757575]'>Reviewed</div>
        <div className='py-2 px-4 text-[#757575]'>Arrived</div>
        <div className='pt-1 px-1'><img src={Add}  alt="" /></div> 
      </div>
    </div>
  )
}

export default Footer
