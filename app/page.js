'use client';

import { TaskForm } from '@/components/TaskForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        <TaskForm />
      </div>
    </div>
  );
}