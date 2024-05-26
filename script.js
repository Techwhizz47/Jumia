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


///Quantity Calculator///

let ngapi = 1;
function items(){
    document.getElementById('cart').style.display = 'none';
    document.getElementById('quant').style.display = 'flex';
    let itemQuant = document.getElementById('disp1');
    itemQuant.innerText = ngapi;
    const ongeza = document.getElementById('add');
    const punguza = document.getElementById('minu');

    ongeza.addEventListener('click', function() {
        ngapi++;
        itemQuant.innerText = ngapi;
        console.log(ngapi);

    });

    punguza.addEventListener('click', function() {
        ngapi--;
        itemQuant.innerText = ngapi;
        console.log(ngapi);
        if(ngapi == 0){
            document.getElementById('cart').style.display = 'flex';
            document.getElementById('quant').style.display = 'none';
        };
        
    });

    console.log(ngapi);

};



//Delivery Fees Calc//

const selectElem = document.getElementById("select");

selectElem.addEventListener("click", () => {
    let nairobi = 200;
    let mombasa = 800;
    let nakuru = 500;
    
    const index = selectElem.selectedIndex;
    let quanttot = selectedProduct.price * ngapi;
    
    if(index == '0'){
        let tot = quanttot + nairobi;
        
        document.getElementById('shipping').innerText = nairobi;
        document.getElementById('location').innerText = 'Nairobi';
        document.getElementById('subtot').innerText = quanttot;
        document.getElementById('itmtot').innerText = ngapi;
        document.getElementById('delif2').innerText = nairobi;
        document.getElementById('tot1').innerText = tot;
        
    } else if(index == '1'){
        let tot = quanttot + mombasa;
        document.getElementById('shipping').innerText = mombasa;
        document.getElementById('location').innerText = 'Mombasa';
        document.getElementById('subtot').innerText = quanttot;
        document.getElementById('itmtot').innerText = ngapi;
        document.getElementById('delif2').innerText = mombasa;
        document.getElementById('tot1').innerText = tot;
        
    } else if(index == '2'){
        let tot = quanttot + nakuru;
        document.getElementById('shipping').innerText = nakuru;
        document.getElementById('location').innerText = 'Nakuru';
        document.getElementById('subtot').innerText = quanttot;
        document.getElementById('itmtot').innerText = ngapi;
        document.getElementById('delif2').innerText = nakuru;
        document.getElementById('tot1').innerText = tot;
    } 
    


});