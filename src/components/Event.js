import styled from "styled-components";


function Event({details}) {

    console.log("Event created");
    console.log(details);

    return(
        <EventStyle details={details}>
            <p>{details.name}</p>
        </EventStyle>
    );
}


const EventStyle = styled.div`
    grid-column: ${(props) => props.details.startCol} / span ${(props) => props.details.span};
    grid-row: ${(props) => (props.details.startTime -9) * 4 + 1} / span ${(props) => ((props.details.endTime - props.details.startTime) * 4)};
    background-color: ${(props) => props.details.color};
`;

export default Event;