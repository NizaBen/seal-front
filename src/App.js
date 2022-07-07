import "./App.css";
import DocsList from "./components/docs-list/DocsList";
import UploadSection from "./components/file-upload";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4">
          <UploadSection />
        </div>
        <div className="col-md-8">
          <DocsList />
        </div>
      </div>
    </div>
  );
}

export default App;
