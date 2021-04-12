import styled from "styled-components";
import Popover from '@material-ui/core/Popover';
import React from "react";
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import Location from '@material-ui/icons/LocationOn';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import Subject from '@material-ui/icons/Subject';

// <Divider style={{width:'100%'}} light/>

function ContentPane({details}) {




    return(<EventDiv>
          <p>{details.name}</p>
            <Divider light/>
            { details.location != "" && <p><Location/>{details.location}</p>}
            { details.speaker != "" && <p><PeopleAlt/>{details.speaker}</p>}
            { details.summary != "" && <p><Subject/>{details.summary}</p>}
            
            
            {/* <button>Test</button> */}
    </EventDiv>)
}

const EventCard = styled(Card)`
    margin: 5px;

`;

const EventDiv = styled.div`
    margin: 5px;

`;



export default ContentPane;