  // Tempat menampung variable yang akan dipakai
  var ygen, yage, ybb, yting, bmi, stts, ket;
  var ytingMeter; //variabel untuk Tinggi dalam Meter
  // todo mencari fungsi untuk menggunakan umur
  // misal jika umur rentang dari 10 sampai 20 tahun akan diisikan sesuatu mungkin kiat" info kesehatan dan pola makan
  // Fungsi untuk menghitung BMI
  function hitungBMI(){
    ygen = document.querySelector('input[name="ygen"]:checked').value;
    yage = document.getElementById("yage").value;
    ybb = document.getElementById("ybb").value;
    yting = document.getElementById("yting").value;

    ytingMeter = yting/100;

    let stts = '';
    let ket = '';

    // rumus yang digunakan. BMI = Berat Badan / ((Tinggi / 100) ** 2) ** = pemangkatan
    bmi = ybb / ((yting / 100) ** 2);
    // rumus rumus bmi dari halodoc
    //bmimale = (ybb - 100) - (yting - 100) * 10/100;
    //bmifemale = (ybb - 100) - (yting - 100) * 15/100;
    //bmi = ybb / ytingMeter;
    //todo membuat perhitungan berdasarkan dari halodoc


    switch (ygen) {
        case 'Pria':
          if (bmi < 18.5) {
            stts = 'Kekurangan berat badan';
            ket = 'Anda memiliki berat badan kurang dari normal.';
          } else if (bmi >= 18.5 && bmi <= 24.9) {
            stts = 'Normal (ideal)';
            ket = 'Anda memiliki berat badan dalam kisaran normal.';
          } else if (bmi >= 25.0 && bmi <= 29.9) {
            stts = 'Kelebihan berat badan';
            ket = 'Anda memiliki berat badan berlebih.';
          } else if (bmi >= 30.0) {
            stts = 'Kegemukan (Obesitas)';
            ket = 'Anda memiliki berat badan yang sangat berlebih.';
          }
          break;
        case 'Wanita':
          if (bmi < 17) {
            stts = 'Kekurangan berat badan';
            ket = 'Anda memiliki berat badan kurang dari normal.';
          } else if (bmi >= 17 && bmi <= 23.9) {
            stts = 'Normal (ideal)';
            ket = 'Anda memiliki berat badan dalam kisaran normal.';
          } else if (bmi >= 23.0 && bmi <= 27.0) {
            stts = 'Kelebihan berat badan';
            ket = 'Anda memiliki berat badan berlebih.';
          } else if (bmi > 27.0) {
            stts = 'Kegemukan (Obesitas)';
            ket = 'Anda memiliki berat badan yang sangat berlebih.';
          }
          break;
      }   
    
    document.getElementById('result-title').innerHTML = stts; //menampilkan status di html
    document.getElementById('result-bmi').innerHTML = bmi.toFixed(1); //menampilkan nilai bmi di html
    document.getElementById('result-desc').innerHTML = ket; //menampilkan keterangan di html


    document.getElementById('form').reset(); //fungsi untuk ulang isi form
    document.getElementById('result').classList.remove('d-hidden'); //fungsi menghapus attribut dari class agar menampilkan section result
    document.getElementById('home').classList.add('d-hidden'); //fungsi menambahkan attribut dari class agar menyembunyikan section form
  };

  // Fungsi validasi form input
  function validasiForm() {
    //todo
  }

  // Fungsi untuk mengembalikan tampilan ke main form
  function backToForm(){
    document.getElementById('home').classList.remove('d-hidden');
    document.getElementById('result').classList.add('d-hidden');
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
  };

  // Fungsi untuk reset isi form
  function resetForm() {
    document.getElementById("form").reset();
  };