var tabel = document.getElementsByTagName("tbody")[0];
let i = 3;
let n = 4;
let j = 2;
let k = [1, 2, 3, 4];
let z = [1, 2];
let jumlahNilaiData = {};
let jumlahNilaiFrekuensi = {};
let NilaiTerbesar = {};
let foundKey = 0;
let indexNilaiBesar = "";
let hasilStringNilaiBesar;
let NilaiSemuaInput = [];
let panjangData = 0;
let nilaiModus = 0;

function tambahtabel() {
  // Baris baru
  var NewRow = document.createElement("tr");
  if (i === i) {
    i += 1;
    NewRow.id = "baris-" + i;
  }

  // Kolom Pertama
  var NewColumn1 = document.createElement("td");
  var NewDiv1 = document.createElement("div");
  var NewInput1 = document.createElement("input");
  var NewInput2 = document.createElement("input");
  var NewParagraph1 = document.createElement("p");
  if (n === n) {
    n += 1;
    NewInput1.id = "input-kolom-1-" + n;
    k.push(n);
    n += 1;
    NewInput2.id = "input-kolom-1-" + n;
    k.push(n);
  }
  NewColumn1.id = "kolum-data";
  NewParagraph1.innerText = "---";
  NewDiv1.classList.add("data-container");
  NewColumn1.appendChild(NewDiv1);
  NewDiv1.appendChild(NewInput1);
  NewDiv1.appendChild(NewParagraph1);
  NewDiv1.appendChild(NewInput2);
  NewRow.appendChild(NewColumn1);

  // Kolom Kedua
  var NewColumn2 = document.createElement("td");
  var NewDiv2 = document.createElement("div");
  var NewInput3 = document.createElement("input");
  if (j === j) {
    j += 1;
    NewInput3.id = "input-kolom-2-" + j;
    z.push(j);
  }
  NewColumn2.id = "kolum-frekuensi";
  NewDiv2.classList.add("data-container");
  NewDiv2.appendChild(NewInput3);
  NewColumn2.appendChild(NewDiv2);
  NewRow.appendChild(NewColumn2);

  // Masukkin ke row baru
  tabel.appendChild(NewRow);
}

function hapustabel() {
  let dataContainer = document.getElementsByTagName("tr");
  let lengthData = dataContainer.length - 1;
  if (dataContainer.length > 1) {
    let kunciFrekunesi = Object.keys(jumlahNilaiFrekuensi);
    let kunciData = Object.keys(jumlahNilaiData);
    let kunciNilaiterbesar = Object.keys(NilaiTerbesar);
    let NilaiTerakhirFrekuensi = kunciFrekunesi.length - 1;
    let NilaiIndexterkahirFrekuensi = kunciFrekunesi[NilaiTerakhirFrekuensi];
    let NilaiIndexterkahirdata1 = kunciData[kunciData.length - 1];
    let NilaiIndexterkahirdata2 = kunciData[kunciData.length - 2];
    let NilaiIndexterakhirterbesar = kunciNilaiterbesar[kunciNilaiterbesar.length - 1];
    delete jumlahNilaiFrekuensi[NilaiIndexterkahirFrekuensi];
    delete jumlahNilaiData[NilaiIndexterkahirdata1];
    delete jumlahNilaiData[NilaiIndexterkahirdata2];
    delete NilaiTerbesar[NilaiIndexterakhirterbesar];
    tabel.removeChild(dataContainer[lengthData]);
  }
}

function hitungnilai() {
  for (let i in z) {
    let HasilInputFrekuensi = document.getElementById("input-kolom-2-" + z[i])?.value;
    if (HasilInputFrekuensi !== undefined) {
      let NamaInput = "input-kolom-2-" + z[i];
      NilaiTerbesar["key" + i] = HasilInputFrekuensi;
      jumlahNilaiFrekuensi[NamaInput] = HasilInputFrekuensi;
    }
  }

  for (let i in k) {
    let HasilInputData = document.getElementById("input-kolom-1-" + k[i])?.value;
    if (HasilInputData !== undefined) {
      let NamaInput = "input-kolom-1-" + k[i];
      jumlahNilaiData[NamaInput] = HasilInputData;
    }
  }

  for (let key in jumlahNilaiFrekuensi) {
    if (jumlahNilaiFrekuensi.hasOwnProperty(key)) {
      jumlahNilaiFrekuensi[key] = Number(jumlahNilaiFrekuensi[key]);
    }
  }

  const values = Object.values(jumlahNilaiFrekuensi);
  const highestValue = Math.max(...values);

  for (let key in jumlahNilaiFrekuensi) {
    if (jumlahNilaiFrekuensi[key] === highestValue) {
      foundKey = +highestValue;
      break;
    }
  }

  let value = Object.values(jumlahNilaiFrekuensi);
  let keys = Object.keys(jumlahNilaiFrekuensi);
  let index = value.indexOf(foundKey);

  if (index !== -1) {
    let prevKey = keys[index - 1] || null;
    let nextKey = keys[index + 1] || null;
    let key = keys[index] || null;
    let elemen = document.getElementById(key);
    let parent = elemen.parentElement;
    let parent2 = parent.parentElement;
    let parent3 = parent2.parentElement;
    let parent3ID = parent3.id;
    let container = document.getElementById(parent3ID);
    let jumlahInput = container.getElementsByTagName("input")[0].value;
    let jumlahInput2 = container.getElementsByTagName("input")[1].value;
    let frekuensiModus = document.getElementById(key).value;
    let nilaiD1 = document.getElementById(prevKey).value;
    let nilaiD2 = document.getElementById(nextKey)?.value;
    let d1 = parseInt(frekuensiModus) - parseInt(nilaiD1);
    let d2 = 0;
    if (nilaiD2 !== undefined) {
      let nilai = parseInt(frekuensiModus) - parseInt(nilaiD2);
      d2 = +nilai;
    }
    let Panjang = parseInt(jumlahInput2) - parseInt(jumlahInput) + 1;
    let tepiBawah = parseInt(jumlahInput) - 0.5;
    panjangData = +Panjang;
    let perhitunganModus = tepiBawah + (d1 / (d1 + d2)) * panjangData;
    nilaiModus = +perhitunganModus;
    document.getElementById("hasil").innerHTML = `Hasil Nilai Modusnya : ${nilaiModus.toString()}`;
  }
}
