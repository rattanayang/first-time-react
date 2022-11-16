import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  MarkerType,
  Position
} from "reactflow";
import "reactflow/dist/style.css";
import "./Flow.css"
import TextUpdaterNode from './node/TextUpdaterNode.js';
import ButtonEdge from './edge/ButtonEdge.js';
import './node/text-updater-node.css';
import CustomNode from "./node/CustomNode/CustomNode.js";
import './node/CustomNode/Overview.css';
import ModalNode from './node/modal-node/modal-node.js'


// import {
//   nodes as initialNodes,
//   edges as initialEdges
// } from "./initial-elements";

const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
  {
    id: 'node-2',
    type: 'output',
    typeNode: 'Function',
    targetPosition: 'top',
    position: { x: 0, y: 200 },
    data: {
      label: 'node 2',
      value: 2123
    },
  },
  {
    id: 'node-3',
    type: 'output',
    typeNode: 'Decision',
    targetPosition: 'top',
    position: { x: 100, y: 200 },
    data: {
      label: 'node 3',
      value: 2123
    },
  },
  {
    id: 'node-4',
    type: 'custom',
    targetPosition: 'top',
    position: { x: 200, y: 200 },
    data: {
      selects: {
        'handle-0': 'smoothstep',
        // 'handle-1': 'smoothstep',
      }
    },
  },
];

const initialEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'b', type: 'buttonedge' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b', type: 'buttonedge' },
  {
    id: 'edge-3', source: 'node-4', target: 'node-3', sourceHandle: 'handle-0', type: 'smoothstep', data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

const nodeTypes = { textUpdater: TextUpdaterNode, custom: CustomNode };
const edgeTypes = { buttonedge: ButtonEdge };

const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;



// const onInit = (reactFlowInstance) =>
//   console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [openModal, setOpenModal] = useState(false);
  const [rfInstance, setRfInstance] = useState(null);
  const [idNode, setIdNode] = useState('');
  const [typeNode, setTypeNode] = useState('');
  const { setViewport } = useReactFlow();

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
      console.log(JSON.stringify(flow));
      console.log(flow);
    }
  }, [rfInstance]);

  const onCloseModalNode = () => {
    setOpenModal(false);
  }
  const onNodeClick = (event, node) => {
    
    console.log('click node', node.id)
    if(node){
      setIdNode(node.id)
      setOpenModal(true);
      setTypeNode(node.typeNode);

    }
    
  };

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));
      if (flow) {
        console.log(flow.nodes)
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;

        setEdges(flow.edges || []);
        setNodes(flow.nodes || []);
        setViewport({ x, y, zoom });
        // updateElements(flow.nodes, flow.edges);
      }
    };

    restoreFlow();
  }, [setEdges, setNodes, setViewport]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: 'Added node' },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
      type: 'custom'
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      if (edge.sourceHandle !== 'a' && edge.sourceHandle !== 'b') {
        const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
        edge.type = edgeType;
      }

    }

    return edge;
  });


  return (

    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={setRfInstance}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
      attributionPosition="top-right"
      onNodeClick={onNodeClick}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
      <div className="save__controls">
        <button onClick={onSave}>save</button>
        <button onClick={onRestore}>restore</button>
        <button onClick={onAdd}>add node</button>
      </div>

      <ModalNode cModal={onCloseModalNode} showModalNode={openModal} idNode={idNode} typeNode={typeNode}/>
    </ReactFlow>



  );
};


export default () => (
  <ReactFlowProvider>
    <OverviewFlow />
  </ReactFlowProvider>
);
