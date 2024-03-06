const fakeResquestCallback = (url, sucess, failure) => {
    const delay = Math.floor(Math.randomw() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            sucess(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.randomw() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeResquestCallback('books.com/page1', 
    function(response) {
        console.log('It worked!!!!')
        console.log(response)
        fakeResquestCallback('books.com/page2', 
            function(response) {
                console.log('It worked again!!!!')
                console.log(response)
                fakeResquestCallback('books.com/page3', 
                    function(response) {
                        console.log('It worked for the third time!!!!')
                        console.log(response)
                    },
                    function(err) {
                        console.log('Error (3rd request)')
                        console.log(err)
                    }
                )
            },
            function(err) {
                console.log('Error (2nd request)')
                console.log(err)
            }
        )
    },
    function(err) {
        console.log('Error (1st request)')
        console.log(err)
    }
)