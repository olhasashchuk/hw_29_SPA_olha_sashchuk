import {useContext} from "react";
import {ThemeContext} from "../helpers/context.js";
import {Button} from "./todoComponents/Button.jsx";

function ChangeColor() {
    const [ color, setColor ] = useContext(ThemeContext);
    const handleClick = () => {
        setColor({
            colorBg: color.colorBg === '#FFFFFF' ? '#111827' : '#FFFFFF',
            colorFont: color.colorFont === '#333' ? '#D1D5DB' : '#333',
            colorBorder: color.colorBorder === '#000000' ? '#FFFFFF' : '#000000',
        })
    }

    return <Button className={"bg-gray-200 hover:bg-gray-300 active:bg-gray-200"} onClick={handleClick}>Toggle Color</Button>
}

export default ChangeColor;