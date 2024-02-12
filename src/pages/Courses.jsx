import Link from "../components/Link.jsx";
import {useContext} from "react";
import {ThemeContext} from "../helpers/context.js";
function Courses() {
    const [color] = useContext(ThemeContext)
    return (
        <div className="container mx-auto flex-grow" style={{color: color.colorFont}}>
                <div className="flex flex-col items-center py-8">
                    <h2 className="text-lg font-bold uppercase text-[#333]">Courses and Certificates</h2>
                    <span className="mt-2.5 w-12 h-0.5 bg-[#00A4E5]"></span>
                </div>
                <div className="flex items-center justify-between gap-5 flex-wrap my-16" >
                    <div
                        style={{backgroundColor: color.colorBg}}
                        className="h-[600px] shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto grow shrink basis-2/5">
                        <div className="h-80 overflow-hidden">
                            <img src="../../public/images/certificate_front-end.png" className="w-full h-full object-contain" />
                        </div>
                        <div className="px-4 py-6">
                            <h3 className=" text-xl font-bold">Front-End Basic</h3>
                            <Link href="https://ithillel.ua/" className=" text-m font-bold hover:text-[#00A4E5] mt-2">Hillel IT School, Ukraine</Link>
                            <p className="text-[#00A4E5] text-sm">June 2023 – August 2023</p>
                            <ul className="mt-2 text-sm text-gray-500">
                                <h3>Learning technologies:</h3>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SASS</li>
                                <li>Bootstrap</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{backgroundColor: color.colorBg}}
                        className="h-[600px] shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto grow shrink basis-2/5">
                        <div className="h-80 overflow-hidden">
                            <img src="../../public/images/certificate_redi.png" className="w-full h-full object-contain" />
                        </div>
                        <div className="px-4 py-6">
                            <h3 className=" text-xl font-bold">Introduction to Front-End Development</h3>
                            <Link href="https://www.redi-school.org/redi-school-copenhagen" className=" text-m font-bold hover:text-[#00A4E5] mt-2">ReDi School of Digital Integration, Denmark</Link>
                            <p className="text-[#00A4E5] text-sm">March 2023 – Lune 2023</p>
                            <ul className="mt-2 text-sm text-gray-500">
                                <h3>Learning technologies:</h3>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{backgroundColor: color.colorBg}}
                        className="h-[600px] shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto grow shrink basis-2/5">
                        <div className="h-80 overflow-hidden">
                            <img src="../../public/images/brainnest.png" className="w-full h-full object-contain" />
                        </div>
                        <div className="px-4 py-6">
                            <h3 className=" text-xl font-bold">Quality Assurance</h3>
                            <Link href="https://www.brainnest.consulting/" className=" text-m font-bold hover:text-[#00A4E5] mt-2">Brainnest, Germany</Link>
                            <p className="text-[#00A4E5] text-sm">January 2023 – February 2023</p>
                            <ul className="mt-2 text-sm text-gray-500">
                                <h3>Learning technologies:</h3>
                                <li>Fundamental knowledge of testing theory</li>
                                <li>Creating test documentation</li>
                                <li>Static and dynamic analysis of QA technical documentation</li>
                                <li>MySQL</li>
                                <li>UNIX</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{backgroundColor: color.colorBg}}
                        className="h-[650px] bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto grow shrink basis-2/5">
                        <div className="h-80 overflow-hidden">
                            <img src="../../public/images/certificate_qa.png" className="w-full h-full object-contain" />
                        </div>
                        <div className="px-4 py-6">
                            <h3 className=" text-xl font-bold">Quality Assurance Manual</h3>
                            <Link href="https://www.brainnest.consulting/" className=" text-m font-bold hover:text-[#00A4E5] mt-2">Hillel IT School, Ukraine</Link>
                            <p className="text-[#00A4E5] text-sm">June 2022 – October 2022</p>
                            <ul className="mt-2 text-sm text-gray-500">
                                <h3>Learning technologies:</h3>
                                <li>Testing theory</li>
                                <li>Software development methodologies (Agile, Waterfall, V-models)</li>
                                <li>Desktop/Web/Mobile application testing</li>
                                <li>MySQL</li>
                                <li>Jira</li>
                                <li>API testing (SOAP, REST, JSON, HTTP/HTTPS)</li>
                                <li>Used tools: Postman, SoapUI, Katalon, Jmeter, Charles</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Courses