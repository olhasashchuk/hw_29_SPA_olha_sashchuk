import {useContext} from "react";
import {ThemeContext} from "../helpers/context.js";

function About() {
    const [color] = useContext(ThemeContext)
    return (
        <div id="about" className="bg-gray-50 w-full rounded overflow-hidden my-16" style={{color: color.colorFont, backgroundColor: color.colorBg}}>
            <div className="flex flex-col items-center py-8">
                <h2 className="text-lg font-bold uppercase">about me</h2>
                <span className="mt-2.5 w-12 h-0.5 bg-[#00A4E5]"></span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                <div className="lg:col-span-2 py-10 px-6">
                    <h2 className="text-3xl font-bold">Welcome to my digital space!</h2>
                    <p className="mt-4 text-sm">I am a beginner IT specialist with expertise in Front-End Development.</p>
                    <p className="mt-4 text-sm">My journey started at Hillel IT School in Ukraine in 2022, where I learned about Quality Assurance. Later, I explored testing theory at Brainnest in Germany.</p>
                    <p className="mt-4 text-sm">As part of the study of tested software, I got interested in Front-End Development. In 2023 this leading me to the ReDi School of Digital Integration (Denmark), where I successfully finished the course “Introduction to Front-End Development”. There, I learned the basics of JavaScript, HTML, and CSS.</p>
                    <p className="mt-4 text-sm">Wanting to learn more, I joined an advanced Front-End Development course at Hillel IT School. I studied a variety of topics, including JavaScript, React, Redux, Node.js, MongoDB, Git, AJAX, and JQuery.</p>
                    <p className="mt-4 text-sm">Before my technical journey, I worked as an Independent Consultant, orchestrating the creation of investment funds on the Ukrainian stock market. My consultancy ventures spanned various sectors, including construction, agriculture, finance, insurance, and innovative technologies. I provided legal support, reorganized entities, and ensured the highest standards of quality control. I also led the Corporate Department at LLC ASSET MANAGEMENT COMPANY "ELLIOTT," where I managed teams and provided legal support for investment projects. </p>
                    <p className="mt-4 text-sm">Follow along with me as I continue to learn and grow in the exciting world of technology!</p>
                </div>
                <img src="../../public/images/foto.jpg" className="w-full h-full object-cover shrink-0 p-2" />
            </div>
        </div>

    )
}

export default About