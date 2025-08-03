import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ button, children }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setOpen(!open)}>{button}</div>

      {open && (
        <div className="absolute right- mt-2 w-max bg-white rounded-lg shadow-lg z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
