import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";

const EpicForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [myForm, setMyForm] = useState(null);

    const saveFields = event => {
        setMyForm(previous => ({
            previous,
            [event.target.name]: event.target.value
        }))
    }

    useEffect(() => {
        return () => {} //Puhastab ära funktsiooni väärtuse
    }, [])

    const submitForm = event => {
        event.preventDefault()
    }

    return <form onSubmit={submitForm}>
        <Box sx={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <TextField required id="outlined-required" label="Name" onChange={event => setName(event.target.value)} sx={{backgroundColor: "white"}}/>
            <TextField required id="outlined-required" label="Email" onChange={event => setEmail(event.target.value)} sx={{backgroundColor: "white"}}/>
            <Button type="submit" variant="contained" onClick={event => saveFields()}>Submit</Button>
        </Box>
    </form>
}

export default EpicForm;