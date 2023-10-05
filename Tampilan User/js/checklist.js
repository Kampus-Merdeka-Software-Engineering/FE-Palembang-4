// Simulasikan nomor transaksi yang didapat dari pembayaran
const transactionNumber = generateTransactionNumber();

// Tampilkan nomor transaksi pada halaman
const transactionNumberElement = document.getElementById("transactionNumber");
transactionNumberElement.textContent = transactionNumber;

// Fungsi untuk menghasilkan nomor transaksi acak
function generateTransactionNumber() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const length = 10;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}
