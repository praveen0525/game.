var  num= Math.ceil(Math.random()*100);
console.log(num)
var count = 0;

function findnumber(){
    var numuser = parseInt(document.getElementById("n1").value);
    if(numuser == num)
    {
        alert("Congratulations!!! You guessed the number in "+count+" tries.");
    }
    else if(numuser > num)
    {
        document.getElementById("res").textContent = "Try with lesser value ";
    }
    else 
    {
        document.getElementById("res").textContent = "try with greater value";
    }
    count++;
    document.getElementById("tries").textContent = count;
    
}