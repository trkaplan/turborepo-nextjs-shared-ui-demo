import { Button } from "ui";

export default function Docs() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Dokümantasyon</h1>
      <p>Bu dokümantasyon uygulaması Turborepo ile oluşturulmuştur.</p>
      <p>UI paketi ile paylaşılan bileşenler kullanılmaktadır.</p>
      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => alert("Dokümantasyon!")}>Dokümantasyon Düğmesi</Button>
      </div>
    </div>
  );
}
