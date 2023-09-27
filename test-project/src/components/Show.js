import {Button} from "@mui/material";
import React from "react";

const Show = ({show}) => {
    return (
        show === true ? <h2>Showing true</h2> : <h2>Showing not true</h2>
    )
}

export default Show