'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';
import { Brain } from 'lucide-react';

export default function AIPromptsCMS() {
  return (
    <CMSCollectionManager
      icon={Brain}
      collectionName="aiPrompts"
      title="AI Prompts"
      description="Edit the system prompts that guide the AI assistants on the site."
      displayField="name"
      fields={[
        { name: 'name', label: 'Prompt Name', type: 'text', required: true, placeholder: 'e.g. Solution Assessment Assistant' },
        { name: 'description', label: 'Description', type: 'text', placeholder: 'What does this prompt do?' },
        { name: 'systemPrompt', label: 'System Prompt', type: 'textarea', required: true, placeholder: 'The system prompt text...' },
        { name: 'model', label: 'Model', type: 'select', options: ['gpt-4o', 'gpt-4o-mini', 'claude-sonnet-4-20250514', 'claude-haiku-4-5-20251001'] },
        { name: 'temperature', label: 'Temperature', type: 'number' },
        { name: 'active', label: 'Active', type: 'boolean' },
      ]}
    />
  );
}
