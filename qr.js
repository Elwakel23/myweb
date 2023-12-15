 window.addEventListener('load', () => {
    const generateBtn = document.getElementById('generate-btn');
    const qrCodeImg = document.getElementById('qr-code');

    generateBtn.addEventListener('click', () => {
      const textInput = document.getElementById('text-input').value;
      const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textInput);

      qrCodeImg.src = qrCodeUrl;

      // Add a dynamic effect (e.g., a pulse animation) when the button is clicked
      generateBtn.style.transform = 'scale(1.1)';
      setTimeout(() => {
        generateBtn.style.transform = 'scale(1)';
      }, 300); // Reset the scale after 300 milliseconds
    });
  });
