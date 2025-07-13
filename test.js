function getImageBytesFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function(event) {
      const arrayBuffer = event.target.result;
      const uint8Array = new Uint8Array(arrayBuffer);
      resolve(uint8Array); // This Uint8Array represents the image bytes
    };

    reader.onerror = function(error) {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
}

// Example usage with an HTML file input:
// 
document.getElementById('imageInput').addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      const imageBytes = await getImageBytesFromFile(file);
      const apiUrl = 'https://kanz116.pythonanywhere.com/image';
const data = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'image/png',
  },
  body: imageBytes,
};

fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    console.log(`https://kanz116.pythonanywhere.com/viewimage?id=${data["id"]}`)
  })
  .catch(error => {
    console.error

('Error:', error);
  });
      console.log('Image bytes:', imageBytes);
    } catch (error) {
      console.error('Error reading image file:', error);
    }
  }
});

