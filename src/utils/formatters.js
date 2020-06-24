import React from "react"

export function excalamationToList(...nodes) {
  return (
    <ul>
      {nodes
        .map(node =>
          typeof node === "string"
            ? node.split("!").map(text => <li>{text}</li>)
            : node
        )
        .reduce((nodes, node) => nodes.concat(node), [])}
    </ul>
  )
}

export function lineToParagraph(...nodes) {
  return nodes
    .map(node =>
      typeof node === "string"
        ? node.split("\n").map(text => <p>{text}</p>)
        : node
    )
    .reduce((nodes, node) => nodes.concat(node), [])
}

export function newLineAndExclamationToParagraphsAndLists(...nodes) {
  return nodes
    .map(node =>
      typeof node === "string"
        ? node.split("\n").map(text => {
            return text.includes("!") ? (
              <ul>
                {text.split("!").map(newText => (
                  <li>{newText}</li>
                ))}
              </ul>
            ) : (
              <p>{text}</p>
            )
          })
        : node
    )
    .reduce((nodes, node) => nodes.concat(node), [])
}
