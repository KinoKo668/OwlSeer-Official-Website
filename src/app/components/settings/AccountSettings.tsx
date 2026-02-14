import React from 'react';
import { User, Mail, Globe, Clock, Camera, Upload, ChevronRight, X } from 'lucide-react';
import { Card, CardContent } from '../Card';
import { EmailVerificationModal } from './EmailVerificationModal';

const timeZones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'Europe/London', label: 'London (GMT)' },
  { value: 'Europe/Paris', label: 'Paris (CET)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
];

const languages = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
];

export function AccountSettings() {
  const [name, setName] = React.useState('Sarah Chen');
  const [email, setEmail] = React.useState('sarah.chen@email.com');
  const [timeZone, setTimeZone] = React.useState('America/New_York');
  const [language, setLanguage] = React.useState('en');
  const [avatar, setAvatar] = React.useState<string | null>(null);
  const [showEmailModal, setShowEmailModal] = React.useState(false);
  const [editingField, setEditingField] = React.useState<string | null>(null);
  const [tempValue, setTempValue] = React.useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const isMobile = false;

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setAvatar(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleEmailUpdate = (newEmail: string) => {
    setEmail(newEmail);
  };

  const getTimeZoneLabel = (value: string) => {
    return timeZones.find(tz => tz.value === value)?.label || value;
  };

  const getLanguageLabel = (value: string) => {
    return languages.find(lang => lang.value === value)?.label || value;
  };

  // Mobile Layout
  if (isMobile) {
    // Show editing sub-pages
    if (editingField === 'name') {
      return (
        <div className="flex flex-col h-screen bg-[#fafafa]">
          {/* Header */}
          <div className="bg-white border-b border-[#e0e0e0] flex-shrink-0">
            <div className="px-4 py-4 flex items-center justify-between">
              <button
                onClick={() => setEditingField(null)}
                className="text-[#0284c7]"
                style={{ fontSize: '16px', fontWeight: '500' }}
              >
                Cancel
              </button>
              <h1 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '600' }}>
                Name
              </h1>
              <button
                onClick={() => {
                  setName(tempValue);
                  setEditingField(null);
                }}
                className="text-[#0284c7]"
                style={{ fontSize: '16px', fontWeight: '600' }}
              >
                Done
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="bg-white px-4 py-3 border-b border-[#e0e0e0]">
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-full px-0 py-2 text-[#1a1a1a] focus:outline-none bg-transparent"
                style={{ fontSize: '17px' }}
                placeholder="Enter your name"
                autoFocus
              />
            </div>
          </div>
        </div>
      );
    }

    if (editingField === 'timezone') {
      return (
        <div className="flex flex-col h-screen bg-[#fafafa]">
          {/* Header */}
          <div className="bg-white border-b border-[#e0e0e0] flex-shrink-0">
            <div className="px-4 py-4 flex items-center justify-between">
              <button
                onClick={() => setEditingField(null)}
                className="text-[#0284c7]"
                style={{ fontSize: '16px', fontWeight: '500' }}
              >
                Cancel
              </button>
              <h1 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '600' }}>
                Time Zone
              </h1>
              <button
                onClick={() => {
                  setTimeZone(tempValue);
                  setEditingField(null);
                }}
                className="text-[#0284c7]"
                style={{ fontSize: '16px', fontWeight: '600' }}
              >
                Done
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="bg-white divide-y divide-[#f0f0f0]">
              {timeZones.map((tz) => (
                <button
                  key={tz.value}
                  onClick={() => setTempValue(tz.value)}
                  className={`w-full px-4 py-3.5 text-left hover:bg-[#fafafa] transition-colors ${
                    tempValue === tz.value ? 'bg-[#f0f9ff]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={tempValue === tz.value ? 'text-[#0284c7]' : 'text-[#1a1a1a]'} style={{ fontSize: '17px' }}>
                      {tz.label}
                    </span>
                    {tempValue === tz.value && (
                      <svg className="w-5 h-5 text-[#0284c7]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (editingField === 'language') {
      return (
        <div className="flex flex-col h-screen bg-[#fafafa]">
          {/* Header */}
          <div className="bg-white border-b border-[#e0e0e0] flex-shrink-0">
            <div className="px-4 py-4 flex items-center justify-between">
              <button
                onClick={() => setEditingField(null)}
                className="text-[#0284c7]"
                style={{ fontSize: '16px', fontWeight: '500' }}
              >
                Cancel
              </button>
              <h1 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '600' }}>
                Language
              </h1>
              <button
                onClick={() => {
                  setLanguage(tempValue);
                  setEditingField(null);
                }}
                className="text-[#0284c7]"
                style={{ fontSize: '16px', fontWeight: '600' }}
              >
                Done
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="bg-white divide-y divide-[#f0f0f0]">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => setTempValue(lang.value)}
                  className={`w-full px-4 py-3.5 text-left hover:bg-[#fafafa] transition-colors ${
                    tempValue === lang.value ? 'bg-[#f0f9ff]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={tempValue === lang.value ? 'text-[#0284c7]' : 'text-[#1a1a1a]'} style={{ fontSize: '17px' }}>
                      {lang.label}
                    </span>
                    {tempValue === lang.value && (
                      <svg className="w-5 h-5 text-[#0284c7]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Main account settings list
    return (
      <div className="bg-[#fafafa]">
        {/* Profile Section */}
        <div className="bg-white px-4 py-6">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full bg-[#f5f5f5] border-2 border-[#e0e0e0] overflow-hidden flex items-center justify-center">
                {avatar ? (
                  <img src={avatar} alt="Profile" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-[#999999]" />
                )}
              </div>
              <button
                onClick={handleAvatarClick}
                className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg"
              >
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            
            {/* Name */}
            <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '700' }}>
              {name}
            </h2>
            <p className="text-[#999999]" style={{ fontSize: '13px' }}>
              {email}
            </p>

            {/* Change/Remove Photo Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAvatarClick}
                className="px-4 py-2 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] text-[#1a1a1a] transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                {avatar ? 'Change Photo' : 'Upload Photo'}
              </button>
              {avatar && (
                <button
                  onClick={handleRemoveAvatar}
                  className="px-4 py-2 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#fef2f2] hover:border-[#dc2626] text-[#dc2626] transition-colors"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  Remove
                </button>
              )}
            </div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="mt-3">
          <div className="px-4 py-2">
            <h3 className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Personal Information
            </h3>
          </div>
          <div className="bg-white">
            {/* Name Field */}
            <button
              onClick={() => {
                setEditingField('name');
                setTempValue(name);
              }}
              className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-[#fafafa] transition-colors border-b border-[#f0f0f0]"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <User className="w-5 h-5 text-[#666666] flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="text-[#1a1a1a] mb-0.5" style={{ fontSize: '15px', fontWeight: '500' }}>
                    Name
                  </div>
                  <div className="text-[#999999] truncate" style={{ fontSize: '13px' }}>
                    {name}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#cccccc] flex-shrink-0" />
            </button>

            {/* Email Field */}
            <button
              onClick={() => setShowEmailModal(true)}
              className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-[#fafafa] transition-colors border-b border-[#f0f0f0]"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Mail className="w-5 h-5 text-[#666666] flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="text-[#1a1a1a] mb-0.5" style={{ fontSize: '15px', fontWeight: '500' }}>
                    Email
                  </div>
                  <div className="text-[#999999] truncate" style={{ fontSize: '13px' }}>
                    {email}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#cccccc] flex-shrink-0" />
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mt-3">
          <div className="px-4 py-2">
            <h3 className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Preferences
            </h3>
          </div>
          <div className="bg-white">
            {/* Time Zone Field */}
            <button
              onClick={() => {
                setEditingField('timezone');
                setTempValue(timeZone);
              }}
              className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-[#fafafa] transition-colors border-b border-[#f0f0f0]"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Clock className="w-5 h-5 text-[#666666] flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="text-[#1a1a1a] mb-0.5" style={{ fontSize: '15px', fontWeight: '500' }}>
                    Time Zone
                  </div>
                  <div className="text-[#999999] truncate" style={{ fontSize: '13px' }}>
                    {getTimeZoneLabel(timeZone)}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#cccccc] flex-shrink-0" />
            </button>

            {/* Language Field */}
            <button
              onClick={() => {
                setEditingField('language');
                setTempValue(language);
              }}
              className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-[#fafafa] transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Globe className="w-5 h-5 text-[#666666] flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="text-[#1a1a1a] mb-0.5" style={{ fontSize: '15px', fontWeight: '500' }}>
                    Language
                  </div>
                  <div className="text-[#999999] truncate" style={{ fontSize: '13px' }}>
                    {getLanguageLabel(language)}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#cccccc] flex-shrink-0" />
            </button>
          </div>
        </div>

        {/* Email Verification Modal */}
        {showEmailModal && (
          <EmailVerificationModal
            currentEmail={email}
            onClose={() => setShowEmailModal(false)}
            onSuccess={handleEmailUpdate}
          />
        )}
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-8">
      <Card>
        <CardContent className="space-y-6">
          {/* Profile Photo Section */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <Camera className="w-4 h-4 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Profile Photo
              </span>
            </label>
            <div className="flex items-center gap-4">
              {/* Avatar Preview */}
              <div className="relative group">
                <div className="w-20 h-20 rounded-lg bg-[#f5f5f5] border-2 border-[#e0e0e0] overflow-hidden flex items-center justify-center">
                  {avatar ? (
                    <img 
                      src={avatar} 
                      alt="Profile" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-[#999999]" />
                  )}
                </div>
                {/* Hover overlay */}
                <div 
                  onClick={handleAvatarClick}
                  className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
                >
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Upload Instructions */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <button
                    onClick={handleAvatarClick}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] transition-colors text-[#1a1a1a]"
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    <Upload className="w-4 h-4" />
                    <span>{avatar ? 'Change Photo' : 'Upload Photo'}</span>
                  </button>
                  {avatar && (
                    <button
                      onClick={handleRemoveAvatar}
                      className="px-4 py-2 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#fef2f2] hover:border-[#dc2626] hover:text-[#dc2626] transition-colors text-[#666666]"
                      style={{ fontSize: '13px', fontWeight: '600' }}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <p className="text-[#999999]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  JPG, PNG or GIF. Max size 5MB. Recommended: 400x400px
                </p>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#e0e0e0]" />

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Full Name
              </span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
              style={{ fontSize: '14px' }}
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Email Address
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                readOnly
                className="flex-1 px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-[#f5f5f5] text-[#666666] cursor-not-allowed"
                style={{ fontSize: '14px' }}
              />
              <button
                onClick={() => setShowEmailModal(true)}
                className="px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white hover:bg-[#f5f5f5] text-[#1a1a1a] transition-colors"
                style={{ fontSize: '14px', fontWeight: '600' }}
              >
                Change
              </button>
            </div>
          </div>

          {/* Time Zone */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Time Zone
              </span>
            </label>
            <select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
              style={{ fontSize: '14px' }}
            >
              {timeZones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Language
              </span>
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] bg-white text-[#1a1a1a] focus:outline-none focus:border-[#666666] transition-colors"
              style={{ fontSize: '14px' }}
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex items-center justify-between pt-6">
        <p className="text-[#999999]" style={{ fontSize: '13px' }}>
          Changes are saved automatically
        </p>
        <button className="px-6 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors" style={{ fontSize: '14px', fontWeight: '600' }}>
          Save Changes
        </button>
      </div>

      {/* Email Verification Modal */}
      {showEmailModal && (
        <EmailVerificationModal
          currentEmail={email}
          onClose={() => setShowEmailModal(false)}
          onSuccess={handleEmailUpdate}
        />
      )}
    </div>
  );
}
