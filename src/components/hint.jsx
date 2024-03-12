import React,{useEffect, useRef, useState} from "react";

const Hint = (props) => {
    const [open,setOpen] = useState(false)
    const panel = useRef(null)
    useEffect(() => {
        if(open){
            const height = panel.current.scrollHeight; 
            panel.current.style.maxHeight = `${height}px`;
        }
        else{
            panel.current.style.maxHeight = 0;
        }
    },[open])
    return (
        <div style={{margin:'20px 0'}}>
            <button className="accordion" onClick={() => {
                setOpen(!open)
            }}><span>{props.title}</span><span className={open ? "material-symbols-rounded active" : "material-symbols-rounded"}>arrow_drop_up</span></button>
            <div ref={panel} className={`panel ${open ? 'open' : 'closed'}`}>
                <p>
{props.info}</p>
            </div>
        </div>
    )
}

export default Hint