import { getData } from "../../slices/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

export default function CardListRepo(){
    const data = useSelector(state => state.data.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
        console.log(data);
    }, [dispatch]);

    return(
        <div className="rounded-xl shadow-md bg-white-primary p-4 md:p-6 text-sm">
            <p className="font-bold text-blue-primary">List Repositori</p>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">No</th>
                        <th className="border px-4 py-2">Name Repo</th>
                        <th className="border px-4 py-2">Languge</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return(
                            <tr key={index} className="text-gray-icon">
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.name}</td>
                                <td className="border px-4 py-2">{item.language}</td>
                                <td className="border px-4 py-2">{item.private? 'Private': 'Public'}</td>
                                <td className="border px-4 py-2">
                                    <Link href={item.html_url}>
                                        <a>
                                            <p className="bg-blue-primary rounded-md p-2 font-bold md:mx-auto text-white text-xs">View </p> 
                                        </a>
                                    </Link>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p className="text-xs text-red-primary my-2 italic">*Repository with private status not shown </p>
        </div>
       
    )
}