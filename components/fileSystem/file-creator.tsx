'use client'

import { useState } from 'react';

// Add the declaration for showSaveFilePicker
declare global {
  interface Window {
    showSaveFilePicker: (options?: any) => Promise<any>;
  }
}

const FileCreator: React.FC = () => {
  const [fileCreated, setFileCreated] = useState(false);

  const createFile = async () => {
    try {
        const handle = await window.showSaveFilePicker({
          suggestedName: 'example.txt',
          types: [
            {
              description: 'Text Files',
              accept: {
                'text/plain': ['.txt'],
              },
            },
          ],
        });

      const writable = await handle.createWritable();
      await writable.write('Hello, world!');
      await writable.close();

      setFileCreated(true);
    } catch (err) {
      console.error('Failed to create file:', err);
    }
  };

  return (
    <div>
      <button onClick={createFile} disabled={fileCreated}>
        {fileCreated ? 'File Created' : 'Create File'}
      </button>
    </div>
  );
};

export default FileCreator;