document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('voucherForm');
  const resultBox = document.getElementById('voucherResult');
  const voucherCodeBox = document.getElementById('voucherCode');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value.trim();

    if (!cardNumber) {
      alert('Silakan isi nomor kartu.');
      return;
    }

    const url = `https://api.teeg.cloud/vouchers/campaigns/4VKE4OE/cards/${cardNumber}?tz=MIDFR9QKSL`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ....(token dipersingkat)...',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const code = data?.voucherCode || JSON.stringify(data, null, 2);
      voucherCodeBox.textContent = code;
      resultBox.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Gagal ambil data voucher:', error);
      alert('Terjadi kesalahan. Pastikan nomor kartu benar dan coba lagi.');
    });
  });
});
