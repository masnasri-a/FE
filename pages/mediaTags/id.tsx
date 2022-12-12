import ButtonFile from "../components/buttonFile";
import InputCheck from "../components/inputCheck";
import TableThreeRow from "../components/tableThree";

const MediaTagID = () => {
    return(
        <>
        <div className="mediaTagsMenu">
            <div className="upload">
                <ButtonFile />
            </div>
            <div className="checkerData">
                <div className="row">
                    <div className="col-5">
                        <InputCheck placeholder="Check the source" title="Check" />
                    </div>
                    <div className="col-7">
                        <InputCheck placeholder="Enter the new tags and separate them with a semicolon (;)." title="Update" />
                    </div>
                </div>
            </div>
            <TableThreeRow type="id" />
        </div>
    </>
        )
}
export default MediaTagID;