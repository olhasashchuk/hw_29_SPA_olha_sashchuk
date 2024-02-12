import Link from "./Link.jsx";
function Head () {
    return (
        <div className="relative text-center">
            <video className="absolute -z-10 top-0 left-0 w-full h-full object-cover" autoPlay muted loop preload="auto">
                <source src="../../public/video/video_bg.mp4" type="video/mp4"/>
            </video>
            <div className="flex flex-col items-center justify-between gap-20">

                <div className="text-white text-xl font-semibold py-10">
                    <p>"Programming is the art of telling a computer what to do." — Donald Knuth</p>
                </div>
                <div>
                    <h1 className="text-6xl text-white">OLHA SASHCHUK</h1>
                    <p className="text-white text-xl font-semibold py-10">FRONT-END DEVELOPER</p>
                </div>
                {/*<a href="#main">scroll down</a>*/}
                <Link
                    href="#about"
                    className="text-white py-10 text-xs transition ease-in duration-300"
                >
                    scroll down
                </Link>
            </div>
        </div>
    )
}
export default Head