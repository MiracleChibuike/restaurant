
let disable = document.querySelector('.submitBtn').addEventListener('click', function(){
    var x = document.getElementById('messageArea');
    var docs = x.value.length;
    var u = document.getElementById('count')
    console.log(docs);
    alert(`You have entered ${docs} words`)
    if (docs >=200) {
        u.innerHTML = "maximum charcaters of 200 words exceeded, cannot submit form";
        u.style.color = "red";
        u.style.fontSize = "13px"
        // alert("You have excedded maximum nunmber of input character of 300")
    }else if (docs = " ") {
        u.innerHTML = "Messagebox cannot be empty, can't submit form"
    }
    else{
        // alert("message is")
        u.innerHTML = "message is okay, can submit form";
        u.style.color = "darkgreen"
    }
})