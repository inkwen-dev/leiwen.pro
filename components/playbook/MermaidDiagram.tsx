"use client";

import { useEffect, useRef, useState } from "react";
import { renderDiagramSvg, type DiagramLayout } from "@/lib/playbook/layoutDiagram";

type Props = {
  chart: string;
  label?: string;
  layout?: DiagramLayout;
  className?: string;
};

const MIN_SCALE = 0.5;
const MAX_SCALE = 4;

function clampScale(value: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

export default function MermaidDiagram({ chart, label, layout = "mindmap", className }: Props) {
  const layerRef = useRef<HTMLDivElement>(null);
  const drawn = renderDiagramSvg(chart, layout);
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [fitWidth, setFitWidth] = useState(drawn?.width ?? 640);
  const drag = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!open || !layer) return;
    function onWheel(event: WheelEvent) {
      event.preventDefault();
      const step = event.deltaY > 0 ? -0.12 : 0.12;
      setScale((current) => clampScale(current + step));
    }
    layer.addEventListener("wheel", onWheel, { passive: false });
    return () => layer.removeEventListener("wheel", onWheel);
  }, [open]);

  if (!drawn) {
    return (
      <p className="meta" role="status">
        暂时无法显示。
      </p>
    );
  }

  const aria = label ? `${label}的结构` : "结构";

  function openViewer() {
    const fit = Math.min(
      (window.innerWidth * 0.9) / drawn.width,
      (window.innerHeight * 0.82) / drawn.height,
    );
    setFitWidth(Math.max(1, Math.round(drawn.width * fit)));
    setScale(1);
    setPan({ x: 0, y: 0 });
    setOpen(true);
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    setPan({
      x: drag.current.panX + event.clientX - drag.current.x,
      y: drag.current.panY + event.clientY - drag.current.y,
    });
  }

  function onPointerUp() {
    drag.current = null;
  }

  return (
    <>
      <div
        className={className ?? "mermaid-wrap"}
        role="img"
        aria-label={aria}
        onClick={openViewer}
        dangerouslySetInnerHTML={{ __html: drawn.svg }}
      />
      {open ? (
        <div
          ref={layerRef}
          className="zoom-layer"
          role="dialog"
          aria-modal="true"
          aria-label={aria}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="zoom-close"
            aria-label="关闭"
            onClick={(event) => {
              event.stopPropagation();
              setOpen(false);
            }}
          >
            ×
          </button>
          <div
            className="zoom-stage"
            style={{
              width: fitWidth,
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            }}
            onClick={(event) => event.stopPropagation()}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            dangerouslySetInnerHTML={{ __html: drawn.svg }}
          />
        </div>
      ) : null}
    </>
  );
}
