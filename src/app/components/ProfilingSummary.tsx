import React from 'react';
import { Target, Activity, TrendingUp, PieChart, Info, Layers } from 'lucide-react';

interface ProfilingSummaryProps {
  t: any;
}

export function ProfilingSummary({ t }: ProfilingSummaryProps) {
  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
          Profiling Summary (Last 30 Videos)
        </h2>
        <p className="text-[#666666]" style={{ fontSize: '13px' }}>
          A high-level snapshot of your content category focus, structure maturity, and style fit.
        </p>
      </div>

      <div className="grid grid-cols-[260px_1fr] gap-6">
        {/* LEFT: Content Category Distribution */}
        <div>
          {/* Section Label */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#666666]" />
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                Content Category Distribution
              </h3>
            </div>
            <p className="text-[#999999]" style={{ fontSize: '10px' }}>
              (Last 30 Videos)
            </p>
          </div>

          {/* Mini Stacked Bar */}
          <div className="mb-4">
            <div className="flex h-7 rounded-lg overflow-hidden">
              <div className="bg-[#3b82f6]" style={{ width: '45%' }} title="Technology 45%"></div>
              <div className="bg-[#8b5cf6]" style={{ width: '22%' }} title="Education 22%"></div>
              <div className="bg-[#10b981]" style={{ width: '15%' }} title="Lifestyle 15%"></div>
              <div className="bg-[#d1d5db]" style={{ width: '18%' }} title="Others 18%"></div>
            </div>
          </div>

          {/* Top-Level Categories as Chips */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div>
                <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Technology
                </span>
              </div>
              <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '700' }}>
                45%
              </span>
            </div>
            <p className="text-[#999999] ml-4" style={{ fontSize: '10px', lineHeight: '1.3' }}>
              mainly Product Reviews & Unboxing
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]"></div>
                <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Education
                </span>
              </div>
              <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '700' }}>
                22%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Lifestyle
                </span>
              </div>
              <span className="text-[#1a1a1a]" style={{ fontSize: '12px', fontWeight: '700' }}>
                15%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d1d5db]"></div>
                <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                  Others
                </span>
              </div>
              <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '700' }}>
                18%
              </span>
            </div>
          </div>

          {/* Focus Status Badge */}
          <div className="p-3 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0]">
            <div className="text-[#999999] mb-1" style={{ fontSize: '10px', fontWeight: '600' }}>
              FOCUS STATUS
            </div>
            <div className="text-[#166534] mb-2" style={{ fontSize: '14px', fontWeight: '700' }}>
              General (50–80%)
            </div>
            <p className="text-[#666666]" style={{ fontSize: '10px', lineHeight: '1.4' }}>
              Top categories cover 82% of recent videos; long-tail 18%
            </p>
          </div>
        </div>

        {/* RIGHT: Profiling Signals */}
        <div className="space-y-3">
          {/* A) Content Focus - Dimension: Category Concentration */}
          <div className="p-4 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <Target className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                    Content Focus
                  </span>
                </div>
                <p className="text-[#999999]" style={{ fontSize: '10px' }}>
                  Dimension: Category Concentration
                </p>
              </div>
              <span className="px-2 py-1 rounded bg-[#fde68a] text-[#92400e]" style={{ fontSize: '11px', fontWeight: '700' }}>
                General
              </span>
            </div>
            <p className="text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.5' }}>
              Based on top-level content categories
            </p>
          </div>

          {/* B) Structure Consistency - Dimension: Narrative Template Reuse */}
          <div className="p-4 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <Activity className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                    Structure Consistency
                  </span>
                </div>
                <p className="text-[#999999]" style={{ fontSize: '10px' }}>
                  Dimension: Narrative Template Reuse
                </p>
              </div>
              <span className="px-2 py-1 rounded bg-[#bbf7d0] text-[#166534]" style={{ fontSize: '11px', fontWeight: '700' }}>
                Strong (≥40%)
              </span>
            </div>
            <p className="text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.5' }}>
              Top narrative structure reuse rate
            </p>
          </div>

          {/* C) Performance Stability - Dimension: Traffic Predictability */}
          <div className="p-4 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <TrendingUp className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                    Performance Stability
                  </span>
                </div>
                <p className="text-[#999999]" style={{ fontSize: '10px' }}>
                  Dimension: Traffic Predictability
                </p>
              </div>
              <span className="px-2 py-1 rounded bg-[#fca5a5] text-[#991b1b]" style={{ fontSize: '11px', fontWeight: '700' }}>
                Volatile
              </span>
            </div>
            <p className="text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.5' }}>
              View variance under main structure
            </p>
          </div>

          {/* D) Style Alignment - Dimension: Visual & Audio Style Fit */}
          <div className="p-4 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0]">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <PieChart className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                    Style Alignment
                  </span>
                </div>
                <p className="text-[#999999]" style={{ fontSize: '10px' }}>
                  Dimension: Visual & Audio Style Fit
                </p>
              </div>
              <span className="px-2 py-1 rounded bg-[#bbf7d0] text-[#166534]" style={{ fontSize: '11px', fontWeight: '700' }}>
                Aligned
              </span>
            </div>
            <p className="text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.5' }}>
              Style vs niche mainstream baseline
            </p>
          </div>

          {/* Drift Indicator (Optional - only when is_type_change = 1) */}
          <div className="p-3 rounded-lg bg-[#fffbeb] border border-[#fde68a]">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#d97706] flex-shrink-0 mt-0.5" />
              <p className="text-[#92400e]" style={{ fontSize: '11px', lineHeight: '1.5' }}>
                Content category shift detected in recent videos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
