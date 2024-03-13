const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    console.dir(form)
    const searchTerm = form.elements.query.value;
    const config = { params: {q: searchTerm}, headers: {Accept: 'application/json'} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.queery.value = '';
})

const makeImages = (shows) => {
    for (let result of shows){
        if (result.show.images){
            const img = document.createElement('IMG');
            img.src = result.show.images.medium;
            document.body.append(img);
        }
    }
}