import React, { useState } from 'react';

const JadwalForm = ({ onSubmit, onRekomendasi }) => {
  const [form, setForm] = useState({
    user_id: 'u1',
    tanggal: '',
    waktu_mulai: '',
    waktu_selesai: '',
    aktivitas: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ ...form, tanggal: '', waktu_mulai: '', waktu_selesai: '', aktivitas: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>📝 Input Jadwal Belajar</h2>
      <input name="tanggal" type="date" value={form.tanggal} onChange={handleChange} required />
      <input name="waktu_mulai" type="time" value={form.waktu_mulai} onChange={handleChange} required />
      <input name="waktu_selesai" type="time" value={form.waktu_selesai} onChange={handleChange} required />
      <input name="aktivitas" placeholder="Aktivitas" value={form.aktivitas} onChange={handleChange} required />
      <button type="submit">Tambah Jadwal</button>
      <button type="button" onClick={() => onRekomendasi(form.user_id)}>🎯 Dapatkan Rekomendasi</button>
    </form>
  );
};

export default JadwalForm;
