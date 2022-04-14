const testRTI = () => {
  // fungsi melakukan iterasi menggunakan variabel i dari angka 1 hingga 100
  for (let i = 1; i <= 100; i++) {
    // inisiasi variabel wordPrint berisi string kosong yang nantinya akan ditampilkan di layar
    let wordPrint = "";
    // apabila variabel i habis dibagi 3 atau habis bagi 5, masuk kedalam if
    if (i % 3 === 0 || i % 5 === 0) {
      // apabila habis dibagi 3, maka nilai wordPrint ditambahkan string One
      // apabila habis dibagi 5, maka nilai wordPrint ditambahkan string Block
      // apabila habis dibagi keduanya, maka nilai wordPrint ditambahkan string One lalu string Block
      if (i % 3 === 0) {
        wordPrint = wordPrint.concat("One");
      }
      if (i % 5 === 0) {
        wordPrint = wordPrint.concat("Block");
      }
      // apabila tidak masuk kedalam if, maka nilai wordPrint ditambahkan nilai i
    } else {
      wordPrint = wordPrint.concat(i.toString());
    }
    // diakhir iterasi nilai i di print ke console
    console.log(wordPrint);
  }
};

testRTI();

export default testRTI;
