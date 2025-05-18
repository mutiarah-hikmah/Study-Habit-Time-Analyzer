import React, { useState, useEffect } from 'react';
import JadwalForm from './components/JadwalForm';
import RekomendasiBox from './components/RekomendasiBox';
import axios from 'axios';

const App = () => {
  const [jadwal, setJadwal] = useState([]);
  const [rekomendasi, setRekomendasi] = useState(null);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3001/api/data');
    setJadwal(res.data.jadwal);
  };

  const handleTambahJadwal = async (dataBaru) => {
    await axios.post('http://localhost:3001/api/jadwal', dataBaru);
    fetchData();
  };

  const handleRekomendasi = async (user_id) => {
    const res = await axios.post('http://localhost:3001/api/rekomendasi', { user_id });
    setRekomendasi(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📘 Analisis Waktu Belajar</h1>
      <JadwalForm onSubmit={handleTambahJadwal} onRekomendasi={handleRekomendasi} />
      <RekomendasiBox data={rekomendasi} />
      <h2>📅 Jadwal Saat Ini</h2>
      <ul>
        {jadwal.map(j => (
          <li key={j.jadwal_id}>
            {j.tanggal} - {j.waktu_mulai} s/d {j.waktu_selesai} → {j.aktivitas}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
