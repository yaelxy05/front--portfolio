// == Import npm
import React, { useState } from 'react';
import pdf from '../../assets/images/cv.pdf';
// == Import
import './cv.scss';

// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Worker } from '@react-pdf-viewer/core';
// == Composant
const Cv = () => {
  const [defaultPdfFile] = useState(pdf);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="cv">
      {defaultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js">
            <Viewer
              fileUrl={defaultPdfFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </>
      )}
    </div>
  );
};

// == Export
export default Cv;
