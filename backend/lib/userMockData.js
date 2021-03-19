const userMockData = [
    {
        firstName:'Isaac',
        lastName: 'Yong',
        email: 'isaac@gmail.com',
        password: '11111',
        bugs: [
            {
                type: 'ui',
                title: '',
                description: '',
                imgUrl: '', //optional
                comments: [{
                    user: '',
                    comment: ''
                }],
                upVotes: ['userId1', 'userId2'],
                priority: 'high', //Medium, Low
                status: 'pending' //Resolve
            },
            {
                type: 'ui',
                title: '',
                description: '',
                imgUrl: '', //optional
                comments: [{
                    user: '',
                    comment: ''
                }],
                upVotes: ['userId1', 'userId2'],
                priority: 'high', //Medium, Low
                status: 'pending' //Resolve
            },
        ],
        projects: [ 'projectId1', 'projectId2']
    }
]

module.exports = userMockData