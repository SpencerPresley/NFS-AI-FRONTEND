"use client";

import { useState } from "react";



const DirectoryCreator: React.FC = () => {
  const [directoryCreated, setDirectoryCreated] = useState(false);

  const createDirectory = async () => {
    try {
      const directoryName = "AiProjects";

      const handle = await (window as any).showDirectoryPicker({
        startIn: "documents",
      });

      let aiProjectsDirectory;

      try {
        aiProjectsDirectory = await handle.getDirectoryHandle(directoryName, {
          create: true,
        });
        console.log("AiProjects directory created successfully.");
    } catch (err: any) { // Explicitly asserting the type of 'err'
        if (err.name === "AlreadyExistsError") {
          console.log("AiProjects directory already exists.");
        } else {
          throw err;
        }
      }

      setDirectoryCreated(true);
    } catch (err) {
      console.error("Failed to create directory:", err);
    }
  };

  return (
    <div>
      <button onClick={createDirectory} disabled={directoryCreated}>
        {directoryCreated ? "Directory Created" : "Create Directory"}
      </button>
    </div>
  );
};

export default DirectoryCreator;