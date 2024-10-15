// src/components/BarcodeScanner.js

import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";  // You can use a barcode scanning library here

const BarcodeScanner = () => {
  const [data, setData] = useState("Not Found");

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>Barcode: {data}</p>
    </div>
  );
};

export default BarcodeScanner;
