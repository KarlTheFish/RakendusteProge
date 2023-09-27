import React, { useState } from "react"
import {Button} from "@mui/material";

const Math = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
            <h2 align="center">{count}</h2>
            <div className="Buttons">
                <Button variant="contained" sx={{margin: 1}} onClick={() => setCount(count - 100)}>-100</Button>
                <Button variant="contained" sx={{margin: 1}} onClick={() => setCount(count - 10)}>-10</Button>
                <Button variant="contained" sx={{margin: 1}} onClick={() => setCount(count - 1)}>-1</Button>
                <Button variant="contained" sx={{margin: 1}} onClick={() => setCount(count + 1)}>+1</Button>
                <Button variant="contained" sx={{margin: 1}} onClick={() => setCount(count + 10)}>+10</Button>
                <Button variant="contained" sx={{margin: 1}} onClick={() => setCount(count + 100)}>+100</Button>
            </div>
            </div>
        </>
    )
}

export default Math