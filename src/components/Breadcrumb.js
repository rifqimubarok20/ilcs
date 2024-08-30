import React from "react";

const Breadcrumb = () => {
  return (
    <section className="bg-white text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <p className="text-gray-900">
          <span className="font-bold">/ Beranda</span> / SSM QC
        </p>
      </div>
      <div className="text-sm flex place-items-center">
        <div className="flex justify-between">
          <p className="text-gray-900 font-bold mx-6">Beranda Permohonan</p>
          <p className="text-gray-900">Beranda Menu</p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
