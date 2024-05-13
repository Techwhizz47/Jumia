const selectedProduct = JSON.parse(sessionStorage.getItem('selectedProduct'));

function displayProductDetails() {
    const productImage = document.getElementById('proD');
    productImage.src = selectedProduct.image;

    const productName = document.getElementById('prodname');
    productName.textContent = selectedProduct.name;

    const productPrice = document.getElementById('disc');
    productPrice.textContent = `Price: ${selectedProduct.price}`;

    const productDescription = document.getElementById('origi');
    productDescription.textContent = selectedProduct.description;
}


window.onload = displayProductDetails;

//Delivery Fees Calc//

const selectElem = document.getElementById("select");

selectElem.addEventListener("click", () => {
    let nairobi = 200;
    let mombasa = 800;
    let nakuru = 500;

    const index = selectElem.selectedIndex;
    
    if(index == '0'){
        let tot = selectedProduct.price + nairobi;
        
        document.getElementById('shipping').innerText = nairobi;
        document.getElementById('location').innerText = 'Nairobi';
        document.getElementById('subtot').innerText = selectedProduct.price;
        document.getElementById('delif2').innerText = nairobi;
        document.getElementById('tot1').innerText = tot;
        
    } else if(index == '1'){
        let tot = selectedProduct.price + mombasa;
        document.getElementById('shipping').innerText = mombasa;
        document.getElementById('location').innerText = 'Mombasa';
        document.getElementById('subtot').innerText = selectedProduct.price;
        document.getElementById('delif2').innerText = mombasa;
        document.getElementById('tot1').innerText = tot;
    
    } else if(index == '2'){
        let tot = selectedProduct.price + nakuru;
        document.getElementById('shipping').innerText = nakuru;
        document.getElementById('location').innerText = 'Nakuru';
        document.getElementById('subtot').innerText = selectedProduct.price;
        document.getElementById('delif2').innerText = nakuru;
        document.getElementById('tot1').innerText = tot;
    } 

});