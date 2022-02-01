alert('Selamat Datang di Penginputan Nilai');

var tanya = true;
while (tanya) {
  var nilai = prompt('Input nilai :');

  if (nilai === '') {
    alert('Anda belum memasukkan nilai');
  } else if (nilai) {
    if (nilai >= 81 && nilai <= 100) {
      alert('Nilai Anda : A');
    } else if (nilai >= 71 && nilai <= 80) {
      alert('Nilai Anda : B');
    } else if (nilai >= 51 && nilai <= 70) {
      alert('Nilai Anda : C');
    } else if (nilai >= 31 && nilai <= 50) {
      alert('Nilai Anda : D');
    } else if (nilai >= 0 && nilai <= 30) {
      alert('Nilai Anda : E');
    } else if (nilai < 0 || nilai > 100) {
      alert('Anda memasukkan nilai yang salah! \nSilakan masukkan nilai dari 0-100.');
    } else {
      alert('Maaf, yang Anda masukkan bukan angka.');
    }
  } else {
    alert('Anda menekan tombol CANCEL');
  }

  tanya = confirm('Coba lagi?');
}

alert('Terima Kasih');
