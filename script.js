document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('voucherForm');
  const voucherResult = document.getElementById('voucherResult');
  const voucherImage = document.getElementById('voucherImage');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value.trim();

    const tz = 'MIDFR9QKSL'; // Ganti jika perlu
    const imageUrl = `https://api.teeg.cloud/vouchers/campaigns/cards/${cardNumber}/voucher/${tz}/img`;

    fetch(imageUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzE5Njg1NDg4LCJuYmYiOjE3MTk2ODQ1ODgsImlwQWRkcmVzcyI6IjEwNC4yOC4yMTUuMTM1Iiwib2lkIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2Iiwic3ViIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2IiwicGhvbmUiOiIrNjI4MjE0NzI2ODU3MCIsInRpZCI6ImFmMjFlMDU2LTBhMjEtNGQ4My1iNWRkLTQ0YzQzOWZhOGYzMCIsIm5vbmNlIjoiNDY0Nzg5OTctOGMyOS00ZDZlLWJiYzEtMWNmMWM0ODU0ZTFiIiwic2NwIjoiYWxsLWFwaXMiLCJhenAiOiJjYTBlNDg2OC0xNzdiLTQ5ZDItOGM2My1mMTA0NGUzZWRjNjMiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MTk2ODQ1ODh9.uyZmrVyE2y73V7zK37-8dVgZq865C2cnc48M2KCaqZ2PPPnIz29b7LCKbbI5GtkJWMJDAZsAGrLQsDgXEMlhLeZ7LRgM9OuhWl1vviT1SKnsJFkcBzuWovYPFixbx1HcpqNfuCyY4FzynR_vzpJZ_bNLUv4M8niDaXIGsf7F0DS-8I4qh_Gmiz-dtM07cBCAmnC3XD2p3akhp5dO7dNzSgl_pmeIxM3gFBravayltxwsoIUjkeSQ1_XlBaMMuxDexHlSBMPtuNM1RiRlvepifNATU-t0a_BhedvPslrwImnisYS6DZxqRG5FLNEx6I7WH40hwQ3uimtKYxlYt1kr3g`,
        'Accept': 'image/*'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Gagal memuat gambar voucher. Status: ${response.status}`);
      }
      return response.blob();
    })
    .then(blob => {
      const imageUrl = URL.createObjectURL(blob);
      voucherImage.src = imageUrl;
      voucherImage.alt = "Voucher Image";
      voucherResult.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Error fetching image:', error);
      alert('Voucher tidak ditemukan atau gagal dimuat.');
    });
  });
});
