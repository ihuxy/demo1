import React,{useEffect,useRef} from 'react';

import G6 from '@antv/g6';

import './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: '0',
    },
    {
      id: '1',
      label: '1',
    },
    {
      id: '2',
      label: '2',
    },
    {
      id: '3',
      label: '3',
    },
    {
      id: '4',
      label: '4',
    },
    {
      id: '5',
      label: '5',
    },
    {
      id: '6',
      label: '6',
    },
    {
      id: '7',
      label: '7',
    },
    {
      id: '8',
      label: '8',
    },
    {
      id: '9',
      label: '9',
    },
  ],
  edges: [
    {
      source: '0',
      target: '1',
      label: 'triangle arrow',
    },
    {
      source: '0',
      target: '2',
      label: 'triangle arrow',
    },
    {
      source: '1',
      target: '4',
      label: 'triangle arrow',
    },
    {
      source: '0',
      target: '3',
      label: 'triangle arrow',
    },
    {
      source: '3',
      target: '4',
      label: 'triangle arrow',
    },
    {
      source: '4',
      target: '5',
      label: 'triangle arrow',
    },
    {
      source: '4',
      target: '6',
      label: 'triangle arrow',
    },
    {
      source: '5',
      target: '7',
      label: 'triangle arrow',
    },
    {
      source: '5',
      target: '8',
      label: 'triangle arrow',
    },
    {
      source: '8',
      target: '9',
      label: 'triangle arrow',
    },
    {
      source: '2',
      target: '9',
      label: 'triangle arrow',
    },
    {
      source: '3',
      target: '9',
      label: 'triangle arrow',
    },
  ],
};

const Index=props=>{
  const container=useRef();
  useEffect(()=>{
    const el=container.current;
    const width = el.scrollWidth;
    const height = el.scrollHeight || 500;
    const graph = new G6.Graph({
      container: el,
      width,
      height,
      fitView: true,
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      layout: {
        type: 'dagre',
        rankdir: 'LR',
        align: 'UL',
        controlPoints: true,
        // nodesepFunc: () => 1,
        // ranksepFunc: () => 1,
        nodesep: 20,
        ranksep: 45,
      },
      defaultNode: {
        size: [30, 20],
        type: 'rect',
        style: {
          lineWidth: 1,
          stroke: '#5B8FF9',
          fill: '#C6E5FF',
        },
      },
      defaultEdge: {
        type: 'polyline',
        size: 1,
        color: '#e2e2e2',
        style: {
          endArrow: {
            path: 'M 0,0 L 8,4 L 8,-4 Z',
            fill: '#e2e2e2',
          },
          radius: 20,
        },
      },
    });
    graph.data(data);
    graph.render();
  },[]);
  const pushStateFn=()=>{
    props.router.push({
      path:'/test/test/test2',
      state:{a:'test'},
    });
  };
  return <div className="test1">
    <div ref={container} />
    <button onClick={()=>pushStateFn()}>push state</button>
  </div>;
};

export default Index;

















