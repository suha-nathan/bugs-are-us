const projectMockData = [{
    title: 'Yahoo',
    description: 'just a yahoo app..',
    categories: ['news', 'search engine'],
    bugs: [
        {
            type: 'ui',
            title: 'Button color does not render right',
            description: 'It should be red but it renders blue instead',
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
            type: 'serious',
            title: 'User cannot login after logout',
            description: 'Happens when logout when they are watching videos',
            imgUrl: '', //optional
            comments: [{
                user: '',
                comment: ''
            }],
            upVotes: ['userId1', 'userId2'],
            priority: 'high', //Medium, Low
            status: 'pending' //Resolve
        },
    ], //bugSchema
    members:  [
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
        },
        {
            firstName:'Suha',
            lastName: 'Padmanathan',
            email: 'suha@gmail.com',
            password: '22222',
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

            ],
            projects: [ 'projectId1', 'projectId2']
        }
    ], //userSchema
    projectLead: 'ObjectId1' //userSchema
}
]
module.exports = projectMockData