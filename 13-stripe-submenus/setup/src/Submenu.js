import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const [col, setCol] = useState(2);

  const {
    isSubmenuOpen,
    location: { center, bottom },
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    // const { center, bottom } = location;
    submenu.style.left = center;
    submenu.style.top = bottom;
    links.length > 3 ? setCol(4) : links.length === 3 ? setCol(3) : setCol(2);
  }, [center, page]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${col}`}>
        {links.map((subLink, index) => {
          const { icon, url, label } = subLink;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
