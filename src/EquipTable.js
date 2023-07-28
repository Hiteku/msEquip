import React, { useState } from "react";
import { HitekuEquip, HitekuDetail, LeiEquip } from "./data";
import "./styles.css";

const App = ({ page }) => {
  /*const [currentPage, setCurrentPage] = useState(page || "Hiteku");
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  */
  const ImageGrid = ({ icon, hoverImage }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {icon !== '' ? (
          <img src={`https://hiteku.github.io/img/ms/icon/${icon}.png`} alt="Icon" />
        ) : (
          '' // 空字串
        )}
        {isHovered && hoverImage !== '' && ( // 顯示懸浮大圖片的條件同樣加入檢查
          <div className="floating-image-container">
            <img
              src={
                page === "Hiteku"
                  ? `https://hiteku.fly.dev/static/assets/game/ms/detail/${hoverImage}.png`
                  : `${process.env.PUBLIC_URL}/detail/${page}/${hoverImage}.png`
              }
              alt="Hover Icon"
              className="floating-image"
            />
          </div>
        )}
      </div>
    );
  };

  const Table = () => {

    const icons = page === "Hiteku" ? HitekuEquip : LeiEquip;
    const hoverImages = page === "Hiteku" ? HitekuDetail : LeiEquip;

    return (
      <table>
        <tbody>
          {[...Array(6)].map((_, row) => (
            <tr key={row}>
              {[...Array(5)].map((_, col) => (
                <td key={col}>
                  <ImageGrid icon={icons[row * 5 + col]} hoverImage={hoverImages[row * 5 + col]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="app-container">
      {/*
      <div className="button-container">
        <Link to="/Hiteku" className={`button ${page === "Hiteku" ? "active" : ""}`} onClick={() => handlePageChange("Hiteku")}>
          Hiteku
        </Link>
        <Link to="/LeiLei" className={`button ${page === "LeiLei" ? "active" : ""}`} onClick={() => handlePageChange("LeiLei")}>
          華虎蘭
        </Link>
      </div>*/}
      <div className="table-container">
        <div>
          <h2>{page === 'Hiteku' ? 'Hiteku' : '華虎蘭'}</h2>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
