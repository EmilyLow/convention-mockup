import styled from "styled-components";


function Event({details}) {

    // console.log("Event created");
    // console.log(details);

    return(
        <EventStyle details={details}>
            <Label>{details.name}</Label>
        </EventStyle>
    );
}


const EventStyle = styled.div`
    grid-column: ${(props) => props.details.startCol} / span ${(props) => props.details.span};
    grid-row: ${(props) => (props.details.startTime -9) * 4 + 2} / span ${(props) => ((props.details.endTime - props.details.startTime) * 4)};
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