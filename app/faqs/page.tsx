'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'What services does PMG Consulting offer?',
    answer: 'We provide a comprehensive suite of consulting services focused on driving growth, efficiency, and innovation. Our core services are centered on functional consulting across six primary areas: Strategy & Operations, People & Organizations, Customer Experience, Mergers & Acquisitions, Branding & Marketing, and BPO & Fractional Talent. Our unique model involves placing experts directly inside our clients\' businesses to solve core challenges from within. Our goal is to support our clients in any way we can. Even if we do not advertise a specific service, we take on projects based on our expertise. If we have the know-how, we want to help. For projects where we may not be the best fit, we partner with other firms to ensure our clients have access to comprehensive business support.',
  },
  {
    question: 'What industries does PMG Consulting specialize in?',
    answer: 'Our journey began in the restaurant industry and quickly expanded into the hotel sector. However, our goal has always been to provide a blend of business and industry expertise. Our model, based on the Sector Convergence strategy developed by our founder, Bryce Porter, pulls insights and solutions from various industries to solve problems more effectively than traditional methods. While we remain industry-agnostic, we primarily operate in the following sectors: Financial Services & FinTech, SaaS & Enterprise Technology, PE, VC, and Capital Management, Public Sector & Government Services, Higher Education & EdTech, Food, Beverage & Agribusiness, Travel, Tourism & Hospitality, and B2B & Professional Services.',
  },
  {
    question: 'Can you provide examples of successful projects?',
    answer: 'You can find examples of our successful projects on our Our Projects page. These case studies highlight our commitment to delivering high-impact solutions tailored to each client\'s unique challenges. Our strategic planning, hands-on implementation, and focus on measurable outcomes ensure that we drive meaningful improvements in operational efficiency, customer satisfaction, and overall business performance.',
  },
  {
    question: 'How does PMG Consulting differ from other consulting firms?',
    answer: 'We differentiate ourselves through a unique combination of Quiet Consulting principles, hands-on management placements, bespoke solutions, and proprietary operating models. Unlike traditional consultants who advise from the outside, we embed our experts directly into your business for seamless integration and real-time problem-solving. We do not just offer advice; we stay to implement and ensure sustainability.',
  },
  {
    question: 'What is PMG Consulting\'s approach to customer experience consulting?',
    answer: 'Our approach to customer experience consulting is comprehensive and structured, focusing on tangible results and continuous improvement. We begin by evaluating the data our clients collect to understand their current standards for success. By analyzing customer data and feedback, we gain insights into customer sentiment and perception. We embed a CX expert within our client\'s business to thoroughly understand their operations, processes, and value proposition. We design clear, customer-centric workflows that align positive customer interactions with employee performance metrics. We implement advanced technologies like AI, CRM, and automation to enhance the customer experience. Our iterative process involves continuous evaluation and improvement using data and customer feedback.',
  },
  {
    question: 'What is the white-label operating service offered by PMG Consulting?',
    answer: 'Our white-label operating service is a solution designed to seamlessly manage your business\'s day-to-day operations while ensuring your brand\'s reputation remains unchanged. Our management professionals integrate into your organization, handling all aspects of daily operations from staffing to quality control. This allows you to focus on strategic growth while we ensure optimal performance and customer satisfaction under your brand name.',
  },
  {
    question: 'How does PMG Consulting ensure the sustainability of its solutions?',
    answer: 'Ensuring our solutions endure is a core commitment. We build sustainability into our model through a three-pronged approach: Embedded Development, where solutions are designed by experts embedded within your business, guaranteeing they are customized to your operational realities. Knowledge Transfer, where we implement structured training and robust documentation, ensuring your teams can own and manage new systems independently. Post-Project Evaluation, where our contracts include a 90-day support phase to monitor outcomes, make adjustments, and ensure your team achieves long-term success without our ongoing presence. This focus on integration, training, and support ensures that our work drives not just temporary change, but lasting, self-sufficient success.',
  },
  {
    question: 'Why does PMG decline some consultation requests?',
    answer: 'Our goal is to provide exceptional value. To maintain this standard, we sometimes decline requests for one of three reasons: Inflexibility, as successful consulting requires a collaborative effort. If a potential client is not open to changing processes or investing resources, we cannot guarantee meaningful results. Unrealistic Expectations, as we set ambitious yet achievable targets and do not commit to goals we feel are unattainable. Low Potential ROI, as we are committed to generating industry-leading returns and if we assess that we cannot deliver the significant value we strive for, we decline to ensure both parties engage only in projects with the highest potential for transformative success. This approach safeguards the quality of our services and ensures our clients receive the best possible outcomes.',
  },
  {
    question: 'How does PMG Consulting measure the success of its consulting projects?',
    answer: 'We measure success through a blend of qualitative and quantitative metrics designed to capture the full scope of our impact. Our approach begins with clearly defined objectives and KPIs tailored to each client\'s needs. We track progress against these benchmarks throughout the project, ensuring transparency and accountability. Our proven track record, evidenced by a high ROI and client retention, supports our ability to deliver sustainable, transformative results.',
  },
  {
    question: 'What is the process for becoming a client of PMG Consulting?',
    answer: 'Becoming a client means beginning a partnership where we develop a deep understanding of your unique challenges. Our comprehensive onboarding process ensures we gather all necessary information and align our strategies with your goals. It starts with an Initial Consultation, where we begin with a thorough discovery session to discuss your business needs, challenges, and goals, followed by a detailed needs assessment to identify key areas where we can add value. Then comes Proposal Development, where we develop a tailored proposal outlining our recommended strategies and projected outcomes, and work with you to refine it, ensuring it aligns perfectly with your objectives. Finally, Agreement and Onboarding, where once the proposal is finalized, we move forward with transparent and straightforward agreements, and initiate the onboarding process with a kickoff meeting to outline the project plan, timelines, and deliverables.',
  },
];

export default function FAQs() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      {/* Hero Section */}
      <FadeInSection delay={0} direction="up" animateOnInitialView>
        <div
          className="w-full px-6"
          style={{ paddingTop: 'clamp(100px, 9.86vw, 142px)', paddingBottom: 'clamp(48px, 5vw, 80px)' }}
        >
          <div className="text-center mx-auto" style={{ maxWidth: 'min(760px, 90%)' }}>
            <h1
              className="font-dm-sans font-bold tracking-[-0.03em] text-[#14358A]"
              style={{
                fontSize: 'clamp(24px, 2.75vw, 39.6px)',
                lineHeight: '105%',
                marginBottom: '20px',
              }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="font-dm-sans font-normal text-[#333333]"
              style={{
                fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                lineHeight: '1.6',
              }}
            >
              Have a question? We are here to help. If you do not see your question answered below, please feel free to contact us.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* FAQ Accordion */}
      <div
        className="w-full px-6"
        style={{ paddingBottom: 'clamp(80px, 8vw, 120px)' }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 'min(900px, 90%)' }}
        >
          <Accordion.Root type="single" collapsible defaultValue="item-0">
            {faqItems.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.05} direction="up">
                <Accordion.Item
                  value={`item-${index}`}
                  style={{
                    borderBottom: '1px solid #E5E7EB',
                  }}
                >
                  <Accordion.Trigger
                    asChild
                  >
                    <button
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        paddingTop: 'clamp(16px, 1.5vw, 24px)',
                        paddingBottom: 'clamp(16px, 1.5vw, 24px)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(15px, 1.375vw, 19.8px)',
                        lineHeight: '120%',
                        color: '#14358A',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#1B45B4')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#14358A')}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={20}
                        style={{
                          flexShrink: 0,
                          transition: 'transform 0.2s ease',
                        }}
                        className="accordion-chevron"
                      />
                    </button>
                  </Accordion.Trigger>

                  <Accordion.Content
                    style={{
                      paddingBottom: 'clamp(16px, 1.5vw, 24px)',
                      overflow: 'hidden',
                    }}
                  >
                    <p
                      className="font-dm-sans font-normal text-[#68718B]"
                      style={{
                        fontSize: 'clamp(13px, 1.11vw, 16px)',
                        lineHeight: '160%',
                      }}
                    >
                      {item.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </FadeInSection>
            ))}
          </Accordion.Root>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        :global([data-state='open'] .accordion-chevron) {
          transform: rotate(180deg);
        }
      `}</style>
    </main>
  );
}
