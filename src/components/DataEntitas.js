import React, { useState, useEffect } from "react";
import axios from "axios";

function DataEntitas() {
  const [data, setData] = useState(null);
  const [selectedEntity, setSelectedEntity] = useState("pengusaha");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-hub.ilcs.co.id/test/v2/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2"
        );
        setData(response.data.data); // Set all data here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  const handleSelectChange = (event) => {
    setSelectedEntity(event.target.value);
  };

  const currentEntityData = data[selectedEntity];

  return (
    <div className="p-4">
      {/* Select dropdown for choosing entity */}
      <div className="mb-4">
        <label
          htmlFor="entity-select"
          className="block text-gray-700 font-medium mb-2"
        >
          Jenis Pemberitahuan
        </label>
        <select
          id="entity-select"
          className="border border-gray-300 rounded-lg p-2"
          value={selectedEntity}
          onChange={handleSelectChange}
        >
          <option value="pengusaha">Pengusaha</option>
          <option value="pemusatan">Pemusatan</option>
          <option value="pemilik">Pemilik</option>
          <option value="pengirim">Pengirim</option>
          <option value="pemasok">Pemasok</option>
          <option value="penjual">Penjual</option>
          <option value="penanggungjawab">Penanggungjawab</option>
          <option value="pembeli">Pembeli</option>
        </select>
      </div>

      {/* Display data based on selected entity */}
      {currentEntityData && (
        <div className="space-y-4">
          <hr className="mt-10"></hr>
          <p className="font-bold mb-4">{currentEntityData.ur_entitas}</p>
          {/* Jenis Identitas, NIB, No Identitas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Jenis Identitas
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.ur_jenis_identitas || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">NIB</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.nib || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">No Identitas</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <input
                  type="text"
                  className="flex-1 p-2"
                  value={currentEntityData.nomor_identitas || ""}
                  readOnly
                />
                <button
                  type="button"
                  className="bg-gray-200 px-4 py-2 rounded-r-lg"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>

          {/* No Identitas (16 Digit), Nama Perusahaan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                No Identitas (16 Digit)
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.no_identitas_16 || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Nama Perusahaan
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.nama_identitas || ""}
                readOnly
              />
            </div>
          </div>

          {/* Provinsi, Kota/Kabupaten, Kecamatan, Kode Pos, RT/RW */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Provinsi</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.provinsi_identitas || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Kota/Kabupaten
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.kota_identitas || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Kecamatan</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.kecamatan || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Kode Pos</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.kode_pos || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">RT/RW</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.rt_rw || ""}
                readOnly
              />
            </div>
          </div>

          {/* Telephone, Email, Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Telephone</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.tlp_identitas || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.email_identitas || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Status</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2"
                value={currentEntityData.status || ""}
                readOnly
              />
            </div>
          </div>
        </div>
      )}

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

export default DataEntitas;
