import React  from "react";

import { withFirebase } from "../components/firebase";




const SignOut = ({firebase}) => (
    <div>
        <button type="button" onClick={firebase.doSignOut}>
            SignOut
        </button>
    </div>
)

export default withFirebase(SignOut) ;