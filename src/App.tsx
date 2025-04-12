import React from 'react';
import Intro from './app/intro';
import ImageUpload from './app/image-upload';
import UploadHistory from './app/upload-history';
import SupportedDiseases from './app/supported-diseases';
import Team from './app/team';
import Disclaimer from './app/disclaimer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-8 space-y-12">
      <Intro />
      <ImageUpload />
      <UploadHistory />
      <SupportedDiseases />
      <Team />
      <Disclaimer />
    </div>
  );
}

export default App;
