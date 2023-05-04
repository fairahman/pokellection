import React from 'react';

export default function popup() {
  return (
    <body>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">Error</h3>
        <p className="py-4"></p>
        </div>
      </div>
    </body>
  )
} 