import React from 'react';

interface SidebarButtonProps {
  label: string;
  onClick: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ label, onClick }) => {
  return (
    <button className="control-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default SidebarButton;
