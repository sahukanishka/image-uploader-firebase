import React,{useState} from "react";
import ProgressBar from './progressbar';
import {withFirebase} from "./firebase";

const UploaderBox = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ["image/png","image/jpeg"];

    const chnageHandler = e => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError("");
        }
        else{
            setFile(null)
            setError("pls select valid image/png")
        }
    }
    return(
        <form>
            <input type="file" onChange={chnageHandler}/>
            <div>
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file}/>}
            </div>
        </form>
    )
}

export default withFirebase(UploaderBox);


