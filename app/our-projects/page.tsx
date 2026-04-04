'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useMemo, useState } from 'react';
import FadeInSection from '@/components/FadeInSection';
import { getCollection, FirestoreDoc } from '@/lib/firestore';

interface ProjectDoc extends FirestoreDoc {
  title?: string;
  summary?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  industry?: string;
  published?: boolean;
}

export default function OurProjects() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [projects, setProjects] = useState<ProjectDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filterOptions = [
    'SaaS & Enterprise Technology',
    'Financial Services & Fintech',
    'Higher Education & EdTech',
    'Travel, Tourism & Hospitality',
    'Food, Beverage & Agribusiness',
    'B2B & Professional Services',
    'Public Sector & Government',
    'Equity Solutions',
  ];

  useEffect(() => {
    let active = true;

    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const docs = (await getCollection('projects', 'createdAt', 'desc')) as ProjectDoc[];
        const published = docs.filter((doc) => doc.published === true);
        if (active) {
          setProjects(published.length > 0 ? published : docs);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : 'Failed to load projects');
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    void loadProjects();
    return () => {
      active = false;
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedFilters.length === 0) return projects;
    return projects.filter((project) =>
      selectedFilters.some((filter) => (project.industry || '').toLowerCase() === filter.toLowerCase())
    );
  }, [projects, selectedFilters]);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <Header />

      <FadeInSection delay={0} direction="up" animateOnInitialView>
        <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 pt-[clamp(100px,9.86vw,142px)] pb-12">
          <h1
            className="text-center mb-12"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '46px',
              color: '#14358A',
            }}
          >
            Our Projects
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filterOptions.map((filter) => {
              const isSelected = selectedFilters.includes(filter);
              return (
                <button
                  key={filter}
                  onClick={() => {
                    setSelectedFilters((prev) =>
                      isSelected ? prev.filter((f) => f !== filter) : [...prev, filter]
                    );
                  }}
                  className="px-6 py-2 rounded-full transition-all"
                  style={{
                    background: isSelected ? '#14358A' : '#F0F0F0',
                    color: isSelected ? '#FFFFFF' : '#333333',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="text-center mb-8">
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(15px, 1.39vw, 22px)',
                lineHeight: '100%',
                color: '#000000',
              }}
            >
              Filter by industry
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading projects...</div>
          ) : error ? (
            <div className="text-center py-20 text-red-600">{error}</div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 1.74vw, 28px)',
                  lineHeight: '100%',
                  color: '#000000',
                }}
              >
                No projects match the selected filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg bg-white p-6"
                  style={{ border: '3px solid #14358A' }}
                >
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(20px, 1.8vw, 28px)',
                      color: '#14358A',
                    }}
                  >
                    {String(project.title || 'Untitled Project')}
                  </h3>
                  {project.industry ? (
                    <p className="mb-3 text-sm text-[#68718B]">{String(project.industry)}</p>
                  ) : null}
                  {project.summary ? (
                    <p className="mb-4 text-[#333333]">{String(project.summary)}</p>
                  ) : null}
                  {project.challenge ? (
                    <p className="mb-2 text-sm text-[#333333]">
                      <strong>Challenge:</strong> {String(project.challenge)}
                    </p>
                  ) : null}
                  {project.solution ? (
                    <p className="mb-2 text-sm text-[#333333]">
                      <strong>Solution:</strong> {String(project.solution)}
                    </p>
                  ) : null}
                  {project.results ? (
                    <p className="text-sm text-[#333333]">
                      <strong>Results:</strong> {String(project.results)}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1} direction="up">
        <div className="relative w-full max-w-[min(1440px,_95%)] mx-auto px-4 py-20">
          <h2
            className="text-center mb-8"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.75vw, 39.6px)',
              lineHeight: '105%',
              letterSpacing: '-0.03em',
              color: '#14358A',
            }}
          >
            Global Network and Strategic Engagements
          </h2>

          <p
            className="text-center mb-16 mx-auto"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.53vw, 22px)',
              lineHeight: '140%',
              color: '#333333',
              maxWidth: 'min(1201px, 95%)',
            }}
          >
            Beyond our direct client engagements, PMG is a trusted strategic partner providing essential domain expertise and services across the global professional and startup ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            <div className="bg-white p-8 rounded-lg" style={{ border: '3px solid #14358A' }}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 1.67vw, 28px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#000000',
                }}
              >
                White-Label Consulting Support
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                  lineHeight: '140%',
                  color: '#68718B',
                }}
              >
                We serve as a confidential, white-label partner to two of the "Big 4" global consulting firms, providing critical technical and specialized support on sensitive projects. This allows these organizations to leverage our unique expertise under their own brand to ensure the highest quality outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg" style={{ border: '3px solid #14358A' }}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 1.67vw, 28px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.03em',
                  color: '#000000',
                }}
              >
                Ecosystem and Advisory Partnerships
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 1.22vw, 17.6px)',
                  lineHeight: '140%',
                  color: '#68718B',
                }}
              >
                We are proud ecosystem partners with one of the world's most successful startup accelerators, Y Combinator, focusing our services on supporting their emerging incubator projects rather than working with the accelerator directly.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-12 mt-16 flex-wrap">
            <img src="/image 21.png" alt="Partner Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
            <img src="/image 22.png" alt="Partner Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
