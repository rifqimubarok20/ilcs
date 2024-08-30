import React, { useState } from "react";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Navigation from "./components/Navigation";
import DataUtama from "./components/DataUtama";
import DataEntitas from "./components/DataEntitas";
import DataPungutan from "./components/DataPungutan";

function App() {
  const [activeTab, setActiveTab] = useState("DataUtama");

  const renderTabContent = () => {
    switch (activeTab) {
      case "DataUtama":
        return <DataUtama />;
      case "DataEntitas":
        return <DataEntitas />;
      case "DataPungutan":
        return <DataPungutan />;
      default:
        return <DataUtama />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Breadcrumb />
      <div className="container bg-white mx-auto mt-10 p-10">
        <Navigation />
        <div className="flex justify-between mt-10">
          <h2 className="text-xl font-bold mb-4">Data Pemberitahuan</h2>
          <h2 className="mb-4">No Pengajuan : 20120B388FAE20240402000001</h2>
        </div>
        <div className="container mx-auto mt-8">
          <div className="tabs flex border-b-2 border-gray-300">
            <button
              className={`tab px-4 py-2 ${
                activeTab === "DataUtama"
                  ? "border-l-2 border-r-2 border-t-2 border-gray-300 bg-white rounded-t-md -mb-0.5"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => setActiveTab("DataUtama")}
            >
              Data Utama
            </button>
            <button
              className={`tab px-4 py-2 ${
                activeTab === "DataEntitas"
                  ? "border-l-2 border-r-2 border-t-2 border-gray-300 bg-white rounded-t-md -mb-0.5"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => setActiveTab("DataEntitas")}
            >
              Data Entitas
            </button>
            <button
              className={`tab px-4 py-2 ${
                activeTab === "DataPungutan"
                  ? "border-l-2 border-r-2 border-t-2 border-gray-300 bg-white rounded-t-md -mb-0.5"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => setActiveTab("DataPungutan")}
            >
              Data Pungutan
            </button>
          </div>
          <div className="border-l-2 border-r-2 border-b-2 border-gray-300 rounded-b-md p-4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
