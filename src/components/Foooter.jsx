import routers from "../helpers/routers.js";
import Link from "./Link.jsx";
function Footer () {
    return (
        <footer className="py-4 px-10 bg-[#111827] text-[#D1D5DB]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-4 cursor-pointer">
                        <img src='../../public/images/foto.jpg' className="w-12 h-12 rounded-full" />
                        <div>
                            <Link to={routers.main} className="text-base font-bold">
                                OLHA SASHCHUK
                            </Link>
                        </div>
                    </div>
                    <div className="lg:flex lg:items-center">
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/olha-sashchuk-0a428623a"
                                    type="button"
                                    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#00A4E5] hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-full w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/olhasashchuk"
                                    type="button"
                                    className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-auto h-full w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link className="" href="mailto:olha.sashchuk@gmail.com">Email: olha.sashchuk@gmail.com</Link>
                            </li>
                            <li>
                                <Link className="" href="tel:+4593889161">Phone: +45 93 88 91 61</Link>
                            </li>
                            <li>
                                <Link className="" href="#">Address: Frederiksberg, 2000, Denmark</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to={routers.main} className=''>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={routers.courses} className=''>
                                    Courses and Certificates
                                </Link>
                            </li>
                            <li>
                                <Link to={routers.todo} className=''>
                                    Todo
                                </Link>
                            </li>
                            <li>
                                <Link to={routers.contact} className=''>
                                    Contact
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
                <p className='text-sm mt-1'>© 2023 All Rights Reserved.</p>
            </div>

        </footer>


        )

}

export default Footer