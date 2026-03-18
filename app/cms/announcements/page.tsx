'use client';

import CMSCollectionManager from '@/components/CMSCollectionManager';

export default function AnnouncementsCMS() {
  return (
    <CMSCollectionManager
      collectionName="announcements"
      title="Announcements"
      description="Manage the upcoming article announcement banner on the Insights page."
      displayField="title"
      fields={[
        { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Announcement title' },
        { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Announcement message' },
        { name: 'linkUrl', label: 'Link URL', type: 'text', placeholder: 'Where the announcement links to' },
        { name: 'linkText', label: 'Link Text', type: 'text', placeholder: 'e.g. Read More' },
        { name: 'startDate', label: 'Start Date', type: 'date' },
        { name: 'endDate', label: 'End Date', type: 'date' },
        { name: 'active', label: 'Active', type: 'boolean' },
      ]}
    />
  );
}
