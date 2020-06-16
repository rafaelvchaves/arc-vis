import {
  ConnectorModel,
  ConnectorConstraints,
} from "@syncfusion/ej2-react-diagrams";

const Edges: ConnectorModel[] = [
  {
    id: "connector1",
    sourceID: "web_server",
    targetID: "queuing_system",
    // sourcePortID: "port1",
    // targetPortID: "port2",
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
  },
  {
    id: "connector2",
    sourceID: "web_server",
    targetID: "queuing_system",
    // sourcePortID: "port1",
    // targetPortID: "port3",
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
  }
];

export default Edges;
