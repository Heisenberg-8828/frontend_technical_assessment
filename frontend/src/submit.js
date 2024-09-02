import React from 'react';
import { useStore } from './store'; // Import the Zustand store
import { shallow } from 'zustand/shallow'; // Import shallow for comparing store slices

// Define the selector function to pick the nodes and edges from the store
const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = () => {
    fetch('http://localhost:8000/pipelines/parse', {  // Update the URL as necessary
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nodes, edges }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      alert(`Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while submitting the pipeline. Please try again.');
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
