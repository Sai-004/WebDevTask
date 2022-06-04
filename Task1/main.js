let http = new XMLHttpRequest();
http.open('get', 'productslist.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output = "";
        for (let ids of products) {
            output += `
                <div class="product" id="${ids.id}">
                <div class="box" style="background-image: url('${ids.thumbnail}')"></div>
                <p class="title">${ids.title}</p>
                <p class="category">${ids.category}</p>
                <p class="brand">${ids.brand}</p>
                <p class="description">${ids.description}</p>
                <p class="price"><span>$${ids.price}</span></p>
                <span class="discount">final discount : ${ids.discountPercentage}</span><br><br>
                <p class="cart">ADD TO CART</p><br><br>
                <p class="stock">Available stock : ${ids.stock}</p>
                <p class="rating">User Rating: ${ids.rating}
                </p>
                </div>
                    `;
        }
        document.querySelector(".productlist").innerHTML = output;

        const searchInput = document.querySelector(".input")
        searchInput.addEventListener("input", e => {
            const value = e.target.value.toLowerCase()
            for (let i = 1; i < 31; i++) {
                var element = document.getElementById(i)
                if (!products[i - 1].title.toLowerCase().includes(value) && !products[i - 1].description.toLowerCase().includes(value)) {
                    element.style.display = "none"
                } else {
                    element.style.display = ""
                }
            }


        }
        )
    }
}