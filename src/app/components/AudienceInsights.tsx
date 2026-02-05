import React from 'react';
import { Info, Upload, X, Loader2, ArrowUpRight } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface AudienceInsightsProps {
  language?: 'en' | 'zh';
}

// Sample data
const genderData = [
  { name: 'Male', value: 92, color: '#10b981' },
  { name: 'Female', value: 6, color: '#8b5cf6' },
  { name: 'Other', value: 2, color: '#f59e0b' },
];

const ageData = [
  { range: '18-24', percentage: 30.3 },
  { range: '25-34', percentage: 46.6 },
  { range: '35-44', percentage: 15.7 },
  { range: '45-54', percentage: 4.4 },
  { range: '55+', percentage: 3.0 },
];

const locationData = [
  { country: 'Indonesia', percentage: 24.4, code: 'ID' },
  { country: 'Philippines', percentage: 6.1, code: 'PH' },
  { country: 'Singapore', percentage: 5.2, code: 'SG' },
  { country: 'Myanmar', percentage: 4.8, code: 'MM' },
  { country: 'Thailand', percentage: 4.7, code: 'TH' },
];

const translations = {
  en: {
    title: 'Audience Demographics',
    tooltip: 'Aggregated insights from your TikTok follower base.',
    gender: 'Gender Distribution',
    age: 'Age Groups',
    topLocations: 'Top Territories',
    uploadTitle: 'Connect Data Source',
    uploadDescription: 'Upload analytics screenshots to calibrate the AI model.',
    uploadButton: 'Select Files',
    uploadHint: 'Supports PNG/JPG',
    uploaded: 'files ready',
    parsing: 'Analyzing patterns...',
    parsingHint: 'Extracting data points',
    analyzeButton: 'Generate Insights',
    updateButton: 'Update Data',
  },
  zh: {
    title: '受众画像',
    tooltip: '基于 TikTok 粉丝数据的聚合分析。',
    gender: '性别分布',
    age: '年龄段',
    topLocations: '主要区域',
    uploadTitle: '连接数据源',
    uploadDescription: '上传分析截图以校准 AI 模型。',
    uploadButton: '选择文件',
    uploadHint: '支持 PNG/JPG',
    uploaded: '文件就绪',
    parsing: '正在分析模式...',
    parsingHint: '提取数据点中',
    analyzeButton: '生成洞察',
    updateButton: '更新数据',
  },
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl border border-gray-800">
        <p className="font-medium">{label || payload[0].name}</p>
        <p className="text-emerald-400 font-semibold">
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export function AudienceInsights({ language = 'en' }: AudienceInsightsProps) {
  const [uploadedImages, setUploadedImages] = React.useState<File[]>([]);
  const [isParsing, setIsParsing] = React.useState(false);
  const [dataReady, setDataReady] = React.useState(false);

  const t = translations[language];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).slice(0, 5 - uploadedImages.length);
      const updatedImages = [...uploadedImages, ...newFiles].slice(0, 5);
      setUploadedImages(updatedImages);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(updatedImages);
  };

  const handleAnalyze = () => {
    setIsParsing(true);
    setTimeout(() => {
      setIsParsing(false);
      setDataReady(true);
    }, 2000);
  };

  const handleUpdateScreenshots = () => {
    setDataReady(false);
    setUploadedImages([]);
    setIsParsing(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm transition-all hover:shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-gray-900 dark:text-white text-lg font-bold font-display tracking-tight">
            {t.title}
          </h2>
          <div className="group relative flex items-center justify-center">
            <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 cursor-help transition-colors" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-xl z-20">
              {t.tooltip}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
            </div>
          </div>
        </div>

        {dataReady && (
          <button
            onClick={handleUpdateScreenshots}
            className="group flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400 transition-colors bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full"
          >
            <Upload className="w-3.5 h-3.5" />
            {t.updateButton}
          </button>
        )}
      </div>

      {!dataReady ? (
        <div className="border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl bg-gray-50/50 dark:bg-slate-800/50 p-8 text-center transition-all hover:border-emerald-500/50 hover:bg-emerald-50/10">
          {!isParsing ? (
            <div className="flex flex-col items-center max-w-sm mx-auto">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-sm flex items-center justify-center mb-4">
                <Upload className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{t.uploadTitle}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{t.uploadDescription}</p>
              
              <div className="w-full space-y-4">
                 {uploadedImages.length > 0 && (
                  <div className="flex gap-2 justify-center flex-wrap">
                    {uploadedImages.map((img, i) => (
                      <div key={i} className="relative group">
                        <img src={URL.createObjectURL(img)} alt="Uploaded image" loading="lazy" decoding="async" className="w-12 h-12 rounded-lg object-cover border border-gray-200 dark:border-slate-700" />
                        <button onClick={() => handleRemoveImage(i)} className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <X className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                {uploadedImages.length > 0 ? (
                  <button onClick={handleAnalyze} className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors shadow-sm shadow-emerald-500/20">
                    {t.analyzeButton}
                  </button>
                ) : (
                  <label className="block w-full">
                    <input type="file" className="hidden" multiple accept="image/*" onChange={handleFileUpload} />
                    <span className="block w-full py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                      {t.uploadButton}
                    </span>
                  </label>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center py-8">
              <Loader2 className="w-8 h-8 text-emerald-500 animate-spin mb-3" />
              <p className="text-gray-900 dark:text-white font-medium">{t.parsing}</p>
              <p className="text-gray-500 text-xs">{t.parsingHint}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* 1. Gender Distribution - Donut Chart */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              {t.gender}
            </h3>
            <div className="flex-1 flex flex-col items-center justify-center relative min-h-[180px]">
              <div className="w-full h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {genderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">92%</span>
                <span className="text-xs text-gray-500 font-medium">Male</span>
              </div>
            </div>
            {/* Custom Legend */}
            <div className="flex justify-center gap-4 mt-2">
              {genderData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-gray-600 dark:text-gray-400">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Age Groups - Vertical Bar Chart */}
          <div className="flex flex-col">
             <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              {t.age}
            </h3>
            <div className="h-[200px] w-full -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageData} barSize={24}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" opacity={0.5} />
                  <XAxis 
                    dataKey="range" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6B7280', fontSize: 11 }} 
                    dy={10}
                  />
                  <YAxis 
                    hide 
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    content={<CustomTooltip />}
                  />
                  <Bar 
                    dataKey="percentage" 
                    radius={[4, 4, 0, 0]}
                  >
                    {ageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 1 ? '#10b981' : '#E5E7EB'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 3. Top Locations - Clean List */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              {t.topLocations}
            </h3>
            <div className="space-y-4">
              {locationData.map((item, index) => (
                <div key={item.country} className="group flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 dark:bg-slate-800 text-[10px] font-bold text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full group-hover:bg-emerald-400 transition-all duration-500 ease-out"
                        style={{ width: `${(item.percentage / 30) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white w-8 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-auto pt-4 flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-emerald-500 transition-colors self-start">
              View full report <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}