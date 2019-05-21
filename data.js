module.exports = {
    contacts: [
        {
            id: 1,
            firstName: "Vasya",
            lastName: "Ivanoff",
            phone: "123456789",
            email: "example1@gmail.com",
            callHistory: [
                {
                    timestamp: "2019-05-20 11:12:12",
                    type: "Incoming",
                    duration: 35
                },
                {
                    timestamp: "2019-05-20 13:15:12",
                    type: "Outcoming",
                    duration: 63
                },
                {
                    timestamp: "2019-03-22 15:12:12",
                    type: "Incoming",
                    duration: 35
                }
            ]
        },
        {
            id: 2,
            firstName: "Petya",
            lastName: "Ivanoff",
            phone: "234567890",
            email: "example2@gmail.com",
            callHistory: []
        },
        {
            id: 3,
            firstName: "Masha",
            lastName: "Neivanoff",
            phone: "345678901",
            email: "example3@gmail.com",
            callHistory:[
                {
                    timestamp: "2019-04-20 11:12:22",
                    type: "Incoming",
                    duration: 35
                },
                {
                    timestamp: "2019-03-20 13:15:10",
                    type: "Outcoming",
                    duration: 63
                }
            ]
        }
    ]
}
