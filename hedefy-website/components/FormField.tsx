import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
  rows?: number;
}

export default function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  isTextarea = false,
  rows = 4,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-primary-dark font-semibold mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark transition-colors"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark transition-colors"
        />
      )}
    </div>
  );
}
