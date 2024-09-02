// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='filter' label='Filter' /> {/* New Node */}
                <DraggableNode type='transform' label='Transform' /> {/* New Node */}
                <DraggableNode type='join' label='Join' /> {/* New Node */}
                <DraggableNode type='aggregate' label='Aggregate' /> {/* New Node */}
                <DraggableNode type='sort' label='Sort' /> {/* New Node */}
            </div>
        </div>
    );
};
