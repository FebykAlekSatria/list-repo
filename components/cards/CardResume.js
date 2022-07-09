import { BsFillHeartFill } from "react-icons/bs";
import {SiJavascript, SiPhp, SiPython} from "react-icons/si";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useSelector } from "react-redux";


export default function CardResume(){
    const data = useSelector(state => state.data.data);
    const isLoading = useSelector(state => state.data.isLoading);

    const js = data.filter(item => item.language === "JavaScript").length;
    const python = data.filter(item => item.language === "Python").length;
    const php = data.filter(item => item.language === "PHP").length;
    const total = data.filter(item => item.visibility === "public").length;

    return(
        <div className="rounded-xl shadow-md bg-white-primary p-4 md:p-6 text-sm mb-4 ">
            {isLoading ? <div className="text-center">Loading...</div> :
                <>
                    <p className="font-bold text-blue-primary">Resume Repository</p>
                    <div className="flex flex-wrap gap-2 my-2">
                        <button className="flex bg-orange-primary text-white rounded px-2 py-1 gap-1"><MdVisibility className="my-auto"/>{total}</button>
                        <button className="flex bg-orange-primary text-white rounded px-2 py-1 gap-1"><MdVisibilityOff className="my-auto"/>6</button>
                        <button className="flex bg-blue-secondary text-white rounded px-2 py-1 gap-1"> <SiPhp className="my-auto"/>{php}</button>
                        <button className="flex bg-red-primary text-white rounded px-2 py-1 gap-1"><SiPython className="my-auto"/>{python}</button>
                        <button className="flex bg-blue-400 text-white rounded px-2 py-1 gap-1"> <SiJavascript className="my-auto"/>{js}</button>
                    </div>
                </>
            }
          </div>
    )
}