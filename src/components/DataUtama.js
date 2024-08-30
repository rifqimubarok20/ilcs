import React, { useEffect, useState } from "react";
import axios from "axios";

function DataUtama() {
  const [formData, setFormData] = useState({
    nomorPengajuan: "",
    tanggalPengajuan: "",
    nomorPendaftaran: "",
    tanggalPendaftaran: "",
    kantorPabean: "",
    skepFasilitas: "",
    jenisPIB: "",
    jenisImpor: "",
    caraPembayaran: "",
    transaksi: "",
  });

  useEffect(() => {
    // Fetch data from the API using axios
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-hub.ilcs.co.id/test/v2/dataUtama?nomor_pengajuan=20120B388FAE20240402000001"
        );
        const data = response.data.data;

        setFormData({
          nomorPengajuan: data.nomor_pengajuan || "",
          tanggalPengajuan: data.tanggal_pengajuan || "",
          nomorPendaftaran: data.nomor_pendaftaran || "",
          tanggalPendaftaran: data.tanggal_pendaftaran || "",
          kantorPabean: data.ur_pabean_asal || "",
          skepFasilitas: data.kd_skep_fasilitas || "",
          jenisPIB: data.ur_jenis_pib || "",
          jenisImpor: data.ur_jenis_impor || "",
          caraPembayaran: data.ur_cara_bayar || "",
          transaksi: data.ur_transaksi_impor || "",
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4">
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* Form fields here */}
          <div>
            <label className="block mb-1">Nomor Pengajuan</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.nomorPengajuan}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">Tanggal Pengajuan</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.tanggalPengajuan}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">Nomor Pendaftaran</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.nomorPendaftaran}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">Tanggal Pendaftaran</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.tanggalPendaftaran}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">Kantor Pabean</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.kantorPabean}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">SKEP Fasilitas</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.skepFasilitas}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">Jenis PIB</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.jenisPIB}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">Jenis Impor</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.jenisImpor}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">Cara Pembayaran</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.caraPembayaran}
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1">Transaksi</label>
            <input
              type="text"
              className="w-full border p-2"
              value={formData.transaksi}
              readOnly
            />
          </div>
        </div>
      </form>

      <div className="flex justify-center gap-4 mt-4">
        <button className="border-solid border-2 border-gray-500 text-gray-500 py-2 px-4 rounded-lg">
          Sebelumnya
        </button>
        <button className="border-solid border-2 border-sky-500 text-sky-500 py-2 px-4 rounded-lg">
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

export default DataUtama;
