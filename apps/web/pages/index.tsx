import { Button } from "ui";

export default function Web() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Web Uygulaması</h1>
      <p>Bu uygulama Turborepo ile oluşturulmuştur.</p>
      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => alert("Merhaba!")}>Tıkla</Button>
        <span style={{ marginLeft: "10px" }}>
          <Button variant="secondary" onClick={() => alert("İkinci düğme!")}>
            İkinci Düğme
          </Button>
        </span>
      </div>
    </div>
  );
}
