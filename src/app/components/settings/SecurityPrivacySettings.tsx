import React from 'react';
import {
  Info,
  Check,
  ExternalLink,
  Trash2,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent } from '../Card';

export function SecurityPrivacySettings() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-8">
      <div className="space-y-6">
        {/* Data Usage */}
        <Card>
          <CardContent>
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-[#666666] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-[#1a1a1a] mb-2" style={{ fontSize: '15px', fontWeight: '700' }}>
                  How we use your data
                </h4>
                <ul className="space-y-2 text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span>Your TikTok analytics are analyzed to provide strategic recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span>We never share your data with third parties without consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span>All data is encrypted and stored securely in North American servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span>You can download or delete your data at any time</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#000000] transition-colors" style={{ fontSize: '13px', fontWeight: '600' }}>
              <span>Read full privacy policy</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card>
          <CardContent>
            <div className="mb-3">
              <h4 className="text-[#dc2626] mb-1" style={{ fontSize: '15px', fontWeight: '700' }}>
                Danger Zone
              </h4>
              <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                Irreversible actions that will permanently affect your account
              </p>
            </div>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg border-2 border-[#dc2626] bg-[#fef2f2] hover:bg-[#fee2e2] transition-colors">
              <div className="flex items-center gap-3">
                <Trash2 className="w-4 h-4 text-[#dc2626]" />
                <div className="text-left">
                  <div className="text-[#dc2626]" style={{ fontSize: '14px', fontWeight: '600' }}>
                    Delete account
                  </div>
                  <div className="text-[#991b1b]" style={{ fontSize: '12px' }}>
                    Permanently delete your account and all associated data
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#dc2626]" />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}