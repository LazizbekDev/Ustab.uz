import { useEffect  } from "react";
export const Web = () => {
    const filePath = "/tarix.zip";

    useEffect(() => {
        // Create a temporary link element
        const link = document.createElement("a");
        link.href = filePath;
        link.download = "tarix.zip"; // Set the desired file name
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
    }, []);

    const downloadFile = () => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'tarix.zip'; // Set the desired file name
        document.body.appendChild(link);
    
        // Trigger the download
        link.click();
    
        // Clean up
        document.body.removeChild(link);
      };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Downloading your file...</h1>
        <p>If the download doesn't start automatically, click the button below:</p>
        <button
          onClick={downloadFile}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Download File
        </button>
      </div>
    );
};
