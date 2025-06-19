"use client";

import React, { useState } from 'react';
import { UnderConstructionModal } from '@/components/ui/under-construction-modal';

interface EnrollButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnrollButton({ className, children }: EnrollButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children}
      </button>
      
      <UnderConstructionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
} 