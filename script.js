document.getElementById('voucher-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value.trim();

    fetch(`https://api.teeg.cloud/vouchers/campaigns/4VKE4OE/cards/${cardNumber}?tz=MIDFR9QKSL`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzUxNTY0NTAwLCJuYmYiOjE3NTE1NjM2MDAsImlwQWRkcmVzcyI6IjEzOS4xOTIuMjE3LjIwOCIsImlwYWRkciI6IjEzOS4xOTIuMjE3LjIwOCIsImVtYWlscyI6WyJkYW5hbmdkYW56b2d0QGdtYWlsLmNvbSJdLCJvaWQiOiI3MjMzMDk3Zi1jOTEyLTRmMjgtYjdmOC1kMzhhZTMzZGE1OTQiLCJzdWIiOiI3MjMzMDk3Zi1jOTEyLTRmMjgtYjdmOC1kMzhhZTMzZGE1OTQiLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6IjY3Mzc0YTE5LWNmMjAtNDg4MS1iY2ExLWQxMjY1ZGI0NzIyZiIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzUxNTYzNjAwfQ.jl8u62wDhdz-KZS8RnaOW2UPNFG66vMJecXEdTrzOMIKZ6jFIwJ7gpQkgXOmpSY52M3GscTQu52cVBH9Ndw8u5qjGymO6h6Wu1pLEuH4nEkoWUqK5vSJ_JENT5q8IBtSa5RApdSuMoyF3JZDXweWZWgObnV-YMlVZNV5BmPtnfPAmL44jApB4F-_3i_Hgx28Nhn0PSN4HlYwWAJckLtsi8E6Gq-hrr4lgN_c2s8FZ5OzduJvpDYA4HzXbgq3Z0V04tVKJ-IF3Vi7cJz02yYUit_sGfb_HkT8lYs5GzzHwKOGMuXiVhqARkhdAg1Cez2qCB-9Ve_XmMg8ICtdlKspnA',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Gagal mengambil voucher. Status: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const voucherText = data.voucherCode || 'Voucher berhasil didapat, tapi tidak ada kode voucher.';
        document.getElementById('voucher-code').innerText = voucherText;
        document.getElementById('voucher-result').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Pastikan nomor kartu benar dan coba lagi.');
    });
});
