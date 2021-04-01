let testData = {

    settings: {
        dayNum: 3,
        hourNum: 13,
        startHour: 9,
        startDate: new Date(2021, 4, 7),
        startDate2: 7,
        days: ["Fri", "Sat", "Sun"]
    },

    events: [
        {
            name: "Opening Ceremony",
            startTime: new Date(2021, 4, 7, 17, 30),
            endTime: new Date(2021, 4, 7, 19, 0),
            startTime2: 17.5,
            endTime2: 19,
            day: 1,
            startCol: 2,
            span: 12,
            color: "#A3F8A3" //green
        }, 
        {
            name: "Meet and Greet",
            startTime: new Date(2021, 4, 7, 19, 0),
            endTime: new Date(2021, 4, 7, 21, 0),
            startTime2: 19,
            endTime2: 21,
            day: 1,
            startCol: 2,
            span: 6,
            color: "#A8EBF3" //blue


        },
        {
            name: "VIP Salon",
            startTime: new Date(2021, 4, 7, 19, 0),
            endTime: new Date(2021, 4, 7, 21, 0),
            startTime2: 19,
            endTime2: 21,
            day: 1,
            startCol: 8,
            span: 6,
            color: "#F3B0A8" //pink
        },
     
        {
            name: "Merchants",
            startTime: new Date(2021, 4, 8, 9, 30),
            endTime: new Date(2021, 4, 8, 15, 0),
            startTime2: 9.5,
            endTime2: 15,
            day: 2,
            startCol: 14,
            span: 6,
            color: "#A8EBF3" //blue
        },
        {
            name: "Talk",
            startTime: new Date(2021, 4, 8, 10, 0),
            endTime: new Date(2021, 4, 8, 11, 30),
            startTime2: 10,
            endTime2: 11.5,
            day: 2,
            startCol: 20,
            span: 6,
            color: "#ffec6e" //yellow
        },
        {
            name: "Food Trucks",
            startTime: new Date(2021, 4, 8, 11, 30),
            endTime: new Date(2021, 4, 8, 12, 30),
            startTime2: 11.5,
            endTime2: 12.5,
            day: 2,
            startCol: 20,
            span: 6,
            color: "#B0E5B2" //pale green
        },
        {
            name: "Talk",
            startTime: new Date(2021, 4, 8, 12, 30),
            endTime: new Date(2021, 4, 8, 14, 0),
            startTime2: 12.5,
            endTime2: 14,
            day: 2,
            startCol: 20,
            span: 6,
            color: "#ffec6e" //yellow
        }, 
        {
            name: "Talk",
            startTime: new Date(2021, 4, 8, 15, 0),
            endTime: new Date(2021, 4, 8, 17, 0),
            startTime2: 15,
            endTime2: 17,
            day: 2,
            startCol: 14,
            span: 4,
            color: "#ffec6e" //yellow
        },
      
        {
            name: "Talk",
            startTime: new Date(2021, 4, 8, 15, 0),
            endTime: new Date(2021, 4, 8, 17, 0),
            startTime2: 15,
            endTime2: 17,
            day: 2,
            startCol: 18,
            span: 4,
            color: "#ffec6e" //yellow
        },
        {
            name: "Talk",
            startTime: new Date(2021, 4, 8, 16, 0),
            endTime: new Date(2021, 4, 8, 18, 0),
            startTime2: 16,
            endTime2: 18,
            day: 2,
            startCol: 22,
            span: 4,
            color: "#ffec6e" //yellow
        },
        {
            name: "Open Panel",
            startTime: new Date(2021, 4, 8, 17, 0),
            endTime: new Date(2021, 4, 8, 18, 30),
            startTime2: 17,
            endTime2: 18.5,
            day: 2,
            startCol: 14,
            span: 8,
            color: "#B0E5B2" //pale green
        },
        {
            name: "Talk",
            startTime: new Date(2021, 4, 8, 19, 0),
            endTime: new Date(2021, 4, 8, 20, 30),
            startTime2: 19,
            endTime2: 20.5,
            day: 2,
            startCol: 14,
            span: 6,
            color: "#ffec6e" //yellow
        },
        {
            name: "Open Bar",
            startTime: new Date(2021, 4, 8, 19, 0),
            endTime: new Date(2021, 4, 8, 21, 30),
            startTime2: 19,
            endTime2: 21.5,
            day: 2,
            startCol: 20,
            span: 6,
            color: "#A8EBF3" //blue
        },
        {
            name: "Merchants",
            startTime: new Date(2021, 4, 9, 9, 30),
            endTime: new Date(2021, 4, 9, 15, 0),
            startTime2: 9.5,
            endTime2: 15,
            day: 3,
            startCol: 26,
            span: 6,
            color: "#A8EBF3" //blue
        },
        {
            name: "Food Trucks",
            startTime: new Date(2021, 4, 9, 11, 30),
            endTime: new Date(2021, 4, 9, 12, 30),
            startTime2: 11.5,
            endTime2: 12.5,
            day: 3,
            startCol: 32,
            span: 6,
            color: "#B0E5B2" //pale green
        },
        {
            name: "Food Trucks",
            startTime: new Date(2021, 4, 9, 11, 30),
            endTime: new Date(2021, 4, 9, 12, 30),
            startTime2: 11.5,
            endTime2: 12.5,
            day: 3,
            startCol: 32,
            span: 6,
            color: "#B0E5B2" //pale green
        },
        {
            name: "Presentations, Group 1",
            startTime: new Date(2021, 4, 9, 15, 0),
            endTime: new Date(2021, 4, 9, 16, 30),
            startTime2: 15,
            endTime2: 16.5,
            day: 3,
            startCol: 26,
            span: 6,
            color: "#F3B0A8" //pink
        },
        {
            name: "Presentations, Group 2",
            startTime: new Date(2021, 4, 9, 15, 0),
            endTime: new Date(2021, 4, 9, 16, 30),
            startTime2: 15,
            endTime2: 16.5,
            day: 3,
            startCol: 32,
            span: 6,
            color: "#F3B0A8" //pink
        },
        {
            name: "Presentations, Group 3",
            startTime: new Date(2021, 4, 9, 16, 30),
            endTime: new Date(2021, 4, 9, 18, 0),
            startTime2: 16.5,
            endTime2: 18,
            day: 3,
            startCol: 32,
            span: 6,
            color: "#F3B0A8" //pink
        },
        {
            name: "Talk",
            startTime: new Date(2021, 4, 9, 16, 30),
            endTime: new Date(2021, 4, 9, 17, 30),
            startTime2: 16.5,
            endTime2: 17.5,
            day: 3,
            startCol: 26,
            span: 6,
            color: "#ffec6e" //yellow
        },
        {
            name: "Open Panel",
            startTime: new Date(2021, 4, 9, 17, 30),
            endTime: new Date(2021, 4, 9, 19, 0),
            startTime2: 17.5,
            endTime2: 19,
            day: 3,
            startCol: 26,
            span: 6,
            color: "#B0E5B2" //pale green
        },
        {
            name: "Talk",
            startTime: new Date(2021, 4, 9, 18, 30),
            endTime: new Date(2021, 4, 9, 19, 0),
            startTime2: 18,
            endTime2: 19,
            day: 3,
            startCol: 32,
            span: 6,
            color: "#ffec6e" //yellow
        },
        {
            name: "Awards",
            startTime: new Date(2021, 4, 9, 19, 0),
            endTime: new Date(2021, 4, 9, 21, 0),
            startTime2: 19,
            endTime2: 21,
            day: 3,
            startCol: 26,
            span: 12,
            color: "#A3F8A3" //green
        },

    ]

};

export default testData;
   