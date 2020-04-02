let getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
        console.log(json);
        return json;
    })
    .then((data) => {
        createPost(data);
    });
}

let createPost = (data) => {
    let list = document.getElementById('list');
    for(let i = 0; i < 10; i++) {
        let div = document.createElement('div')
        div.innerText = data[i].title;
        div.classList.add('post');
        list.append(div)
    }
}

document.querySelector('.btn').addEventListener('click', getPosts);
