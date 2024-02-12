import routers from "../helpers/routers.js";
import Link from "./Link.jsx"
import ChangeColor from "./ChangeColor.jsx";
import {useContext} from "react";
import {ThemeContext} from "../helpers/context.js";
function Header() {
    const [color] = useContext(ThemeContext)
    return (
        <header id="header" className='shadow-md' style={{backgroundColor: color.colorBg, color: color.colorFont}}>
            <div className="container mx-auto">
                <div className='flex flex-wrap items-center justify-between gap-4 py-4 relative min-h-[70px]'>
                    <div className='flex gap-4 items-center'>
                        <Link to={routers.main} className="text-base font-bold">
                            OLHA SASHCHUK
                        </Link>
                        <ChangeColor/>
                    </div>
                    <ul id="collapseMenu" className='lg:!flex lg:space-x-4 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
                        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                            <Link to={routers.main} className=''>
                                Home
                            </Link>
                        </li>
                        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                            <Link to={routers.courses} className=''>
                                Courses and Certificates
                            </Link>
                        </li>
                        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                            <Link to={routers.todo} className=''>
                                Todo
                            </Link>
                        </li>
                        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                            <Link to={routers.contact} className=''>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>


    )
}

export default Header

// <header className="flex justify-between align-items-center">
//     <div>OLHA SASHCHUK</div>
// <ul className="flex gap-5">
//     <li>
//         <Link href="#">Home</Link>
//     </li>
//     <li>
//         <Link href="/aboutme">About me</Link>
//     </li>
//     <li>
//         <Link href="/courses">Courses and Certificates</Link>
//     </li>
//     <li>
//         <Link href="/todo">Todo</Link>
//     </li>
//     <li>
//         <Link href="/contact">Contact</Link>
//     </li>
// </ul>
// </header>