// Color mapping script
const fs = require('fs');
const path = require('path');

const colorMapping = {
  // Background colors
  '#fafafa': '#F8F9FA',
  '#f5f5f5': '#F8F9FA',
  '#f9fafb': '#F8F9FA',
  
  // Border colors
  '#e0e0e0': '#E5E7EB',
  
  // Text colors
  '#1a1a1a': '#111827',
  '#666666': '#374151',
  '#999999': '#9CA3AF',
  '#6b7280': '#9CA3AF',
  '#a8a29e': '#9CA3AF',
  
  // Brand colors
  '#3b82f6': '#0F766E',  // Blue -> Teal Prime
  '#dbeafe': '#F0FDFA',  // Light blue -> Teal Frost
  '#0095f6': '#0F766E',  // TikTok blue hashtag -> Teal Prime
  
  // Status colors
  '#10b981': '#059669',  // Green -> Emerald
  '#f59e0b': '#D97706',  // Orange -> Amber
  '#eab308': '#D97706',  // Yellow -> Amber
  
  // Interaction colors
  '#404040': '#115E59',  // Dark gray hover -> Dark Teal
};

const filePath = path.join(__dirname, '../app/components/SchedulingSlotsNew.tsx');

let content = fs.readFileSync(filePath, 'utf8');

// Replace all colors
for (const [oldColor, newColor] of Object.entries(colorMapping)) {
  const regex = new RegExp(oldColor.replace('#', '\\#'), 'gi');
  content = content.replace(regex, newColor);
}

fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Colors updated successfully!');
