// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { DraggableNode } from '../draggableNode';

const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #0d47a1, #1976d2);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const NodeItems = styled.div`
  display: flex;
  gap: 20px;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>PipelineApp</Logo>
      <NodeItems>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='filter' label='Filter' />
        <DraggableNode type='transform' label='Transform' />
        <DraggableNode type='join' label='Join' />
        <DraggableNode type='aggregate' label='Aggregate' />
        <DraggableNode type='sort' label='Sort' />
      </NodeItems>
    </NavbarContainer>
  );
};
