import React, { useState, useEffect } from "react";
import axios from "axios";

const DataPungutan = () => {
  const [data, setData] = useState(null);
  const [formValues, setFormValues] = useState({
    incoterms: "",
    valuta: "",
    kurs: "",
    nilai: "",
    biayaTambahan: "",
    biayaPengurang: "",
    tarifVD: "",
    fob: "",
    asuransiBiayaDi: "",
    asuransi: "",
    freight: "",
    cif: "",
    cifRp: "",
    bruto: "",
    netto: "",
    flagKontainer: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api-hub.ilcs.co.id/test/v2/dataPungutan?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2"
      )
      .then((response) => {
        const data = response.data.data;
        setData(data);
        setFormValues({
          incoterms: data.kd_incoterm || "",
          valuta: data.ur_valuta || "",
          kurs: data.nilai_kurs || "",
          nilai: data.nilai_pabean || "",
          biayaTambahan: data.biaya_tambahan || "",
          biayaPengurang: data.biaya_pengurang || "",
          tarifVD: data.tarif_vd || "",
          fob: data.fob || "",
          asuransiBiayaDi: data.kd_asuransi || "",
          asuransi: data.nilai_asuransi || "",
          freight: data.freight || "",
          cif: data.nilai_pabean || "",
          cifRp: data.nilai_pabean_idr || "",
          bruto: data.berat_kotor || "",
          netto: data.berat_bersih || "",
          flagKontainer: data.flag_curah || "",
        });
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/pungutan",
        formValues
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
      console.error("Error saving data:", error);
      setError(
        error.response
          ? error.response.data.error
          : "An error occurred while saving data."
      );
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {error && <div className="text-red-500">{error}</div>}
        {/* Baris pertama */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700">Incoterms</label>
            <select
              name="incoterms"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.incoterms}
              onChange={handleChange}
            >
              <option value="FOB">Free on Board</option>
            </select>
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Valuta</label>
            <input
              type="text"
              name="valuta"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.valuta}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Kurs</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <input
                type="text"
                name="kurs"
                className="border-0 p-2 flex-grow rounded-l-lg"
                value={formValues.kurs}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col flex-grow mt-5 items-center">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
              <i className="fa-solid fa-rotate"></i>
            </button>
          </div>
        </div>

        {/* Baris kedua */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Nilai</label>
            <input
              type="text"
              name="nilai"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.nilai}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">+</div>
          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Biaya Tambahan</label>
            <input
              type="text"
              name="biayaTambahan"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.biayaTambahan}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">-</div>
          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Biaya Pengurang</label>
            <input
              type="text"
              name="biayaPengurang"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.biayaPengurang}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">+</div>
          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">
              Voluntary Declaration
            </label>
            <input
              type="text"
              name="tarifVD"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.tarifVD}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">=</div>
          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Nilai FOB</label>
            <input
              type="text"
              name="fob"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.fob}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Baris ketiga */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">
              Asuransi Biaya di
            </label>
            <select
              name="asuransiBiayaDi"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.asuransiBiayaDi}
              onChange={handleChange}
            >
              <option value="LN">Luar Negeri</option>
              <option value="DN">Dalam Negeri</option>
            </select>
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Asuransi</label>
            <input
              type="text"
              name="asuransi"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.asuransi}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Freight</label>
            <input
              type="text"
              name="freight"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.freight}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Baris keempat */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">CIF</label>
            <input
              type="text"
              name="cif"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.cif}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">CIF Rp</label>
            <input
              type="text"
              name="cifRp"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.cifRp}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Bruto</label>
            <input
              type="text"
              name="bruto"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.bruto}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Netto</label>
            <input
              type="text"
              name="netto"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.netto}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-medium text-gray-700">Flag Kontainer</label>
            <select
              name="flagKontainer"
              className="border border-gray-300 rounded-lg p-2"
              value={formValues.flagKontainer}
              onChange={handleChange}
            >
              <option value="0">Container</option>
              <option value="1">Curah</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg">
            Kelengkapan data
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="border-solid border-2 border-sky-500 text-sky-500 py-2 px-4 rounded-lg">
            Sebelumnya
          </button>
          <button className="border-solid border-2 border-gray-500 text-gray-500 py-2 px-4 rounded-lg">
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataPungutan;
