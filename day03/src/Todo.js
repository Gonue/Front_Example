import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Checkbox, IconButton, Input, InputBase, ListItem, ListItemSecondaryAction, ListItemText, useStepContext } from "@mui/material";
import { useState } from "react";
import DeleteOutline from '@mui/icons-material/DeleteOutline'

function Todo({item}) {
    const [readOnly, setReadOnly] = useState(true);
    const [titleData, setTitleData] = useState(item.title);

    const deleteItemHandler = (e)=>{

    }

    return (<>
        <ListItem>
            <Checkbox checked={item.done} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <ListItemText>
                <InputBase
                    type="text" 
                    inputProps={{"aria-label":"naked", readOnly: readOnly}}
                    id={item.id}
                    name={item.id}
                    multiline={true}
                    fullWidth={true}
                    onChange={(e)=>{setTitleData(e.target.value)}}
                    value={titleData}></InputBase>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteItemHandler}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </>);
}

export default Todo;