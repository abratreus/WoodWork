import React, { useEffect } from 'react';

export default function ModalError({ id = "modalError", title = "Erro", message = "", show=false }) {
  useEffect(() => {
    // bootstrap modal is handled by data attributes or JS; this is a simple controlled render
  }, [show]);

  if (!show) return null;
  return (
    <div className="modal fade show" style={{display:'block'}} tabIndex="-1" role="dialog" aria-modal="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" aria-label="Fechar"></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
