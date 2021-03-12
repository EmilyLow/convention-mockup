import styled from "styled-components";

import testData from "../testData";
import Event from "./Event";

function Schedule() {

    let hours = [];

    let {settings} = testData;

    for (let i = 0; i < settings.dayNum; i++) {
       for (let j = 0; j < settings.hourNum; j++) {
           //Note! Changing from 0 start to 1 start here.
           //Consider if this should be done elsewhere, based off how Date() works. 
           //Removing that for now
        hours.push(<Hour day={i} hour={j}/>)
     }
    }

    let hourLabels = [];
    for (let i = 0; i < settings.hourNum; i++) { 
        hourLabels.push(<HourLabel hour = {i}> {militaryToStan(i + settings.startHour)}</HourLabel>);
    }

    function militaryToStan (milHour) {
        if (milHour <= 12) {
            return "" + milHour + " AM";
        }
        else {
            return "" + (milHour - 12) + " PM";
        }
    }


    //Check overlap function
    //Give column based on overlap
    //Maybe give a length property based off of number of rows?
    console.log("Settings:", settings)

    return(
        
        <ScheduleContainer settings={settings} num={3}> 
            <DayLabel day={0}> 
                <DayH>Fri</DayH>
                <DayH>7</DayH>
            </DayLabel>
            <DayLabel day={1}> 
                <DayH>Sat</DayH>
                <DayH>8</DayH>
            </DayLabel>
            <DayLabel day={2}> 
                <DayH>Sun</DayH>
                <DayH>9</DayH>
            </DayLabel>
            {hourLabels}
            {hours}
            {testData.events.map(listing => {
                return <Event details = {listing}/>;
            })}
        </ScheduleContainer>
    );
}

export default Schedule;

// grid-template-columns: 50px repeat(18, 32px);
// grid-template-columns: 50px repeat(${(props) => props.dayNum * 3}, 32px);
//  grid-template-columns: 50px repeat(calc(12 * ${(props) => props.dayNum}), 32px);
const ScheduleContainer = styled.div`
    display: grid;
   console.log(props.dayNum);
   // grid-template-columns: 50px repeat(${(props) => props.dayNum * 3}, 32px);
    grid-template-columns: 50px repeat(calc(12 * ${(props) => props.settings.dayNum}), 32px);
    grid-template-rows: 80px repeat(${(props) => props.settings.hourNum * 4}, 10px);

  
`;

const Hour = styled.div`

    grid-column-start: ${(props) => props.day * 6 + 2};
    grid-column-end: span 6;
    grid-row-start: ${(props) => props.hour *4 + 2};
    grid-row-end: span 4;

    outline: 1px solid gray;
    margin-top: 1px;
    margin-left: 1px;

`

const HourLabel = styled.div`

    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: ${(props) => props.hour *4 + 2};
    grid-row-end: span 4;

    // border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;




    background: 
    linear-gradient(grey, grey) top right / 50% 1px ;
    background-repeat:no-repeat;



`;

const DayLabel = styled.div`

    grid-column-start: ${(props) => props.day * 6 + 2};
    grid-column-end: span 6;
    grid-row-start: 1;
    grid-row-end: span 1;

    

    background: 
    linear-gradient(grey, grey)  bottom left / 1px 50% ;
   background-repeat:no-repeat;

   display: flex;
   flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

 
`

const DayH = styled.h3`

    margin: 0;
`;