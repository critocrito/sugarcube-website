import React from "react";

interface SidebarNavProps {
  sections: string[];
}

const SidebarNav = ({sections}: SidebarNavProps) => {
  return (
    <ul>
      {sections.map((section) => (
        <li key={section}>{section}</li>
      ))}
    </ul>
  );
};

export default SidebarNav;
