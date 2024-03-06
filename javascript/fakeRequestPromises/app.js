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


fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('It worked')
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log('It worked (2nd request)')
            })
            .catch(() => {
                console.log('It failed (2nd request)')
            })
    })
    .catch(() => {
        console.log('It failed')
    })