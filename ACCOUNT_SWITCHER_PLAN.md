# Account Switcher Implementation Plan

## ✅ What We've Done

1. **Updated HomeHeader Component** (`/src/app/components/HomeHeader.tsx`)
   - Added account switching props (accounts, currentAccountId, onAccountSwitch, onManageAccounts)
   - Created a dropdown in the top-right corner showing all connected accounts
   - Displays account avatar, name, username, level, and follower count
   - Shows checkmark for currently selected account
   - Includes "Manage Accounts" button linking to settings

2. **Updated App.tsx**
   - Added account management state (currentAccountId, tiktokAccounts)
   - Created 3 sample accounts with different levels and follower counts
   - Implemented handleAccountSwitch function
   - Implemented handleManageAccounts function (redirects to settings)

## 🎯 Current Implementation

### Header Location
The account switcher is now in **HomeHeader.tsx** component, positioned in the **top-right corner** of the header.

### Visual Design
- **Button**: "Switch Account" with chevron down icon
- **Dropdown**: Clean card-style dropdown with:
  - Header showing total account count
  - List of all accounts with avatar, name, handle, level badge, followers
  - Green checkmark for current account
  - "Manage Accounts" button at bottom

### Only Shows When Needed
- The switcher only appears when `accounts.length > 1`
- Single account users don't see the switcher

## 🔄 Where It's Used

Currently, **HomeHeader** is used in:
- Various standalone pages that import it directly

## 📋 Next Steps

To make this **truly global**, you should:

1. **Update Dashboard Component**
   - Dashboard has its own header layout (lines 515-610)
   - Replace the current account display with HomeHeader component
   - Or integrate the account switcher logic into Dashboard's existing header

2. **Update Other Page Components**
   - Check which pages use HomeHeader
   - Pass the account props down from App.tsx
   - Pages include: AccountIntelligence, ContentLibrary, HashtagRadar, ContentStudio, etc.

3. **Consistent State Management**
   - Ensure all pages receive the same account props from App.tsx
   - When account switches, all pages should reflect the change

## 💡 Recommendation

**Best Approach**: Create a unified header component or context provider

Option A: **Header Context Provider**
```tsx
<AccountContext.Provider value={{ currentAccount, accounts, onSwitch, onManage }}>
  {/* All pages can access account info */}
</AccountContext.Provider>
```

Option B: **Unified Header Component**
- Create a single Header component used by all pages
- Pass account props at the App level
- Each page renders this common header

Option C: **Current Approach** (Pass props everywhere)
- Continue passing account props to each page component
- Each page passes them to HomeHeader
- More explicit but requires more prop drilling

## 🎨 Design Rationale

**Why top-right corner?**
1. Industry standard (Gmail, YouTube, Twitter all use this pattern)
2. Doesn't interfere with primary navigation (sidebar)
3. Close to user avatar/profile area
4. Consistent with other user-level controls (language, notifications)

**Why not in sidebar?**
- Sidebar is for navigation, not identity switching
- Sidebar is persistent; account switching is less frequent
- Top-right makes it feel more like a "user setting"

**Why conditional display?**
- Single-account users don't need clutter
- Progressive disclosure: only show when relevant
