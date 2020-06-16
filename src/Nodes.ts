import { NodeModel, NodeConstraints } from "@syncfusion/ej2-react-diagrams";

const Nodes: NodeModel[] = [
  {
    id: "web_server",
    height: 100,
    width: 100,
    annotations: [
      {
        content: "WT",
      },
    ],
    shape: {
      type: "Flow",
      shape: "Document",
    },
    style: {
      fill: "#6BA5D7",
      strokeColor: "white",
    },
    constraints: NodeConstraints.Default & ~NodeConstraints.Select
    // ports: [Ports[0]]
  },
  {
    id: "queuing_system",
    height: 100,
    width: 100,
    annotations: [
      {
        content: "R",
      },
    ],
    shape: {
      type: "Flow",
      shape: "MultiDocument",
    },
    style: {
      fill: "#6BA5D7",
      strokeColor: "white",
    },
    constraints: NodeConstraints.Default & ~NodeConstraints.Select
    // ports: [Ports[1], Ports[2], Ports[3], Ports[4]]
  },
];


export default Nodes;
