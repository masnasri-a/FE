import { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";

const TableThreeRow = (props:any) => {

    const [rowName, setRowName] = useState(["source","MediaTags"])
    const [data, setData] = useState([
        {
            "source": "kompas",
            "mediaTags": ["indonesia", "kompas", "media"]
        }, {
            "source": "idn",
            "mediaTags": ["indonesia", "idn", "media"]
        }
    ])

    useEffect(()=>{
        if (props.type == "all"){
            setRowName(["source","MediaTags"])
        }else if(props.type == "id"){
            setRowName(["Id","MediaTags"])
        }
    })

    const handleDelete = (index: number, e: any) => {
        console.log(index);
        console.log(e);
        setData(data.filter((v, i) => i !== index));
    }

    return (
        <div className="tableData">
            <table className="table">
                <thead className="bgDark">
                    <tr>
                        <th scope="col" style={{ "width": "20%","textAlign":"center" }}>{rowName[0]}</th>
                        <th scope="col" style={{ "width": "70%","textAlign":"center" }}>{rowName[1]}</th>
                        <th scope="col" style={{ "width": "10%","textAlign":"center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((detail: any, index) => {
                            let mediaTagsTable: any[] = [];
                            detail.mediaTags.map((detailMedia: any, index: number) => {
                                mediaTagsTable.push(
                                    <div key={index} className="mediaTagsForm">
                                        {detailMedia}
                                    </div>
                                )
                            })
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="sourceForm">
                                            {detail.source}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            {mediaTagsTable}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="buttonForm" onClick={(e) => handleDelete(index, e)}>
                                        <FiTrash />
                                    </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="submitTable">
                <button className="buttonCheck">
                    Submit
                </button>
            </div>
        </div>
    )
}
export default TableThreeRow;