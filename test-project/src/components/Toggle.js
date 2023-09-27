import React from "react"
import {Button} from "@mui/material";

const Toggle = ({toggleShow}) => {
    return (
        <Button variant="contained" onClick={toggleShow}>
            Toggle
        </Button>
    )
}

export default Toggle