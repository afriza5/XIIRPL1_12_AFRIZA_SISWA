const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({ //memanggil module dan membuat schema
      nama_Siswa: {
        type: String,
        required:[true, 'silahkan isikan nama Tempat PKL'],
        unique: true,
        allowNull: false,
      },
      alamat_Siswa: {
        type: String,
        required:[true, 'silahkan isikan alamat tempat'],
        unique: true,
        allowNull: false,
      },
      jurusan: {
        type: String,
        required:[true, 'silahkan isikan nama pegawai'],
        unique: true,
        allowNull: false,
      },
      angkatan: {
        type: String,
        required:[true, 'silahkan isikan jabatan pegawai'],
        unique: true,
        allowNull: false,
      },
      tempat_tanggal_lahir: {
        type: String,
        required:[true, 'silahkan isikan nama siswa pkl'],
        unique: true,
        allowNull: true,
      },
      jenis_kelamin: {
        type: String,
        required:[true, 'silahkan isikan nama siswa pkl'],
        unique: true,
        allowNull: true,
      },
      kelas: {
        type: String,
        required:[true, 'silahkan isikan nama siswa pkl'],
        unique: true,
        allowNull: true,
      },
    });   

module.exports = mongoose.model('User', UserSchema);