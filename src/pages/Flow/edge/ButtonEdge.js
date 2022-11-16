import React, { useState  } from "react";
import { getBezierPath } from 'reactflow';
import ModalEdge from './modal-edge/modal-edge'
import { BsPencilSquare } from "react-icons/bs";


import '../../../index.css';



const foreignObjectSize = 40;



// export const setModalEdgeShow = (props) => {
//     console.log("PROPS", props);
//     return <ModalEdge showModalEdge={props} />;
// };

export default function CustomEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    source,
    target
}) {
    const [openModal, setOpenModal] = useState(false);
    const [idEdge, setIdEdge] = useState('');
    const onEdgeClick = (evt, id) => {
        // evt.stopPropagation();
        // alert(`remove ${id}`);
        setIdEdge(id)
        setOpenModal(true);
    };
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onCloseModalEdge = () => {
        setOpenModal(false);
    }

    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            />
            <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={labelX - foreignObjectSize / 2}
                y={labelY - foreignObjectSize / 2}
                className="edgebutton-foreignobject"
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >

                <button className="edgebutton" onClick={(event) => onEdgeClick(event, id)}>
                    {/* <button className="edgebutton" onClick={() => console.log('62')}> */}
                    {/* <BsPencilSquare /> */}
                    fjgfhgjgh
                </button>
                
 
            </foreignObject>
            
            <div>
                <ModalEdge cModal={onCloseModalEdge} showModalEdge={openModal} idEdge={idEdge} sourceNode={source} targetNode={target} />
            </div>
        </>
    );
}
