function excluir(elem){
    elem.parentNode.parentNode.remove()
    var x= $(elem.parentNode.parentNode).find(".valor")
    console.log(x[0].innerHTML)
    var totallast=  document.querySelector(".total").innerHTML
    document.querySelector(".total").innerHTML = totallast - x[0].innerHTML
}

function addproduct(){
    var produto = document.querySelector("#produto").value
    var valor = document.querySelector("#valor").value
    if(produto=="" || !produto){
            document.querySelector("#valor").value=""
        alert("brother põe um produto ai po")
        return
    }
    if(valor=="" || !valor){
            document.querySelector("#produto").value=""
        alert("brother põe um valor ai po")
        return
    }


    var table = document.querySelector("table tbody").innerHTML
    var button = '   <button onclick="excluir(this)" class="excluir"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0.5C6.7685 0.5 0.5 6.7685 0.5 14.5C0.5 22.2315 6.7685 28.5 14.5 28.5C22.2315 28.5 28.5 22.2315 28.5 14.5C28.5 6.7685 22.2315 0.5 14.5 0.5ZM20.0335 20.3333H16.6945L14.479 16.6385H14.325L12.0943 20.3333H8.94083L12.5225 14.4475L8.949 8.66667H12.4093L14.5035 12.5307H14.6575L16.7668 8.66667H20.065L16.3375 14.4802L20.0335 20.3333Z" fill="#E74C3C" /></svg></button>'
    var newtable='<tr align="center"><td>'+button+'</td><td>'+produto+'</td><td class="valor">'+valor+'</td></tr>'
    document.querySelector("table tbody").innerHTML = table+newtable
    document.querySelector("#valor").value=""
    document.querySelector("#produto").value=""
    var totallast=  document.querySelector(".total").innerHTML
    document.querySelector(".total").innerHTML = parseInt(totallast) + parseInt(valor)
}