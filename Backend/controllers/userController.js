const data = require('../models/dataStore');

exports.getAllData = (req, res) => {
  res.json(data);
};

exports.addJadwal = (req, res) => {
  const { user_id, tanggal, waktu_mulai, waktu_selesai, aktivitas } = req.body;
  const newJadwal = {
    jadwal_id: Date.now(),
    user_id,
    tanggal,
    waktu_mulai,
    waktu_selesai,
    aktivitas
  };
  data.jadwal.push(newJadwal);
  res.json({ message: 'Jadwal ditambahkan', newJadwal });
};

exports.generateRekomendasi = (req, res) => {
  const { user_id } = req.body;
  // Contoh logika sederhana (bisa pakai AI nantinya)
  const waktu_disarankan = '19:00'; // waktu statis
  const rekomendasi = {
    rekomendasi_id: Date.now(),
    user_id,
    tanggal: new Date().toISOString().split('T')[0],
    waktu_disarankan,
    alasan: 'Berdasarkan pola belajar malam hari yang lebih fokus'
  };
  data.rekomendasi.push(rekomendasi);
  res.json(rekomendasi);
};
