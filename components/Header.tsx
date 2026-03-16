'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  const isYourIndustryPage = pathname === '/your-industry';
  const isFunctionalAreasPage = pathname === '/our-functional-areas';
  const isSolutionsPage = pathname === '/our-solutions';
  const isBespokeSolutionsPage = pathname === '/bespoke-solutions';
  const isInsightsPage = pathname === '/insights';
  const isInsightsInnovationsPage = pathname === '/insights-innovations';
  const isSaaSPage = pathname === '/saas-enterprise-technology';
  const isPublicSectorPage = pathname === '/public-sector-government';
  const isHigherEducationPage = pathname === '/higher-education-edtech';
  const isFoodAgribusinessPage = pathname === '/food-beverage-agribusiness';
  const isTravelHospitalityPage = pathname === '/travel-tourism-hospitality';
  const isWhyFunctionalConsultingPage = pathname === '/why-functional-consulting';
  const isStrategyOperationsPage = pathname === '/strategy-operations-consulting';
  const isPeopleOrganizationsPage = pathname === '/people-organizations-consulting';
  const isCustomerExperiencePage = pathname === '/customer-experience-consulting';
  const isMergersAcquisitionsPage = pathname === '/mergers-acquisitions-consulting';
  const isActiveManagementPage = pathname === '/active-management-solutions';
  const isEquitySolutionsPage = pathname === '/equity-solutions';
  const isOutOfTheBoxPage = pathname === '/out-of-the-box-solutions';
  const isPowerOfWorkingWithUsPage = pathname === '/power-of-working-with-us';
  const isContactUsPage = pathname === '/contact-us';
  const isSolutionAssessmentPage = pathname === '/solution-assessment-tool';
  const isFinancialServicesPage = pathname === '/financial-services-fintech';
  const isB2BProfessionalServicesPage = pathname === '/b2b-professional-services';
  const isIOArchitecturePage = pathname === '/io-architecture-model';
  const isBVUModelPage = pathname === '/business-value-unit-model';
  const isBrandingMarketingPage = pathname === '/branding-marketing-consulting';
   const isBPOFractionalPage = pathname === '/bpo-fractional-talent-consulting';
   const isCrisisTransitionPage = pathname === '/crisis-transition-management';
   const isResourcesPage = pathname === '/resources';
   const isLightPage = isAboutPage || isYourIndustryPage || isFunctionalAreasPage || isSolutionsPage || isBespokeSolutionsPage || isInsightsPage || isInsightsInnovationsPage || isSaaSPage || isPublicSectorPage || isHigherEducationPage || isFoodAgribusinessPage || isTravelHospitalityPage || isWhyFunctionalConsultingPage || isStrategyOperationsPage || isPeopleOrganizationsPage || isCustomerExperiencePage || isMergersAcquisitionsPage || isActiveManagementPage || isEquitySolutionsPage || isOutOfTheBoxPage || isPowerOfWorkingWithUsPage || isContactUsPage || isSolutionAssessmentPage || isFinancialServicesPage || isB2BProfessionalServicesPage || isIOArchitecturePage || isBVUModelPage || isBrandingMarketingPage || isBPOFractionalPage || isCrisisTransitionPage || isResourcesPage;

  const textColor = isLightPage ? 'text-black' : 'text-white';
  const logoTextColor = isLightPage ? 'text-[#000000]' : 'text-white'; // purely black for logo text on light pages
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
      <div className="max-w-[1440px] mx-auto relative overflow-visible" style={{ height: '100px' }}>
        {/* Logo Icon */}
        <div className="absolute" style={{ top: '23px', left: '85px' }}>
          <Image
            src="/logo.png"
            alt="PMG Logo Icon"
            width={53}
            height={51}
            priority
          />
        </div>

        {/* PMG Text */}
        <div
          className={`absolute ${logoTextColor} logo-text text-center`}
          style={{
            top: '32px',
            left: '140px',
            fontSize: '35px',
            lineHeight: '100%',
          }}
        >
          PMG
        </div>

        {/* Navigation - Centered Group */}
        <nav className="absolute flex items-center gap-12" style={{ top: '38px', left: '50%', transform: 'translateX(-50%)' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
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
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-2">
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
