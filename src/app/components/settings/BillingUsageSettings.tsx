import React from 'react';
import {
  CreditCard,
  Download,
  CheckCircle,
  Calendar,
  Zap,
  Shield,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';
import { CancelSubscriptionModal } from './CancelSubscriptionModal';

export function BillingUsageSettings() {
  const [showCancelModal, setShowCancelModal] = React.useState(false);

  // Mock data
  const currentPlan = {
    name: 'Growth Plan',
    price: 79,
    billingCycle: 'monthly',
    nextBillingDate: 'January 15, 2026',
    status: 'active',
  };

  const paymentMethod = {
    type: 'Visa',
    last4: '4242',
    expiryDate: '12/2027',
  };

  const billingAddress = {
    line1: '123 Creator Street',
    line2: 'Suite 100',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    country: 'United States',
  };

  const creditsUsage = {
    total: 5000,
    used: 3250,
    remaining: 1750,
    resetDate: 'January 15, 2026',
    dailyUsage: [
      { day: 1, credits: 120 },
      { day: 2, credits: 95 },
      { day: 3, credits: 145 },
      { day: 4, credits: 110 },
      { day: 5, credits: 180 },
      { day: 6, credits: 90 },
      { day: 7, credits: 155 },
      { day: 8, credits: 130 },
      { day: 9, credits: 105 },
      { day: 10, credits: 165 },
      { day: 11, credits: 140 },
      { day: 12, credits: 125 },
      { day: 13, credits: 115 },
      { day: 14, credits: 175 },
      { day: 15, credits: 95 },
      { day: 16, credits: 160 },
      { day: 17, credits: 135 },
      { day: 18, credits: 100 },
      { day: 19, credits: 150 },
      { day: 20, credits: 120 },
      { day: 21, credits: 140 },
      { day: 22, credits: 110 },
      { day: 23, credits: 130 },
      { day: 24, credits: 145 },
      { day: 25, credits: 155 },
      { day: 26, credits: 0 },
    ],
  };

  const invoices = [
    {
      id: 'INV-2025-12',
      date: 'December 15, 2025',
      amount: 79.00,
      status: 'paid',
      downloadUrl: '#',
    },
    {
      id: 'INV-2025-11',
      date: 'November 15, 2025',
      amount: 79.00,
      status: 'paid',
      downloadUrl: '#',
    },
    {
      id: 'INV-2025-10',
      date: 'October 15, 2025',
      amount: 79.00,
      status: 'paid',
      downloadUrl: '#',
    },
    {
      id: 'INV-2025-09',
      date: 'September 15, 2025',
      amount: 79.00,
      status: 'paid',
      downloadUrl: '#',
    },
  ];

  const usagePercentage = (creditsUsage.used / creditsUsage.total) * 100;
  const maxDailyUsage = Math.max(...creditsUsage.dailyUsage.map(d => d.credits));

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 md:py-8">
      <div className="space-y-6">
        {/* Current Plan & Billing Summary */}
        <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
                Current Plan & Billing
              </h2>
              <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                Manage your subscription and billing details
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0fdf4] border border-[#86efac]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></div>
              <span className="text-[#16a34a]" style={{ fontSize: '12px', fontWeight: '600' }}>
                Active
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Plan Details */}
            <div>
              <div className="text-[#999999] mb-2" style={{ fontSize: '12px', fontWeight: '500' }}>
                SUBSCRIPTION PLAN
              </div>
              <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                {currentPlan.name}
              </div>
              <div className="text-[#666666]" style={{ fontSize: '14px' }}>
                ${currentPlan.price} / {currentPlan.billingCycle}
              </div>
            </div>

            {/* Next Billing */}
            <div>
              <div className="text-[#999999] mb-2" style={{ fontSize: '12px', fontWeight: '500' }}>
                NEXT BILLING DATE
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={18} className="text-[#666666]" />
                <span className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '600' }}>
                  {currentPlan.nextBillingDate}
                </span>
              </div>
              <div className="text-[#666666]" style={{ fontSize: '14px' }}>
                ${currentPlan.price} will be charged
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#e0e0e0]">
            <button className="px-4 py-2.5 rounded-[10px] bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors" style={{ fontSize: '14px', fontWeight: '600' }}>
              Change Plan
            </button>
            <button 
              onClick={() => setShowCancelModal(true)}
              className="px-4 py-2.5 rounded-[10px] border border-[#e0e0e0] text-[#666666] hover:border-[#cccccc] hover:text-[#1a1a1a] transition-colors" 
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              Cancel Subscription
            </button>
            <div className="ml-auto text-[#999999]" style={{ fontSize: '13px' }}>
              Cancel anytime • No hidden fees
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
                Payment Method
              </h2>
              <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                Manage your payment information and billing address
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Card Details */}
            <div>
              <div className="text-[#999999] mb-3" style={{ fontSize: '12px', fontWeight: '500' }}>
                CARD ON FILE
              </div>
              <div className="flex items-center gap-4 p-4 rounded-[10px] border border-[#e0e0e0] bg-[#fafafa]">
                <div className="w-12 h-8 rounded bg-gradient-to-br from-[#1a1a1a] to-[#404040] flex items-center justify-center">
                  <CreditCard size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[#1a1a1a] mb-0.5" style={{ fontSize: '14px', fontWeight: '600' }}>
                    {paymentMethod.type} •••• {paymentMethod.last4}
                  </div>
                  <div className="text-[#999999]" style={{ fontSize: '13px' }}>
                    Expires {paymentMethod.expiryDate}
                  </div>
                </div>
                <button className="text-[#666666] hover:text-[#1a1a1a] transition-colors" style={{ fontSize: '13px', fontWeight: '600' }}>
                  Update
                </button>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <div className="text-[#999999] mb-3" style={{ fontSize: '12px', fontWeight: '500' }}>
                BILLING ADDRESS
              </div>
              <div className="p-4 rounded-[10px] border border-[#e0e0e0] bg-[#fafafa]">
                <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.4' }}>
                  {billingAddress.line1}
                  {billingAddress.line2 && <><br />{billingAddress.line2}</>}
                </div>
                <div className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                  {billingAddress.city}, {billingAddress.state} {billingAddress.zip}<br />
                  {billingAddress.country}
                </div>
                <button className="text-[#666666] hover:text-[#1a1a1a] transition-colors mt-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                  Edit Address
                </button>
              </div>
            </div>
          </div>

          {/* Security Note */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#e0e0e0]">
            <Shield size={16} className="text-[#666666]" />
            <span className="text-[#666666]" style={{ fontSize: '13px' }}>
              Payments are securely processed. We never store your full card details.
            </span>
          </div>
        </div>

        {/* AI Credits Usage */}
        <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
                AI Credits Usage
              </h2>
              <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                Track your AI usage for the current billing period
              </p>
            </div>
          </div>

          {/* Usage Summary */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-[#999999] mb-2" style={{ fontSize: '12px', fontWeight: '500' }}>
                TOTAL CREDITS
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-[#1a1a1a]" />
                <span className="text-[#1a1a1a]" style={{ fontSize: '28px', fontWeight: '700' }}>
                  {creditsUsage.total.toLocaleString()}
                </span>
              </div>
            </div>

            <div>
              <div className="text-[#999999] mb-2" style={{ fontSize: '12px', fontWeight: '500' }}>
                USED THIS PERIOD
              </div>
              <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '28px', fontWeight: '700' }}>
                {creditsUsage.used.toLocaleString()}
              </div>
              <div className="text-[#666666]" style={{ fontSize: '13px' }}>
                {usagePercentage.toFixed(0)}% of total
              </div>
            </div>

            <div>
              <div className="text-[#999999] mb-2" style={{ fontSize: '12px', fontWeight: '500' }}>
                REMAINING
              </div>
              <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '28px', fontWeight: '700' }}>
                {creditsUsage.remaining.toLocaleString()}
              </div>
              <div className="text-[#666666]" style={{ fontSize: '13px' }}>
                Resets {creditsUsage.resetDate}
              </div>
            </div>
          </div>

          {/* Usage Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '500' }}>
                Current Period Usage
              </span>
              <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                {usagePercentage.toFixed(1)}%
              </span>
            </div>
            <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#1a1a1a] rounded-full transition-all"
                style={{ width: `${usagePercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Last 30 Days Chart */}
          <div>
            <div className="text-[#999999] mb-4" style={{ fontSize: '12px', fontWeight: '500' }}>
              LAST 26 DAYS
            </div>
            <div className="flex items-end gap-1 h-24">
              {creditsUsage.dailyUsage.map((day) => {
                const height = day.credits === 0 ? 2 : (day.credits / maxDailyUsage) * 100;
                return (
                  <div
                    key={day.day}
                    className="flex-1 bg-[#e0e0e0] rounded-t-sm hover:bg-[#1a1a1a] transition-colors cursor-pointer relative group"
                    style={{ height: `${height}%`, minHeight: '2px' }}
                    title={`Day ${day.day}: ${day.credits} credits`}
                  >
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1a1a1a] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none" style={{ fontSize: '11px' }}>
                      {day.credits} credits
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Purchase More */}
          <div className="mt-6 pt-6 border-t border-[#e0e0e0]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Need more credits?
                </div>
                <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                  Purchase additional AI credits to expand your usage capacity
                </p>
              </div>
              <button className="px-4 py-2.5 rounded-[10px] border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors flex items-center gap-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                <Zap size={16} />
                Purchase Credits
              </button>
            </div>
          </div>
        </div>

        {/* Usage History & Invoices */}
        <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
                Billing History
              </h2>
              <p className="text-[#666666]" style={{ fontSize: '14px' }}>
                View and download past invoices
              </p>
            </div>
          </div>

          {/* Invoices Table */}
          <div className="space-y-2">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center gap-4 p-4 rounded-[10px] border border-[#e0e0e0] hover:border-[#cccccc] transition-colors"
              >
                <div className="flex-1 grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                      INVOICE ID
                    </div>
                    <div className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      {invoice.id}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                      DATE
                    </div>
                    <div className="text-[#666666]" style={{ fontSize: '14px' }}>
                      {invoice.date}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                      AMOUNT
                    </div>
                    <div className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                      ${invoice.amount.toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                      STATUS
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-[#22c55e]" />
                      <span className="text-[#22c55e] capitalize" style={{ fontSize: '14px', fontWeight: '600' }}>
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#e0e0e0] text-[#666666] hover:border-[#cccccc] hover:text-[#1a1a1a] transition-colors" style={{ fontSize: '13px', fontWeight: '600' }}>
                  <Download size={14} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Control Info */}
        <div className="bg-[#fafafa] rounded-[12px] border border-[#e0e0e0] p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-[#e0e0e0] flex items-center justify-center flex-shrink-0">
              <AlertCircle size={20} className="text-[#666666]" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
                Subscription Control
              </h3>
              <p className="text-[#666666] mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                You have complete control over your subscription. If you cancel, you'll retain full access to all features until the end of your current billing period ({currentPlan.nextBillingDate}). No partial refunds are provided, but you can reactivate anytime before your subscription ends.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#22c55e]" />
                  <span className="text-[#666666]" style={{ fontSize: '13px' }}>
                    Cancel anytime
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#22c55e]" />
                  <span className="text-[#666666]" style={{ fontSize: '13px' }}>
                    No hidden fees
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#22c55e]" />
                  <span className="text-[#666666]" style={{ fontSize: '13px' }}>
                    Access until period ends
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Modal */}
      {showCancelModal && (
        <CancelSubscriptionModal
          isOpen={showCancelModal}
          currentPlan={currentPlan}
          onClose={() => setShowCancelModal(false)}
        />
      )}
    </div>
  );
}