const bug = { upVotes: [],
    _id: '605836f778aa5f025327b484',
    type: 'UI',
    title: 'issue with this hitting my favourite site',
    priority: 'High',
    status: 'pretty bad',
    description: 'homepage button not working',
    user: '6057042920548a062d9988e0',
    comments:
        [ { _id: '60584e2a086a5a042a4aaf8c',
            commentText: 'I am little caprice 3.0' },
            { _id: '60586541eb6644074bc1a409',
                user: '60586494eb6644074bc1a407',
                commentText: 'littlecaprice is life' } ],
    createdAt: '2021-03-22T06:19:35.256Z',
    updatedAt: '2021-03-22T09:37:05.055Z',
    __v: 0 }



console.log(bug.comments.findIndex( comment => comment._id === '60584e2a086a5a042a4aaf8c'))

const foundIndex = bug.comments.findIndex( comment => comment._id === '60584e2a086a5a042a4aaf8c')

console.log(bug.comments[foundIndex].commentText)

bug.comments[foundIndex].commentText = 'A new one'

console.log(bug)