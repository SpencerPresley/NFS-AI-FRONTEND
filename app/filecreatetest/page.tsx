import FileCreator from "@/components/fileSystem/file-creator";
import DirectoryCreator from "@/components/fileSystem/directory-creator";

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <FileCreator />
      <br />
      <br />
      <DirectoryCreator />
    </div>
  );
};

export default TestPage;