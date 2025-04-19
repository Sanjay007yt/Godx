function generateQR() {
  const service = document.getElementById('service').value;
  const amount = service.match(/\d+/)[0]; // Extract price
  const upiID = 'ramsanjay4554@okaxis';
  const name = '10XFOLLOWERS';
  
  // Create UPI payment string
  const upiString = `upi://pay?pa=${upiID}&pn=${name}&am=${amount}&cu=INR`;

  // Google Chart QR Generator
  const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(upiString)}`;

  document.getElementById('qrCode').src = qrUrl;
  document.getElementById('qrContainer').style.display = 'block';
}