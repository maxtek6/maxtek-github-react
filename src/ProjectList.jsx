import { useState } from 'react';


const projects = {
  "wxReactView": "A React component for wxWidgets WebView.",
  "hyperpage": "Fast and efficient solution for storing static content."
};

function ProjectList() {
  return (
    <ul>
      {Object.entries(projects).map(([name, description]) => (
        <li key={name}>
          <a href={`https://github.com/maxtek6/${name}`}>{name}</a>: {description}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;