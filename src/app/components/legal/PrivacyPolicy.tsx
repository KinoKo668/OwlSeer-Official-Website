import React from 'react';
import { Shield, Lock, EyeOff } from 'lucide-react';
import { useLanguage } from '../../contexts';

export const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const SITE_ORIGIN = 'https://www.owlseer.com';
  const localizedPrefix = isZh ? '/zh' : '';
  const privacyUrl = `${SITE_ORIGIN}${localizedPrefix}/social/privacy`;
  const termsUrl = `${SITE_ORIGIN}${localizedPrefix}/social/terms`;
  const securityUrl = `${SITE_ORIGIN}${localizedPrefix}/social/security`;
  const googlePolicyUrl = 'https://developers.google.com/terms/api-services-user-data-policy';

  if (isZh) {
    return (
      <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">隐私政策</h1>
        <p className="text-sm text-gray-500 mb-8">最后更新：2026年1月31日</p>
        <div className="not-prose mb-8 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/40 p-4 text-sm text-gray-700 dark:text-gray-300">
          <p className="mb-2"><strong>运营主体：</strong>赤光智算科技（深圳）有限公司（OwlSeer）</p>
          <p className="mb-2">
            <strong>政策直达链接：</strong>
            <a href={privacyUrl} className="ml-1 text-[#1AAE82] hover:underline">隐私政策</a>
            <span className="mx-2">|</span>
            <a href={termsUrl} className="text-[#1AAE82] hover:underline">用户协议</a>
            <span className="mx-2">|</span>
            <a href={securityUrl} className="text-[#1AAE82] hover:underline">安全声明</a>
          </p>
          <p>
            如你授权 Google 账号或连接 YouTube 数据，OwlSeer 对 Google API 用户数据的使用将遵循 Google API Services User Data Policy（含 Limited Use 要求）。
          </p>
        </div>

        {/* SEO Optimized Trust Block */}
        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-8 mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#1AAE82]" />
            你的数据归你所有，我们只做分析，不会占有。
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            我们相信隐私不应复杂。以下是我们用清晰语言给出的承诺：
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EyeOff className="w-5 h-5 text-[#1AAE82]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">不做隐性采集</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">我们不会出售你的数据、未经授权向第三方共享数据，也不会在未获你明确许可时采集信息。</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#1AAE82]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">先试用再连接</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">你可以先使用样例数据体验平台。在你主动授权连接前，我们不会访问你的真实账号。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-emerald-100 dark:border-emerald-900/30 pt-6">
            <a
              href={`${SITE_ORIGIN}/social/simulation/dashboard`}
              className="px-6 py-2.5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-lg font-bold shadow-lg shadow-[#1AAE82]/20 transition-all text-sm w-full sm:w-auto text-center"
            >
              无需连接即可体验样例
            </a>
            <a
              href={securityUrl}
              className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors text-sm w-full sm:w-auto text-center"
            >
              查看安全细节
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. 引言</h2>
          <p className="mb-4">
            欢迎使用 OwlSeer（“公司”“我们”）。我们致力于保护你的个人信息与隐私权。如果你对本政策或我们处理个人信息的方式有任何疑问，请通过 <a href="mailto:privacy@owlseer.com" className="text-[#1AAE82] hover:underline">privacy@owlseer.com</a> 联系我们。
          </p>
          <p>
            当你访问我们的网站并使用我们的服务时，你将个人信息交由我们处理。我们非常重视你的隐私。本隐私政策将尽可能清晰地说明：我们收集哪些信息、如何使用这些信息，以及你享有的相关权利。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. 我们收集的信息</h2>
          <p className="mb-4">
            当你有意了解我们的产品与服务、参与平台活动或与我们联系时，我们会收集你主动提供的个人信息。
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>你主动提供的个人信息：</strong>包括姓名、电子邮箱、密码、联系方式偏好以及类似信息。</li>
            <li><strong>支付数据：</strong>如果你购买服务，我们会收集处理付款所必需的数据，例如支付工具号码（如银行卡号）及对应安全校验信息。支付数据由我们的支付服务商（Stripe）处理与存储。</li>
            <li><strong>社交媒体登录数据：</strong>你可以选择使用社交媒体账号（特别是 TikTok）注册。我们仅收集平台 API 授权范围内的公开资料信息和分析数据。</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. 我们如何使用你的信息</h2>
          <p className="mb-4">
            我们基于合法商业目的、履行与你的合同、取得你的同意以及遵守法律义务等依据，处理通过服务收集的个人信息。主要用途包括：
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>完成账户注册与登录流程。</li>
            <li>向你发送管理性与服务性通知。</li>
            <li>履行和管理你的订单。</li>
            <li>改进我们的 AI 模型：我们可能使用汇总且匿名化的数据提升预测算法准确性。我们不会将你的专属策略或私密内容草稿用于其他用户。</li>
          </ul>
        </section>

        <section id="security-section" className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. 数据共享</h2>
          <p className="mb-4">
            我们仅在以下情形共享信息：获得你的同意、遵守法律法规、向你提供服务、保护你的合法权益或履行必要的商业义务。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. 你的隐私权利</h2>
          <p className="mb-4">
            在部分司法辖区（如欧洲经济区），你可依据适用的数据保护法律享有特定权利，包括： (i) 申请访问并获取你的个人信息副本；(ii) 申请更正或删除；(iii) 限制对个人信息的处理；以及 (iv) 在适用情况下的数据可携带权。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. Google API 服务用户数据披露</h2>
          <p className="mb-4">
            当你授权 OwlSeer 访问 Google 账号数据时，我们会严格遵守 Google API Services User Data Policy。OwlSeer 对从 Google API 获取的信息进行使用和传输时，将遵循 Limited Use 要求。
          </p>
          <p>
            政策原文：<a href={googlePolicyUrl} target="_blank" rel="noopener noreferrer" className="text-[#1AAE82] hover:underline">{googlePolicyUrl}</a>
          </p>
        </section>

        <section className="mb-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7. 数据删除与联系方式</h2>
          <p className="mb-4">
            你可以随时请求导出、删除或撤回授权数据。我们将在核验身份后按适用法律法规和平台要求处理你的请求。
          </p>
          <p>
            联系方式：<a href="mailto:privacy@owlseer.com" className="text-[#1AAE82] hover:underline">privacy@owlseer.com</a>
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: January 31, 2026</p>
      <div className="not-prose mb-8 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/40 p-4 text-sm text-gray-700 dark:text-gray-300">
        <p className="mb-2"><strong>Operating Entity:</strong> Chiguang Zhisuan Technology (Shenzhen) Co., Ltd. (OwlSeer)</p>
        <p className="mb-2">
          <strong>Direct Policy Links:</strong>
          <a href={privacyUrl} className="ml-1 text-[#1AAE82] hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href={termsUrl} className="text-[#1AAE82] hover:underline">Terms of Service</a>
          <span className="mx-2">|</span>
          <a href={securityUrl} className="text-[#1AAE82] hover:underline">Security Statement</a>
        </p>
        <p>
          If you authorize Google account access or connect YouTube data, OwlSeer&apos;s use of Google API user data follows the Google API Services User Data Policy, including Limited Use requirements.
        </p>
      </div>

      {/* SEO Optimized Trust Block */}
      <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-8 mb-12 not-prose">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <Shield className="w-6 h-6 text-[#1AAE82]" />
          Your data stays yours—we analyze it, we don't own it.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          We believe privacy shouldn't be complicated. Here is our promise in plain language:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <EyeOff className="w-5 h-5 text-[#1AAE82]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">No Hidden Collection</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">We never sell your data, share it with third parties, or collect anything without your explicit permission.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-[#1AAE82]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Sample Mode First</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Try our platform with sample data. We don't touch your real account until you choose to connect.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-emerald-100 dark:border-emerald-900/30 pt-6">
          <a
            href={`${SITE_ORIGIN}/social/simulation/dashboard`}
            className="px-6 py-2.5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-lg font-bold shadow-lg shadow-[#1AAE82]/20 transition-all text-sm w-full sm:w-auto text-center"
          >
            Try Sample Without Connecting
          </a>
          <a
            href={securityUrl}
            className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors text-sm w-full sm:w-auto text-center"
          >
            Read Security Details
          </a>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to OwlSeer ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this policy, or our practices with regards to your personal information, please contact us at <a href="mailto:privacy@owlseer.com" className="text-[#1AAE82] hover:underline">privacy@owlseer.com</a>.
        </p>
        <p>
          When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Personal Information Provided by You:</strong> We collect names; email addresses; passwords; contact preferences; and other similar information.</li>
          <li><strong>Payment Data:</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor (Stripe).</li>
          <li><strong>Social Media Login Data:</strong> We provide you with the option to register using social media account details, specifically your TikTok account. We collect the public profile information and analytics data authorized by the platform's API scope.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>To facilitate account creation and logon process.</li>
          <li>To send administrative information to you.</li>
          <li>To fulfill and manage your orders.</li>
          <li>To improve our AI models: We may use aggregated, anonymized data to improve the accuracy of our predictive algorithms. We never use your specific strategy or private content drafts for other users.</li>
        </ul>
      </section>

      <section id="security-section" className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Data Sharing</h2>
        <p className="mb-4">
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Your Privacy Rights</h2>
        <p className="mb-4">
          In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. Google API Services User Data Disclosure</h2>
        <p className="mb-4">
          If you authorize OwlSeer to access Google account data, OwlSeer&apos;s use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
        </p>
        <p>
          Policy reference: <a href={googlePolicyUrl} target="_blank" rel="noopener noreferrer" className="text-[#1AAE82] hover:underline">{googlePolicyUrl}</a>
        </p>
      </section>

      <section className="mb-2">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7. Data Deletion & Contact</h2>
        <p className="mb-4">
          You may request data export, deletion, or authorization revocation at any time. We process requests after identity verification and in line with applicable laws and platform requirements.
        </p>
        <p>
          Contact: <a href="mailto:privacy@owlseer.com" className="text-[#1AAE82] hover:underline">privacy@owlseer.com</a>
        </p>
      </section>
    </div>
  );
};
