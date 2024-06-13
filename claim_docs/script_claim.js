const submitbtn = document.getElementById(`submit_button`);
function sendMail() {
    var params = {
      first: document.getElementById("first").value,
      last: document.getElementById("last").value,
      mail: document.getElementById("mail").value,
      phone: document.getElementById("phone").value,
      insurance_type: document.getElementById("insurance-type").value,
    };
    params.name = `${params.first} ${params.last}`;
    const serviceID = "service_a4ax49i";
    const templateID = "template_5vcc78o";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("first").value = "";
          document.getElementById("last").value = "";
          document.getElementById("mail").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("insurance-type").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert(`Your message sent successfully!!\n A copy of the details have been send to your email or confirmation!\n If any of the details are not correct, refill the form and let us know in the message box!!!`);
      })
      .catch(err=>console.log(err));
  }
  submitbtn.addEventListener('click', function() {
    sendMail();
  });