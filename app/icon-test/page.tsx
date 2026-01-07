"use client";

import { useState } from "react";
import {
  // 船/小船系列 - 前排展示
  Sailboat, Ship, Anchor, Compass, Navigation, Waves, 
  Globe, Map, MapPin, Flag, Wind, Cloud, CloudRain, CloudLightning,
  Plane, Rocket, Droplets, Snowflake, Rainbow, Sun, Moon,
  
  // 自由与梦想系列
  Feather, Bird, Heart, Diamond, Gem, Target, Trophy, Award,
  Mountain, Trees, Flower, Sparkle, Flame, Lightbulb, Star, Zap, Sparkles,
  Sunrise, Sunset,
  
  // 专业/创新系列
  Shield, Crown, Book, Pen, Code, Cpu, Briefcase, Building, TrendingUp, Users,
  Key, Lock, Unlock, Mail, Bell, Settings, Search, Filter, Check, X,
  Plus, Minus, ArrowRight, ArrowUp, ArrowDown, RefreshCw, Download, Upload,
  Folder, File, Image, Video, Music, Camera, Gift, Coffee, ShoppingCart, Calendar,
  Clock, Timer, Play, Pause, Square, Volume, Mic, Headphones, Radio,
  
  // 更多专业图标
  Puzzle, Layers, Box, Package, Truck, Store, Wallet, CreditCard, DollarSign,
  TrendingDown, BarChart, PieChart, LineChart, Activity,
  Medal, Badge,
} from "lucide-react";

// 定义图标数据 - 船相关图标放在最前面
const iconCategories = {
  "Boats & Ships": [
    { name: "Sailboat - 帆船", component: Sailboat },
    { name: "Ship - 船", component: Ship },
    { name: "Anchor - 锚", component: Anchor },
    { name: "Compass - 指南针", component: Compass },
    { name: "Navigation - 导航", component: Navigation },
    { name: "Waves - 海浪", component: Waves },
    { name: "Wind - 风", component: Wind },
    { name: "Globe - 地球", component: Globe },
    { name: "Map - 地图", component: Map },
    { name: "MapPin - 地图标记", component: MapPin },
    { name: "Flag - 旗帜", component: Flag },
    { name: "Cloud - 云", component: Cloud },
    { name: "CloudRain - 雨云", component: CloudRain },
    { name: "CloudLightning - 雷云", component: CloudLightning },
    { name: "Droplets - 水滴", component: Droplets },
    { name: "Snowflake - 雪花", component: Snowflake },
    { name: "Rainbow - 彩虹", component: Rainbow },
    { name: "Sun - 太阳", component: Sun },
    { name: "Moon - 月亮", component: Moon },
    { name: "Plane - 飞机", component: Plane },
    { name: "Rocket - 火箭", component: Rocket },
  ],
  "Going Global": [
    { name: "Globe - 地球", component: Globe },
    { name: "Map - 地图", component: Map },
    { name: "MapPin - 地图标记", component: MapPin },
    { name: "Plane - 飞机", component: Plane },
    { name: "Rocket - 火箭", component: Rocket },
    { name: "Flag - 旗帜", component: Flag },
  ],
  "Freedom & Dreams": [
    { name: "Sun - 太阳", component: Sun },
    { name: "Moon - 月亮", component: Moon },
    { name: "Star - 星星", component: Star },
    { name: "Zap - 闪电", component: Zap },
    { name: "Sparkles - 火花", component: Sparkles },
    { name: "Feather - 羽毛", component: Feather },
    { name: "Bird - 鸟", component: Bird },
    { name: "Heart - 心", component: Heart },
    { name: "Diamond - 钻石", component: Diamond },
    { name: "Gem - 宝石", component: Gem },
    { name: "Target - 目标", component: Target },
    { name: "Trophy - 奖杯", component: Trophy },
    { name: "Award - 奖项", component: Award },
    { name: "Mountain - 山", component: Mountain },
    { name: "Trees - 树", component: Trees },
    { name: "Flower - 花", component: Flower },
    { name: "Sparkle - 闪光", component: Sparkle },
    { name: "Flame - 火焰", component: Flame },
    { name: "Lightbulb - 灯泡", component: Lightbulb },
    { name: "Sunrise - 日出", component: Sunrise },
    { name: "Sunset - 日落", component: Sunset },
    { name: "Rainbow - 彩虹", component: Rainbow },
    { name: "CloudRain - 雨云", component: CloudRain },
    { name: "CloudLightning - 雷云", component: CloudLightning },
    { name: "Snowflake - 雪花", component: Snowflake },
    { name: "Droplets - 水滴", component: Droplets },
  ],
  "Professional": [
    { name: "Shield - 盾牌", component: Shield },
    { name: "Crown - 皇冠", component: Crown },
    { name: "Book - 书", component: Book },
    { name: "Pen - 笔", component: Pen },
    { name: "Code - 代码", component: Code },
    { name: "Cpu - CPU", component: Cpu },
    { name: "Briefcase - 公文包", component: Briefcase },
    { name: "Building - 建筑", component: Building },
    { name: "TrendingUp - 上升趋势", component: TrendingUp },
    { name: "Users - 用户", component: Users },
    { name: "Key - 钥匙", component: Key },
    { name: "Lock - 锁", component: Lock },
    { name: "Unlock - 解锁", component: Unlock },
    { name: "Mail - 邮件", component: Mail },
    { name: "Bell - 铃铛", component: Bell },
    { name: "Settings - 设置", component: Settings },
    { name: "Search - 搜索", component: Search },
    { name: "Filter - 筛选", component: Filter },
    { name: "Check - 勾选", component: Check },
    { name: "X - 关闭", component: X },
    { name: "Plus - 加号", component: Plus },
    { name: "Minus - 减号", component: Minus },
    { name: "ArrowRight - 右箭头", component: ArrowRight },
    { name: "ArrowUp - 上箭头", component: ArrowUp },
    { name: "ArrowDown - 下箭头", component: ArrowDown },
    { name: "RefreshCw - 刷新", component: RefreshCw },
    { name: "Download - 下载", component: Download },
    { name: "Upload - 上传", component: Upload },
    { name: "Folder - 文件夹", component: Folder },
    { name: "File - 文件", component: File },
    { name: "Image - 图片", component: Image },
    { name: "Video - 视频", component: Video },
    { name: "Music - 音乐", component: Music },
    { name: "Camera - 相机", component: Camera },
    { name: "Gift - 礼物", component: Gift },
    { name: "Coffee - 咖啡", component: Coffee },
    { name: "ShoppingCart - 购物车", component: ShoppingCart },
    { name: "Calendar - 日历", component: Calendar },
    { name: "Clock - 时钟", component: Clock },
    { name: "Timer - 计时器", component: Timer },
    { name: "Play - 播放", component: Play },
    { name: "Pause - 暂停", component: Pause },
    { name: "Square - 停止", component: Square },
    { name: "Volume - 音量", component: Volume },
    { name: "Mic - 麦克风", component: Mic },
    { name: "Headphones - 耳机", component: Headphones },
    { name: "Radio - 收音机", component: Radio },
    { name: "Puzzle - 拼图", component: Puzzle },
    { name: "Layers - 图层", component: Layers },
    { name: "Box - 盒子", component: Box },
    { name: "Package - 包裹", component: Package },
    { name: "Truck - 卡车", component: Truck },
    { name: "Store - 商店", component: Store },
    { name: "Wallet - 钱包", component: Wallet },
    { name: "CreditCard - 信用卡", component: CreditCard },
    { name: "DollarSign - 美元", component: DollarSign },
    { name: "TrendingDown - 下降趋势", component: TrendingDown },
    { name: "BarChart - 柱状图", component: BarChart },
    { name: "PieChart - 饼图", component: PieChart },
    { name: "LineChart - 折线图", component: LineChart },
    { name: "Activity - 活动", component: Activity },
    { name: "Medal - 奖牌", component: Medal },
    { name: "Badge - 徽章", component: Badge },
  ],
};

// 将所有图标展平并添加索引
const allIcons = Object.entries(iconCategories).flatMap(([category, icons]) =>
  icons.map((icon, index) => ({
    ...icon,
    category,
    index: Object.keys(iconCategories)
      .slice(0, Object.keys(iconCategories).indexOf(category))
      .reduce((sum, cat) => sum + iconCategories[cat as keyof typeof iconCategories].length, 0) + index,
  }))
);

export default function IconTestPage() {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Icons" },
    { id: "Boats & Ships", name: "Boats & Ships" },
    { id: "Going Global", name: "Going Global" },
    { id: "Freedom & Dreams", name: "Freedom & Dreams" },
    { id: "Professional", name: "Professional" },
  ];

  const filteredIcons =
    category === "all"
      ? allIcons
      : allIcons.filter((icon) => icon.category === category);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold mb-2">Leiwen Pro Icon Test Page</h1>
        <p className="text-muted-foreground mb-4">
          Using lucide-react icons - Total: {allIcons.length} icons
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Brand: Freedom & Dreams, Going Global
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                category === cat.id
                  ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {cat.name} {cat.id !== "all" && `(${allIcons.filter(i => i.category === cat.id).length})`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {filteredIcons.map((icon) => {
            const IconComponent = icon.component;
            const isSelected = selectedIcon === icon.index;

            return (
              <div
                key={icon.index}
                onClick={() => setSelectedIcon(icon.index)}
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
                  <p className="text-xs text-center text-muted-foreground mt-1">
                    {icon.name}
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    #{icon.index + 1}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {selectedIcon !== null && (() => {
          const selected = allIcons.find((icon) => icon.index === selectedIcon);
          if (!selected) return null;
          const SelectedIconComponent = selected.component;
          return (
            <div className="mt-8 p-6 rounded-lg border border-border bg-card">
              <h2 className="text-xl font-semibold mb-4">
                Selected: {selected.name}
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <SelectedIconComponent className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-sm">Leiwen</span>
                  <span className="text-sm text-[#D4AF37] font-semibold">Pro</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted rounded">
                <p className="text-sm font-mono text-xs mb-2">
                  Icon Index: {selectedIcon + 1} | Category: {selected.category}
                </p>
                <p className="text-sm text-muted-foreground">
                  Import: <code className="bg-background px-2 py-1 rounded">{`import { ${selected.component.name} } from "lucide-react";`}</code>
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
