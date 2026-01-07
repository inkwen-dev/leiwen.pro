"use client";

import { useState } from "react";

// ========== 中国风格小船/划船系列 (1-30) ==========

// Icon 1-10: 中国风格帆船（清晰可见）
function ChineseSailboat1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M6 20V10l6-2v12M18 20V12l-5-2" />
      <path d="M12 8L8 10v8l4-2V8z" fill="currentColor" />
      <path d="M12 8l4 2v8l-4-2V8z" fill="currentColor" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 21h18" />
      <path d="M7 21V9l5-2v14M17 21V11l-4-2" />
      <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
      <path d="M12 5v2" strokeWidth="2.5" />
    </svg>
  );
}

function ChineseSailboat3({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M5 20c0-6 7-8 7-8s7 2 7 8" />
      <path d="M12 12L9 20h6l-3-8z" fill="currentColor" />
      <path d="M12 12v-4" strokeWidth="2.5" />
      <path d="M12 8L14 10v6l-2-2V8z" fill="currentColor" />
    </svg>
  );
}

// Icon 4: 中国风格木船（清晰）
function ChineseWoodenBoat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M6 20V11l6-3v12M18 20V12l-5-2" />
      <path d="M6 20l1-1M18 20l-1-1M12 8v12" strokeWidth="1.5" />
      <path d="M12 8L10 10v8l2-2V8z" fill="currentColor" />
      <path d="M12 8l2 2v8l-2-2V8z" fill="currentColor" />
    </svg>
  );
}

// Icon 5: 中国风格渔船（带人物）
function ChineseFishingBoat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M7 20V10l5-2v12M17 20V11l-4-2" />
      <path d="M12 8L9 10v8l3-2V8z" fill="currentColor" />
      <circle cx="10" cy="9" r="1.5" fill="currentColor" />
      <path d="M10 9v3" />
    </svg>
  );
}

// Icon 6-10: 更多中国风格小船
function ChineseSailboat6({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V10l6-3v14M18 21V12l-5-2" />
      <path d="M12 7L8 9v10l4-2V7z" fill="currentColor" />
      <path d="M12 7l4 2v10l-4-2V7z" fill="currentColor" />
      <path d="M12 5v2" strokeWidth="3" />
    </svg>
  );
}

function ChineseSailboat7({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V9l5-2v13M17 20V11l-4-2" />
      <path d="M12 7L10 9v9l2-2V7z" fill="currentColor" />
      <path d="M12 7l2 2v9l-2-2V7z" fill="currentColor" />
      <circle cx="12" cy="7" r="2" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat8({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M5 20c0-5 7-7 7-7s7 2 7 7" />
      <path d="M12 13L10 20h4l-2-7z" fill="currentColor" />
      <path d="M12 13v-5" strokeWidth="2.5" />
      <path d="M12 8L13 9v7l-1-1V8z" fill="currentColor" />
      <path d="M12 8L11 9v7l1-1V8z" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat9({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V11l6-4v14M18 21V13l-5-3" />
      <path d="M12 7L9 9v10l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v10l-3-2V7z" fill="currentColor" />
      <rect x="11" y="5" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat10({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V10l5-3v13M17 20V12l-4-2" />
      <path d="M12 7L8 9v9l4-2V7z" fill="currentColor" />
      <path d="M12 7l4 2v9l-4-2V7z" fill="currentColor" />
      <path d="M12 5v2" strokeWidth="3" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

// Icon 11-20: 人物划船系列（中国风格）
function PersonRowing1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M6 20V11l6-3v12M18 20V12l-5-2" />
      <circle cx="10" cy="9" r="2" fill="currentColor" />
      <path d="M10 9v4" strokeWidth="2.5" />
      <path d="M8 11h4" />
      <path d="M12 8L9 10v8l3-2V8z" fill="currentColor" />
      <path d="M12 8l3 2v8l-3-2V8z" fill="currentColor" />
    </svg>
  );
}

function PersonRowing2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20" />
      <path d="M7 21V10l5-2v13M17 21V11l-4-2" />
      <circle cx="11" cy="9" r="1.5" fill="currentColor" />
      <path d="M11 9v5" strokeWidth="2.5" />
      <path d="M9 11h4M11 8l-2 2v9l2-2V8z" fill="currentColor" />
      <path d="M11 8l2 2v9l-2-2V8z" fill="currentColor" />
    </svg>
  );
}

function PersonRowing3({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M6 20V10l6-3v13M18 20V12l-5-2" />
      <circle cx="10" cy="8" r="2" fill="currentColor" />
      <path d="M10 8v5" strokeWidth="2.5" />
      <path d="M8 10h4" />
      <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
      <path d="M10 10l-1 1M14 10l1 1" strokeWidth="2" />
    </svg>
  );
}

function PersonRowing4({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 21h18" />
      <path d="M7 21V9l5-2v14M17 21V11l-4-2" />
      <circle cx="11" cy="8" r="1.5" fill="currentColor" />
      <path d="M11 8v6" strokeWidth="2.5" />
      <path d="M9 10h4" />
      <path d="M12 6L10 8v10l2-2V6z" fill="currentColor" />
      <path d="M12 6l2 2v10l-2-2V6z" fill="currentColor" />
    </svg>
  );
}

function PersonRowing5({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M2 20h20" />
      <path d="M6 20V11l6-3v12M18 20V12l-5-2" />
      <circle cx="10" cy="9" r="2" fill="currentColor" />
      <path d="M10 9v4" strokeWidth="3" />
      <path d="M8 11h4" />
      <path d="M12 8L9 10v8l3-2V8z" fill="currentColor" />
      <path d="M12 8l3 2v8l-3-2V8z" fill="currentColor" />
    </svg>
  );
}

// Icon 16-30: 更多中国风格小船变体
function ChineseSailboat11({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V10l6-2v13M18 21V11l-5-2" />
      <path d="M12 8L8 10v9l4-1V8z" fill="currentColor" />
      <path d="M12 8l4 2v9l-4-1V8z" fill="currentColor" />
      <path d="M12 6v2" strokeWidth="2.5" />
    </svg>
  );
}

function ChineseSailboat12({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V9l5-2v13M17 20V11l-4-2" />
      <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <path d="M12 5v2" />
    </svg>
  );
}

// ========== 自由与梦想系列 (31-50) ==========

function Wings1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2C8 2 6 6 6 10c0 4 2 8 6 8s6-4 6-8c0-4-2-8-6-8z" />
      <path d="M12 2v20" />
    </svg>
  );
}

function Star1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Lightning1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function Compass1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <path d="M12 6l-4 8h8l-4-8z" />
    </svg>
  );
}

function Anchor1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2v20M12 2C9 2 7 4 7 7c0 3 2 5 5 5s5-2 5-5c0-3-2-5-5-5z" />
      <path d="M7 7h10M12 12v10" />
    </svg>
  );
}

function Waves1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 12c2-2 6-2 8 0s6 2 8 0M2 18c2-2 6-2 8 0s6 2 8 0" />
    </svg>
  );
}

function Cloud1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

function Rocket1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4.5 16.5c-1.5-1.5-2-4-1-6s3-2.5 5-1.5l7-7c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5l-7 7c1 2 .5 4.5-1.5 5.5s-4.5.5-6-1z" />
      <path d="M12 15l-3-3M15 12l-3-3" />
    </svg>
  );
}

function Lighthouse1({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2v20M12 2l-4 4h8l-4-4z" />
      <path d="M8 6h8M10 10h4M9 14h6" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  );
}

// ========== 简化版本，创建更多图标 ==========
// 为了达到100个图标，我会创建更多变体和组合

// 继续添加更多图标...
// 由于篇幅限制，我会创建一个函数来生成剩余的图标

// 添加更多清晰的中国风格小船图标
function ChineseSailboat13({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V11l6-3v13M18 21V13l-5-2" />
      <path d="M12 8L8 10v9l4-1V8z" fill="currentColor" />
      <path d="M12 8l4 2v9l-4-1V8z" fill="currentColor" />
      <path d="M12 6v2" strokeWidth="3" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat14({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V10l5-3v13M17 20V12l-4-2" />
      <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
      <rect x="11" y="5" width="2" height="3" fill="currentColor" />
    </svg>
  );
}

function PersonRowing6({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M2 20h20" />
      <path d="M6 20V11l6-3v12M18 20V12l-5-2" />
      <circle cx="10" cy="9" r="2" fill="currentColor" />
      <path d="M10 9v5" strokeWidth="3" />
      <path d="M8 11h4" />
      <path d="M12 8L9 10v8l3-2V8z" fill="currentColor" />
      <path d="M12 8l3 2v8l-3-2V8z" fill="currentColor" />
    </svg>
  );
}

// ========== 更多中国风格小船变体 (15-50) ==========

function ChineseSailboat15({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V10l6-2v13M18 21V11l-5-2" />
      <path d="M12 8L8 10v9l4-1V8z" fill="currentColor" />
      <path d="M12 8l4 2v9l-4-1V8z" fill="currentColor" />
      <path d="M12 6v2" strokeWidth="2.5" />
      <path d="M10 7h4" />
    </svg>
  );
}

function ChineseSailboat16({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V9l5-2v13M17 20V11l-4-2" />
      <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <path d="M12 5v2" strokeWidth="3" />
    </svg>
  );
}

function ChineseSailboat17({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M5 20c0-5 7-7 7-7s7 2 7 7" />
      <path d="M12 13L10 20h4l-2-7z" fill="currentColor" />
      <path d="M12 13v-5" strokeWidth="2.5" />
      <path d="M12 8L13 9v7l-1-1V8z" fill="currentColor" />
      <path d="M12 8L11 9v7l1-1V8z" fill="currentColor" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat18({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V11l6-3v13M18 21V13l-5-2" />
      <path d="M12 8L8 10v9l4-1V8z" fill="currentColor" />
      <path d="M12 8l4 2v9l-4-1V8z" fill="currentColor" />
      <rect x="11" y="6" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat19({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V10l5-3v13M17 20V12l-4-2" />
      <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
      <path d="M12 5v2" strokeWidth="3" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat20({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M6 20V10l6-2v12M18 20V12l-5-2" />
      <path d="M12 8L8 10v8l4-2V8z" fill="currentColor" />
      <path d="M12 8l4 2v8l-4-2V8z" fill="currentColor" />
      <path d="M12 6v2" />
      <path d="M10 7h4" />
    </svg>
  );
}

function PersonRowing7({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V11l6-3v13M18 21V13l-5-2" />
      <circle cx="11" cy="9" r="1.5" fill="currentColor" />
      <path d="M11 9v5" strokeWidth="2.5" />
      <path d="M9 11h4" />
      <path d="M12 8L9 10v9l3-2V8z" fill="currentColor" />
      <path d="M12 8l3 2v9l-3-2V8z" fill="currentColor" />
    </svg>
  );
}

function PersonRowing8({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V10l5-2v12M17 20V11l-4-2" />
      <circle cx="10" cy="8" r="2" fill="currentColor" />
      <path d="M10 8v6" strokeWidth="3" />
      <path d="M8 10h4" />
      <path d="M12 7L10 9v9l2-2V7z" fill="currentColor" />
      <path d="M12 7l2 2v9l-2-2V7z" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat21({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V10l6-2v13M18 21V11l-5-2" />
      <path d="M12 8L8 10v9l4-1V8z" fill="currentColor" />
      <path d="M12 8l4 2v9l-4-1V8z" fill="currentColor" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
      <path d="M12 6v2" strokeWidth="2.5" />
    </svg>
  );
}

function ChineseSailboat22({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V9l5-2v13M17 20V11l-4-2" />
      <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
      <rect x="11" y="5" width="2" height="3" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat23({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M5 20c0-6 7-8 7-8s7 2 7 8" />
      <path d="M12 12L9 20h6l-3-8z" fill="currentColor" />
      <path d="M12 12v-4" strokeWidth="2.5" />
      <path d="M12 8L14 10v6l-2-2V8z" fill="currentColor" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

function ChineseSailboat24({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20" />
      <path d="M6 21V11l6-3v13M18 21V13l-5-2" />
      <path d="M12 8L8 10v9l4-1V8z" fill="currentColor" />
      <path d="M12 8l4 2v9l-4-1V8z" fill="currentColor" />
      <path d="M12 6v2" strokeWidth="2.5" />
      <path d="M10 7h4" strokeWidth="2" />
    </svg>
  );
}

function ChineseSailboat25({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M3 20h18" />
      <path d="M7 20V10l5-3v13M17 20V12l-4-2" />
      <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
      <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <path d="M12 5v2" strokeWidth="3" />
    </svg>
  );
}

function PersonRowing9({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 20h20" />
      <path d="M6 20V11l6-3v12M18 20V12l-5-2" />
      <circle cx="10" cy="9" r="2" fill="currentColor" />
      <path d="M10 9v4" strokeWidth="2.5" />
      <path d="M8 11h4" />
      <path d="M12 8L9 10v8l3-2V8z" fill="currentColor" />
      <path d="M12 8l3 2v8l-3-2V8z" fill="currentColor" />
      <path d="M10 10l-1 1M14 10l1 1" strokeWidth="2" />
    </svg>
  );
}

function PersonRowing10({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M3 21h18" />
      <path d="M7 21V10l5-2v13M17 21V11l-4-2" />
      <circle cx="11" cy="9" r="1.5" fill="currentColor" />
      <path d="M11 9v5" strokeWidth="3" />
      <path d="M9 11h4" />
      <path d="M12 8L10 10v8l2-2V8z" fill="currentColor" />
      <path d="M12 8l2 2v8l-2-2V8z" fill="currentColor" />
    </svg>
  );
}

// ========== 更多自由与梦想相关图标 ==========

function Star2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2l2.5 7h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z" />
    </svg>
  );
}

function Star3({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Wings2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2C8 2 6 6 6 10c0 4 2 8 6 8s6-4 6-8c0-4-2-8-6-8z" fill="currentColor" />
      <path d="M12 2v20" strokeWidth="2.5" />
    </svg>
  );
}

function Lightning2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function Feather({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2L8 6l4 4M12 2l4 4-4 4M12 2v20M8 6l-4 4 4 4M16 6l4 4-4 4" />
    </svg>
  );
}

function Bird({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2C8 2 6 4 6 8c0 4 2 6 6 6s6-2 6-6c0-4-2-6-6-6z" />
      <path d="M12 14v8M8 18h8" />
    </svg>
  );
}

function Sun({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v4M12 19v4M23 12h-4M5 12H1M20.66 3.34l-2.83 2.83M6.17 17.83l-2.83 2.83M20.66 20.66l-2.83-2.83M6.17 6.17L3.34 3.34" />
    </svg>
  );
}

function Moon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function Mountain({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 20l9-9 9 9H3z" />
      <path d="M12 11v9" />
    </svg>
  );
}

function Tree({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2v6M12 8l-4 4h8l-4-4z" />
      <path d="M8 12l-4 4h16l-4-4" />
      <path d="M4 16v6h16v-6" />
    </svg>
  );
}

function Flower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M23 12h-4M5 12H1M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93" />
    </svg>
  );
}

function Butterfly({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2C8 2 6 4 6 8c0 4 2 6 6 6s6-2 6-6c0-4-2-6-6-6z" />
      <path d="M12 14v6M8 16h8" />
      <path d="M6 10l-2 2M18 10l2 2" />
    </svg>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function Diamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2l9 9-9 9-9-9 9-9z" />
    </svg>
  );
}

function Gem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
      <path d="M6 3l6 12M18 3l-6 12M6 3l6 6M18 3l-6 6" />
    </svg>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.64 5.64l2.83 2.83M15.53 15.53l2.83 2.83M5.64 18.36l2.83-2.83M15.53 8.47l2.83-2.83" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function Fire({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function Target({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function Trophy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9M6 9h12" />
    </svg>
  );
}

function Award({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
    </svg>
  );
}

function Globe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function Map({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
      <path d="M8 2v16M16 6v16" />
    </svg>
  );
}

function Navigation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  );
}

function Plane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M17.8 19.2L16 11l3.5-3.5C20 4 18.5 2 16.5 2c-1.5 0-2.5 1-3.5 2.5L9.5 8 2 6.5l-1.2 1.2L4 10l-2 2 2 2 2.3 3.3L8 20l2-2 1.5-3.5L15 10l1.2-1.2L17.8 19.2z" />
    </svg>
  );
}

function Ship({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M2 21h20M4 21V8l8-4v17M20 21V10l-7-2" />
      <path d="M12 4v17" />
    </svg>
  );
}

function Flag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22v-7" />
    </svg>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function Sword({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M14.5 17.5L3 6l3.5-3.5L18 14l-3.5 3.5z" />
      <path d="M12 22l5-5" />
    </svg>
  );
}

function Crown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
      <path d="M5 16h14v3H5z" />
    </svg>
  );
}

function Book({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function Pen({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

function Code({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function Cpu({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

function Briefcase({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function Building({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
      <path d="M9 9v0M9 13v0M9 17v0M15 9v0M15 13v0M15 17v0" />
    </svg>
  );
}

function TrendingUp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Lightbulb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 3-2 5-2 5H8s-2-2-2-5a6 6 0 0 1 6-6z" />
    </svg>
  );
}

function Puzzle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M19.439 7.85c-.15.36-.54.58-.95.58h-3.48c-.55 0-1-.45-1-1s.45-1 1-1h2.48c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2.48c-.55 0-1-.45-1-1s.45-1 1-1h3.48c.41 0 .8.22.95.58l1.5 3.5c.15.36.05.77-.23 1.05l-1.5 1.5c-.28.28-.69.38-1.05.23l-3.5-1.5c-.36-.15-.58-.54-.58-.95v-3.48c0-.55.45-1 1-1s1 .45 1 1v2.48c0 .28.22.5.5.5s.5-.22.5-.5v-2.48c0-.55.45-1 1-1s1 .45 1 1v3.48c0 .41-.22.8-.58.95l-3.5 1.5c-.36.15-.77.05-1.05-.23l-1.5-1.5c-.28-.28-.38-.69-.23-1.05l1.5-3.5z" />
    </svg>
  );
}

// ========== 更多图标补充到100个 ==========

function Key({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l2 2L22 7l-2-2m-4.5 4.5L19 4" />
    </svg>
  );
}

function Lock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function Unlock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function Bell({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function Settings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
    </svg>
  );
}

function Search({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function Filter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function Minus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 12h14" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ArrowUp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

function Refresh({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function Download({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function Upload({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M17 8l-5-5-5 5M12 3v12" />
    </svg>
  );
}

function Folder({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function File({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function Image({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function Video({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  );
}

function Music({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function Camera({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function Gift({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="8" width="18" height="4" />
      <rect x="3" y="12" width="18" height="10" />
      <path d="M12 8V2M7 8H5a2 2 0 0 1-2-2c0-1.1.9-2 2-2h2M17 8h2a2 2 0 0 0 2-2c0-1.1-.9-2-2-2h-2" />
    </svg>
  );
}

function Coffee({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <path d="M6 1v3M10 1v3M14 1v3" />
    </svg>
  );
}

function Shopping({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function Calendar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function Clock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function Timer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function generateIcons() {
  const baseIcons = [
    // 中国风格小船系列 (1-30)
    { name: "Chinese Sailboat 1 - Clear Triangle", component: ChineseSailboat1, category: "Chinese Boats" },
    { name: "Chinese Sailboat 2 - Bold Sail", component: ChineseSailboat2, category: "Chinese Boats" },
    { name: "Chinese Sailboat 3 - Curved Hull", component: ChineseSailboat3, category: "Chinese Boats" },
    { name: "Chinese Wooden Boat", component: ChineseWoodenBoat, category: "Chinese Boats" },
    { name: "Chinese Fishing Boat", component: ChineseFishingBoat, category: "Chinese Boats" },
    { name: "Chinese Sailboat 6 - Thick Lines", component: ChineseSailboat6, category: "Chinese Boats" },
    { name: "Chinese Sailboat 7 - With Circle", component: ChineseSailboat7, category: "Chinese Boats" },
    { name: "Chinese Sailboat 8 - Curved", component: ChineseSailboat8, category: "Chinese Boats" },
    { name: "Chinese Sailboat 9 - Detailed", component: ChineseSailboat9, category: "Chinese Boats" },
    { name: "Chinese Sailboat 10 - Bold", component: ChineseSailboat10, category: "Chinese Boats" },
    { name: "Person Rowing 1", component: PersonRowing1, category: "Chinese Boats" },
    { name: "Person Rowing 2", component: PersonRowing2, category: "Chinese Boats" },
    { name: "Person Rowing 3", component: PersonRowing3, category: "Chinese Boats" },
    { name: "Person Rowing 4", component: PersonRowing4, category: "Chinese Boats" },
    { name: "Person Rowing 5", component: PersonRowing5, category: "Chinese Boats" },
    { name: "Chinese Sailboat 11", component: ChineseSailboat11, category: "Chinese Boats" },
    { name: "Chinese Sailboat 12", component: ChineseSailboat12, category: "Chinese Boats" },
    { name: "Chinese Sailboat 13 - Enhanced", component: ChineseSailboat13, category: "Chinese Boats" },
    { name: "Chinese Sailboat 14 - Rectangular", component: ChineseSailboat14, category: "Chinese Boats" },
    { name: "Person Rowing 6 - Bold", component: PersonRowing6, category: "Chinese Boats" },
    { name: "Chinese Sailboat 15 - With Line", component: ChineseSailboat15, category: "Chinese Boats" },
    { name: "Chinese Sailboat 16 - Thick Circle", component: ChineseSailboat16, category: "Chinese Boats" },
    { name: "Chinese Sailboat 17 - Small Curved", component: ChineseSailboat17, category: "Chinese Boats" },
    { name: "Chinese Sailboat 18 - Rectangular Mast", component: ChineseSailboat18, category: "Chinese Boats" },
    { name: "Chinese Sailboat 19 - Enhanced Bold", component: ChineseSailboat19, category: "Chinese Boats" },
    { name: "Chinese Sailboat 20 - Simple Lines", component: ChineseSailboat20, category: "Chinese Boats" },
    { name: "Person Rowing 7", component: PersonRowing7, category: "Chinese Boats" },
    { name: "Person Rowing 8 - Bold", component: PersonRowing8, category: "Chinese Boats" },
    { name: "Chinese Sailboat 21 - Circle Sail", component: ChineseSailboat21, category: "Chinese Boats" },
    { name: "Chinese Sailboat 22 - Rectangular Top", component: ChineseSailboat22, category: "Chinese Boats" },
    { name: "Chinese Sailboat 23 - Curved Enhanced", component: ChineseSailboat23, category: "Chinese Boats" },
    { name: "Chinese Sailboat 24 - Double Lines", component: ChineseSailboat24, category: "Chinese Boats" },
    { name: "Chinese Sailboat 25 - Thick Enhanced", component: ChineseSailboat25, category: "Chinese Boats" },
    { name: "Person Rowing 9 - With Arms", component: PersonRowing9, category: "Chinese Boats" },
    { name: "Person Rowing 10 - Simple", component: PersonRowing10, category: "Chinese Boats" },
    
    // 自由与梦想系列 (35-60)
    { name: "Wings - Freedom", component: Wings1, category: "Freedom & Dreams" },
    { name: "Star - Dream", component: Star1, category: "Freedom & Dreams" },
    { name: "Lightning - Power", component: Lightning1, category: "Freedom & Dreams" },
    { name: "Star 2 - Filled", component: Star2, category: "Freedom & Dreams" },
    { name: "Star 3 - Solid", component: Star3, category: "Freedom & Dreams" },
    { name: "Wings 2 - Filled", component: Wings2, category: "Freedom & Dreams" },
    { name: "Lightning 2 - Filled", component: Lightning2, category: "Freedom & Dreams" },
    { name: "Feather - Lightness", component: Feather, category: "Freedom & Dreams" },
    { name: "Bird - Freedom", component: Bird, category: "Freedom & Dreams" },
    { name: "Sun - Bright Future", component: Sun, category: "Freedom & Dreams" },
    { name: "Moon - Dreams", component: Moon, category: "Freedom & Dreams" },
    { name: "Mountain - Ambition", component: Mountain, category: "Freedom & Dreams" },
    { name: "Tree - Growth", component: Tree, category: "Freedom & Dreams" },
    { name: "Flower - Beauty", component: Flower, category: "Freedom & Dreams" },
    { name: "Butterfly - Transformation", component: Butterfly, category: "Freedom & Dreams" },
    { name: "Heart - Passion", component: Heart, category: "Freedom & Dreams" },
    { name: "Diamond - Value", component: Diamond, category: "Freedom & Dreams" },
    { name: "Gem - Precious", component: Gem, category: "Freedom & Dreams" },
    { name: "Sparkles - Magic", component: Sparkles, category: "Freedom & Dreams" },
    { name: "Fire - Energy", component: Fire, category: "Freedom & Dreams" },
    { name: "Target - Goal", component: Target, category: "Freedom & Dreams" },
    { name: "Trophy - Achievement", component: Trophy, category: "Freedom & Dreams" },
    { name: "Award - Excellence", component: Award, category: "Freedom & Dreams" },
    { name: "Zap - Speed", component: Zap, category: "Freedom & Dreams" },
    
    // 出海/全球化系列 (59-75)
    { name: "Compass - Navigation", component: Compass1, category: "Going Global" },
    { name: "Anchor - Stability", component: Anchor1, category: "Going Global" },
    { name: "Waves - Ocean", component: Waves1, category: "Going Global" },
    { name: "Lighthouse - Guidance", component: Lighthouse1, category: "Going Global" },
    { name: "Globe - World", component: Globe, category: "Going Global" },
    { name: "Map - Journey", component: Map, category: "Going Global" },
    { name: "Navigation - Direction", component: Navigation, category: "Going Global" },
    { name: "Plane - Travel", component: Plane, category: "Going Global" },
    { name: "Ship - Voyage", component: Ship, category: "Going Global" },
    { name: "Flag - Identity", component: Flag, category: "Going Global" },
    
    // 专业/创新系列 (69-100)
    { name: "Cloud - Freedom", component: Cloud1, category: "Professional" },
    { name: "Rocket - Breakthrough", component: Rocket1, category: "Professional" },
    { name: "Shield - Protection", component: Shield, category: "Professional" },
    { name: "Sword - Strength", component: Sword, category: "Professional" },
    { name: "Crown - Leadership", component: Crown, category: "Professional" },
    { name: "Book - Knowledge", component: Book, category: "Professional" },
    { name: "Pen - Writing", component: Pen, category: "Professional" },
    { name: "Code - Technology", component: Code, category: "Professional" },
    { name: "Cpu - Innovation", component: Cpu, category: "Professional" },
    { name: "Briefcase - Business", component: Briefcase, category: "Professional" },
    { name: "Building - Enterprise", component: Building, category: "Professional" },
    { name: "TrendingUp - Growth", component: TrendingUp, category: "Professional" },
    { name: "Users - Community", component: Users, category: "Professional" },
    { name: "Lightbulb - Ideas", component: Lightbulb, category: "Professional" },
    { name: "Puzzle - Problem Solving", component: Puzzle, category: "Professional" },
    { name: "Key - Access", component: Key, category: "Professional" },
    { name: "Lock - Security", component: Lock, category: "Professional" },
    { name: "Unlock - Freedom", component: Unlock, category: "Professional" },
    { name: "Mail - Communication", component: Mail, category: "Professional" },
    { name: "Bell - Notification", component: Bell, category: "Professional" },
    { name: "Settings - Configuration", component: Settings, category: "Professional" },
    { name: "Search - Discovery", component: Search, category: "Professional" },
    { name: "Filter - Selection", component: Filter, category: "Professional" },
    { name: "Check - Success", component: Check, category: "Professional" },
    { name: "X - Close", component: X, category: "Professional" },
    { name: "Plus - Add", component: Plus, category: "Professional" },
    { name: "Minus - Remove", component: Minus, category: "Professional" },
    { name: "ArrowRight - Forward", component: ArrowRight, category: "Professional" },
    { name: "ArrowUp - Rise", component: ArrowUp, category: "Professional" },
    { name: "ArrowDown - Descend", component: ArrowDown, category: "Professional" },
    { name: "Refresh - Renew", component: Refresh, category: "Professional" },
    { name: "Download - Get", component: Download, category: "Professional" },
    { name: "Upload - Share", component: Upload, category: "Professional" },
    { name: "Folder - Organization", component: Folder, category: "Professional" },
    { name: "File - Document", component: File, category: "Professional" },
    { name: "Image - Visual", component: Image, category: "Professional" },
    { name: "Video - Media", component: Video, category: "Professional" },
    { name: "Music - Audio", component: Music, category: "Professional" },
    { name: "Camera - Capture", component: Camera, category: "Professional" },
    { name: "Gift - Reward", component: Gift, category: "Professional" },
    { name: "Coffee - Energy", component: Coffee, category: "Professional" },
    { name: "Shopping - Commerce", component: Shopping, category: "Professional" },
    { name: "Calendar - Time", component: Calendar, category: "Professional" },
    { name: "Clock - Time", component: Clock, category: "Professional" },
    { name: "Timer - Countdown", component: Timer, category: "Professional" },
  ];
  
  return baseIcons;
}

const icons = generateIcons().map((icon, index) => ({
  ...icon,
  index,
}));

export default function IconTestPage() {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Icons" },
    { id: "chinese", name: "Chinese Style Boats" },
    { id: "freedom", name: "Freedom & Dreams" },
    { id: "global", name: "Going Global" },
    { id: "professional", name: "Professional" },
  ];

  const filteredIcons = category === "all" 
    ? icons 
    : icons.filter((icon) => {
        if (category === "chinese") return icon.category === "Chinese Boats";
        if (category === "freedom") return icon.category === "Freedom & Dreams";
        if (category === "global") return icon.category === "Going Global";
        if (category === "professional") return icon.category === "Professional";
        return true;
      });

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-2">Leiwen Pro Icon Test Page</h1>
        <p className="text-muted-foreground mb-4">Based on Brand: Freedom & Dreams, Going Global</p>
        
        {/* Category Filter */}
        <div className="flex gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                category === cat.id
                  ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {filteredIcons.map((icon, index) => {
            const IconComponent = icon.component;
            const isSelected = selectedIcon === index;
            
            return (
              <div
                key={index}
                onClick={() => setSelectedIcon(index)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  isSelected
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <IconComponent className="w-10 h-10 text-[#D4AF37]" />
                  <IconComponent className="w-8 h-8 text-foreground" />
                  <IconComponent className="w-6 h-6 text-muted-foreground" />
                  <p className="text-xs text-center text-muted-foreground">
                    {icon.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {selectedIcon !== null && (() => {
          const selected = icons.find((icon) => icon.index === selectedIcon);
          if (!selected) return null;
          const SelectedIconComponent = selected.component;
          return (
            <div className="mt-8 p-6 rounded-lg border border-border bg-card">
              <h2 className="text-xl font-semibold mb-4">Selected: {selected.name}</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <SelectedIconComponent className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-sm">Leiwen</span>
                  <span className="text-sm text-[#D4AF37] font-semibold">Pro</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted rounded">
                <p className="text-sm font-mono text-xs">
                  Selected Icon Index: {selectedIcon} | Category: {selected.category}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
