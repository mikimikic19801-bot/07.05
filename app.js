function padKvota(stara, nova) {
  return ((stara - nova) / stara * 100).toFixed(2);
}

function marza(kvote) {
  let procenat = kvote.map(k => 100 / k);
  let ukupno = procenat.reduce((a,b) => a+b, 0);
  return (ukupno - 100).toFixed(2);
}

function izracunaj() {
  let stare = [parseFloat(stara1.value), parseFloat(stara2.value), parseFloat(stara3.value)];
  let nove = [parseFloat(nova1.value), parseFloat(nova2.value), parseFloat(nova3.value)];

  let padovi = stare.map((s,i) => padKvota(s, nove[i]));
  let marzaVal = marza(nove);

  document.getElementById("rezultat").innerHTML = `
    <p>Pad kvote 1: ${padovi[0]}%</p>
    <p>Pad kvote 2: ${padovi[1]}%</p>
    <p>Pad kvote 3: ${padovi[2]}%</p>
    <p><strong>Marža kladionice: ${marzaVal}%</strong></p>
  `;
}
