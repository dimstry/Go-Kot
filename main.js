var penumpang = ["Dimas"];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // else
    // telusuri kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      //jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        // jika sudah ada nama yang sama
        // tampilkan pesan kesalahan nya
        console.log(`aran penumpang ${namaPenumpang} geus aya`);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // jika seluruh kursi ter isi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

// hapus penumpang
var hapusPenumpang = function(namaPenumpang, penumpang){
  if (penumpang.length == 0) {
    console.log("Penumpang masih kosong manggg")
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      }else if( i == penumpang.length -1){
        console.log(`${namaPenumpang} eweuh di angkot mang`);
        return penumpang;
      }
    }
  }
};
