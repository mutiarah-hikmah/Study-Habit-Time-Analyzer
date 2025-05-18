import React from 'react';

const RekomendasiBox = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ marginTop: '2rem', border: '1px solid #ddd', padding: '1rem' }}>
      <h2>🎯 Rekomendasi Waktu Belajar</h2>
      <p><strong>Tanggal:</strong> {data.tanggal}</p>
      <p><strong>Jam Disarankan:</strong> {data.waktu_disarankan}</p>
      <p><strong>Alasan:</strong> {data.alasan}</p>
    </div>
  );
};

export default RekomendasiBox;
