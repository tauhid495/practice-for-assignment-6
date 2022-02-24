
const loadDetail = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => dispalyPost(data));
}
// loadDetail();

const dispalyPost = posts => {
    const postContainer = document.getElementById('postDetail')
    posts.forEach(post => {
        console.log(post);
        const div = document.createElement('div');
        div.innerHTML = `
        <h5 button onclick="loadDetails('${post.id}')" > name: ${post.name}</h5>\n
        <p> E-mail: ${post.email}</p>
        
        `;
        postContainer.appendChild(div);
    });
}
const loadDetails = id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}