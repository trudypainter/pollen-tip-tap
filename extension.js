import { Node } from "@tiptap/core";
import { PlainNodeView } from "./PlainNodeView";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { ReactNodeView } from "./ReactNodeView";

// export interface Props {}

export const plainExtension =
  Node.create <
  Props >
  {
    name: "plainExtension",
    draggable: true,
    group: "block",
    content: "text*",

    renderHTML() {
      return ["plain-node", 0];
    },
    parseHTML() {
      return [
        {
          tag: "plain-node",
        },
      ];
    },
    addNodeView() {
      return (props) => new PlainNodeView();
    },
  };

export const reactExtension =
  Node.create <
  Props >
  {
    name: "reactExtension",
    draggable: true,
    group: "block",
    content: "text*",

    renderHTML() {
      return ["react-node", 0];
    },
    parseHTML() {
      return [
        {
          tag: "react-node",
        },
      ];
    },
    addNodeView() {
      return ReactNodeViewRenderer(ReactNodeView);
    },
  };
