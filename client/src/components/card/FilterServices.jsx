import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';

export default function FilterServices(props) {
    const { setPopup } = props;
    const [ open, setOpen ] = useState(false);
    const [ star, setStar ] = useState(false);

    return (
        <>
            <div>
                <div>
                    Filter By:
                </div>
                <ClearIcon onClick={(e)=> setPopup(prevPopup => !prevPopup)}/>
            </div>
            <div>
                <label>Open Now</label>
                <input 
                    id="open-now"
                    type="checkbox"
                    name="open-now"
                    value={open}
                    onChange={(e)=> setOpen(prevOpen => !prevOpen)}
                />
            </div>
            <div>
                <label>4 star +</label>
                <input 
                    id="4-star"
                    type="checkbox"
                    name="4-star"
                    value={star}
                    onChange={(e)=> setStar(prevStar => !prevStar)}
                />
            </div>
        </>
    )
}
