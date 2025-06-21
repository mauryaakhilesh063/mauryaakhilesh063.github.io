function downloadCv(){
  const link = document.createElement('a');
    link.href = 'assets/pdf/akhil_Resume.pdf'; // your PDF path
    link.download = 'Akhilesh_CV.pdf';         // desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

function submitContact(){
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

 // Simple email validation pattern
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '' || message === '') {
    alert('Please Fill Out All Fields Before Submitting.');
    return false;
  }

  if (!emailPattern.test(email)) {
    alert('Please Enter a Valid Email Address.');
    return false;
  }

  alert('Thank you for your message! '+name+' I will get back to you soon.');
  return true; 
}