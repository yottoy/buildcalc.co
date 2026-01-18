'use client';

import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  value: number | string;
  onChange: (value: string) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

export function InputField({
  label,
  name,
  value,
  onChange,
  unit,
  min = 0,
  max,
  step = 0.01,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-2">
        {label}
        {unit && <span className="text-gray-600 ml-1">({unit})</span>}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 outline-none text-lg font-mono"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}

export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-900 outline-none text-lg bg-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface CalculatorButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function CalculatorButton({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
}: CalculatorButtonProps) {
  const baseClasses = "px-8 py-4 font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = variant === 'primary'
    ? "bg-foreground text-background hover:bg-gray-700"
    : "border-2 border-gray-300 hover:border-gray-900";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
}

interface ResultDisplayProps {
  results: Array<{
    label: string;
    value: string | number;
    unit?: string;
    primary?: boolean;
  }>;
}

export function ResultDisplay({ results }: ResultDisplayProps) {
  return (
    <div className="border-4 border-gray-900 p-6 bg-white">
      <h3 className="text-xl font-bold mb-4">Results</h3>
      <div className="space-y-3">
        {results.map((result, index) => (
          <div
            key={index}
            className={result.primary ? 'text-2xl font-bold' : 'text-lg'}
          >
            <span className="text-gray-600">{result.label}:</span>{' '}
            <span className="font-mono">{result.value}</span>
            {result.unit && <span className="ml-1">{result.unit}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="border-2 border-red-500 bg-red-50 p-4 text-red-700">
      <p className="font-medium">⚠️ {message}</p>
    </div>
  );
}
