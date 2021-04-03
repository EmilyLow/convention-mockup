import styled from "styled-components";
import Popover from '@material-ui/core/Popover';
import React from "react";


function Event({details}) {

    // console.log("Event created");
    // console.log(details);

    let startTime = details.startTime.getHours() +(details.startTime.getMinutes() /60);
    let endTime = details.endTime.getHours() + (details.endTime.getMinutes() / 60);
    let length = endTime - startTime;

    // console.log(details.name);
    // console.log("Start time: " + startTime);
    // console.log("Endtime: " + endTime);
    // console.log("Length: " + length);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const divRef = React.useRef();
//     const handleClick = (event) => {
//     //   setAnchorEl(divRef.current);
//     setAnchorEl(event.currentTarget);
// }
//     function handleClose() {
//         setAnchorEl(null);
//       }
  
//       const open = Boolean(anchorEl);
//     const id = open ? "simple-popover" : undefined;

    return(
        <EventStyle details={details} startTime = {startTime} endTime = {endTime} length = {length}>
            <Label>{details.name}</Label>
            {/* <Popover 
                 id={id}
                 open={open}
                 anchorEl={anchorEl}
                 onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}>               
            The content of the Popover.
            </Popover> */}
        </EventStyle>
    );
}


const EventStyle = styled.div`
    grid-column: ${(props) => props.details.startCol} / span ${(props) => props.details.span};
    grid-row: ${(props) => (props.startTime -9) * 4 + 2} / span ${(props) => (props.length * 4)};
    background-color: ${(props) => props.details.color};

    display: flex;
    justify-content: center;

   // margin-left: 1px;
   //border: 1px solid black;
   margin: 1px;
   
  
`;

const Label = styled.p`
  font-size: 14px;
  text-align: center;

`;

export default Event;