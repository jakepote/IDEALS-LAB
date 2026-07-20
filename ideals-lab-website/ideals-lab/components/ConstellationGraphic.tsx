'use client';

import { motion } from 'framer-motion';
import research from '@/data/research.json';

// A node-and-edge graphic where every research area is a node and every
// connection represents lab work that spans both areas. It's the one
// recognizable "mark" of the site: reused (smaller) in the footer / loading
// states, and rendered full-size here in the hero.

const NODES = research.map((r, i) => {
  const angle = (i / research.length) * Math.PI * 2 - Math.PI / 2;
  const radius = i % 2 === 0 ? 150 : 110;
  return {
    slug: r.slug,
    title: r.title,
    x: 260 + Math.cos(angle) * radius,
    y: 220 + Math.sin(angle) * radius * 0.85
  };
});

// A handful of illustrative cross-connections (not exhaustive) to suggest
// that these are not siloed topics but one connected research program.
const EDGES: [number, number][] = [
  [0, 1],
  [0, 5],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 0],
  [1, 5],
  [6, 1]
];

export default function ConstellationGraphic({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 440"
      className={className}
      role="img"
      aria-label="Diagram connecting the lab's nine research areas"
    >
      <g opacity="0.9">
        {EDGES.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="#2E86DE"
            strokeWidth="1"
            className="animate-pulseLine"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </g>

      {NODES.map((n, i) => (
        <motion.g
          key={n.slug}
          className="animate-drift"
          style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${i * 0.4}s` }}
        >
          <circle cx={n.x} cy={n.y} r={i === 0 ? 9 : 6.5} fill="#500000" />
          <circle cx={n.x} cy={n.y} r={i === 0 ? 16 : 12} fill="#500000" opacity="0.12" />
        </motion.g>
      ))}
    </svg>
  );
}
