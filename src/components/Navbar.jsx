import PanelImg from '../assets/Navbar-assets/Panel.png'
import Arrow from '../assets/Navbar-assets/Chevron.png'
import IconFrame from '../assets/Navbar-assets/Icon frame.png'
import Search from '../assets/Navbar-assets/search2.png'
import Alert from '../assets/Navbar-assets/Alert.png'
import NotificationCount from '../assets/Navbar-assets/Notification-count.png'
import Ellipse from '../assets/Navbar-assets/Ellipse 1.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 mt-4  '>
            {/* Left Side */}
            <div className="flex gap-4 items-center">
                <img src={PanelImg} alt="Panel Image" className='w-4 h-4' />

                <div className="text-[#AFAFAF] flex items-center gap-1">
                    <span className='text-sm'>Workspace</span>
                    <img src={Arrow} alt="Arrow" className='w-3 h-3' />
                    <span className='text-sm'>Folder 2</span>
                    <img src={Arrow} alt="Arrow" className='w-3 h-3' />
                    <span className='text-[#121212] font-semibold text-sm'>Spreadsheet 3</span>
                    <img src={IconFrame} alt="Icon" className='w-5 h-5 mx-1' />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-1">
                <div className="bg-[#E2E2E2] flex items-center p-3 gap-2 rounded-md">
                    <img src={Search} alt="Search" className='w-4 h-4'/>
                    <span className='text-[#757575] text-xs'>Search within sheet</span>
                </div>

                <div className="flex items-center gap-1">
                    <img src={Alert} alt="Alert" className='w-6 h-6' />
                    <img src={NotificationCount} alt="NotoficationCount" className='h-4 w-4 absolute right-30 top-[19px]' />
                    <div className="flex items-center px-2 py-1.5 gap-2">
                        <img src={Ellipse} alt="Ellipse" className='h-7 w-7' />
                        <div className="flex flex-col space-y-[-5px] ">
                            <span className='text-xs'>John Doe</span>
                            <span className='text-[10px] text-[#757575]'>john.doe...</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar
