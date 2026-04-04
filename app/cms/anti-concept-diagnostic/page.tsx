'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';
import { BrainCircuit } from 'lucide-react';

export default function AntiConceptDiagnosticCMS() {
  return (
    <CMSCollectionManager
      icon={BrainCircuit}
      collectionName="antiConceptDiagnostic"
      title="Anti-Concept Diagnostic"
      description="Review and test the scoring logic for the Metacognitive Diagnostic Engine."
      displayField="question"
      fields={[
        { name: 'question', label: 'Question Text', type: 'textarea', required: true, placeholder: 'Enter the diagnostic question' },
        { name: 'category', label: 'Category', type: 'text', required: true, placeholder: 'e.g. Leadership, Strategy, Execution' },
        { name: 'antiConcept', label: 'Related Anti-Concept', type: 'text', placeholder: 'Which anti-concept does this relate to?' },
        { name: 'weight', label: 'Scoring Weight', type: 'number' },
        { name: 'order', label: 'Display Order', type: 'number' },
        { name: 'active', label: 'Active', type: 'boolean' },
      ]}
      orderField="order"
    />
  );
}
