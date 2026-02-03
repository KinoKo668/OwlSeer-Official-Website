#!/usr/bin/env python3
import re

# Read the file
with open('/src/app/components/SchedulingSlotsNew.tsx', 'r') as f:
    content = f.read()

# Color mapping
replacements = {
    # Background colors
    '#fafafa': '#F8F9FA',
    '#f5f5f5': '#F8F9FA',
    '#f9fafb': '#F8F9FA',
    '#f0f0f0': '#F8F9FA',
    
    # Border colors
    '#e0e0e0': '#E5E7EB',
    
    # Text colors
    '#1a1a1a': '#111827',
    '#666666': '#374151',
    '#999999': '#9CA3AF',
    '#6b7280': '#9CA3AF',
    '#a8a29e': '#9CA3AF',
    
    # Brand colors - Blue to Teal
    '#3b82f6': '#0F766E',
    '#2563eb': '#0F766E',
    '#dbeafe': '#F0FDFA',
    '#eff6ff': '#F0FDFA',
    '#0095f6': '#0F766E',
    
    # Status colors
    '#10b981': '#059669',
    '#f59e0b': '#D97706',
    '#eab308': '#D97706',
    '#fbbf24': '#D97706',
    '#fffbeb': '#FEF3C7',
    '#fef3c7': '#FEF3C7',
    '#92400e': '#D97706',
    
    # Interaction colors
    '#404040': '#115E59',
}

# Replace all occurrences (case-insensitive)
for old_color, new_color in replacements.items():
    # Create a case-insensitive regex pattern
    pattern = re.compile(re.escape(old_color), re.IGNORECASE)
    content = pattern.sub(new_color, content)

# Write back
with open('/src/app/components/SchedulingSlotsNew.tsx', 'w') as f:
    f.write(content)

print("✅ Color replacement complete!")
print(f"Total replacements: {len(replacements)}")
