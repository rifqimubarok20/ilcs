import React from "react";
import Img_notification from "./../images/notifikasi.png";
import Img_transportasi from "./../images/transportasi.png";
import Img_dokumen from "./../images/dokumen.png";
import Img_komoditi from "./../images/komoditi.png";
import Img_layanan from "./../images/layanan.png";

const Navigation = () => {
  return (
    <nav className="p-4 flex justify-center">
      <div className="text-center">
        <img src={Img_notification} alt="Icon 1" className="h-12 mx-10 mb-2" />
        <div className="text-red-500">Pemberitahuan</div>
      </div>
      <div className="text-center">
        <img src={Img_transportasi} alt="Icon 2" className="h-12 mx-10 mb-2" />
        <div>Transportasi</div>
      </div>
      <div className="text-center">
        <img src={Img_dokumen} alt="Icon 3" className="h-12 mx-10 mb-2" />
        <div>Dokumen</div>
      </div>
      <div className="text-center">
        <img src={Img_komoditi} alt="Icon 4" className="h-12 mx-10 mb-2" />
        <div>Komoditi</div>
      </div>
      <div className="text-center">
        <img src={Img_layanan} alt="Icon 5" className="h-12 mx-10 mb-2" />
        <div>Layanan</div>
      </div>
    </nav>
  );
};

export default Navigation;
