function kirimdata() {
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const angkatan = document.getElementById('angkatan').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked');
    const alamat = document.getElementById('alamat').value;

    let alertMessage = '';
  
    if (!nama || !nim || !angkatan || !peminatan || !alamat) {
      alertMessage = 'Semua kolom harus diisi!';
    } else {
      alertMessage = `
        Data berhasil diinput!\n
        Nama: ${nama}\n
        NIM: ${nim}\n
        Angkatan: ${angkatan}\n
        Peminatan: ${peminatan.value}\n
        Alamat: ${alamat}
        
      `;
    }
  
    showAlert(alertMessage);
  }
  
  function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message;
    alertBox.style.display = 'block';
    
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 5000); 
  };
  