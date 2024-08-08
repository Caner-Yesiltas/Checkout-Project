let sepettekiler = [
    { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
    { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
    { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
  ];


const shipping=15.0;
const tax=0.18;


sepettekiler.forEach(({name,price,piece,img}) => {   // yakalamis oldugum divin icine bunlari yaz diyorum ! [innerhtml] yakalnan seyin icine htmli gomer. adindan belli html! eklemek

    //burada destructing uyguluyoruz heer bir donen elemani yukaridaki epettekilerin icinden al diyerek item.name item.price demeye gerek kalmiyor

    document.querySelector("#product-rowlari").innerHTML+= ` 
       <div class="card mb-3" style="max-width: 540px;">

  <div class="row ">

    <div class="col-md-5 ">
      <img src=${img}  class=" w-100 rounded-start" alt="...">
    </div>

    <div class="col-md-7 ">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(price * 0.7).toFixed(
                        2
                      )} </span>
                      <span class="h5 text-dark text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller ">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-product">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="product-total">${(
                      price *
                      0.7 *
                      piece
                    ).toFixed(2)} </span>
                  </div>
      </div>
    </div>
  </div>
</div> 
      `   ; 



});

calculateCardTotal()

function calculateCardTotal() {

   const toplam= document.querySelectorAll("#product-total");
   const pToplam = Array.from(toplam).reduce((acc, item) => acc + Number(item.textContent), 0) // baslangicta sifir olarak gelir 

   document.querySelector(".productstoplam").textContent=pToplam

   document.querySelector(".vergi").textContent=pToplam * tax // toplamdan aldigimiz degerleri vergi ile carp ve vergi olan yere bas yaz demek textcontent
   
   document.querySelector(".kargo").textContent=pToplam ? shipping:0  // ternaryde true false degerleri bakilir ptoplam eger 0dan farkliysa true olur ve true olursa
   // kargonun icerigini ptoplam ile degistiririz fakat deger 0 ise shpping de sifir olur kisaca herhangi bir sayi varsa kargo gozukur fiyat yoksa kargo 0 gozukur demek!
   
   
   
   document.querySelector(".toplam").textContent= pToplam ? (pToplam+pToplam*tax+shipping) :0
    
};

removeButton()



unction removeButton() {
  document.querySelectorAll(".remove-product").forEach((btn) => {
    btn.onclick = () => {
      //?ekrandan sil

      // btn.parentElement.parentElement.parentElement.parentElement.remove()
      btn.closest(".card").remove();

      calculateCardTotal();
    };
  });
}