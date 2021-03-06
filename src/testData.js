let testData = {

    settings: {
        dayNum: 3,
        hourNum: 10,
        startHour: 9,
        startDate: 7,
        days: ["Fri", "Sat", "Sun"]
    },

    events: [
        {
            name: "Opening Ceremony",
            startTime: 17.5,
            endTime: 19,
            day: 1,
            startCol: 2,
            span: 6,
            color: "#A3F8A3" //green
        }, 
        {
            name: "Meet and Greet",
            startTime: 19,
            endTime: 21,
            day: 1,
            startCol: 2,
            span: 3,
            color: "#A8EBF3" //blue


        },
        {
            name: "VIP Salon",
            startTime: 19,
            endTime: 21,
            day: 1,
            startCol: 5,
            span: 3,
            color: "#F3B0A8" //pink
        },
        {
            name: "Merchants",
            startTime: 10,
            endTime: 15,
            day: 2,
            startCol: 8,
            span: 3,
            color: "#A8EBF3" //blue
        },
        {
            name: "Talk",
            startTime: 10,
            endTime: 11.5,
            day: 2,
            startCol: 11,
            span: 3,
            color: "#ffec6e" //yellow
        },
        {
            name: "Food Trucks",
            startTime: 11.5,
            endTime: 12.5,
            day: 2,
            startCol: 11,
            span: 3,
            color: "#B0E5B2" //pale green
        },
        {
            name: "Talk",
            startTime: 12.5,
            endTime: 14,
            day: 2,
            startCol: 11,
            span: 3,
            color: "#ffec6e" //yellow
        }

    ]

};

export default testData;
   