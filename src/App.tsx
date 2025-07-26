import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDownload = () => {
    // 这里可以添加 APK 下载逻辑
    alert("APK 下载功能待实现");
  };

  const handleWebPreview = () => {
    window.open("https://demo.sendream.localai.me", "_blank");
  };

  return (
    <div className="landing-container">
      {/* Floating decorative elements */}
      <div className="floating-element">💫</div>
      <div className="floating-element">✨</div>
      <div className="floating-element">🌸</div>

      <div className="content-wrapper">
        {/* Left side - Phone mockups */}
        <div className="phones-section">
          <div className="phone-mockup phone-1">
            <div className="phone-screen">
              <img
                src="/memory.png"
                alt="寄念App回忆页面"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "17px",
                }}
              />
            </div>
          </div>

          <div className="phone-mockup phone-2">
            <div className="phone-screen">
              <img
                src="/home.png"
                alt="寄念App主页面"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "17px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="text-section">
          <div className="header-section">
            <div className="logo-area">
              <div className="logo">
                <img
                  src="/logo.png"
                  alt="Sendream Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="tagline">
                思念漂泊之处，爱会回信
                <br />
                where longing drifts, and AI replies
              </div>
            </div>

            <h1 className="main-title">让思念拥有回音</h1>
            <p className="subtitle">用AI漂流瓶连接彼此的Ta</p>

            <div className="description">
              <strong>Sendream·寄念</strong> ——
              是一款数字纪念App，用户可通过漂流瓶写信给已故亲人，并收到AI智慧回信，搭配回忆相册功能，让情感在数字世界中延续不息。
            </div>
          </div>

          {/* QR Codes for desktop */}
          {!isMobile && (
            <div className="qr-section">
              <div className="qr-item">
                <div className="qr-code">
                  <img
                    src="/group.png"
                    alt="group"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="qr-label">用户体验群</div>
              </div>
            </div>
          )}

          {/* Download button for mobile */}
          {isMobile && (
            <>
              <div className="download-section">
                <button className="download-btn" onClick={handleDownload}>
                  下载 APK
                </button>
                <button className="preview-btn" onClick={handleWebPreview}>
                  网页端预览
                </button>
              </div>

              <div className="qr-section" style={{ marginTop: "20px" }}>
                <div className="qr-item">
                  <div className="qr-code">
                    <img
                      src="/group.png"
                      alt="group"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="qr-label">用户体验群</div>
                </div>
              </div>
            </>
          )}

          {/* Team section */}
          <div className="team-section">
            <h2 className="team-title">✦ Sendream · 寄念 ✦</h2>
            <div className="team-members">
              <div className="team-member">
                <div className="member-name">StoryHe</div>
                <div className="member-role">UI/产品</div>
              </div>
              <div className="team-member">
                <div className="member-name">MiaoMint</div>
                <div className="member-role">开发</div>
              </div>
              <div className="team-member">
                <div className="member-name">H2Sxxa</div>
                <div className="member-role">开发</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
