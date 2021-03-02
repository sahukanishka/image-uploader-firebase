import React from "react";
import useStorage from "./hooks/useStorage";




const ProgressBar =  ({file,setFile}) => {

    const {url , progress } = useStorage(file);
    console.log(progress,url)

    return(
        <div>
            <h1>ProgressBar</h1>
        </div>
    )
}

export default ProgressBar;