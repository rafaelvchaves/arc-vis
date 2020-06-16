import React, {Component} from 'react';
import './App.css';
import {
    DiagramComponent,
    HierarchicalTree,
    NodeModel,
    ConnectorModel,
    Inject,
    DataBinding,
    DiagramContextMenu,
    ContextMenuSettingsModel
} from "@syncfusion/ej2-react-diagrams";

import {DataManager} from "@syncfusion/ej2-data";

export interface EmployeeInfo {
    Name: string;
    Role: string;
    color: string;
}

export let data: Object[] = [
    {
        Name: "Elizabeth",
        Role: "Director"
    },
    {
        Name: "Christina",
        ReportingPerson: "Elizabeth",
        Role: "Manager"
    },
    {
        Name: "Yoshi",
        ReportingPerson: "Christina",
        Role: "Lead"
    },
    {
        Name: "Philip",
        ReportingPerson: "Christina",
        Role: "Lead"
    },
    {
        Name: "Yang",
        ReportingPerson: "Elizabeth",
        Role: "Manager"
    },
    {
        Name: "Roland",
        ReportingPerson: "Yang",
        Role: "Lead"
    },
    {
        Name: "Yvonne",
        ReportingPerson: "Yang",
        Role: "Lead"
    }
];


type AppState = {
    dataSettings: {}
    layoutSettings: {}
}

class App extends Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataSettings: {
                id: "Name",
                parentId: "ReportingPerson",
                dataManager: new DataManager(data as JSON[])
            },
            layoutSettings: {
                type: "OrganizationalChart"
            }
        };
    }

    getMenuItems() {
        // Defines the custom context menu items
        return [
            {
                // Text to be displayed
                text: 'Save Allen',
                //Sets the id for the item
                id: 'save',
                //ContextMenu can be visible based on the target in which you open the ContextMenu.
                target: '.e-elementcontent',
                // Sets the css icons for the item
                iconCss: 'e-save'
            },
            {
                text: 'Load Rafa',
                id: 'load',
                target: '#target',
                iconCss: 'e-load'
            },
            {
                text: 'Clear',
                id: 'clear',
                target: '.e-elementcontent',
                iconCss: 'e-clear'
            }
        ]
    }

    getContextMenuSettings(): ContextMenuSettingsModel {
        return (
            {
                //Enables the context menu
                show: true,

                items: this.getMenuItems(),

                // Hides the default context menu items
                showCustomMenuOnly: true,
            })
    }

    render() {
        return (
            <DiagramComponent
                id="diagram"
                width={"100%"}
                height={"350px"}
                dataSourceSettings={this.state.dataSettings}
                layout={this.state.layoutSettings}
                contextMenuSettings={this.getContextMenuSettings()}
                getNodeDefaults={(node: NodeModel): NodeModel => {
                    let codes: { [key: string]: string } = {
                        Director: "rgb(0, 139,139)",
                        Manager: "rgb(30, 30,113)",
                        Lead: "rgb(0, 100,0)"
                    };
                    node.width = 70;
                    node.height = 30;
                    node.annotations = [
                        {content: (node.data as EmployeeInfo).Name, style: {color: "white"}}
                    ];
                    if (node.style) {
                        node.style.fill = codes[(node.data as EmployeeInfo).Role];
                    }
                    return node;
                }}
                getConnectorDefaults={(connector: ConnectorModel): ConnectorModel => {
                    connector.type = "Orthogonal";
                    connector.cornerRadius = 7;
                    return connector;
                }}>
                <Inject services={[HierarchicalTree, DataBinding, DiagramContextMenu]}/>
            </DiagramComponent>
        )
    }
}

export default App;