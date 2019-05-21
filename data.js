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
                    timestamp: "2019-05-20T11:12:12",
                    type: "Incoming",
                    duration: 35
                },
                {
                    timestamp: "2019-05-20T13:15:12",
                    type: "Outcoming",
                    duration: 63
                }
            ]
        },
        {
            id: 2,
            firstName: "Petya",
            lastName: "Ivanoff",
            phone: "234567890",
            email: "example2@gmail.com",
            historyCall: null
        },
        {
            id: 3,
            firstName: "Masha",
            lastName: "Neivanoff",
            phone: "345678901",
            email: "example3@gmail.com",
            historyCall: null
        }
    ]
}
