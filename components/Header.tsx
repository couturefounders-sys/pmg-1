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
  const isInsightsPage = pathname === '/insights';
  const isSaaSPage = pathname === '/saas-enterprise-technology';
  const isPublicSectorPage = pathname === '/public-sector-government';
  const isLightPage = isAboutPage || isYourIndustryPage || isFunctionalAreasPage || isSolutionsPage || isInsightsPage || isSaaSPage || isPublicSectorPage;

  const textColor = isLightPage ? 'text-black' : 'text-white';
  const logoTextColor = isLightPage ? 'text-[#000000]' : 'text-white'; // purely black for logo text on light pages
  const chevronColor = isLightPage ? '#000000' : 'white';

  const navItems = [
    { name: 'About', hasDropdown: false, href: '/about' },
    { name: 'Your Industry', hasDropdown: true, href: '/your-industry' },
    { name: 'Our functional areas', hasDropdown: false, href: '/our-functional-areas' },
    { name: 'Our Solutions', hasDropdown: false, href: '/our-solutions' },
    { name: 'Insights', hasDropdown: false, href: '/insights' },
    { name: 'Contact Us', hasDropdown: false, href: '#contact' },
  ];

  const industryItems = [
    { title: 'Financial Services & FinTech', desc: 'Navigating compliance, risk, and transformation.', href: '/your-industry' },
    { title: 'SaaS & Enterprise Technology', desc: 'Accelerating growth and innovation.', href: '/saas-enterprise-technology' },
    { title: 'PE, VC, and Capital Management', desc: 'Maximizing portfolio value for investors.', href: '/your-industry' },
    { title: 'Public Sector & Government Services', desc: 'Enhancing public sector efficiency.', href: '/public-sector-government' },
    { title: 'Higher Education & EdTech', desc: 'Modernizing institutions for student success.', href: '/your-industry' },
    { title: 'Food, Beverage & Agribusiness', desc: 'Optimizing the food value chain.', href: '/your-industry' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto relative" style={{ height: '100px' }}>
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
                  <button 
                    className={`nav-text flex items-center gap-1 ${textColor} hover:opacity-80 transition-opacity whitespace-nowrap`}
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
                  </button>
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
                  <div 
                    className="absolute top-full left-0 pt-4 w-[380px] z-50"
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
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
