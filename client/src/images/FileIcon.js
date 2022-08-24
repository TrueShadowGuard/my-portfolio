import React from "react"

const FileIcon = (props) => {
  return (
    <svg className={props.className || ""} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
      <polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"/>
      <polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"/>
      <g fill="#1976D2">
        <rect x="16" y="21" width="17" height="2"/>
        <rect x="16" y="25" width="13" height="2"/>
        <rect x="16" y="29" width="17" height="2"/>
        <rect x="16" y="33" width="13" height="2"/>
      </g>
    </svg>
  )
}

export default FileIcon
