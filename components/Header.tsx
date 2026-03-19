'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Only the home page has a dark background, all other pages have light backgrounds
  const isHomePage = pathname === '/';
  const isLightPage = !isHomePage;

  const textColor = isLightPage ? 'text-black' : 'text-white';
  const chevronColor = isLightPage ? '#000000' : 'white';

  const navItems = [
    { name: 'About', hasDropdown: false, href: '/about' },
    { name: 'Your Industry', hasDropdown: true, href: '/your-industry' },
    { name: 'Our functional areas', hasDropdown: true, href: '/our-functional-areas' },
    { name: 'Our Solutions', hasDropdown: true, href: '/our-solutions' },
    { name: 'Insights & Innovations', hasDropdown: true, href: '/insights-innovations' },
    { name: 'Contact Us', hasDropdown: false, href: '/contact-us' },
  ];

  const industryItems = [
    { title: 'Financial Services & FinTech', desc: 'Navigating compliance, risk, and transformation.', href: '/financial-services-fintech' },
    { title: 'SaaS & Enterprise Technology', desc: 'Accelerating growth and innovation.', href: '/saas-enterprise-technology' },
    { title: 'PE, VC, and Capital Management', desc: 'Maximizing portfolio value for investors.', href: '/your-industry' },
    { title: 'Public Sector & Government Services', desc: 'Enhancing public sector efficiency.', href: '/public-sector-government' },
    { title: 'Higher Education & EdTech', desc: 'Modernizing institutions for student success.', href: '/higher-education-edtech' },
    { title: 'Food, Beverage & Agribusiness', desc: 'Optimizing the food value chain.', href: '/food-beverage-agribusiness' },
    { title: 'Travel, Tourism & Hospitality', desc: 'Creating world-class guest experiences.', href: '/travel-tourism-hospitality' },
    { title: 'B2B & Professional Services', desc: 'Optimizing corporate service delivery.', href: '/b2b-professional-services' },
    { title: 'Why Functional Consulting?', desc: 'The advantage of deep expertise over generalists.', href: '/why-functional-consulting' },
  ];

  const functionalAreasItems = [
    { title: 'All Functional Areas', desc: 'Explore our full suite of consulting capabilities.', href: '/our-functional-areas' },
    { title: 'Operations & Strategy', desc: 'Efficiency Engineered, Excellence Delivered.', href: '/strategy-operations-consulting' },
    { title: 'People & Organizations', desc: 'Unleashing Potential, Driving Performance.', href: '/people-organizations-consulting' },
    { title: 'Customer Experience', desc: 'Turning Transactions Into Relationships.', href: '/customer-experience-consulting' },
    { title: 'Mergers & Acquisitions', desc: 'Navigating Transitions, Maximizing Value.', href: '/mergers-acquisitions-consulting' },
    { title: 'Branding & Marketing', desc: 'Crafting Identities That Captivate.', href: '/branding-marketing-consulting' },
    { title: 'BPO & Fractional Talent', desc: 'Seamless Solutions, Made Global.', href: '/bpo-fractional-talent-consulting' },
    { title: 'Crisis & Transition Management', desc: 'Navigating Uncertainty with Decisive Leadership.', href: '/crisis-transition-management' },
  ];

  const solutionsItems = [
    { title: 'Solutions & Pricing', desc: 'Find the right package for your business needs.', href: '/our-solutions' },
    { title: 'Bespoke Solutions', desc: 'Fully customized strategies for complex challenges.', href: '/bespoke-solutions' },
    { title: 'Active Management Solutions', desc: 'Embedded executive operators driving results from within.', href: '/active-management-solutions' },
    { title: 'Equity Solutions', desc: 'A strategic partnership for accelerated growth & shared success.', href: '/equity-solutions' },
    { title: 'Out of the Box Solutions', desc: 'Component tools and frameworks you can implement yourself.', href: '/out-of-the-box-solutions' },
    { title: 'Power of Working With Us', desc: 'The quiet discipline and proven process behind every PMG engagement.', href: '/power-of-working-with-us' },
    { title: 'Solution Assessment Tool', desc: 'Answer a few questions to get a recommendation on the right engagement model.', href: '/solution-assessment-tool' },
  ];

  const insightsTopItems = [
    { title: 'Articles & Thought Leadership', desc: 'Explore our latest thinking on the trends and challenges shaping modern business.', href: '/insights-innovations' },
    { title: 'Our Resources', desc: 'Explore our dictionary, metacognitive principles, and more.', href: '/resources' },
  ];

  const insightsModelItems = [
    { title: 'The Sector Convergence Model', desc: 'A framework for cross-industry innovation.', href: '/insights' },
    { title: 'The I-O Architecture Model', desc: 'An architectural blueprint for operational predictability.', href: '/io-architecture-model' },
    { title: 'The Business Value-Unit Model', desc: 'A method for quantifying the value of non-commercial teams.', href: '/business-value-unit-model' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-[200]">
      <div
        className="mx-auto relative overflow-visible px-[clamp(16px,2.5vw,48px)]"
        style={{
          maxWidth: 'min(95%, 2200px)',
          height: 'clamp(70px, 6.94vw, 120px)',
        }}
      >
        {/* Combined Logo */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="absolute block"
          style={{
            top: 'clamp(16px, 1.6vw, 28px)',
            left: 'clamp(16px, 2.5vw, 48px)',
            width: 'clamp(112px, 10.56vw, 170px)',
            height: 'clamp(52px, 5.56vw, 74px)',
          }}
        >
          <Image
            src="/logo.png"
            alt="PMG Logo Icon"
            width={53}
            height={51}
            priority
            style={{
              width: 'clamp(36px, 3.68vw, 60px)',
              height: 'auto',
            }}
          />

          <Image
            src={isLightPage ? '/PMG_dark.png' : '/PMG.png'}
            alt="PMG"
            width={80}
            height={40}
            priority
            style={{
              position: 'absolute',
              top: 'clamp(10px, 0.97vw, 16px)',
              left: 'clamp(42px, 4vw, 70px)',
              objectFit: 'contain',
              width: 'clamp(55px, 5.56vw, 95px)',
              height: 'auto',
            }}
          />
        </Link>

        {/* Navigation - Centered Group */}
        <nav
          className="absolute flex items-center"
          style={{
            top: 'clamp(26px, 2.64vw, 44px)',
            left: '50%',
            transform: 'translateX(-50%)',
            gap: 'clamp(16px, 2.2vw, 48px)',
          }}
        >
          {navItems.map((item) => {
            const industryPaths = ['/your-industry', '/financial-services-fintech', '/saas-enterprise-technology', '/public-sector-government', '/higher-education-edtech', '/food-beverage-agribusiness', '/travel-tourism-hospitality', '/b2b-professional-services', '/why-functional-consulting'];
            const functionalAreasPaths = ['/our-functional-areas', '/strategy-operations-consulting', '/people-organizations-consulting', '/customer-experience-consulting', '/mergers-acquisitions-consulting', '/branding-marketing-consulting', '/bpo-fractional-talent-consulting', '/crisis-transition-management'];
            const solutionsPaths = ['/our-solutions', '/bespoke-solutions', '/active-management-solutions', '/equity-solutions', '/out-of-the-box-solutions', '/power-of-working-with-us', '/solution-assessment-tool'];
            const insightsPaths = ['/insights-innovations', '/insights', '/resources', '/io-architecture-model', '/business-value-unit-model'];

            const isActive =
              item.name === 'Your Industry' ? industryPaths.includes(pathname) :
              item.name === 'Our functional areas' ? functionalAreasPaths.includes(pathname) :
              item.name === 'Our Solutions' ? solutionsPaths.includes(pathname) :
              item.name === 'Insights & Innovations' ? insightsPaths.includes(pathname) :
              pathname === item.href;
            const isOpen = openDropdown === item.name;

            return (
              <div
                key={item.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.hasDropdown ? (
                  <Link
                    href={item.href}
                    className={`nav-text flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap ${isActive ? 'bg-[#cbdbf6] text-black px-4 py-1 rounded-[20px]' : textColor}`}
                  >
                    {item.name}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke={chevronColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-text flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap ${isActive ? 'bg-[#cbdbf6] text-black px-4 py-1 rounded-[20px]' : textColor}`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && isOpen && (
                  <>
                    {/* Invisible bridge for smooth hover */}
                    <div className="absolute top-full left-0 w-[380px] h-[16px] z-[250]" />

                    <div
                      className="absolute top-full left-0 w-[380px] z-[250]"
                      style={{ marginTop: '16px' }}
                    >
                      <div className="bg-white rounded-lg shadow-2xl border border-gray-300 overflow-hidden py-2">
                       {item.name === 'Your Industry' && (
                        <div className="flex flex-col">
                          {industryItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              className="px-6 py-4 hover:bg-gray-50 transition-colors group/item block"
                            >
                              <h4 className="text-[#14358A] font-inter font-semibold text-[15px] mb-1 group-hover/item:text-[#6A36FF] transition-colors">
                                {subItem.title}
                              </h4>
                              <p className="text-[#5F6D7E] text-[13px] leading-snug font-inter">
                                {subItem.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                       )}
                       {item.name === 'Our functional areas' && (
                        <div className="flex flex-col">
                          {functionalAreasItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              className="px-6 py-4 hover:bg-gray-50 transition-colors group/item block"
                            >
                              <h4 className="text-[#14358A] font-inter font-semibold text-[15px] mb-1 group-hover/item:text-[#6A36FF] transition-colors">
                                {subItem.title}
                              </h4>
                              <p className="text-[#5F6D7E] text-[13px] leading-snug font-inter">
                                {subItem.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                       )}
                       {item.name === 'Our Solutions' && (
                        <div className="flex flex-col">
                          {solutionsItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              className="px-6 py-4 hover:bg-gray-50 transition-colors group/item block"
                            >
                              <h4 className="text-[#14358A] font-inter font-semibold text-[15px] mb-1 group-hover/item:text-[#6A36FF] transition-colors">
                                {subItem.title}
                              </h4>
                              <p className="text-[#5F6D7E] text-[13px] leading-snug font-inter">
                                {subItem.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                       )}
                       {item.name === 'Insights & Innovations' && (
                        <div className="flex flex-col">
                          {insightsTopItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              className="px-6 py-4 hover:bg-gray-50 transition-colors group/item block"
                            >
                              <h4 className="text-[#14358A] font-inter font-semibold text-[15px] mb-1 group-hover/item:text-[#6A36FF] transition-colors">
                                {subItem.title}
                              </h4>
                              <p className="text-[#5F6D7E] text-[13px] leading-snug font-inter">
                                {subItem.desc}
                              </p>
                            </Link>
                          ))}
                          <hr className="mx-6 my-1 border-gray-200" />
                          <div className="px-6 pt-3 pb-1">
                            <p className="text-[#14358A] font-inter font-semibold text-[13px]">Our Proprietary Models</p>
                          </div>
                          {insightsModelItems.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              className="pl-8 pr-6 py-3 hover:bg-gray-50 transition-colors group/item block border-l-2 border-gray-200 mx-6 mb-1"
                            >
                              <h4 className="text-[#14358A] font-inter font-semibold text-[15px] mb-0.5 group-hover/item:text-[#6A36FF] transition-colors">
                                {subItem.title}
                              </h4>
                              <p className="text-[#5F6D7E] text-[13px] leading-snug font-inter">
                                {subItem.desc}
                              </p>
                            </Link>
                          ))}
                          <div className="pb-2" />
                        </div>
                       )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </nav>
      </div>

    </header>
  );
}
