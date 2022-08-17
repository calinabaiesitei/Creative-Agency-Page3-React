import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import TextContainer from '../components/text-container'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Insert meta title here</title>
        <meta
          name="description"
          content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ..."
        />
        <meta property="og:title" content="Insert meta title here" />
        <meta
          property="og:description"
          content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ..."
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text heading1">
                My name is John and I am a sdf UI/UX Designer
              </h1>
              <iframe
                src="https://open.spotify.com/embed/track/4ZeBVxDZOOcoEELB3YVSjX?utm_source=generator"
                allow="autoplay"
                className="home-iframe"
              ></iframe>
              <span className="home-text001">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </span>
                <br></br>
                <span>
                  {' '}
                  tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </span>
              <button className="home-primary button-primary button-lg button">
                Get in touch with me
              </button>
            </div>
            <div className="home-gallery">
              <div className="home-container01"></div>
              <div className="home-container02"></div>
              <div className="home-container03">
                <div className="home-container04"></div>
              </div>
            </div>
            <div className="home-gallery1">
              <div className="home-container05"></div>
              <div className="home-container06"></div>
              <div className="home-container07"></div>
              <div className="home-container08"></div>
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <div className="home-text-container">
                <span className="home-text005">our services</span>
                <h2 className="heading2">
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative solutions</span>
                </h2>
              </div>
              <div className="home-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="home-cards-container">
              <div className="services-card">
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/playground_assets/website-200h.png"
                    className="home-image"
                  />
                </div>
                <span className="home-text010">Website design</span>
                <span className="home-text011">
                  Create your ubest unique App development, crafted for your
                  business needs.
                </span>
                <span className="home-text012">Learn more</span>
              </div>
              <div className="services-card">
                <div className="home-container10">
                  <img
                    alt="image"
                    src="/playground_assets/file-document-200w.png"
                    className="home-image01"
                  />
                </div>
                <span className="home-text013">Copy-writting</span>
                <span className="home-text014">
                  Create your ubest unique App development, crafted for your
                  business needs.
                </span>
                <span className="home-text015">Learn more</span>
              </div>
              <ServicesCard
                text="Product Design"
                image_src="/playground_assets/dice-5-200h.png"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <TextContainer></TextContainer>
            <div className="home-tab-selector-header">
              <span className="home-text016 tab-selector-btn">Advertising</span>
              <span className="home-text017 tab-selector-btn">
                Social Media
              </span>
              <span className="home-text018 tab-selector-btn">Branding</span>
              <span className="home-text019 tab-selector-btn">UI / UX</span>
              <span className="home-text020 tab-selector-btn">Packaging</span>
              <span className="tab-selector-btn">Product Design</span>
            </div>
            <div className="home-tab-selector-cards-container">
              <div className="home-speaker-card">
                <div className="home-image-container">
                  <img
                    alt="image"
                    src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                    className="home-image02"
                  />
                  <div className="home-see-project-container">
                    <button className="button-secondary-white button button-md">
                      See project
                    </button>
                  </div>
                </div>
                <span className="home-first-name">
                  Office Life Campaign - Boost your creativity
                </span>
              </div>
              <div className="home-speaker-card1">
                <div className="home-image-container1">
                  <img
                    alt="image"
                    src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                    className="home-image03"
                  />
                  <div className="home-see-project-container1">
                    <button className="button-secondary-white button button-md">
                      See project
                    </button>
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1601892782633-675465fa7f3a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHNwYWNlJTIwc2hpcHxlbnwwfHx8fDE2NjAxMTUwODQ&amp;ixlib=rb-1.2.1&amp;h=400"
                      className="home-image04"
                    />
                  </div>
                </div>
                <span className="home-first-name1">
                  A brand-new advertising idea
                </span>
              </div>
              <div className="home-speaker-card2">
                <div className="home-image-container2">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                    className="home-image05"
                  />
                  <div className="home-see-project-container2">
                    <button className="button-secondary-white button button-md">
                      See project
                    </button>
                  </div>
                </div>
                <span className="home-first-name2">
                  Coca-Cola Summer Concept Campaign - 2021
                </span>
              </div>
              <div className="home-speaker-card3">
                <div className="home-image-container3">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                    className="home-image06"
                  />
                  <div className="home-see-project-container3">
                    <button className="button-secondary-white button button-md">
                      See project
                    </button>
                  </div>
                </div>
                <span className="home-first-name3">
                  Ad Campaign - I love you as much as I love Nutella
                </span>
              </div>
              <div className="home-speaker-card4">
                <div className="home-image-container4">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                    className="home-image07"
                  />
                  <div className="home-see-project-container4">
                    <button className="button-secondary-white button button-md">
                      See project
                    </button>
                  </div>
                </div>
                <span className="home-first-name4">
                  Coca-Colla Next Door Campaign - conceptual
                </span>
              </div>
              <div className="home-speaker-card5">
                <div className="home-image-container5">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                    className="home-image08"
                  />
                  <div className="home-see-project-container5">
                    <button className="button-secondary-white button button-md">
                      See project
                    </button>
                  </div>
                </div>
                <span className="home-first-name5">
                  Starbucks secret is a smile when you get your latte
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container1">
              <span className="home-text022">about us</span>
              <h2 className="home-text023 heading2">
                <span>
                  We build brands with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>purpose and impact</span>
              </h2>
              <span className="home-text027">
                We are a full-service digital creative agency with brick and
                mortar offices and plenty of in-house talent.
              </span>
              <div className="home-checklist">
                <div className="home-check-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text028">
                    Quality services and support all time
                  </span>
                </div>
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text029">
                    Long-term strategy development
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text030">
                    FREE Brand Audit for startups
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text031">
                    Over 10 years in the business
                  </span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text032">Future-Proofing Projects</span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text033">
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container6">
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className="home-image09"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width4 max-content-container">
            <span className="home-text034">Our process</span>
            <h2 className="home-text035 heading2">
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className="home-step">
              <div className="home-container11">
                <span className="home-text039">01</span>
                <div className="home-container12">
                  <span className="home-text040">Finding the best idea</span>
                  <span className="home-text041">
                    There are countless businesses already in existence, so it’s
                    very likely that you won’t be the first person to think of
                    an idea or product. There are countless businesses already
                    in existence, so it’s very likely that you won’t be the
                    first person to think of an idea or product.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-text042">02</span>
              <div className="home-container13">
                <span className="home-text043">
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text044">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text045">03</span>
              <div className="home-container14">
                <span className="home-text046">Strong design execution</span>
                <span className="home-text047">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width5 max-content-container">
            <span className="home-text048">from blog</span>
            <h2 className="home-text049 heading2">
              <span>Our latest articles and resources</span>
            </h2>
            <span className="home-text051">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="home-primary1 button-secondary button-lg button">
              Explore the blog
            </button>
            <div className="home-blog-cards-container">
              <div className="home-container15">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2099-300w.png"
                  className="home-image10"
                />
                <div className="home-container16">
                  <button className="home-button08 button-secondary button">
                    Web Design
                  </button>
                  <span className="home-text055">Dec 8, 2022</span>
                </div>
                <span className="home-text056">
                  <span>
                    Excepteur sint occaecat cupidatat non proident, sunt
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>in culpa qui and.</span>
                </span>
                <span className="home-text059">Learn more</span>
              </div>
              <div className="home-container17">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                  className="home-image11"
                />
                <div className="home-container18">
                  <button className="home-button09 button-secondary button">
                    advertising
                  </button>
                  <span className="home-text060">Aug 14, 2022</span>
                </div>
                <span className="home-text061">
                  <span>
                    Excepteur sint occaecat cupidatat non proident, sunt
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>in culpa qui and.</span>
                </span>
                <span className="home-text064">Learn more</span>
              </div>
              <div className="home-container19">
                <img
                  alt="image"
                  src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
                  className="home-image12"
                />
                <div className="home-container20">
                  <button className="home-button10 button-secondary button">
                    Branding
                  </button>
                  <span className="home-text065">Jul 12, 2022</span>
                </div>
                <span className="home-text066">
                  <span>
                    Excepteur sint occaecat cupidatat non proident, sunt
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>in culpa qui and.</span>
                </span>
                <span className="home-text069">Learn more</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width6 max-content-container">
            <span className="home-text070">what are you waiting?</span>
            <h2 className="home-text071 heading2">
              <span>Let’s collaborate!</span>
            </h2>
            <span className="home-text073">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="home-primary2 button-lg button-secondary-white button">
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className="section-container">
        <div className="max-content-container">
          <div className="home-top-part">
            <div className="home-links-container">
              <div className="home-product-container">
                <span className="home-text077">Product</span>
                <span className="home-text078">About</span>
                <span className="home-text079">Portofolio</span>
                <span>Blog</span>
              </div>
              <div className="home-navigate-container">
                <span className="home-text081">Navigate</span>
                <span className="home-text082">Copyrights</span>
                <span className="home-text083">Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className="home-contact-container">
                <span className="home-text085">Contact Us</span>
                <span className="home-text086">
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className="home-subscribe-container">
              <span className="home-text094">Subscribe to our newsletter</span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="home-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width8 max-content-container">
          <img
            alt="image"
            src="/playground_assets/logo1-200h.png"
            className="home-image13"
          />
          <span className="home-text095">
            <span>
              All rights recived @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text097">
              aesthetics
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              | Designed by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text099">teleporhq.io</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
      <svg viewBox="0 0 1024 1024" className="home-icon16">
        <path d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"></path>
      </svg>
    </div>
  )
}

export default Home
