import React from 'react'
import useFirestore from './hooks/useFireStore';

const ImageGrid = () => {
    const {docs} = useFirestore('images');

    return(
        <div>
            {docs && docs.map(doc => (
                    <div key={doc.id}>
                        <img src={doc.url } alt ="upload"/>
                    </div>
           ) )}
        </div>

    )
}

export default ImageGrid;