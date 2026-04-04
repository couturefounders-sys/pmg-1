'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { LucideIcon } from 'lucide-react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import {
  getCollection,
  addDocument,
  updateDocument,
  deleteDocument,
  FirestoreDoc,
} from '@/lib/firestore';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'boolean' | 'select' | 'date' | 'image';
  required?: boolean;
  options?: string[]; // for select type
  placeholder?: string;
}

interface CMSCollectionManagerProps {
  collectionName: string;
  title: string;
  description: string;
  fields: FieldConfig[];
  displayField: string; // which field to show as the item title in the list
  orderField?: string;
  icon?: LucideIcon;
}

export default function CMSCollectionManager({
  collectionName,
  title,
  description,
  fields,
  displayField,
  orderField = 'createdAt',
  icon: Icon,
}: CMSCollectionManagerProps) {
  const [items, setItems] = useState<FirestoreDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<FirestoreDoc | null>(null);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const loadItems = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCollection(collectionName, orderField, 'desc');
      setItems(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to load items. Check your Firebase configuration.'
      );
    } finally {
      setLoading(false);
    }
  }, [collectionName, orderField]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const resetForm = () => {
    setFormData({});
    setFieldErrors({});
    setEditingItem(null);
    setShowForm(false);
  };

  const openCreateForm = () => {
    const defaults: Record<string, unknown> = {};
    fields.forEach((f) => {
      if (f.type === 'boolean') defaults[f.name] = false;
      else if (f.type === 'number') defaults[f.name] = 0;
      else defaults[f.name] = '';
    });
    setFormData(defaults);
    setFieldErrors({});
    setEditingItem(null);
    setShowForm(true);
  };

  const openEditForm = (item: FirestoreDoc) => {
    const data: Record<string, unknown> = {};
    fields.forEach((f) => {
      data[f.name] = item[f.name] ?? (f.type === 'boolean' ? false : '');
    });
    setFormData(data);
    setFieldErrors({});
    setEditingItem(item);
    setShowForm(true);
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    for (const field of fields) {
      if (!field.required) continue;
      const value = formData[field.name];

      if (field.type === 'boolean') {
        continue;
      }

      if (field.type === 'number') {
        if (value === '' || value === null || value === undefined || Number.isNaN(Number(value))) {
          errors[field.name] = `${field.label} is required`;
        }
        continue;
      }

      if (String(value ?? '').trim() === '') {
        errors[field.name] = `${field.label} is required`;
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      setSaving(true);
      if (editingItem) {
        await updateDocument(collectionName, editingItem.id, formData);
      } else {
        await addDocument(collectionName, formData);
      }
      resetForm();
      await loadItems();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to save. Check your Firebase configuration.'
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDocument(collectionName, id);
      setDeleteConfirm(null);
      await loadItems();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to delete. Check your Firebase configuration.'
      );
    }
  };

  const updateField = (name: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleImageUpload = async (fieldName: string, file: File | null) => {
    if (!file) return;

    try {
      setUploadingField(fieldName);
      const cleanFileName = file.name.replace(/\s+/g, '-').toLowerCase();
      const objectPath = `cms-public/${collectionName}/${Date.now()}-${cleanFileName}`;
      const storageRef = ref(storage, objectPath);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      updateField(fieldName, url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Image upload failed.');
    } finally {
      setUploadingField(null);
    }
  };

  const formatTimestamp = (ts: unknown): string => {
    if (!ts) return '';
    if (typeof ts === 'object' && ts !== null && 'seconds' in ts) {
      return new Date((ts as { seconds: number }).seconds * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return String(ts);
  };

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/cms"
              className="text-sm font-medium hover:underline"
              style={{ color: '#14358A' }}
            >
              &larr; Back to CMS
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-8 flex items-center gap-4">
            {Icon && (
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-[10px]"
                style={{ width: 56, height: 56, background: '#14358A' }}
              >
                <Icon size={24} color="white" strokeWidth={1.6} />
              </div>
            )}
            <div>
              <h1
                className="font-bold mb-1"
                style={{ fontSize: '32px', color: '#14358A', fontFamily: 'DM Sans, sans-serif' }}
              >
                {title}
              </h1>
              <p className="text-gray-500" style={{ fontSize: '15px' }}>
                {description}
              </p>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div
              className="mb-6 p-4 rounded-lg text-sm"
              style={{ backgroundColor: '#FEF2F2', color: '#991B1B', border: '1px solid #FECACA' }}
            >
              {error}
              <button
                onClick={() => setError(null)}
                className="ml-3 font-medium underline"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Action Bar */}
          {!showForm && (
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                {loading ? 'Loading...' : `${items.length} item${items.length !== 1 ? 's' : ''}`}
              </p>
              <button
                onClick={openCreateForm}
                className="text-white font-medium rounded px-5 py-2 text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#14358A' }}
              >
                + Add New
              </button>
            </div>
          )}

          {/* Create / Edit Form */}
          {showForm && (
            <div
              className="mb-8 rounded-lg p-6"
              style={{ border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}
            >
              <h2 className="font-bold text-lg mb-4" style={{ color: '#111827' }}>
                {editingItem ? 'Edit Item' : 'Add New Item'}
              </h2>

              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      className="block text-sm font-medium mb-1"
                      style={{ color: '#374151' }}
                    >
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>

                    {field.type === 'text' && (
                      <input
                        type="text"
                        value={String(formData[field.name] ?? '')}
                        onChange={(e) => updateField(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2 rounded-md text-sm"
                        style={{ border: '1px solid #D1D5DB', outline: 'none' }}
                      />
                    )}

                    {field.type === 'image' && (
                      <div className="space-y-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => void handleImageUpload(field.name, e.target.files?.[0] ?? null)}
                          className="w-full px-3 py-2 rounded-md text-sm"
                          style={{ border: '1px solid #D1D5DB', outline: 'none' }}
                        />
                        {uploadingField === field.name ? (
                          <p className="text-xs text-gray-500">Uploading image...</p>
                        ) : null}
                        <input
                          type="text"
                          value={String(formData[field.name] ?? '')}
                          onChange={(e) => updateField(field.name, e.target.value)}
                          placeholder="Or paste image URL"
                          className="w-full px-3 py-2 rounded-md text-sm"
                          style={{ border: '1px solid #D1D5DB', outline: 'none' }}
                        />
                      </div>
                    )}

                    {field.type === 'textarea' && (
                      <textarea
                        value={String(formData[field.name] ?? '')}
                        onChange={(e) => updateField(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        rows={5}
                        className="w-full px-3 py-2 rounded-md text-sm"
                        style={{ border: '1px solid #D1D5DB', outline: 'none', resize: 'vertical' }}
                      />
                    )}

                    {field.type === 'number' && (
                      <input
                        type="number"
                        value={Number(formData[field.name] ?? 0)}
                        onChange={(e) => updateField(field.name, Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-md text-sm"
                        style={{ border: '1px solid #D1D5DB', outline: 'none' }}
                      />
                    )}

                    {field.type === 'date' && (
                      <input
                        type="date"
                        value={String(formData[field.name] ?? '')}
                        onChange={(e) => updateField(field.name, e.target.value)}
                        className="w-full px-3 py-2 rounded-md text-sm"
                        style={{ border: '1px solid #D1D5DB', outline: 'none' }}
                      />
                    )}

                    {field.type === 'boolean' && (
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={Boolean(formData[field.name])}
                          onChange={(e) => updateField(field.name, e.target.checked)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-600">Enabled</span>
                      </label>
                    )}

                    {field.type === 'select' && field.options && (
                      <select
                        value={String(formData[field.name] ?? '')}
                        onChange={(e) => updateField(field.name, e.target.value)}
                        className="w-full px-3 py-2 rounded-md text-sm"
                        style={{ border: '1px solid #D1D5DB', outline: 'none' }}
                      >
                        <option value="">Select...</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    )}
                    {fieldErrors[field.name] ? (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors[field.name]}</p>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="text-white font-medium rounded px-5 py-2 text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: '#14358A' }}
                >
                  {saving ? 'Saving...' : editingItem ? 'Update' : 'Create'}
                </button>
                <button
                  onClick={resetForm}
                  className="font-medium rounded px-5 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100"
                  style={{ border: '1px solid #D1D5DB' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Items List */}
          {loading ? (
            <div className="text-center py-12 text-gray-400">Loading items...</div>
          ) : items.length === 0 && !showForm ? (
            <div
              className="text-center py-16 rounded-lg"
              style={{ border: '1px dashed #D1D5DB' }}
            >
              <p className="text-gray-400 mb-4">No items yet.</p>
              <button
                onClick={openCreateForm}
                className="text-white font-medium rounded px-5 py-2 text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#14358A' }}
              >
                + Add Your First Item
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg p-4"
                  style={{ border: '1px solid #E5E7EB' }}
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm truncate" style={{ color: '#111827' }}>
                      {String(item[displayField] || 'Untitled')}
                    </p>
                    {'createdAt' in item && item.createdAt ? (
                      <p className="text-xs text-gray-400 mt-0.5">
                        Created {formatTimestamp(item.createdAt)}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                    <button
                      onClick={() => openEditForm(item)}
                      className="text-xs font-medium px-3 py-1.5 rounded transition-colors hover:bg-blue-50"
                      style={{ color: '#14358A', border: '1px solid #14358A' }}
                    >
                      Edit
                    </button>
                    {deleteConfirm === item.id ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-xs font-medium px-3 py-1.5 rounded text-white"
                          style={{ backgroundColor: '#DC2626' }}
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="text-xs font-medium px-3 py-1.5 rounded text-gray-500 hover:bg-gray-100"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(item.id)}
                        className="text-xs font-medium px-3 py-1.5 rounded transition-colors hover:bg-red-50"
                        style={{ color: '#DC2626', border: '1px solid #DC2626' }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
