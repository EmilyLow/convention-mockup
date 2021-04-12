import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Popover from '@material-ui/core/Popover';
import React from "react";
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Location from '@material-ui/icons/LocationOn';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import Subject from '@material-ui/icons/Subject';

// <Divider style={{width:'100%'}} light/>

function ContentPane({details}) {




    return(<EventDiv>
        <Grid container>
             <Grid item xs={12}> <Typography>{details.name}</Typography> </Grid>
         
             <Grid item xs={12}> <Divider light/> </Grid>

     

            { details.location != "" && <Grid item xs = {2}><Location/> </Grid>}
            { details.location != "" && <Grid item xs = {10}><Typography>{details.location}</Typography></Grid>}

            { details.speaker != "" && <Grid item xs = {2}><PeopleAlt/> </Grid>}
            { details.speaker != "" && <Grid item xs = {10}><Typography>{details.speaker}</Typography></Grid>}

            { details.summary != "" && <Grid item xs = {2}><Subject/> </Grid>}
            { details.summary != "" && <Grid item xs = {10}><Typography>{details.summary}</Typography></Grid>}
            
            {/* { details.speaker != "" && <Typography><PeopleAlt/> {details.speaker}</Typography>}
            
            { details.summary != "" && <Typography><Subject/> {details.summary}</Typography>} */}
        </Grid>
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