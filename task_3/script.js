const btn=document.querySelector('#btn-check');
btn.onclick = function(){
    const rslt_place = document.querySelector('#rslt');
    const merk = document.querySelector('#merk').value;
        var price;
        if(merk=="Adidas"){
            price="Rp.1.000.000"
        }else if(merk=="Converse"){
            price="Rp.1.500.000"
        }else if(merk=="Nike"){
            price="Rp.2.599.000"
        }else if(merk=="Puma"){
            price="Rp.4.500.000"
        }else if(merk=="Vans"){
            price="Rp.1.599.000"
        }else if(merk=="Ventela"){
            price="Rp.500.000"
        }
        rslt_place.style='background-color: white;'
        rslt_place.innerHTML="<p>Merk : "+merk+"</p><p> Harga : "+price+"</p>";
    }