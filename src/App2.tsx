import React from "react";
// import "./App.css";
// import {
//   DataBinding,
//   DiagramComponent,
//   Inject,
//   HierarchicalTree,
//   DiagramContextMenu,
//   DiagramBeforeMenuOpenEventArgs,
//   ContextMenuSettingsModel,
// } from "@syncfusion/ej2-react-diagrams";
// import { MenuEventArgs } from "@syncfusion/ej2-navigations";
// import Nodes from "./Nodes";
// import Edges from "./Edges";
// let diagramInstance: DiagramComponent | null;

// export default class App extends React.Component<{}> {
//   getContextMenuSettings(): ContextMenuSettingsModel {
//     let a = {
//       show: true,
//       items: [
//         {
//           text: "Save",

//           id: "save",

//           target: ".e-elementcontent",

//           iconCss: "e-save",
//         },
//         {
//           text: "Load",
//           id: "load",
//           target: ".e-elementcontent",
//           iconCss: "e-load",
//         },
//         {
//           text: "Clear",
//           id: "clear",
//           target: ".e-elementcontent",
//           iconCss: "e-clear",
//         },
//       ],
//       showCustomMenuOnly: true,
//       // contextMenuOpen: function (args: DiagramBeforeMenuOpenEventArgs) {
//       //   //do your custom action here.
//       //   for (let item of args.items) {
//       //     if (item.text === "delete") {
//       //       if (diagramInstance?.selectedItems.nodes != null && diagramInstance?.selectedItems.connectors != null) {
//       //         if (
//       //           !diagramInstance.selectedItems.nodes.length &&
//       //           !diagramInstance.selectedItems.connectors.length
//       //         ) {
//       //           args.hiddenItems.push(item.text);
//       //           console.log("BBBBBBB")

//       //         }
//       //       }
//       //     }
//       //   }
//       // },
//       // contextMenuClick: function (args: MenuEventArgs) {
//       //   //do your custom action here.
//       //   console.log("hello")
//       //   if (args.item.id === "save" && diagramInstance?.selectedItems.nodes != null && diagramInstance?.selectedItems.connectors != null) {
//       //     if (
//       //       diagramInstance.selectedItems.nodes.length +
//       //         diagramInstance.selectedItems.connectors.length > 0
//       //     ) {
//       //       console.log("AAAAAAA")
//       //       // diagramInstance.cut();
//       //     }
//       //   }
//       // },
//     };
//     return a;
//   }

//   render() {
//     return (
//       <DiagramComponent
//         id="diagram"
//         width={"80%"}
//         height={"350px"}
//         nodes={Nodes}
//         connectors={Edges}
//         layout={{
//           type: "OrganizationalChart",
//         }}
//         contextMenuSettings={this.getContextMenuSettings()}
//         ref={(diagram) => (diagramInstance = diagram)}
//       >
//         <Inject
//           services={[DataBinding, HierarchicalTree, DiagramContextMenu]}
//         />
//       </DiagramComponent>
//     );
//   }
// }
