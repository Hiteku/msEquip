import React, { useState } from "react";
import { HitekuEquip, HitekuDetail, LeiEquip } from "./data";
import "./styles.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("LeiLei");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
        {icon !== "" ? (
          <img src={`https://hiteku.github.io/img/ms/icon/${icon}.png`} alt="Icon" />
        ) : (
          ""
        )}
        {isHovered && hoverImage !== "" && (
          <div className="floating-image-container">
            <img
              src={
                currentPage === "Hiteku"
                  ? `https://hiteku.fly.dev/static/assets/game/ms/detail/${hoverImage}.png`
                  : `${process.env.PUBLIC_URL}/detail/${currentPage}/${hoverImage}.png`
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
    const icons = currentPage === "Hiteku" ? HitekuEquip : LeiEquip;
    const hoverImages = currentPage === "Hiteku" ? HitekuDetail : LeiEquip;

    return (
      <table>
        <tbody>
          {[...Array(6)].map((_, row) => (
            <tr key={row}>
              {[...Array(5)].map((_, col) => (
                <td key={col}>
                  <ImageGrid
                    icon={icons[row * 5 + col]}
                    hoverImage={hoverImages[row * 5 + col]}
                  />
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
      <div className="button-container">
        <button
          className={`button ${currentPage === "Hiteku" ? "active" : ""}`}
          onClick={() => handlePageChange("Hiteku")}
        >
          Hiteku
        </button>
        <button
          className={`button ${currentPage === "LeiLei" ? "active" : ""}`}
          onClick={() => handlePageChange("LeiLei")}
        >
          LeiLei
        </button>
      </div>
      <div className="table-container">
        <div>
          <h2>{currentPage === "Hiteku" ? "Hiteku" : "華虎蘭"}</h2>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
