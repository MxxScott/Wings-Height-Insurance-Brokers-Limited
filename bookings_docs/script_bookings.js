const submitbtn = document.getElementById(`submit_button`);
function sendMail() {
    var params = {
      first: document.getElementById("first").value,
      last: document.getElementById("last").value,
      mail: document.getElementById("mail").value,
      datetime: document.getElementById("datetime").value,
      booking_type: document.getElementById("booking-type").value,
      message: document.getElementById("message").value,
    };
    
    params.name = `${params.first} ${params.last}`;
    const serviceID = "service_hastdit";
    const templateID = "template_g7cnl9s";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("first").value = "";
          document.getElementById("last").value = "";
          document.getElementById("mail").value = "";
          document.getElementById("datetime").value = "";
          document.getElementById("booking-type").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert(`Your message sent successfully!!\n A copy of the details have been send to your email or confirmation!\n If any of the details are not correct, refill the form and let us know in the message box!!!`);
      })
      .catch(err=>console.log(err));
  }
  submitbtn.addEventListener('click', function() {
    sendMail();
  });


  const bookingTypeSelect = document.getElementById("booking-type");

// Get the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const selectType = urlParams.get('type');
bookingTypeSelect.value = selectType;