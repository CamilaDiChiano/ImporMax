
function gen_table(){
    document.getElementById("tab").innerHTML="";
    let n=Number(document.getElementById("capital").value);
    let n2=Number(document.getElementById("couta").value);
   
    if(n>0){   
        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed(2);
            
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                    </tr>`;
        }
        n1=n.toFixed(2);
    
        document.getElementById("t1").innerHTML=n1;
        
        document.getElementById("t3").innerHTML=d5;        
    }else{
        alert("Falta ingresar un Número");
    }
}