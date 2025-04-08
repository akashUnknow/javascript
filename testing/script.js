const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  // Map over the products array and generate <li> elements
  const listItems = products.map((product) => {
    return `<li>${product.title}</li>`;
  }).join(''); // Join the array into a single string

  // Get the <ul> element
//   console.log(typeof listItems)
//   console.log(listItems)
  const ul = document.getElementById('productList');

  // Insert the list items into the <ul>
  ul.innerHTML = listItems;