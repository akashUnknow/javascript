let container=document.getElementById("container")
const arr=[1,2,3,4,5]

arr.forEach(element => {
    const htmlContent=`<h1>by by</h1>
<p>paragraph</p>
<div>div</div>
<div>${element}</div>`
container.innerHTML += htmlContent;
console.log(element)

});


// const container = document.getElementById("container");

//     for (let i = 1; i <= 5; i++) {
//         const htmlContent = `
//             <h1>by by</h1>
//             <p>paragraph</p>
//             <div>div</div>
//             <div>${i}</div>
//         `;
//         container.innerHTML += htmlContent;
//     }