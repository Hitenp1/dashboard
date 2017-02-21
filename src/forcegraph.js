import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

import dataJSON from './graphdata.json';



export default class ForceGraph extends React.Component {
  render() {
    return (
    <InteractiveForceGraph
      zoom
      simulationOptions={{ animate: true, height: 300, width: 600, strength: {x: 0, y: 0}}}
      labelAttr="label"
      onSelectNode={(node) => console.log(node)}
      highlightDependencies
    >
      {dataJSON.nodes.map(node => (
            <ForceGraphNode
              key={node.id}
              fill={node.fill}
              node={{ id: node.id, label: node.id, radius: node.radius ? node.radius : 6 }}
            />
          ))}
      {dataJSON.links.map(link => (
            <ForceGraphLink
              key={`${link.source}=>${link.target}`}
              link={{ source: link.source, target: link.target }}
            />
          ))}
    </InteractiveForceGraph>

    )
  }
}
