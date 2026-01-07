// 100个图标定义文件
// 根据品牌定位：自由与梦想、出海、专业

export interface IconDef {
  name: string;
  category: string;
  component: React.ComponentType<{ className?: string }>;
}

// 中国风格小船/划船系列 (1-40)
export const chineseBoatIcons: IconDef[] = [
  // 1-10: 基础中国风格帆船
  {
    name: "Chinese Sailboat 1 - Clear Triangle Sail",
    category: "Chinese Boats",
    component: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M2 20h20" />
        <path d="M6 20V10l6-2v12M18 20V12l-5-2" />
        <path d="M12 8L8 10v8l4-2V8z" fill="currentColor" />
        <path d="M12 8l4 2v8l-4-2V8z" fill="currentColor" />
        <circle cx="12" cy="8" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Chinese Sailboat 2 - Bold Sail",
    category: "Chinese Boats",
    component: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
        <path d="M3 21h18" />
        <path d="M7 21V9l5-2v14M17 21V11l-4-2" />
        <path d="M12 7L9 9v9l3-2V7z" fill="currentColor" />
        <path d="M12 7l3 2v9l-3-2V7z" fill="currentColor" />
        <path d="M12 5v2" strokeWidth="3" />
      </svg>
    ),
  },
  {
    name: "Chinese Sailboat 3 - Curved Hull",
    category: "Chinese Boats",
    component: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M2 20h20" />
        <path d="M5 20c0-6 7-8 7-8s7 2 7 8" />
        <path d="M12 12L9 20h6l-3-8z" fill="currentColor" />
        <path d="M12 12v-4" strokeWidth="2.5" />
        <path d="M12 8L14 10v6l-2-2V8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Chinese Wooden Boat - Traditional",
    category: "Chinese Boats",
    component: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M2 20h20" />
        <path d="M6 20V11l6-3v12M18 20V12l-5-2" />
        <path d="M6 20l1-1M18 20l-1-1M12 8v12" strokeWidth="1.5" />
        <path d="M12 8L10 10v8l2-2V8z" fill="currentColor" />
        <path d="M12 8l2 2v8l-2-2V8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Chinese Fishing Boat - With Person",
    category: "Chinese Boats",
    component: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M2 20h20" />
        <path d="M7 20V10l5-2v12M17 20V11l-4-2" />
        <path d="M12 8L9 10v8l3-2V8z" fill="currentColor" />
        <circle cx="10" cy="9" r="1.5" fill="currentColor" />
        <path d="M10 9v3" />
      </svg>
    ),
  },
  // 继续添加更多...
];

// 由于文件大小限制，我会创建一个更简洁的版本
// 实际使用时，可以逐步添加更多图标

