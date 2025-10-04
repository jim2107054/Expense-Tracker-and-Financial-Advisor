import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { statsData, featuresData, howItWorksData, testimonialsData } from "../Data/landing.js";

// Dynamically import HeroSection to prevent SSR issues
const HeroSection = dynamic(() => import("../components/ui/hero.jsx"), {
  ssr: true,
  loading: () => <div className="h-screen bg-white animate-pulse"></div>
});

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Suspense fallback={<div className="h-screen bg-white animate-pulse"></div>}>
        <HeroSection />
      </Suspense>

      {/* Stats Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {statsData.map((stat, index) => (
            <div key={index} style={{ padding: '1rem' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#3b82f6',
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                color: '#6b7280',
                fontSize: '1rem'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Powerful Features
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Everything you need to take control of your finances
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {featuresData.map((feature, index) => (
              <div key={index} style={{
                padding: '2rem',
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#1f2937'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            How It Works
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Get started with our simple 3-step process
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {howItWorksData.map((step, index) => (
              <div key={index} style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #e5e7eb',
                position: 'relative'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {step.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#1f2937'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            What Our Users Say
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Trusted by thousands of users worldwide
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} style={{
                padding: '2rem',
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      marginRight: '1rem'
                    }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: 0
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      margin: 0
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p style={{
                  color: '#374151',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  textAlign: 'left'
                }}>
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: '#1f2937',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Ready to Take Control of Your Finances?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Join thousands of users who have transformed their financial management with our AI-powered platform.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button className="btn-primary" style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              border: 'none'
            }}>
              Get Started Free
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: '1px solid white',
              cursor: 'pointer'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 1rem',
        backgroundColor: '#111827',
        color: '#9ca3af'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>Product</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Features</li>
                <li style={{ marginBottom: '0.5rem' }}>Pricing</li>
                <li style={{ marginBottom: '0.5rem' }}>API</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>Company</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>About</li>
                <li style={{ marginBottom: '0.5rem' }}>Blog</li>
                <li style={{ marginBottom: '0.5rem' }}>Careers</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>Support</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Help Center</li>
                <li style={{ marginBottom: '0.5rem' }}>Contact</li>
                <li style={{ marginBottom: '0.5rem' }}>Status</li>
              </ul>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '2rem',
            textAlign: 'center'
          }}>
            <p>&copy; 2025 Welth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
