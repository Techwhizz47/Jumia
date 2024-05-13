const products = [
    {
        id: 1,
        name: 'Infinix Note 40',
        image: '/Phones/Infinix note 40.jpg',
        price: 28499,
        description: 'KSh 50,000'
    },
    {
        id: 2,
        name: 'Oppo A38',
        image: '/Phones/Oppo A38.jpg',
        price: 19794,
        description: 'KSh 9,999'
    },
    {
        id: 3,
        name: 'Techno Spark 10',
        image: '/Phones/Techno Spark 10.jpg',
        price: 22499,
        description: 'KSh 25,000'
    },
    {
        id: 4,
        name: 'Infinix Note 30',
        image: '/Phones/Infinix Note 30.jpg',
        price: 22309,
        description: 'KSh 35,999'
    },
    {
        id: 5,
        name: 'Samsung Galaxy A15',
        image: '/Phones/Samsung Galaxy A15.jpg',
        price: 26449,
        description: 'KSh 39,999'
    },
    {
        id: 6,
        name: 'Samsung Galaxy A14',
        image: '/Phones/Samsung Galaxy A14.jpg',
        price: 18999,
        description: 'KSh 29,999'
    },

];

function renderProducts() {
    const container = document.getElementById('cont');

    // Loop through each product and create HTML elements
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cont1');

        const productImage = document.createElement('img');
        productImage.src = product.image;

        const details = document.createElement('div');
        details.classList.add('cont2');

        const productName = document.createElement('p');
        productName.textContent = product.name;

        const details2 = document.createElement('div');
        details2.classList.add('price');

        const productPrice = document.createElement('p');
        productPrice.textContent = `${product.price}`;

        const productDescription = document.createElement('p');
        productDescription.classList.add('discount');
        productDescription.textContent = product.description;

        // Add click event listener to show product details
        productDiv.addEventListener('click', () => {
            showProductDetails(product);
        });

        // Append elements to product div
        productDiv.appendChild(productImage);
        productDiv.appendChild(details);
        productDiv.appendChild(productName);
        productDiv.appendChild(details2);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        // Append product div to container
        container.appendChild(productDiv);
    });
}

 // Function to show product details on a separate page
 function showProductDetails(product) {
    // Store selected product in session storage (you can use other methods like URL parameters)
    sessionStorage.setItem('selectedProduct', JSON.stringify(product));

    // Redirect to product details page
    window.location.href = 'productpage.html';
}


window.onload = renderProducts;
