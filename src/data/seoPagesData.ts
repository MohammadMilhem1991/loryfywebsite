/**
 * Loryfy Dedicated SEO / AI Search Landing Pages Content (English & Arabic)
 * Purely focused on providing discoverable, human-first, factual business answers.
 */

import { SeoPageData } from "../types";

export const seoPagesData: Record<"en" | "ar", Record<string, SeoPageData>> = {
  en: {
    "find-business-partner-uae": {
      slug: "find-business-partner-uae",
      title: "Find a Business Partnership in the UAE | Loryfy",
      metaDescription:
        "Discover businesses and ideas in Dubai and the UAE where you can invest, contribute your expertise, or become an active partner on Loryfy.",
      h1: "Find a Business Partnership",
      subtitle: "Discover businesses and ideas where you can invest, contribute your expertise, or become an active partner.",
      intro:
        "Explore running businesses and startup ideas looking for investors, strategic partners, operating partners, and experienced professionals. Whether you want to provide capital, help manage a business, contribute industry expertise, or take an active role in its growth, Loryfy helps you discover opportunities that match what you're looking for.",
      sections: [
        {
          heading: "What types of business partners can I find on Loryfy?",
          content:
            "Different businesses require different types of support. On Loryfy, you can specify exactly what kind of partner you need:",
          bulletPoints: [
            "Funding Partner: Individuals or entities with capital looking to participate in running businesses or viable startup ideas.",
            "Strategic Partner: Industry professionals with relevant networks, market expertise, and strategic vision to scale operations.",
            "Operating Partner: Experienced managers with the time and hands-on skill to run day-to-day business operations.",
            "Corporate or Institutional Partner: Companies looking for strategic synergy and direct business collaboration.",
          ],
        },
        {
          heading: "Can I Look for Business Partners and Investors on Loryfy?",
          content:
            "Yes. Users can download the mobile application, set up a profile, and explore all available business opportunities for free. Publishing listings to find strategic, funding, or operating partners is also free during app launch across Dubai, Abu Dhabi, Sharjah, and the UAE.",
        },
        {
          heading: "How does Loryfy facilitate connections between business partners?",
          content:
            "Loryfy makes it straightforward to publish your opportunity. You describe your current business status, specify the number of partners required, clarify the exact partnership type, and publish your listing. Interested users browse, filter, and initiate a direct in-app chat with you. Once connected in Loryfy, parties can freely chat and decide whether to arrange meetings or exchange direct contact details.",
        },
        {
          heading: "How do I go from discovering an opportunity to starting a direct conversation?",
          content:
            "Loryfy provides a straightforward pathway to move from discovering an opportunity to starting a direct conversation with its owner in a single tap:",
          bulletPoints: [
            "For Business & Idea Owners: Create Listing → Select Category (Running Business / Startup Idea / Trade License) → Add Required Details & Objective (Find Partner / Sell) → Publish Immediately.",
            "For Opportunity Seekers: Explore Categories → Filter Based on Interests (Funding, Strategic, Operating) → Open Listing Details → Start Direct In-App Chat with the Owner.",
          ],
        },
        {
          heading: "How should I conduct due diligence before entering a partnership?",
          content:
            "Loryfy serves as a discovery and connection platform. We encourage all business owners and prospective partners to independently verify all documentation, financial statements, and operational metrics before making binding commitments or signing legal contracts.",
        },
      ],
      faqItems: [
        {
          question: "What types of partnership opportunities can I discover on Loryfy?",
          answer:
            "Explore running businesses and startup ideas looking for Funding, Strategic, or Operating Partners. Depending on the opportunity, you may contribute capital, management, operational experience, strategic expertise, or a combination of these.",
        },
        {
          question: "Who can explore and apply for partnership opportunities on Loryfy?",
          answer:
            "Opportunities are open to individuals with capital, experienced executives, entrepreneurs, private investors, and corporate entities interested in contributing funding, management, operations, or strategic industry expertise.",
        },
        {
          question: "How can I discover the most relevant partnership opportunities in the UAE?",
          answer:
            "Explore Running Businesses and Startup Ideas on Loryfy and use the built-in search and category filters to narrow opportunities based on emirate, industry, and partnership structure.",
        },
        {
          question: "How do I evaluate whether a partnership opportunity is suitable for my goals?",
          answer:
            "Use the secure in-app chat to discuss objectives directly with the owner, request relevant commercial information, and understand operational expectations. Before entering into binding agreements, independently verify all documentation and conduct legal due diligence.",
        },
      ],
      ctaText: "Explore Opportunities",
    },

    "running-businesses-uae": {
      slug: "running-businesses-uae",
      title: "Explore Running Businesses in the UAE | Loryfy",
      metaDescription:
        "Explore existing running businesses in Dubai and the UAE looking for partners, active investors, or new owners through Loryfy.",
      h1: "Explore Running Businesses",
      subtitle: "Explore running businesses located in the UAE that are seeking partners, investors, or potential buyers.",
      intro:
        "Investing in or partnering with an already operational business allows you to bypass the initial setup phase. On Loryfy, explore operational businesses across the UAE whose owners are looking for partners or seeking to sell. Whether you are looking for a restaurant, supermarket, garage, salon, café, retail shop, workshop, or another type of running business of any size, Loryfy makes it simple to explore opportunities and find partners or buyers.",
      sections: [
        {
          heading: "Why should I explore running businesses in the UAE?",
          content:
            "Running businesses possess existing operational footprints, valid trade licenses, active premises, staff, and customer relationships. Joining an existing enterprise offers distinct advantages:",
          bulletPoints: [
            "Immediate Operational Activity: Skip early setup friction and start with an existing infrastructure.",
            "Clear Historical Context: Review historical performance, current setup, and operational assets.",
            "Active Team and Premises: Benefit from established staff, existing locations, and active supplier relationships.",
          ],
        },
        {
          heading: "What is the difference between partnering with a running business and acquiring it?",
          content:
            "Owners of running businesses on Loryfy typically list for one of two reasons: bringing in partners/investors to accelerate expansion, or listing the business for sale. Listings detail key parameters such as premises, visas, status, and partner requirements.",
        },
      ],
      faqItems: [
        {
          question: "Why should I explore running businesses instead of starting a new venture from scratch?",
          answer:
            "Running businesses offer active operations, established commercial premises, valid trade licenses, trained staff, and an existing customer base. This allows you to evaluate verified operational performance and begin immediately without initial setup delays.",
        },
        {
          question: "Can I enter as an investing or operating partner in a running business, or acquire the business entirely?",
          answer:
            "Yes. Based on the listing owner's stated objective on Loryfy, you can connect directly to join as a strategic or equity partner, or proceed with full business acquisition discussions.",
        },
        {
          question: "What information and commercial details are visible on a running business listing?",
          answer:
            "Listings typically outline the commercial activity, partnership or sale objective, operational status, premises and location details, visa quotas, asking valuation or capital requirements, and specific terms shared by the owner.",
        },
        {
          question: "Does Loryfy verify the financial and operational records of listed businesses?",
          answer:
            "No. All financial and operational information is provided directly by listing owners. Prospective partners, investors, and buyers should conduct independent due diligence, inspect premises, and verify official documentation before concluding any agreements.",
        },
      ],
      ctaText: "Explore Running Businesses on Loryfy",
    },

    "businesses-for-sale-uae": {
      slug: "businesses-for-sale-uae",
      title: "Running Businesses for Sale in the UAE | Loryfy",
      metaDescription:
        "Find running businesses for sale in Dubai, Abu Dhabi, and across the UAE. Connect directly with business owners on Loryfy.",
      h1: "Find Running Businesses for Sale",
      subtitle: "Acquire running commercial ventures and operational businesses in the UAE directly from owners.",
      intro:
        "If you are looking to acquire a turnkey business in the UAE rather than starting from scratch, Loryfy provides a clear discovery channel to connect with business owners seeking to sell their operations.",
      sections: [
        {
          heading: "What commercial details can I review when exploring businesses for sale?",
          content:
            "Explore businesses across retail, services, hospitality, technology, and trade. Listing owners share crucial acquisition data:",
          bulletPoints: [
            "Asking Price & Commercial Terms provided directly by the owner.",
            "Office, retail space, or commercial premises details.",
            "Existing trade license type, jurisdiction, and available visa allocations.",
            "Current operational overview and assets included in the transfer.",
          ],
        },
        {
          heading: "What are the steps to discover and acquire a business on Loryfy?",
          content:
            "Browse active listings in the app, filter by industry and price criteria, open listings of interest, and tap 'Chat' to connect directly with the seller.",
        },
      ],
      faqItems: [
        {
          question: "Where can I find running businesses for sale across the UAE?",
          answer:
            "You can discover running businesses for sale across Dubai, Abu Dhabi, and all UAE Emirates on the Loryfy mobile app, and chat with owners directly.",
        },
        {
          question: "How do I list my running business for sale on Loryfy?",
          answer:
            "Download Loryfy, tap 'Create Listing', select 'Running Business', choose 'Sell Business', input your asking price and business details, and publish.",
        },
      ],
      ctaText: "Explore Businesses for Sale",
    },

    "startup-opportunities-uae": {
      slug: "startup-opportunities-uae",
      title: "Explore Startup Ideas and Partnership Opportunities | Loryfy",
      metaDescription:
        "Explore startup ideas and early-stage ventures in the UAE seeking co-founders, operating partners, and investors.",
      h1: "Explore Startup Ideas and Partnership Opportunities",
      subtitle: "Connect with founders bringing new concepts and commercial ideas to life.",
      intro:
        "Have a business or startup idea you want to launch or develop in the UAE? Share it and connect with potential co-founders, investors, or experienced people who may help bring it to life.",
      sections: [
        {
          heading: "How can founders with startup ideas connect with investors and co-founders?",
          content:
            "Do you have a clear business concept that requires funding or execution expertise? Whether you are in the UAE or abroad, Loryfy enables you to publish your concept intended for the UAE market, specify your desired co-founders or investors, and share projections with interested parties.",
        },
        {
          heading: "How can investors and co-founders explore early-stage startup ideas?",
          content:
            "Browse early-stage startup ideas across tech, e-commerce, consumer goods, and specialized services in the UAE. Find passionate creators seeking your skill set or capital.",
        },
      ],
      faqItems: [
        {
          question: "What types of startup and early-stage opportunities can I explore on Loryfy?",
          answer:
            "You can explore startup and business ideas looking for funding, strategic support, operating partners, co-founders, or investors across multiple high-growth sectors.",
        },
        {
          question: "Who can participate in and support startup ideas listed on Loryfy?",
          answer:
            "Startup ideas welcome angel investors, experienced operators, technical co-founders, industry mentors, and companies seeking early-stage venture collaborations.",
        },
        {
          question: "How can I find promising startup ideas looking for partners or investors in the UAE?",
          answer:
            "Browse the Startup Ideas section on Loryfy and use the search and filter options to find concepts matching your criteria. Open any listing to review the overview and contact the founder directly via in-app chat.",
        },
      ],
      ctaText: "Explore Startup Ideas on Loryfy",
    },

    "business-partnership-opportunities-uae": {
      slug: "business-partnership-opportunities-uae",
      title: "Explore Business Partnership Opportunities in the UAE | Loryfy",
      metaDescription:
        "Explore strategic business partnerships, equity collaborations, and joint venture opportunities across the UAE on Loryfy.",
      h1: "Explore Business Partnership Opportunities",
      subtitle: "Form strategic alliances and collaborative business ventures across dynamic markets.",
      intro:
        "Strategic alliances allow businesses to share resources, combine technical capabilities, and expand market reach. Discover business owners and enterprises open to collaboration and strategic investments.",
      sections: [
        {
          heading: "How do strategic partnerships and joint ventures create business synergy?",
          content:
            "Loryfy makes it simple for operating companies, professionals with capital, and specialists to discover mutually beneficial opportunities:",
          bulletPoints: [
            "Capital + Execution: Pair funding partners with experienced operators.",
            "Distribution + Product: Connect creators with commercial distribution channels.",
            "Local + International: Enable overseas entrepreneurs to partner with UAE-based operators.",
          ],
        },
      ],
      faqItems: [
        {
          question: "How does Loryfy help businesses and investors establish strategic partnerships in the UAE?",
          answer:
            "Loryfy allows owners to specify their exact partnership requirements—such as growth capital, technical expertise, distribution access, or operational management—connecting them directly with compatible partners.",
        },
      ],
      ctaText: "Discover Partnership Opportunities",
    },

    "trade-license-opportunities-uae": {
      slug: "trade-license-opportunities-uae",
      title: "Explore Trade License Opportunities in the UAE | Loryfy",
      metaDescription:
        "Find trade licenses for sale across the UAE. Review available license jurisdictions, visa allocations, and connect directly with sellers on Loryfy.",
      h1: "Explore Trade License Opportunities",
      subtitle: "Explore trade licenses offered for sale across different jurisdictions in the UAE.",
      intro:
        "Acquiring an existing trade license can streamline corporate setup in the UAE. On Loryfy, license owners list commercial licenses for sale across Mainland and Free Zone jurisdictions with details on activities, visas, and premises.",
      sections: [
        {
          heading: "What should I look for when evaluating trade license opportunities?",
          content:
            "Trade licenses in the UAE vary depending on the licensing authority, jurisdiction, approved business activities, visa allocations, and premises requirements.",
          bulletPoints: [
            "Jurisdiction & Authority: Mainland and Free Zone authorities across the UAE.",
            "Approved Business Activities: Commercial, industrial, professional, or other activities approved under the relevant license.",
            "Visa Allocations: Number of active or available visa allocations associated with the license, where applicable.",
            "Premises Requirements: Existing office, workspace, tenancy, or other premises-related arrangements, where applicable.",
          ],
        },
      ],
      faqItems: [
        {
          question: "What essential factors should I evaluate when acquiring a trade license in the UAE?",
          answer:
            "Review the licensing authority and jurisdiction, approved commercial activities, visa quota, office premises status, asking price, and any transfer conditions provided by the owner.",
        },
        {
          question: "Where can I find commercial trade licenses listed for sale in the UAE?",
          answer:
            "Explore the Trade Licenses section on Loryfy to browse active UAE trade licenses listed directly by their owners for transfer or sale.",
        },
        {
          question: "Does Loryfy handle the official legal transfer procedures for trade licenses?",
          answer:
            "No. Loryfy is a discovery and connection platform. Official license transfers must be executed through the relevant UAE government department (such as DED) or Free Zone authority alongside certified legal agents.",
        },
      ],
      ctaText: "Explore Trade Licenses on Loryfy",
    },

    "list-running-business": {
      slug: "list-running-business",
      title: "List a Running Business in the UAE | Loryfy",
      metaDescription:
        "Offer your running business for sale or find funding and operating partners in Dubai and across the UAE on Loryfy.",
      h1: "List a Running Business",
      subtitle: "Find partners, bring in growth investors, or offer your running business for sale.",
      intro:
        "You can list a running business that operates in the UAE and look for partners, investors, or potential buyers. Loryfy provides a dedicated marketplace to reach potential partners, investors, and interested business users across the UAE. Whether you run a company, restaurant, supermarket, garage, salon, café, shop, or workshop, or another running business of any size, you can use Loryfy to easily find partners, investors, or potential buyers.",
      sections: [
        {
          heading: "Can I choose between finding a partner and selling my running business?",
          content:
            "When publishing your running business on Loryfy, you have full flexibility to define your primary goal:",
          bulletPoints: [
            "Find Partner(s): Specify the exact contribution needed (Funding, Strategic Network, or Hands-on Management) and the number of partners required.",
            "Sell Business: Detail your asking price, current operational metrics, premises leases, and active assets for prospective buyers.",
          ],
        },
        {
          heading: "How do I create and publish an effective listing for my running business?",
          content:
            "Download the Loryfy mobile app, tap 'Create Listing', select 'Running Business', and provide your commercial overview. You can specify industry, emirate, operational status, premises details, visa quotas, and partnership terms. Interested investors and partners can initiate direct in-app conversations with you immediately.",
        },
      ],
      faqItems: [
        {
          question: "How do I list my running business on Loryfy?",
          answer:
            "In the Loryfy app, tap Create Listing, select Running Business, and enter your business details. Choose whether you are looking for partners or selling the business, add the relevant information, and select your listing option when applicable: Fixed Fee for a selected period or Pay per Chat based on chats started by interested users. Then publish your listing.",
        },
        {
          question: "Can I choose between finding a partner or selling my business?",
          answer:
            "Yes. You can choose Find Partner(s) and specify the number and type of partners you need (Funding, Strategic, or Operating), or choose Sell Business and provide your asking price and relevant sale information.",
        },
        {
          question: "Who can discover and view my business listing on Loryfy?",
          answer:
            "Your listing is visible to all active Loryfy users browsing running business opportunities across the UAE. Interested parties can open your listing and start a secure in-app chat immediately.",
        },
        {
          question: "What are the available listing and pricing options on Loryfy?",
          answer:
            "Loryfy offers flexible options: Fixed Fee packages to keep your listing active for a set duration, or Pay per Chat where you pay only when an interested user initiates a conversation with you.",
        },
        {
          question: "Who is authorized to create a business listing on Loryfy?",
          answer:
            "Listings can be published by the Business Owner, Authorized Partner, Consultant, or Licensed Broker. Simply select the appropriate role when submitting your listing details.",
        },
        {
          question: "Does Loryfy require mandatory personal or business verification documents?",
          answer:
            "No, uploading documents is completely optional. However, attaching verified IDs or company profiles can build stronger trust and confidence with prospective partners and buyers.",
        },
      ],
      ctaText: "List Your Business on Loryfy",
    },

    "post-startup-idea": {
      slug: "post-startup-idea",
      title: "List Your Business Idea in the UAE | Loryfy",
      metaDescription:
        "Share your business idea and connect with potential co-founders, investors, or experienced operators in the UAE on Loryfy.",
      h1: "List Your Business Idea",
      subtitle: "Share your idea and connect with potential co-founders, investors, and experienced operators.",
      intro:
        "Whether you are in the UAE or abroad, you can list a business or startup idea intended to be launched, developed, or invested in within the UAE.",
      sections: [
        {
          heading: "How does Loryfy help me turn my business idea into reality?",
          content:
            "Loryfy allows people in the UAE and abroad to share ideas intended for the UAE market and look for potential partners, investors, co-founders, or experienced operators.",
          bulletPoints: [
            "Funding Partners: Connect with individuals interested in seed-stage backing and capital participation.",
            "Strategic & Industry Mentors: Gain market access, valuable industry networks, and strategic direction.",
            "Operating Co-Founders: Find dedicated execution partners with technical, marketing, or operational skills.",
          ],
        },
        {
          heading: "How do I publish my startup idea on Loryfy to attract partners?",
          content:
            "Listing on Loryfy takes just a few taps in the mobile app. Define your industry category, share an overview of your concept, outline your partnership needs, and start receiving inquiries directly through in-app chat.",
        },
      ],
      faqItems: [
        {
          question: "How do I list and pitch my startup idea on Loryfy to find potential partners or investors?",
          answer:
            "Tap Create Listing, select Startup Idea, share an overview of your concept, and specify the exact type and number of partners or investors you are seeking. Add your market projections and requirements, then publish your listing to connect with interested entrepreneurs and angels.",
        },
        {
          question: "What types of partners can I bring on board to help launch or scale my idea?",
          answer:
            "You can look for Funding Partners who contribute seed capital, Strategic Partners who provide market access and industry connections, or Operating Co-Founders who handle technical development, management, and daily execution.",
        },
        {
          question: "How can I protect my intellectual property and business idea when publishing on Loryfy?",
          answer:
            "You can choose to share only a high-level commercial overview publicly. Detailed pitch decks, financial models, and proprietary details can be shared later via direct in-app chat after establishing mutual interest and signing appropriate non-disclosure agreements (NDAs).",
        },
      ],
      ctaText: "List Your Business Idea on Loryfy",
    },

    "list-trade-license": {
      slug: "list-trade-license",
      title: "List a Trade License for Sale in the UAE | Loryfy",
      metaDescription:
        "Offer your UAE commercial trade license for sale. Connect with buyers seeking immediate mainland or free zone licenses on Loryfy.",
      h1: "List a Trade License for Sale",
      subtitle: "Offer your trade license for sale and connect directly with interested entrepreneurs.",
      intro:
        "If you own an active trade license in Dubai, Abu Dhabi, or any UAE Emirate and wish to sell or transfer it, Loryfy provides a dedicated marketplace to list commercial, professional, or industrial licenses directly to buyers. Trade License listings are for licenses issued by UAE licensing authorities.",
      sections: [
        {
          heading: "What key information should I include when listing a trade license for sale?",
          content:
            "Provide clear specifications to help buyers evaluate your trade license quickly:",
          bulletPoints: [
            "Issuing Authority & Jurisdiction (e.g. DED Mainland, IFZA, DMCC, RAKEZ, Shams, etc.).",
            "Approved Commercial Activities and Business Classifications.",
            "Visa Quotas (available or active residency allocations).",
            "Premises Status (existing lease, desk facility, or virtual address).",
            "Asking Price and Transfer Conditions.",
          ],
        },
      ],
      faqItems: [
        {
          question: "What essential information should I include when listing a trade license for sale?",
          answer:
            "Include the issuing authority and jurisdiction, approved business activities, visa allocations, premises status where applicable, asking price, and transfer conditions.",
        },
        {
          question: "How do I list my UAE commercial trade license for sale on Loryfy?",
          answer:
            "In the Loryfy app, tap Create Listing, select Trade License, enter the required license and sale information, and publish your listing.",
        },
        {
          question: "How do interested buyers contact me regarding my listed trade license?",
          answer:
            "Interested users can contact you directly through the Loryfy in-app chat to discuss the license and next steps.",
        },
      ],
      ctaText: "List Your Trade License on Loryfy",
    },

    "find-partners-investors": {
      slug: "find-partners-investors",
      title: "Find Partners & Investors for Your Business in the UAE | Loryfy",
      metaDescription:
        "Looking for funding, strategic, or operating partners for your business or startup in Dubai and the UAE? Connect directly on Loryfy.",
      h1: "Find Partners & Investors",
      subtitle: "Discover funding, strategic, and operating partners interested in business or partnership opportunities.",
      intro:
        "Whether you have a running business operating in the UAE seeking expansion capital, or a startup idea intended to be launched, developed, or invested in within the UAE, Loryfy makes it seamless to find and connect with the right partners and investors.",
      sections: [
        {
          heading: "What types of partner and investor profiles can I connect with on Loryfy?",
          content:
            "Loryfy brings together diverse partner profiles across the Emirates:",
          bulletPoints: [
            "Professionals with Capital: Individuals with capital seeking viable business or partnership opportunities.",
            "Experienced Executives or Retirees: Experienced operators, managers, and executives looking for collaborative opportunities.",
            "Individual Investors: Potential investors seeking equity or profit-sharing partnerships.",
            "Companies: Commercial entities seeking strategic alliances, joint ventures, and expansion.",
          ],
        },
        {
          heading: "How do I connect with prospective partners and investors on Loryfy?",
          content:
            "Connecting with partners and investors on Loryfy follows a clear, step-by-step pathway from discovery to direct conversation inside the app:",
          bulletPoints: [
            "Publish Your Opportunity: Select Running Business or Startup Idea, specify required partner types (Funding, Strategic, Operating) and key business details.",
            "Instant Discoverability: Your listing becomes visible across Dubai, Abu Dhabi, and the UAE to active investors and partner candidates.",
            "Direct In-App Communication: Interested partners tap Chat to initiate immediate, secure direct messaging with you.",
          ],
        },
      ],
      faqItems: [
        {
          question: "Who can I connect with as a prospective partner or investor on Loryfy?",
          answer:
            "You may look for individuals with capital, experienced professionals or retirees, individual investors, or companies interested in contributing funding, management, operational experience, or strategic expertise.",
        },
        {
          question: "How do I find and attract investors for my business in the UAE?",
          answer:
            "Create a listing for your business on Loryfy, explain the type of investment or involvement you are looking for, and provide the relevant business information. Interested investors can contact you directly through in-app chat.",
        },
        {
          question: "What types of partnership models and collaborations are supported on Loryfy?",
          answer:
            "Loryfy supports Funding, Strategic, and Operating partnerships, depending on the needs of the business or idea.",
        },
      ],
      ctaText: "Find Partners & Investors on Loryfy",
    },

    "free-business-listing-uae": {
      slug: "free-business-listing-uae",
      title: "Business Listing in the UAE | Loryfy",
      metaDescription:
        "List your running business, startup idea, or trade license in Dubai and the UAE. Listing is free during app launch. Connect with partners, investors, and buyers on Loryfy.",
      h1: "Business Listing",
      subtitle: "Publish your business, startup idea, or trade license. Listing is free during app launch.",
      intro:
        "Looking for a dedicated platform to list your business, startup concept, or commercial trade license in the UAE? Loryfy provides a marketplace where owners and founders can publish listings to connect directly with investors, operating partners, and buyers. Listing is free during app launch.",
      sections: [
        {
          heading: "What types of business opportunities can I list on Loryfy?",
          content:
            "Users can create listings across three primary commercial categories. Listing is free during app launch:",
          bulletPoints: [
            "Running Businesses: List your operational company to find growth capital, executive partners, or buyers looking to acquire.",
            "Startup Ideas: Present your business concept to connect with potential co-founders, operating managers, and individual investors.",
            "Trade Licenses: List commercial, professional, or industrial trade licenses available for transfer or sale across mainland and free zones.",
          ],
        },
        {
          heading: "How do I create and publish a business listing on Loryfy?",
          content:
            "Getting started on Loryfy is quick and frictionless. Download the mobile app, sign up using your name and phone number, select your category, enter your business details and requirements, and publish instantly to reach active searchers across the UAE. Listing is free during app launch and includes built-in chat so interested parties can message you directly without intermediaries.",
        },
        {
          heading: "How does Loryfy handle commercial transparency and due diligence?",
          content:
            "Business listing is available free during app launch. All financial and operational details published in listings are submitted by the respective owners. Loryfy does not guarantee future results or financial returns, and all parties should perform standard independent verification.",
        },
      ],
      faqItems: [
        {
          question: "Is it completely free to publish a business listing on Loryfy?",
          answer:
            "Yes. Listing your running business, startup idea, or trade license is free during app launch.",
        },
        {
          question: "Do I need to enter credit card or payment details to create a listing?",
          answer:
            "No. Registration requires only your name and mobile number. Listing is free during app launch without entering payment details.",
        },
        {
          question: "Which UAE emirates are covered by Loryfy business listings?",
          answer:
            "Loryfy covers opportunities across all seven emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
        },
        {
          question: "Can I list a business for sale as well as for finding strategic partners?",
          answer:
            "Yes. When creating a running business listing, you can select whether you are seeking partners/investors or listing the entire business for sale.",
        },
      ],
      ctaText: "List Your Business on Loryfy",
    },
  },

  ar: {
    "find-business-partner-uae": {
      slug: "find-business-partner-uae",
      title: "اعثر على فرصة الشراكة المناسبة في الإمارات | لوريفاي",
      metaDescription:
        "اكتشف أعمالاً قائمة وأفكاراً واعدة في دبي والإمارات يمكنك الاستثمار فيها أو الانضمام إليها كشريك بخبرتك أو دورك التشغيلي عبر لوريفاي.",
      h1: "اعثر على فرصة الشراكة المناسبة",
      subtitle: "اكتشف أعمالاً قائمة وأفكاراً واعدة يمكنك الاستثمار فيها أو الانضمام إليها كشريك بخبرتك أو دورك التشغيلي.",
      intro:
        "تصفّح فرصاً لأعمال قائمة وأفكار مشاريع تبحث عن مستثمرين، وشركاء استراتيجيين، وشركاء تشغيليين، وأصحاب خبرات. سواء كنت ترغب في الاستثمار برأس المال، أو المشاركة في الإدارة، أو تقديم خبرتك، أو المساهمة بشكل فعّال في نمو المشروع، تساعدك لوريفاي على اكتشاف الفرص التي تناسب ما تبحث عنه.",
      sections: [
        {
          heading: "ما هي أنواع الشركاء الذين يمكنك العثور عليهم عبر لوريفاي؟",
          content: "تختلف احتياجات كل مشروع، وعبر لوريفاي يمكنك تحديد نوع الشراكة بدقة:",
          bulletPoints: [
            "شريك تمويلي: أفراد أو جهات يمتلكون رأس المال ويبحثون عن مشاريع قائمة أو أفكار واعدة للمشاركة فيها.",
            "شريك استراتيجي: خبراء يمتلكون شبكات علاقات ومعرفة بالسوق ورؤية لتطوير ونمو المشروع.",
            "شريك تشغيلي: متخصصون يمتلكون الخبرة والوقت لإدارة وتشغيل تفاصيل المشروع اليومية.",
            "شركات ومستثمرون: شركات تبحث عن تكامل تجاري وفرص شراكة مباشرة.",
          ],
        },
        {
          heading: "هل يمكنني البحث عن شركاء ومستثمرين لمشروعي عبر لوريفاي؟",
          content:
            "نعم. يمكن للمستخدمين تحميل التطبيق وإنشاء الحساب وتصفح كافة الإعلانات مجانًا. كما أن نشر إعلانات المشاريع القائمة أو أفكار المشاريع للبحث عن شركاء ماليين أو استراتيجيين أو تشغيليين في كافة إمارات الدولة مجاني بالكامل دون رسوم إدراج خلال فترة إطلاق التطبيق.",
        },
        {
          heading: "كيف يسهّل لوريفاي التواصل المباشر بين الشركاء والمستثمرين؟",
          content:
            "يمكنك نشر تفاصيل مشروعك، وتحديد عدد الشركاء المطلوبين، وتوضيح نوع الشراكة (تمويلية، استراتيجية، تشغيلية). بعد النشر، يتمكن المهتمون من استعراض إعلانك وبدء محادثة مباشرة معك داخل التطبيق لمناقشة التفاصيل والاتفاق على اللقاء وتبادل البيانات للمتابعة.",
        },
        {
          heading: "كيف تنتقل من اكتشاف الفرصة الاستثمارية إلى بدء التواصل المباشر؟",
          content:
            "يوفر لوريفاي مسارًا واضحًا وسلسًا للانتقال من اكتشاف الفرصة إلى بدء التواصل المباشر مع صاحبها بلمسة واحدة، سواء كنت تعرض فرصة أو تبحث عنها:",
          bulletPoints: [
            "لأصحاب المشاريع والأفكار: إنشاء إعلان → اختيار الفئة (مشروع قائم / فكرة مشروع / رخصة تجارية) → إدخال التفاصيل والهدف (بحث عن شريك / بيع) → نشر الإعلان فورًا.",
            "للبلحثين عن الفرص: استكشاف الفئات → الفلترة حسب الاهتمامات (تمويلي، استراتيجي، تشغيلي) → فتح تفاصيل الإعلان → بدء محادثة مباشرة مع المالك.",
          ],
        },
        {
          heading: "لماذا يُعد إجراء التحقق والتدقيق المستقل خطوة أساسية قبل إبرام الصفقات؟",
          content:
            "يعمل لوريفاي كمنصة للاكتشاف والتواصل. ننصح جميع أصحاب المشاريع والشركاء المحتملين بإجراء التحقق المستقل من كافة المستندات والبيانات المالية قبل إبرام أي اتفاقات ملزمة.",
        },
      ],
      faqItems: [
        {
          question: "ما هي أنواع فرص الشراكة التي يمكنني استكشافها عبر منصة لوريفاي؟",
          answer:
            "تتيح لك المنصة استكشاف مشاريع قائمة وأفكار مشاريع ناشئة تبحث عن شركاء تمويليين أو تشغيليين أو استراتيجيين، حيث يمكنك المساهمة برأس المال أو الإدارة أو الخبرة العملية المتخصصة أو مزيج متكامل منها.",
        },
        {
          question: "من هي الفئات المؤهلة لاستكشاف فرص الشراكة والاستثمار في لوريفاي؟",
          answer:
            "الفرص متاحة لرواد الأعمال، وأصحاب رؤوس الأموال، والمدراء التنفيذيين ذوي الخبرة، والمستثمرين الأفراد، والشركات والمؤسسات الراغبة في التوسع أو بناء تحالفات استراتيجية.",
        },
        {
          question: "كيف يمكنني العثور على أفضل فرص الشراكة التجارية في دولة الإمارات؟",
          answer:
            "استكشف قسم المشاريع القائمة وأفكار المشاريع في لوريفاي، واستخدم أدوات البحث والتصفية حسب الإمارة والقطاع ونموذج الشراكة للوصول إلى الفرص الأكثر ملاءمة لأهدافك.",
        },
        {
          question: "كيف أقيّم مدى ملاءمة وجدوى فرصة الشراكة المعروضة لأهدافي الاستثمارية؟",
          answer:
            "يمكنك التواصل مباشرة مع صاحب الفرصة عبر المحادثة الفورية داخل التطبيق لطلب التفاصيل والمستندات ومناقشة خطط العمل، مع ضرورة إجراء التدقيق المستقل والمراجعة القانونية الشاملة قبل توقيع أي اتفاقيات ملزمة.",
        },
      ],
      ctaText: "استكشف الفرص",
    },

    "running-businesses-uae": {
      slug: "running-businesses-uae",
      title: "استكشف مشاريع قائمة في الإمارات | لوريفاي",
      metaDescription:
        "استكشف مشاريع قائمة في دبي والإمارات يبحث أصحابها عن شركاء أو مستثمرين أو بيع المشروع عبر لوريفاي.",
      h1: "استكشف مشاريع قائمة",
      subtitle: "استكشف مشاريع قائمة تعمل في الإمارات ويبحث أصحابها عن شركاء أو مستثمرين أو مشترين محتملين.",
      intro:
        "المشاركة في مشروع قائم تتيح لك تخطي مرحلة التأسيس الأولى. استكشف عبر لوريفاي مشاريع قائمة في مختلف مدن الإمارات يطرحها أصحابها للبحث عن شركاء أو للبيع. وسواء كنت مهتماً بالاستثمار أو المشاركة في مطعم، سوبرماركت، كراج، صالون، مقهى، متجر، ورشة، أو أي نوع آخر من المشاريع القائمة، فإن لوريفاي يساعدك على البحث عن شركاء أو مستثمرين أو مشترين محتملين بكل سهولة.",
      sections: [
        {
          heading: "ما هي مزايا استكشاف والاستثمار في المشاريع القائمة بالإمارات؟",
          content: "تتميز المشاريع القائمة بوجود رخصة تجارية سارية ومقر وفريق عمل وقاعدة عملاء جاهزة:",
          bulletPoints: [
            "بدء تشغيلي فوري: الاستفادة من البنية التحتية القائمة.",
            "وضوح النشاط الفعلي: مراجعة واقع العمل وأصول المشروع.",
            "مقر وتأشيرات قائمة: وجود التجهيزات والتراخيص ذات الصلة.",
          ],
        },
      ],
      faqItems: [
        {
          question: "ما هي مزايا الاستثمار أو الدخول في شراكة بمشروع قائم مقارنة بتأسيس مشروع جديد؟",
          answer:
            "يتيح لك المشروع القائم الاستفادة الفورية من رخصة تجارية سارية، ومقر مجهّز، وفريق عمل مدرّب، وقاعدة عملاء فعلية، مما يمنحك سجلاً تشغيلياً واضحاً لتقييم الأداء والبدء مباشرة دون مواجهة تكاليف وتأخيرات التأسيس من الصفر.",
        },
        {
          question: "هل يمكنني الدخول كشريك استثماري أو تشغيلي في مشروع قائم، أو شراء النشاط التجاري بالكامل؟",
          answer:
            "نعم، يحدد صاحب المشروع في إعلانه طبيعة الفرصة المتاحة بدقة، سواء كان يبحث عن شريك لضخ رأس المال، أو شريك تشغيلي للمساهمة بالخبرة والإدارة، أو يعرض مشروعه القائم للبيع والتنازل بالكامل.",
        },
        {
          question: "ما هي البيانات والتفاصيل التشغيلية المتاحة في إعلانات المشاريع القائمة؟",
          answer:
            "يوضح كل إعلان نوع النشاط والقطاع التجاري، والهدف من الإعلان (شراكة أو بيع)، والموقع وتفاصيل المقر، وحصة التأشيرات المتاحة، والشروط المالية ورأس المال المطلوب، بالإضافة إلى الشروط الخاصة المحددة من قِبل المالك.",
        },
        {
          question: "هل تقوم منصة لوريفاي بالتدقيق المالي المباشر في صحة بيانات وسجلات المشاريع المعروضة؟",
          answer:
            "لا، يتم إدراج كافة البيانات المالية والتشغيلية من قِبل أصحاب المشاريع مباشرة. وننصح جميع المستثمرين والمهتمين بالشراكة بإجراء التدقيق الميداني ودراسة العناية الواجبة المستقلة والمراجعة القانونية للعقود والمستندات قبل إبرام أي اتفاق ملزم.",
        },
      ],
      ctaText: "استكشف المشاريع القائمة",
    },

    "businesses-for-sale-uae": {
      slug: "businesses-for-sale-uae",
      title: "مشاريع قائمة للبيع في الإمارات | لوريفاي",
      metaDescription:
        "اعثر على مشاريع قائمة ومتاجر وشركات معروضة للبيع في دبي والإمارات وتواصل مع أصحابها عبر لوريفاي.",
      h1: "اعثر على مشاريع قائمة للبيع",
      subtitle: "شراء وتملك مشاريع تجارية قائمة تعمل في الإمارات مباشرة من أصحابها.",
      intro:
        "إذا كنت تبحث عن تملك مشروع تجاري جاهز في الإمارات، يوفر لوريفاي وسيلة للاكتشاف والتواصل المباشر مع أصحاب المشاريع الراغبين في البيع.",
      sections: [
        {
          heading: "ما هي القطاعات والبيانات المتاحة عند استكشاف مشاريع للبيع؟",
          content:
            "استكشف مشاريع في قطاعات الخدمات، التجزئة، التجارة، والتقنية. يوضح أصحاب الإعلانات السعر المطلوب وتفاصيل المقر والرخصة.",
        },
      ],
      faqItems: [
        {
          question: "أين يمكنني العثور على مشاريع وأنشطة تجارية قائمة معروضة للبيع في الإمارات؟",
          answer:
            "يمكنك استكشاف مئات المشاريع القائمة المعروضة للبيع في دبي وأبوظبي ومختلف إمارات الدولة عبر تطبيق لوريفاي والتواصل المباشر مع أصحابها.",
        },
        {
          question: "كيف يمكنني عرض مشروعي التجاري القائم للبيع عبر تطبيق لوريفاي؟",
          answer:
            "حمّل تطبيق لوريفاي، واضغط على 'إضافة إعلان'، ثم اختر 'مشروع قائم'، وحدد هدف 'بيع المشروع' مع إدخال السعر المطلوب وبيانات النشاط والمقر لنشر الإعلان مباشرة.",
        },
      ],
      ctaText: "استكشف المشاريع للبيع",
    },

    "startup-opportunities-uae": {
      slug: "startup-opportunities-uae",
      title: "استكشف أفكار مشاريع وفرص شراكة | لوريفاي",
      metaDescription:
        "استكشف أفكار مشاريع ناشئة في الإمارات تبحث عن مؤسسين مشاركين، شركاء تشغيليين، ومستثمرين في المراحل المبكرة.",
      h1: "استكشف أفكار مشاريع وفرص شراكة",
      subtitle: "تواصل مع أصحاب الأفكار والمشاريع الناشئة لتحويلها إلى واقع.",
      intro:
        "لديك فكرة مشروع أو شركة ناشئة ترغب في إطلاقها أو تطويرها في الإمارات؟ اعرض فكرتك وتواصل مع شركاء مؤسسين أو مستثمرين أو أصحاب خبرة يمكنهم المساهمة في تحويلها إلى واقع.",
      sections: [
        {
          heading: "كيف يمكن لأصحاب الأفكار الناشئة استقطاب الشركاء والمستثمرين؟",
          content:
            "هل لديك فكرة مشروع مدروسة وتبحث عن شريك مالي أو إداري أو تنفيذي؟ سواء كنت داخل الإمارات أو خارجها، يتيح لك لوريفاي عرض فكرتك الموجهة للسوق الإماراتي وتحديد نوع الشركاء والمستثمرين المطلوبين.",
        },
      ],
      faqItems: [
        {
          question: "ما هي أنواع أفكار المشاريع والفرص الناشئة التي يمكنني استكشافها عبر لوريفاي؟",
          answer:
            "يمكنك استكشاف أفكار مشاريع تجارية وتقنية واعدة تبحث عن تمويل أولي، أو دعم استراتيجي، أو شركاء تشغيليين، أو مؤسسين مشاركين لتسريع إطلاقها في السوق الإماراتي.",
        },
        {
          question: "من يمكنه الانضمام ودعم أفكار المشاريع والشركات الناشئة المدرجة في لوريفاي؟",
          answer:
            "تستقطب المنصة المستثمرين الملائكيين، والخبراء التنفيذيين، والمطورين والمهندسين، والمرشدين التجاريين، والشركات الراغبة في رعاية وتطوير المشاريع الواعدة.",
        },
        {
          question: "كيف يمكنني العثور على أفكار مشاريع واعدة تبحث عن شركاء أو مستثمرين في الإمارات؟",
          answer:
            "تصفح قسم 'أفكار المشاريع' على لوريفاي واستخدم أدوات التصفية المتقدمة للوصول إلى المفاهيم التجارية التي تتطابق مع اهتماماتك، وابدأ محادثة مباشرة مع صاحب الفكرة داخل التطبيق.",
        },
      ],
      ctaText: "استكشف أفكار المشاريع",
    },

    "business-partnership-opportunities-uae": {
      slug: "business-partnership-opportunities-uae",
      title: "استكشف فرص الشراكة التجارية في الإمارات | لوريفاي",
      metaDescription:
        "استكشف فرص الشراكة والتحالفات التجارية في دبي والإمارات عبر منصة لوريفاي.",
      h1: "استكشف فرص الشراكة التجارية",
      subtitle: "تحالفات استراتيجية وشراكات عمل في أسواق حيوية.",
      intro:
        "الشراكات التجارية تساعد على تكامل الموارد وتبادل الخبرات وتوسيع الانتشار في السوق الإماراتي والمنطقة.",
      sections: [
        {
          heading: "كيف تساهم الشراكات الاستراتيجية وتكامل رأس المال في نمو الأعمال؟",
          content:
            "يسهّل لوريفاي التقاء أصحاب الخبرات والمستثمرين لبناء شراكات تعود بالنفع على تطوير وتنمية الأعمال.",
        },
      ],
      faqItems: [
        {
          question: "كيف تساهم منصة لوريفاي في تسهيل بناء الشراكات والتحالفات التجارية الاستراتيجية في الإمارات؟",
          answer:
            "تتيح المنصة لأصحاب الشركات توضيح متطلبات الشراكة بدقة، مثل التمويل، أو شبكات التوزيع، أو الخبرات التقنية، أو الإدارة التنفيذية، مما يربطهم مباشرة بالشركاء الأنسب.",
        },
      ],
      ctaText: "اكتشف فرص الشراكة",
    },

    "trade-license-opportunities-uae": {
      slug: "trade-license-opportunities-uae",
      title: "استكشف فرص الرخص التجارية في الإمارات | لوريفاي",
      metaDescription:
        "استكشف الرخص التجارية المعروضة للبيع والتنازل في مختلف إمارات الدولة وتواصل مع أصحابها مباشرة عبر لوريفاي.",
      h1: "استكشف فرص الرخص التجارية",
      subtitle: "استكشف الرخص التجارية المعروضة للبيع في مختلف الجهات والمناطق في الإمارات.",
      intro:
        "الحصول على رخصة تجارية قائمة قد يسهل إجراءات التأسيس وممارسة الأعمال في أنحاء الإمارات. يعرض أصحاب الرخص التجارية تراخيصهم للبيع مع بيان الجهات المصدرة والأنشطة والتأشيرات والمقر عبر مختلف إمارات الدولة.",
      sections: [
        {
          heading: "ما هي أهم التفاصيل والمعايير عند تقييم الرخص التجارية المعروضة؟",
          content:
            "تختلف الرخص التجارية في الإمارات بحسب الجهة المصدرة، والمنطقة أو الاختصاص، والأنشطة التجارية المعتمدة، والتأشيرات المتاحة، ومتطلبات المكتب أو المقر:",
          bulletPoints: [
            "الجهة والمنطقة: جهات الترخيص في المناطق الداخلية والمناطق الحرة في مختلف إمارات الدولة.",
            "الأنشطة التجارية المعتمدة: الأنشطة التجارية أو الصناعية أو المهنية أو غيرها بحسب ما هو معتمد في الرخصة.",
            "التأشيرات: عدد التأشيرات الحالية أو المتاحة المرتبطة بالرخصة، إن وجدت.",
            "المكتب أو المقر: تفاصيل المكتب أو مساحة العمل أو عقد الإيجار أو أي ترتيبات مرتبطة بالمقر، إن وجدت.",
          ],
        },
      ],
      faqItems: [
        {
          question: "ما هي العوامل والاشتراطات الأساسية التي ينبغي التحقق منها قبل شراء رخصة تجارية في الإمارات؟",
          answer:
            "تحقق من الجهة المصدرة ونطاق الاختصاص، والأنشطة المعتمدة، وحصة التأشيرات المتاحة، ووضع عقد الإيجار والمقر، والسعر الإجمالي، والشروط الخاصة المحددة لنقل ملكية الرخصة.",
        },
        {
          question: "أين يمكنني استكشاف الرخص التجارية المعروضة للبيع والتنازل في مختلف إمارات الدولة؟",
          answer:
            "يمكنك تصفح قسم 'الرخص التجارية' عبر تطبيق لوريفاي للاطلاع على الرخص المعروضة للتنازل مباشرة من أصحابها في مختلف الدوائر الاقتصادية والمناطق الحرة.",
        },
        {
          question: "هل تتولى منصة لوريفاي إجراءات نقل وتنازل الرخصة التجارية بشكل رسمي وقانوني؟",
          answer:
            "لا، لوريفاي هي منصة ربط واكتشاف، وتتم الإجراءات الرسمية والقانونية لنقل ملكية الرخص عبر الدوائر الاقتصادية المعنية أو سلطات المناطق الحرة المختصة بمساعدة وكلاء الخدمات المعتمدين.",
        },
      ],
      ctaText: "استكشف الرخص التجارية",
    },

    "list-running-business": {
      slug: "list-running-business",
      title: "اعرض مشروعك القائم في الإمارات | لوريفاي",
      metaDescription:
        "اعرض مشروعك القائم للبيع أو ابحث عن شركاء ومستثمرين في دبي ومختلف إمارات الدولة عبر تطبيق لوريفاي.",
      h1: "اعرض مشروعك القائم",
      subtitle: "ابحث عن شركاء، اجذب مستثمرين للتوسع، أو اعرض مشروعك القائم للبيع.",
      intro:
        "يمكنك عرض مشروع قائم يعمل في الإمارات والبحث عن شركاء أو مستثمرين أو مشترين محتملين. يوفر لوريفاي منصة مخصصة للوصول إلى المستثمرين ورواد الأعمال المهتمين في دولة الإمارات. وسواء كنت تدير مشروعاً أو شركة من أي حجم، مثل شركة، مطعم، سوبرماركت، كراج، صالون، مقهى، متجر، أو ورشة، أو أي نوع آخر من المشاريع القائمة، يمكنك استخدام لوريفاي للبحث عن شركاء أو مستثمرين أو مشترين محتملين بكل سهولة.",
      sections: [
        {
          heading: "هل يمكنني الاختيار بين استقطاب شركاء جدد أو عرض مشروعي للبيع؟",
          content:
            "عند نشر مشروعك القائم على لوريفاي، يمكنك اختيار الهدف الرئيسي لإعلانك بكل سهولة:",
          bulletPoints: [
            "البحث عن شريك: حدد طبيعة المساهمة المطلوبة (شريك مالي، شريك استراتيجي، أو شريك تشغيلي) وعدد الشركاء المطلوبين.",
            "بيع المشروع: وضّح السعر المطلوب، بيانات المقر والأنشطة، والتأشيرات، وحجم النشاط الحالي للمشترين المحتملين.",
          ],
        },
        {
          heading: "ما هي خطوات نشر إعلان احترافي لمشروعي القائم عبر لوريفاي؟",
          content:
            "حمّل تطبيق لوريفاي، اضغط على 'إضافة إعلان'، اختر 'مشروع قائم'، ثم املأ تفاصيل النشاط والمدينة والهدف وحالة المشروع وانشر إعلانك ليصل فورًا إلى آلاف المهتمين. يستطيع المستثمرون والشركاء مراسلتك مباشرة داخل التطبيق دون أي حواجز.",
        },
      ],
      faqItems: [
        {
          question: "كيف يمكنني إضافة وعرض مشروعي التجاري القائم عبر تطبيق لوريفاي؟",
          answer:
            "من تطبيق لوريفاي، اضغط على 'إضافة إعلان' ثم اختر 'مشروع قائم' وأدخل بيانات النشاط والموقع. حدد هدفك (البحث عن شركاء أو بيع المشروع)، واختر باقة النشر المناسبة ثم انشر الإعلان ليصل إلى المهتمين فوراً.",
        },
        {
          question: "هل يمكنني الاختيار بحرية بين البحث عن شركاء جدد أو بيع مشروعي بالكامل؟",
          answer:
            "نعم، يتيح لك التطبيق تحديد هدف الإعلان بدقة سواء بالبحث عن شركاء تمويليين أو استراتيجيين أو تشغيليين، أو عرض المشروع للبيع والتنازل الكامل مع تحديد السعر المطلوب.",
        },
        {
          question: "من هي الفئات التي ستتمكن من رؤية واستكشاف إعلان مشروعي على المنصة؟",
          answer:
            "يظهر إعلانك لكافة مستخدمي لوريفاي المهتمين بالاستثمار والشراكة في الإمارات، ويمكن للمهتمين التواصل معك مباشرة عبر الدردشة الفورية الآمنة داخل التطبيق.",
        },
        {
          question: "ما هي باقات وخيارات نشر الإعلانات المتاحة على منصة لوريفاي؟",
          answer:
            "يوفر لوريفاي خيارات مرنة تشمل: باقات الرسوم الثابتة لمدة محددة (مثل شهر أو 3 أشهر)، أو خيار الدفع حسب المحادثة (Pay per Chat) حيث تدفع فقط مقابل المحادثات الفعلية التي يبدأها المهتمون.",
        },
        {
          question: "من يحق له نشر وإدارة إعلان المشروع التجاري على لوريفاي؟",
          answer:
            "يمكن نشر الإعلان من قبل مالك المشروع، أو الشريك المفوض، أو المستشار التجاري، أو الوسيط المرخص، مع تحديد صفتك وعلاقتك بالمشروع بكل شفافية أثناء إضافة الإعلان.",
        },
        {
          question: "هل يُلزم لوريفاي أصحاب الإعلانات بتقديم مستندات شخصية أو أوراق تجارية رسمية؟",
          answer:
            "إرفاق المستندات اختياري تماماً، ولكن إرفاق صور الهوية أو الرخص أو البيانات المالية يعزز مستوى الموثوقية لدى المستثمرين ويزيد من فرص نجاح المحادثات الاستثمارية.",
        },
      ],
      ctaText: "اعرض مشروعك على لوريفاي",
    },

    "post-startup-idea": {
      slug: "post-startup-idea",
      title: "اعرض فكرة مشروعك في الإمارات | لوريفاي",
      metaDescription:
        "اعرض فكرة مشروعك وتواصل مع شركاء مؤسسين، مستثمرين، وخبراء تنفيذيين في الإمارات عبر لوريفاي.",
      h1: "اعرض فكرة مشروعك",
      subtitle: "اعرض فكرتك وتواصل مع شركاء مؤسسين، مستثمرين، وخبراء تنفيذيين.",
      intro:
        "سواء كنت داخل الإمارات أو خارجها، يمكنك عرض فكرة مشروع أو شركة ناشئة تهدف إلى الإطلاق أو التطوير أو الاستثمار داخل الإمارات.",
      sections: [
        {
          heading: "كيف يساعدك لوريفاي على تحويل فكرتك التجارية إلى واقع ملموس؟",
          content:
            "يتيح لوريفاي للمستخدمين من داخل الإمارات وخارجها عرض أفكار موجهة للسوق الإماراتي والبحث عن شركاء أو مستثمرين أو شركاء مؤسسين أو أصحاب خبرة تنفيذية.",
          bulletPoints: [
            "شركاء تمويليين: التواصل مع مستثمرين مهتمين بتمويل المراحل الأولى للأفكار المجدية.",
            "شركاء استراتيجيين: الاستفادة من العلاقات الصناعية والتوجيه الاستراتيجي والخبرات المتخصصة.",
            "شركاء تشغيليين: العثور على شركاء تنفيذيين متخصصين في الإدارة أو التقنية أو التسويق.",
          ],
        },
      ],
      faqItems: [
        {
          question: "كيف يمكنني عرض فكرة مشروعي الناشئ عبر لوريفاي واستقطاب الشركاء والمستثمرين المهتمين؟",
          answer:
            "من خلال التطبيق، اضغط على 'إضافة إعلان' ثم اختر 'فكرة مشروع'، واكتب نبذة واضحة وموجزة عن الفكرة وطبيعة القيمة المضافة. حدد عدد ونوعية الشركاء المطلوبين (تمويليين أو استراتيجيين أو تنفيذيين) والميزانية التقديرية، ثم انشر الإعلان ليصل إلى رواد الأعمال والمستثمرين في الإمارات.",
        },
        {
          question: "ما هي فئات الشركاء التي يمكنني استقطابها للمساهمة في إطلاق وتطوير فكرتي التجارية؟",
          answer:
            "يمكنك البحث عن شريك مالي لتمويل مراحل التأسيس والانطلاق، أو شريك استراتيجي يمتلك علاقات وخبرات تسويقية وتجارية واسعة في السوق الإماراتي، أو شريك مؤسس تشغيلي يتولى الإشراف الفني والتقني وإدارة العمليات اليومية.",
        },
        {
          question: "كيف أحمي حقوق الملكية الفكرية وتفاصيل فكرتي المبتكرة عند نشرها على المنصة؟",
          answer:
            "ننصحك بمشاركة نبذة عامة وشاملة عن الفكرة دون الإفصاح عن الأسرار التجارية أو التفاصيل الدقيقة في الإعلان العام. وعند تواصل المستثمرين أو الشركاء المهتمين عبر الدردشة الفورية، يمكنك مشاركة خطط العمل التفصيلية وتوقيع اتفاقيات عدم الإفصاح والسرية (NDA) قبل التعاقد.",
        },
      ],
      ctaText: "اعرض فكرة مشروعك على لوريفاي",
    },

    "list-trade-license": {
      slug: "list-trade-license",
      title: "اعرض رخصة تجارية للبيع في الإمارات | لوريفاي",
      metaDescription:
        "اعرض رخصتك التجارية للبيع والتنازل في دبي والإمارات. تواصل مباشرة مع المشترين ورواد الأعمال عبر لوريفاي.",
      h1: "اعرض رخصة تجارية للبيع",
      subtitle: "اعرض رخصتك التجارية للبيع وتواصل مباشرة مع المشترين والمهتمين.",
      intro:
        "إذا كنت تمتلك رخصة تجارية قائمة في دبي أو أبوظبي أو أي من إمارات الدولة وترغب في بيعها والتنازل عنها، يوفر لوريفاي قسمًا مخصصًا لعرض الرخص وتسهيل التواصل المباشر مع المشترين. إعلانات الرخص التجارية مخصصة للرخص الصادرة عن جهات الترخيص في الإمارات.",
      sections: [
        {
          heading: "ما هي البيانات الأساسية الواجب توضيحها عند عرض رخصة تجارية للبيع؟",
          content:
            "احرص على توضيح تفاصيل الرخصة لتسهيل تقييمها من قبل المشترين:",
          bulletPoints: [
            "الجهة المصدرة ونوع الاختصاص (دائرة التنمية الاقتصادية Mainland أو المناطق الحرة المختلفة).",
            "الأنشطة التجارية والتصنيفات المعتمدة في الرخصة.",
            "كوتة التأشيرات المتاحة على الرخصة.",
            "حالة المقر أو عقد الإيجار (تفاصيل الإيجار أو المقر، مساحة مكتبية، أو عنوان افتراضي).",
            "السعر المطلوب والشروط.",
          ],
        },
      ],
      faqItems: [
        {
          question: "ما هي البيانات والمعلومات الأساسية التي ينبغي توضيحها عند عرض رخصة تجارية للبيع؟",
          answer:
            "وضّح جهة ونطاق إصدار الرخصة، والأنشطة التجارية المعتمدة، وحصة التأشيرات المتاحة، ووضع مقر العمل وعقد الإيجار، بالإضافة إلى السعر المطلوب وشروط التنازل.",
        },
        {
          question: "كيف يمكنني نشر إعلان بيع رخصة تجارية في الإمارات عبر تطبيق لوريفاي؟",
          answer:
            "من تطبيق لوريفاي، اضغط على 'إضافة إعلان' ثم اختر 'رخصة تجارية'، وأدخل تفاصيل النشاط والجهة وسعر البيع ثم انشر الإعلان مباشرة.",
        },
        {
          question: "كيف يتواصل المشترون والمهتمون معي لمناقشة تفاصيل وشراء الرخصة المعروضة؟",
          answer:
            "يستطيع المشترون المهتمون مراسلتك مباشرة عبر ميزة الدردشة الفورية داخل تطبيق لوريفاي لمناقشة التفاصيل وترتيب خطوات نقل الملكية.",
        },
      ],
      ctaText: "اعرض رخصتك التجارية على لوريفاي",
    },

    "find-partners-investors": {
      slug: "find-partners-investors",
      title: "ابحث عن شركاء ومستثمرين في الإمارات | لوريفاي",
      metaDescription:
        "ابحث عن شركاء تمويليين، استراتيجيين، أو تشغيليين لمشروعك أو فكرتك في دبي والإمارات عبر لوريفاي.",
      h1: "ابحث عن شركاء ومستثمرين",
      subtitle: "تواصل مع أصحاب رؤوس الأموال والخبرات التنفيذية المستعدين لدعم مشروعك.",
      intro:
        "سواء كان لديك مشروع قائم يعمل في الإمارات يحتاج رأس مال للتوسع، أو فكرة مشروع تهدف إلى الإطلاق أو التطوير أو الاستثمار داخل الإمارات، يتيح لك لوريفاي الوصول المباشر إلى شركاء ومستثمرين جادين.",
      sections: [
        {
          heading: "ما هي فئات الشركاء والمستثمرين التي يمكنك التواصل معها عبر لوريفاي؟",
          content:
            "تضم منصة لوريفاي فئات متنوعة من الشركاء والمستثمرين:",
          bulletPoints: [
            "مهنيون برؤوس أموال: كفاءات مهنية تبحث عن مشاريع مجدية للاستثمار والمشاركة.",
            "تنفيذيون ذوو خبرة: مدراء وخبراء يبحثون عن مشاريع جديدة للمساهمة في إدارتها وتطويرها.",
            "مستثمرون أفراد: أصحاب رؤوس أموال يبحثون عن فرص استثمارية مربحة في السوق الإماراتي.",
            "شركات ومؤسسات: كيانات تبحث عن تحالفات استراتيجية وفرص توسع وتكامل.",
          ],
        },
        {
          heading: "ما هي خطوات التواصل مع الشركاء والمستثمرين المحتملين على لوريفاي؟",
          content:
            "يتبع التواصل مع الشركاء والمستثمرين عبر تطبيق لوريفاي خطوات واضحة ومباشرة من الاكتشاف إلى المحادثة المباشرة:",
          bulletPoints: [
            "نشر الفرصة: اختر مشروعًا قائمًا أو فكرة مشروع، وحدد أعداد وأنواع الشركاء المطلوبين (تمويلي، استراتيجي، تشغيلي).",
            "ظهور فوري للإعلان: يصبح إعلانك مرئيًا للمستثمرين والشركاء المحتملين في دبي وأبوظبي وكافة إمارات الدولة.",
            "محادثة مباشرة داخل التطبيق: يبدأ المهتمون التواصل معك مباشرة عبر الدردشة الفورية داخل التطبيق.",
          ],
        },
      ],
      faqItems: [
        {
          question: "من هي فئات المستثمرين والشركاء المحتملين التي يمكنني الوصول إليها عبر لوريفاي؟",
          answer:
            "يمكنك استقطاب أصحاب رؤوس الأموال، والخبراء والمدراء التنفيذيين، والمستثمرين الأفراد، والشركات المهتمة بالتمويل أو الإدارة أو الدعم التشغيلي والاستراتيجي.",
        },
        {
          question: "كيف أستقطب مستثمرين لتمويل مشروعي أو فكرتي التجارية في دولة الإمارات؟",
          answer:
            "انشر إعلان مشروعك أو فكرتك على لوريفاي، وحدد حجم التمويل المطلوب وطبيعة الشراكة والبيانات التشغيلية. سيتواصل معك المستثمرون المهتمون مباشرة عبر الدردشة داخل التطبيق.",
        },
        {
          question: "ما هي نماذج وهياكل الشراكة التجارية المدعومة عبر منصة لوريفاي؟",
          answer:
            "يدعم لوريفاي الشراكات التمويلية (رأس المال)، والاستراتيجية (العلاقات والتوزيع)، والتشغيلية (الإدارة والخبرات الميدانية)، بحسب متطلبات مشروعك.",
        },
      ],
      ctaText: "ابحث عن شركاء ومستثمرين على لوريفاي",
    },

    "free-business-listing-uae": {
      slug: "free-business-listing-uae",
      title: "إدراج الأعمال في الإمارات | لوريفاي",
      metaDescription:
        "انشر إعلان مشروعك القائم أو فكرتك الناشئة أو رخصتك التجارية في دبي والإمارات. النشر مجاني خلال فترة إطلاق التطبيق. تواصل مباشرة مع الشركاء والمستثمرين والمشترين عبر لوريفاي.",
      h1: "إدراج الأعمال",
      subtitle: "اعرض مشروعك القائم أو فكرتك الناشئة أو رخصتك التجارية. النشر مجاني خلال فترة إطلاق التطبيق.",
      intro:
        "هل تبحث عن منصة متخصصة لعرض مشروعك أو فكرة مشروعك أو رخصتك التجارية في دولة الإمارات؟ يوفر تطبيق لوريفاي مساحة مخصصة تتيح لأصحاب المشاريع ورواد الأعمال نشر إعلاناتهم والتواصل المباشر مع المستثمرين والشركاء التشغيليين والمشترين المهتمين. النشر مجاني خلال فترة إطلاق التطبيق.",
      sections: [
        {
          heading: "ما هي الإعلانات التي يمكنك نشرها عبر لوريفاي؟",
          content:
            "تتيح منصة لوريفاي نشر الإعلانات ضمن ثلاث فئات رئيسية. النشر مجاني خلال فترة إطلاق التطبيق:",
          bulletPoints: [
            "مشاريع قائمة: اعرض شركتك القائمة للبحث عن رأس مال للتوسع أو شركاء تنفيذيين أو اعرضها للبيع بالكامل.",
            "أفكار ومشاريع ناشئة: اطرح فكرة مشروعك للبحث عن شركاء مؤسسين ومدراء تشغيليين ومستثمرين للمساهمة في إطلاقها.",
            "رخص تجارية: اعرض الرخص التجارية الصادرة من الدوائر الاقتصادية أو المناطق الحرة للبيع والتنازل.",
          ],
        },
        {
          heading: "كيف تنشئ وتَنشر إعلان مشروعك التجاري عبر تطبيق لوريفاي؟",
          content:
            "البدء في لوريفاي سريع وسهل ولا يتطلب سوى دقائق معدودة. حمّل تطبيق الهاتف، وأنشئ حسابك بالاسم ورقم الهاتف، ثم اختر نوع الإعلان وأدخل التفاصيل وانشر إعلانك ليصل إلى المهتمين في كافة إمارات الدولة. النشر مجاني خلال فترة إطلاق التطبيق، ويتضمن ميزة الدردشة المباشرة للتواصل الفوري مع الأطراف المهتمة دون أي وسطاء.",
        },
        {
          heading: "كيف يضمن لوريفاي الشفافية والمسؤولية في نشر البيانات التجارية؟",
          content:
            "إدراج الأعمال متاح مجانًا خلال فترة إطلاق التطبيق. كافة البيانات والمعلومات المالية الواردة في الإعلانات يقدمها أصحابها، وتقع على عاتق المستخدمين مسؤولية التحقق والتدقيق المستقل قبل اتخاذ أي قرارات استثمارية أو تجارية.",
        },
      ],
      faqItems: [
        {
          question: "هل نشر الإعلانات التجارية والمشاريع مجاني تماماً على منصة لوريفاي؟",
          answer:
            "نعم، نشر إعلانات المشاريع القائمة، وأفكار المشاريع الناشئة، والرخص التجارية مجاني بالكامل خلال فترة إطلاق التطبيق.",
        },
        {
          question: "هل يلزم إدخال بطاقة ائتمانية أو بيانات دفع بنكية عند إنشاء ونشر الإعلان؟",
          answer:
            "لا، إنشاء الحساب ونشر الإعلانات يتطلبان فقط الاسم ورقم الهاتف، دون الحاجة لبطاقة بنكية أو أي تفاصيل دفع خلال فترة الإطلاق.",
        },
        {
          question: "ما هي المدن والإمارات التي تغطيها إعلانات وفرص الأعمال في لوريفاي؟",
          answer:
            "تغطي لوريفاي كافة إمارات الدولة السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين.",
        },
        {
          question: "هل يتيح لوريفاي نشر إعلان لبيع النشاط التجاري بالكامل بالإضافة إلى البحث عن شركاء؟",
          answer:
            "نعم، يمكنك اختيار الهدف من الإعلان بكل سهولة سواء كان البحث عن شركاء ومستثمرين للتوسع أو عرض المشروع القائم للبيع والتنازل بالكامل.",
        },
      ],
      ctaText: "أعلن عن مشروعك على لوريفاي",
    },
  },
};
