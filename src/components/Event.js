import styled from "styled-components";


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

  

    return(
        <EventStyle details={details} startTime = {startTime} endTime = {endTime} length = {length}>
            <Label>{details.name}</Label>
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