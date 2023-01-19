// simulador


// function gen_table(){
//     document.getElementById("tab").innerHTML="";
//     let n=Number(document.getElementById("capital").value);
//     let n2=Number(document.getElementById("couta").value);
   
//     if(n>0){   
//         for(i=1;i<=n2;i++){
//             ca=n/n2;
//             d1=ca.toFixed(2);
            
//             document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
//                     `<tr>
//                         <td> ${i}</td>
//                         <td> ${d1}</td>
//                     </tr>`;
//         }
//         n1=n.toFixed(2);
    
//         document.getElementById("t1").innerHTML=n1;
        
//         document.getElementById("t3").innerHTML=d5;        
//     }else{
//         alert("Falta ingresar un Número");
//     }
// }



function simulador(){
  document.getElementById("po-col-12").innerHTML="";
let n=Number(document.getElementById("active").value);
let n2=Number(document.getElementById("cuotas").value);

if(n>0){







}


}







// contacto


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_r4tltyu';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});