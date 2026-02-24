import React from 'react';
import { useLanguage } from '../../contexts';

export const TermsOfService = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const SITE_ORIGIN = 'https://www.owlseer.com';
  const localizedPrefix = isZh ? '/zh' : '';
  const privacyUrl = `${SITE_ORIGIN}${localizedPrefix}/social/privacy`;
  const termsUrl = `${SITE_ORIGIN}${localizedPrefix}/social/terms`;
  const googlePolicyUrl = 'https://developers.google.com/terms/api-services-user-data-policy';
  const youtubeTosUrl = 'https://www.youtube.com/t/terms';

  if (isZh) {
    return (
      <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">用户协议</h1>
        <p className="text-sm text-gray-500 mb-8">最后更新：2026年1月31日</p>
        <div className="not-prose mb-8 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/40 p-4 text-sm text-gray-700 dark:text-gray-300">
          <p className="mb-2"><strong>主体信息：</strong>赤光智算科技（深圳）有限公司（OwlSeer）</p>
          <p className="mb-2">
            <strong>相关页面：</strong>
            <a href={termsUrl} className="ml-1 text-[#1AAE82] hover:underline">用户协议</a>
            <span className="mx-2">|</span>
            <a href={privacyUrl} className="text-[#1AAE82] hover:underline">隐私政策</a>
          </p>
          <p>若涉及 Google / YouTube API 授权，用户数据处理同时受 Google API 服务政策与 YouTube 平台条款约束。</p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. 条款接受</h2>
          <p className="mb-4">
            访问和使用 OwlSeer（“服务”）即表示你已阅读、理解并同意受本协议条款约束。使用特定服务时，你还需遵守针对该服务公布的相关指引与规则。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. 服务说明</h2>
          <p className="mb-4">
            OwlSeer 为 TikTok 创作者与品牌提供 AI 驱动的数据分析与策略平台。服务内容包括数据分析、趋势预测与内容策略生成。你需自行确保具备访问本服务的条件，相关访问可能涉及第三方费用（如网络服务费等）。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. 注册与账号</h2>
          <p className="mb-4">
            使用本服务前，你需注册账户。你同意在注册过程中提供真实、准确、最新且完整的信息。你有责任妥善保管账号与密码，并限制设备访问。任何通过你的账号发生的行为均视为你本人行为并由你承担责任。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. 订阅与计费</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>免费试用：</strong>我们可能提供免费试用期。在试用期结束前，你不会被收费。</li>
            <li><strong>订阅：</strong>本服务采用订阅计费（按月或按年）。</li>
            <li><strong>取消：</strong>你可随时取消订阅，取消将在当前已付费周期结束时生效。</li>
            <li><strong>退款：</strong>除法律另有规定外，已支付费用不予退款。</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. 知识产权</h2>
          <p className="mb-4">
            本服务及其原始内容、功能与特性归 OwlSeer 及其许可方专有，并将持续受版权、商标及其他相关法律保护（包括美国及其他国家/地区法律）。
          </p>
          <p className="mb-4">
            <strong>你的数据：</strong>你对连接至 OwlSeer 的数据与内容保留全部权利。使用本服务即表示你授予 OwlSeer 一项有限许可，仅用于向你提供服务及以汇总形式改进算法。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. 责任限制</h2>
          <p className="mb-4">
            在法律允许范围内，OwlSeer 及其董事、员工、合作伙伴、代理、供应商或关联方不对任何间接性、附带性、特殊性、后果性或惩罚性损害承担责任，包括但不限于利润损失、数据损失、商誉损失或其他无形损失。该等损害可能源于：(i) 你访问或使用（或无法访问/使用）服务；(ii) 第三方在服务上的行为或内容；(iii) 通过服务获取的内容；(iv) 你传输或内容的未授权访问、使用或篡改。无论责任基础为合同、侵权（含过失）、担保或其他法律理论，即使我们已被告知存在此类损害的可能性，亦同。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7. 条款变更</h2>
          <p className="mb-4">
            我们保留在任何时间自行决定修改或替换本条款的权利。若变更属于重大变更，我们将尽力在新条款生效前至少提前 30 天通知。是否构成重大变更由我们自行判断。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">8. 第三方 API 与 OAuth 约定</h2>
          <p className="mb-4">
            你可选择授权 OwlSeer 访问第三方平台数据（如 Google / YouTube / TikTok）。该等授权数据仅用于向你提供服务，不用于出售、未经授权共享或超范围处理。
          </p>
          <p className="mb-4">
            涉及 Google API 用户数据时，OwlSeer 将遵循 Google API Services User Data Policy（含 Limited Use 要求）。
          </p>
          <p>
            政策链接：<a href={googlePolicyUrl} target="_blank" rel="noopener noreferrer" className="text-[#1AAE82] hover:underline">{googlePolicyUrl}</a>
          </p>
        </section>

        <section className="mb-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">9. 联系方式</h2>
          <p className="mb-4">
            对本协议有任何问题，或希望就账户与数据处理事项联系平台，请发送邮件至：
            <a href="mailto:legal@owlseer.com" className="ml-1 text-[#1AAE82] hover:underline">legal@owlseer.com</a>
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: January 31, 2026</p>
      <div className="not-prose mb-8 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/40 p-4 text-sm text-gray-700 dark:text-gray-300">
        <p className="mb-2"><strong>Legal Entity:</strong> Chiguang Zhisuan Technology (Shenzhen) Co., Ltd. (OwlSeer)</p>
        <p className="mb-2">
          <strong>Related Pages:</strong>
          <a href={termsUrl} className="ml-1 text-[#1AAE82] hover:underline">Terms of Service</a>
          <span className="mx-2">|</span>
          <a href={privacyUrl} className="text-[#1AAE82] hover:underline">Privacy Policy</a>
        </p>
        <p>When Google / YouTube API authorization is involved, data handling also follows the Google API policy and YouTube platform terms.</p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using OwlSeer ("Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
        <p className="mb-4">
          OwlSeer provides an AI-powered analytics and strategy platform for TikTok creators and brands. The Service includes data analysis, trend prediction, and content strategy generation. You are responsible for obtaining access to the Service and that access may involve third party fees (such as Internet service provider or airtime charges).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Registration and Account</h2>
        <p className="mb-4">
          To use the Service, you must register for an account. You agree to provide true, accurate, current and complete information about yourself as prompted by the Service's registration form. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Subscription and Billing</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Free Trial:</strong> We may offer a free trial period. You will not be charged until the trial period ends.</li>
          <li><strong>Subscriptions:</strong> The Service is billed on a subscription basis (monthly or annually).</li>
          <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Your cancellation will take effect at the end of the current paid term.</li>
          <li><strong>Refunds:</strong> Payments are non-refundable, except as required by law.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
        <p className="mb-4">
          The Service and its original content, features and functionality are and will remain the exclusive property of OwlSeer and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>
        <p className="mb-4">
          <strong>Your Data:</strong> You retain all rights to the data and content you connect to OwlSeer. By using the Service, you grant OwlSeer a license to use your data solely for the purpose of providing the Service to you and improving our algorithms (in aggregated form).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall OwlSeer, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7. Changes</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">8. Third-Party APIs and OAuth</h2>
        <p className="mb-4">
          You may authorize OwlSeer to access third-party platform data (such as Google, YouTube, or TikTok) to provide requested features. Such authorized data is used only to deliver the service to you and is not sold or shared beyond authorized scope.
        </p>
        <p className="mb-4">
          For Google API user data, OwlSeer follows the Google API Services User Data Policy, including Limited Use requirements.
        </p>
        <p className="mb-4">
          Google policy: <a href={googlePolicyUrl} target="_blank" rel="noopener noreferrer" className="text-[#1AAE82] hover:underline">{googlePolicyUrl}</a>
        </p>
        <p>
          YouTube terms: <a href={youtubeTosUrl} target="_blank" rel="noopener noreferrer" className="text-[#1AAE82] hover:underline">{youtubeTosUrl}</a>
        </p>
      </section>

      <section className="mb-2">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">9. Contact</h2>
        <p>
          Questions regarding these Terms or account/legal requests can be sent to
          <a href="mailto:legal@owlseer.com" className="ml-1 text-[#1AAE82] hover:underline">legal@owlseer.com</a>.
        </p>
      </section>
    </div>
  );
};
