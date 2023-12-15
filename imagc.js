 const fileInput = document.getElementById('fileInput');
      const convertBtn = document.getElementById('convertBtn');
      const resultDiv = document.getElementById('result');

      fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          convertBtn.disabled = false;
        }
      });

      convertBtn.addEventListener('click', () => {
        for (let i = 0; i < fileInput.files.length; i++) {
          const file = fileInput.files[i];
          const reader = new FileReader();

          reader.addEventListener('load', () => {
            const img = new Image();
            img.addEventListener('load', () => {
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
              canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = file.name.replace(/\.[^/.]+$/, '') + '.webp';
                link.click();
                const successMessage = document.createElement('p');
                successMessage.classList.add('success-message');
                successMessage.textContent = `File ${i + 1} successfully converted and downloaded as ${link.download}`;
                resultDiv.appendChild(successMessage);
              }, 'image/webp', 0.8);
            });
            img.src = reader.result;
          });
          reader.readAsDataURL(file);
        }
      });
