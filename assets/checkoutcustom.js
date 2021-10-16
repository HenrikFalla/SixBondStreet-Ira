
         if (Shopify.Checkout.step === 'payment_method')
           
         {
document.querySelector(".step__footer").insertAdjacentHTML("beforeBegin",
"<div><h1>I</h1><h2>was</h2><h3>inserted</h3></div>");
           
           console.log("ready");
           
//            var checker = document.getElementById('checkme');
var sendbtn = document.getElementById('continue_button');
             sendbtn.disabled = true;
// checker.onchange = function() {
//   sendbtn.disabled = !!this.checked;
// };
           
           
         }
   

