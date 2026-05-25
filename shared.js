
/* ─── SITE URL ─────────────────────────────────────────────────
   Set this to your real domain once deployed.
   e.g. "https://iniobong.page"  or  "https://linibensonjr.github.io"
──────────────────────────────────────────────────────────────── */
const SITE_URL = "https://www.iniobongbenson.com";

/* ─── PERSONAL INFO ─── */
const ME = {
  name:       "Iniobong",
  fullName:   "Iniobong Benson",
  nameItalic: "obong",
  tagline:    "Mapping Africa's story - one dataset at a time.",
  subtitle:   "Geospatial Analyst, MSc · Podcast Host · GEM Erasmus+ Alumni",
  intro:      "I'm Iniobong Benson - a geospatial analyst and earth observation specialist with an MSc from the University of Tartu & ITC, University of Twente. I work at the intersection of remote sensing, hydrological modelling, and spatial data science, with a focus on Africa. I also founded and host <em>Geospatially Africa</em>, a podcast dedicated to geospatial innovation across the continent.",
  location:   "Tartu, Estonia",
  university: "University of Tartu & ITC, University of Twente",
  email:      "iniobong.benson@siu.edu",
  cv_url:     "https://purl.utwente.nl/essays/108070",
  jobTitle:   "Geospatial Analyst & Earth Observation Specialist",
  description:"Geospatial analyst and earth observation specialist with an Erasmus+ MSc, specialising in remote sensing, hydrological modelling, and spatial data science applied to Africa. Founder and host of the Geospatially Africa podcast.",
  sameAs: [
    "https://linkedin.com/in/linibenson",
    "https://github.com/linibensonjr",
    "https://geospatiallyafrica.com",
  ],

  /* ── PROFILE PHOTO ──────────────────────────────────────────
     Paste a direct URL to your photo here.
     Options:
       • Upload photo to your GitHub repo and use the raw URL:
         "https://raw.githubusercontent.com/linibensonjr/linibensonjr.github.io/main/photo.jpg"
       • Use any image hosting (Imgur, Cloudinary, etc.)
       • Leave as "" to show the "IB" initials fallback instead
  ─────────────────────────────────────────────────────────── */
  photo: "https://avatars.githubusercontent.com/u/31708129?v=4",   // ← paste your photo URL here
};

const ABOUT_PHOTOS = [
  { url:"", caption:"At ITC, University of Twente",  size:"wide"  },
  { url:"", caption:"Fieldwork in Nigeria",           size:""      },
  { url:"", caption:"Deltares internship, Delft",     size:""      },
  { url:"", caption:"ISDE21 - Youth Forum",           size:""      },
  { url:"", caption:"Mapping session",                size:""      },
  { url:"", caption:"Tartu, Estonia",                 size:""      },
];

/* ─── SOCIAL LINKS ─── */
const SOCIAL = {
  twitter:     "https://x.com/linibenson",
  linkedin:    "https://linkedin.com/in/linibenson",
  github:      "https://github.com/linibensonjr",
  researchgate:"https://www.researchgate.net/profile/Iniobong-Benson",                                      /* add if you have one */
  orcid:       "https://orcid.org/0009-0002-6652-6147",                                      /* add if you have one */
};

/* ─── PODCAST ─── */
const PODCAST = {
  spotify: "https://open.spotify.com/show/7aqyurtRoF42hTysOqNa9v",
  apple:   "https://podcasts.apple.com/us/podcast/geospatially-africa-podcast-the-podcast-for/id1561204113",
  rss:     "https://anchor.fm/s/4d881ba0/podcast/rss",
  google:  "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80ZDg4MWJhMC9wb2RjYXN0L3Jzcw",
};

/* ─── SKILLS (home strip) ─── */
const SKILLS = [
  { icon:"🛰️", name:"Earth Observation",  tags:["Sentinel-1/2","Landsat","MODIS","GRACE"] },
  { icon:"🗺️", name:"GIS & Modelling",    tags:["QGIS","ArcGIS","Delft3D FM","SNAP"] },
  { icon:"💻", name:"Programming",        tags:["Python","R","GeoPandas","Django"] },
  { icon:"💧", name:"Hydro & Climate",    tags:["Drought Indices","Copula Models","FEWS NET","SAR"] },
];

/* ─── FEATURED PROJECTS (shown on home - max 3) ─── */
/* img: direct URL to a project screenshot/map image, or "" for icon fallback */
const FEATURED_PROJECTS = [
  { icon:"", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4Ezp5JH-P5qokTJJ7P4fW70yif5uCHt2Yg&s", status:"MSc Thesis - 2025",         title:"GHDI: Multi-Variate Drought Index for the Greater Horn of Africa",    desc:"Developed a probabilistic copula-based drought index integrating GRACE TWS, precipitation, evapotranspiration, and soil moisture. Validated against FEWS NET.", tech:["Python","GRACE","Copula","GEE"] },
  { icon:"🌊", img:"", status:"Internship - Deltares 2024", title:"Delft3D FM Ocean Model Validation",                                    desc:"Developed a validation framework for Deltares hydrodynamic ocean models using in situ data, and integrated geospatial workflows into modelling pipelines.", tech:["Python","Delft3D","NetCDF","GeoPandas"] },
  { icon:"🗺️", img:"", status:"BSc Thesis - 2019",          title:"TourUyo: Web-based GIS Tourism System",                               desc:"Designed a web-based tourism information system for Uyo City using QGIS and Leaflet. Live at touruyo.github.io.", tech:["QGIS","Leaflet","JavaScript","HTML"] },
];

/* ─── ALL PROJECTS ─── */
const ALL_PROJECTS = [
  { icon:"💧", img:"", status:"MSc Thesis - 2025",          title:"GHDI: Multi-Variate Drought Index for the Greater Horn of Africa",          desc:"Developed the GHDI - a probabilistic copula-based drought index integrating GRACE TWS, precipitation, evapotranspiration, and soil moisture. Validated using FEWS NET and compared with SPI and ENSO across timescales.", tech:["Python","GRACE","Copula Models","GEE","R"] },
  { icon:"🌊", img:"", status:"Internship - Deltares 2024",  title:"Delft3D FM Ocean Model Validation Framework",                               desc:"Built a validation framework for Delft3D Flexible Mesh ocean models using in situ data. Processed and visualised hydrodynamic datasets, and integrated geospatial workflows into modelling pipelines at Deltares, Delft.", tech:["Python","Delft3D","NetCDF","GeoPandas","xarray"] },
  { icon:"📻", img:"", status:"Active - 2021–Present",        title:"Geospatially Africa Podcast",                                               desc:"Founded and host a podcast platform showcasing African and global geospatial innovations. Built and maintained the website using Django, HTML, CSS, and PostgreSQL.", tech:["Django","PostgreSQL","HTML/CSS","Science Comm"], url:"https://geospatiallyafrica.com" },
  { icon:"🗺️", img:"", status:"BSc Thesis - 2019",           title:"TourUyo: Web-based GIS Tourism System for Uyo City",                        desc:"Designed a web-based tourism information system for Uyo Metropolis using QGIS and Leaflet. Demonstrates spatial data integration for urban tourism planning.", tech:["QGIS","Leaflet","JavaScript","HTML"], url:"https://touruyo.github.io" },
  { icon:"🌍", img:"", status:"Volunteer - GISCorps",          title:"Geohazard Risk Mapping - Lead Flood Analyst",                               desc:"Lead flood analyst for the Geohazard Risk Mapping Initiative. Volunteer GIS analysis for URISA GISCorps and GIS-E across humanitarian and development contexts.", tech:["QGIS","ArcGIS","Flood Mapping","OSM"] },
  { icon:"🔗", img:"", status:"Professional - ipNX 2023",      title:"Enterprise Geospatial Database & Network Routing - ipNX Nigeria",          desc:"Designed and optimised enterprise geospatial databases. Implemented network routing optimisation for fibre optic infrastructure across Nigeria.", tech:["ArcGIS","Python","SQL","Network Analysis"] },
];

/* ─── EPISODES - all 21 from geospatiallyafrica.com (newest first) ─── */
const EPISODES = [
  { num:21, season:3, ep:3, date:"Jul 2025",  tags:["Mapping","Software & Tools"], title:"OpenAerialMap: Building a Global Hub for Free Aerial Imagery",                          desc:"Discover OpenAerialMap (OAM), the 'OpenStreetMap of imagery,' with HOT's Christiana and DK. How OAM empowers drone pilots and satellite providers to share openly licensed imagery for humanitarian mapping.", url:"https://geospatiallyafrica.com/episodes/slug-21" },
  { num:20, season:3, ep:2, date:"Sep 2023",  tags:["GIS","Mapping"],              title:"Accelerating New Space With Affordable Satellite Systems - A Satellogic Story",          desc:"How modern state-of-the-art satellite technology is enabling constant monitoring of anywhere on the planet, and the question of affordability in the new space economy.", url:"https://geospatiallyafrica.com/episodes/slug-20" },
  { num:19, season:3, ep:1, date:"Jan 2023",  tags:["Software & Tools"],           title:"The Intersection of GIS and SQL: How Spatial SQL is Changing the Game",                 desc:"Exploring the capabilities of Spatial SQL with Matt Forrest, and how it unlocks the power of geospatial data across fields and industries.", url:"https://geospatiallyafrica.com/episodes/slug-19" },
  { num:18, season:2, ep:10,date:"Dec 2022",  tags:["GIS"],                        title:"Africa Geospatial Innovation - a spotlight on Locana in Africa",                         desc:"Geospatial innovation in Africa is growing and Locana is learning a lot from this through their work on the continent. With Todd Slind.", url:"https://geospatiallyafrica.com/episodes/slug-18" },
  { num:17, season:2, ep:9, date:"Nov 2022",  tags:["Software & Tools"],           title:"Geospatial Data Version Control with Kart",                                               desc:"Kart provides distributed version control for geospatial and tabular data, storing it in Git at the row and cell level - enabling GIS workflows without plugins.", url:"https://geospatiallyafrica.com/episodes/slug-17" },
  { num:16, season:2, ep:8, date:"Oct 2022",  tags:["GIS","Software & Tools"],     title:"Getting Started with Africa Geoportal",                                                   desc:"How young African geospatial professionals can access ESRI tools, ArcGIS Online, Story Map, Digital Earth Africa datasets and more - completely free.", url:"https://geospatiallyafrica.com/episodes/slug-16" },
  { num:15, season:2, ep:7, date:"Sep 2022",  tags:["Others"],                     title:"Volunteering to Build Your Profile",                                                       desc:"Building your portfolio as a geospatial professional through volunteering - improving skills, gaining experience, and building a meaningful career foundation.", url:"https://geospatiallyafrica.com/episodes/slug-15" },
  { num:14, season:2, ep:6, date:"Aug 2022",  tags:["Software & Tools"],           title:"Spatialnode - A Portfolio Platform for Geospatial People",                                desc:"Conversation with Emmanuel Jolaiya, founder of Spatial Node, on building a portfolio platform purpose-built for the geospatial community.", url:"https://geospatiallyafrica.com/episodes/slug-14" },
  { num:13, season:2, ep:5, date:"Jul 2022",  tags:["Software & Tools"],           title:"Getting Started with OSGeoLive",                                                          desc:"OSGeoLive is a self-contained bootable environment that lets you try a wide variety of open source geospatial software without installing anything.", url:"https://geospatiallyafrica.com/episodes/slug-13" },
  { num:12, season:2, ep:4, date:"Jun 2022",  tags:["GIS"],                        title:"GIS in Business - AddisMap",                                                              desc:"How Alazar Tekle and the AddisMap team used open source geospatial data to build an interactive city guide of Addis Ababa, Ethiopia.", url:"https://geospatiallyafrica.com/episodes/slug-12" },
  { num:11, season:2, ep:3, date:"May 2022",  tags:["Mapping"],                    title:"Using Drones in Remote Sensing",                                                           desc:"The role of drones in remote sensing - from small to large scale mapping projects, monitoring, and disaster response.", url:"https://geospatiallyafrica.com/episodes/slug-11" },
  { num:10, season:2, ep:2, date:"Apr 2022",  tags:["GIS"],                        title:"GIS for Energy Needs Assessment",                                                          desc:"The role of GIS in the energy sector - from needs assessment to supply planning and distribution.", url:"https://geospatiallyafrica.com/episodes/slug-10" },
  { num:9,  season:2, ep:1, date:"Jan 2022",  tags:["Others"],                     title:"The Future is Geospatial",                                                                 desc:"A discussion of geospatial trends to look forward to in 2022 - the first episode of Season 2.", url:"https://geospatiallyafrica.com/episodes/slug-9" },
  { num:8,  season:1, ep:8, date:"Dec 2021",  tags:["Others"],                     title:"2021 in Reviews and Awards in the Geosphere",                                             desc:"Highlights of the podcast's first year: geospatial engineering, mentoring, State of the Map Africa, and recognition awards in the geosphere.", url:"https://geospatiallyafrica.com/episodes/slug-8" },
  { num:7,  season:1, ep:7, date:"Nov 2021",  tags:["Others"],                     title:"Being a Geospatial Engineer",                                                              desc:"Laura Mugeha on what it takes to be a geospatial engineer, her journey, and advice for those looking to start out in the field.", url:"https://geospatiallyafrica.com/episodes/slug-7" },
  { num:6,  season:1, ep:6, date:"Oct 2021",  tags:["Mapping","Humanitarian"],     title:"Digital Mapping in the Humanitarian Context with Janet Chapman (Crowd2Map)",             desc:"Crowd2Map Tanzania - an entirely volunteer crowdsourced mapping project that has been mapping rural Tanzania on OpenStreetMap since 2015.", url:"https://geospatiallyafrica.com/episodes/slug-6" },
  { num:5,  season:1, ep:5, date:"Sep 2021",  tags:["Others"],                     title:"Mentoring and Volunteering in the Geospatial Industry",                                   desc:"Why everyone needs a mentor, whether just starting out or already an expert - exploring mentorship and volunteering in geospatial.", url:"https://geospatiallyafrica.com/episodes/slug-5" },
  { num:4,  season:1, ep:4, date:"Aug 2021",  tags:["Others"],                     title:"Introductions, Our Why and Some News",                                                    desc:"The founding episode of Geospatially Africa - answering the Why behind the podcast and introducing the hosts.", url:"https://geospatiallyafrica.com/episodes/slug-4" },
  { num:3,  season:1, ep:3, date:"Jul 2021",  tags:["Mapping"],                    title:"State of the Map Africa - Bringing OSM Communities in Africa Together",                  desc:"The State of the Map Africa conference celebrates the culture of open mapping, open data, GIS and its impact across Africa.", url:"https://geospatiallyafrica.com/episodes/slug-3" },
  { num:2,  season:1, ep:2, date:"Jun 2021",  tags:["GIS","Mapping"],              title:"Introducing the Digital Earth Africa Platform",                                            desc:"Digital Earth Africa provides analysis-ready satellite data to address sustainable development challenges across all 54 countries in Africa.", url:"https://geospatiallyafrica.com/episodes/slug-2" },
  { num:1,  season:1, ep:1, date:"May 2021",  tags:["Mapping","Humanitarian"],     title:"Using Geospatial Technology in Geohazard Mapping Saves Lives",                          desc:"How geospatial technology is applied in mapping, visualising, and identifying geohazards - contributing to early warning systems and risk management.", url:"https://geospatiallyafrica.com/episodes/slug" },
];

/* ─── BLOG POSTS ─── */
const POSTS = [
  {
    slug:"to-kart-or-not-to-kart-that-is-the-question",
    date:"Oct 2025", dateSort:"2025-10-01",
    tags:["GIS","Python", "QGIS", "Software & Tools"],
    title:"To Kart or not to Kart? — That is the Question",
    excerpt:"Kart is an open-source software project for data version control for geospatial data. The purpose of Kart is to make it easy to store your spatial data so that you can make changes to it, see those changes and push and pull those changes to other people so they can have it on their data as well.",
    readTime:7,
    content:`
      <p>Let's say you made some changes to your geospatial data and wish you could go back and fix it or revert the changes to a specific time. Perhaps you want a smooth way to collaborate effortlessly with colleagues on maps and spatial data. While "version control" is an exciting possibility for developers, these are challenges faced by geospatial data analysts and users. But what if there is a free solution waiting to be discovered? I may have found the solution!</p>
      <p>While working on some web development projects and becoming accustomed to using Git version control and GitHub, I started thinking about how I could apply the same version control principles to geospatial data. Is there a tool that would allow me to track changes and revert to previous versions of my geospatial data? This was the question that lingered in my mind. This led me to search for a version management system specifically designed for geospatial data.</p>
      <h2>What is Kart?</h2>
      
      <blockquote>Kart is an open-source software project for data version control for geospatial data. The purpose of Kart is to make it easy to store your spatial data so that you can make changes to it, see those changes and push and pull those changes to other people so they can have it on their data as well. - Hamish.</blockquote>
      Kart is an open-source software project for data version control for geospatial data, and the purpose of Kart was to make it easy to store spatial data in a way that you can make changes to it, see those changes and push and pull those changes to other people so they can have it on their data as well.
      <p>Some of the benefits of Kart</p>
      <ul>
        <li>See exactly what edits were made and when. version control,</li>
        <li>Quickly revert to a previous version of your data.</li>
        <li>Allows branching and merging of data versions.</li>
        <li>Collaboration with colleagues and seamlessly push and pull changes.</li>
        <li>Open-source software, which means it allows for extensibility and future development.</li>
        <li>Interoperable with other GIS software and data formats for seamless data exchange.</li>
      </ul>
    `
  },
  {
    slug:"grace-tws-drought-monitoring-horn-of-africa",
    date:"Feb 2025", dateSort:"2025-02-01",
    tags:["Drought","Remote Sensing","Research"],
    title:"What GRACE Gravity Data Can Tell Us About Drought in the Horn of Africa",
    excerpt:"How measuring tiny changes in Earth's gravitational field from space gives us one of the best tools for monitoring terrestrial water storage - and drought - at continental scale.",
    readTime:9,
    content:`
      <p>The Horn of Africa is no stranger to drought. The region experiences some of the most severe and recurrent drought cycles on the planet, affecting food security and livelihoods for hundreds of millions of people. Yet monitoring drought here is genuinely difficult - ground-based hydrological station networks are sparse, and satellite optical imagery tells you about the land surface but not what's happening underground.</p>
      <h2>Enter GRACE - Gravity Recovery and Climate Experiment</h2>
      <p>GRACE and its successor GRACE-FO are perhaps the most underappreciated satellite missions in earth observation. Instead of imaging the land surface, they measure tiny changes in Earth's gravitational field caused by shifting masses of water. When groundwater is depleted, when soil moisture drops, when lakes shrink - the mass of water in that region decreases, and GRACE detects it.</p>
      <blockquote>GRACE is essentially a scale for the planet. It weighs water - and it tells us when water is disappearing.</blockquote>
      <h2>Building the GHDI - A Multi-Variate Drought Index</h2>
      <p>For my MSc thesis, I developed the GHDI (Greater Horn Drought Index) - a probabilistic drought index that integrates GRACE Terrestrial Water Storage (TWS) anomalies with precipitation, evapotranspiration, and soil moisture data. The core challenge with existing indices like SPI is that they're univariate - they measure one variable at a time. Real drought is multivariate: groundwater, soil moisture, and atmospheric demand all contribute simultaneously.</p>
      <div class="callout"><strong>Copula modelling</strong> allows you to model the joint probability distribution of multiple correlated variables - capturing the combined drought signal that no single variable can represent alone. This is the mathematical foundation of the GHDI.</div>
      <h2>Validation Against FEWS NET</h2>
      <p>The GHDI was validated against FEWS NET (Famine Early Warning Systems Network) drought classifications - the gold standard for humanitarian drought assessment in the region. The index showed strong correspondence with documented drought events, including the 2010–2011 and 2016–2017 droughts, which were among the most severe in recorded history for the Horn.</p>
      <ul>
        <li>GHDI captured drought onset 1–3 months earlier than SPI in several test periods</li>
        <li>Stronger correlation with FEWS NET IPC classifications than individual satellite variables</li>
        <li>ENSO signal clearly captured - La Niña-driven droughts clearly identifiable in the index time series</li>
      </ul>
      <h2>Why This Matters</h2>
      <p>Earlier drought detection means earlier humanitarian response - and in contexts where food insecurity escalates rapidly, weeks matter. Probabilistic indices also give decision-makers uncertainty estimates, not just point predictions. The GHDI is a step toward more operationally useful drought monitoring for one of the world's most climate-vulnerable regions.</p>
    `
  },
  {
    slug:"validating-ocean-models-deltares",
    date:"Oct 2024", dateSort:"2024-10-01",
    tags:["Hydrodynamics","Python","Earth Observation"],
    title:"Validating Ocean Models with In Situ Data: Lessons from My Deltares Internship",
    excerpt:"How you actually check whether a state-of-the-art hydrodynamic model is telling the truth - and what I learned building a validation framework at Deltares.",
    readTime:7,
    content:`
      <p>Hydrodynamic models are everywhere in climate science, coastal engineering, and flood risk assessment. But how do you know if a model is actually right? That's the question I spent my internship at Deltares working on - building a systematic validation framework for Delft3D Flexible Mesh (FM) ocean models.</p>
      <h2>What Deltares Does</h2>
      <p>Deltares is a Dutch applied research institute specialising in water, subsurface, and infrastructure. Their Delft3D suite is one of the most widely used hydrodynamic modelling frameworks in the world - used for everything from flood forecasting to offshore engineering design. The FM variant handles flexible, unstructured grids that can represent complex coastal geometries much better than older rectangular grid models.</p>
      <h2>The Validation Problem</h2>
      <p>A model validation framework needs to answer a deceptively simple question: how well does the model reproduce reality? In practice, this requires collecting in situ observations (tide gauge data, current meter records, CTD casts), defining appropriate skill metrics, aligning temporal and spatial scales between model output and observations, and automating the whole process so it can run across multiple model runs and time periods.</p>
      <blockquote>The hardest part of model validation isn't the statistics - it's the data engineering. Getting observations and model output to speak the same language is where most of the work lives.</blockquote>
      <h2>Technical Stack</h2>
      <p>The entire framework was built in Python - primarily xarray for handling NetCDF model output, pandas for observation time series, and matplotlib/cartopy for spatial visualisation. The most challenging part was handling the spatial interpolation needed to compare model output at grid cell centres with point observations from buoys and tide gauges.</p>
      <ul>
        <li>xarray + scipy.interpolate for spatial matching between model grids and in situ locations</li>
        <li>Taylor diagrams for visualising model skill across multiple stations simultaneously</li>
        <li>Automated HTML report generation for routine model runs</li>
      </ul>
      <h2>What I Took Away</h2>
      <p>Beyond the technical skills, the internship showed me how scientific software is developed in a large applied research organisation - the importance of reproducibility, documentation, and building tools that other scientists can actually use without reading 200 lines of your undocumented code first.</p>
    `
  },
  {
    slug:"geospatially-africa-podcast-story",
    date:"May 2024", dateSort:"2024-05-01",
    tags:["Podcast","Africa","Community"],
    title:"Three Years of Geospatially Africa - What Starting a Podcast Taught Me About the GIS Community",
    excerpt:"In 2021 I started a podcast to spotlight geospatial innovation in Africa. Here's what I've learned about community, consistency, and the state of the discipline on the continent.",
    readTime:6,
    content:`
      <p>In May 2021 I launched the first episode of Geospatially Africa from Nigeria with very little idea what I was doing. Three years and 21 episodes later, the podcast has grown into something I'm genuinely proud of - a platform that has hosted conversations with researchers, engineers, and practitioners from across Africa and the world.</p>
      <h2>Why I Started It</h2>
      <p>The immediate motivation was simple: I was consuming a lot of geospatial content - podcasts, YouTube channels, conferences - and very little of it reflected the African context I was working in. The tools being discussed were often inaccessible or irrelevant to practitioners in Lagos or Nairobi. The case studies were almost never African. I wanted to change that ratio, even by a small amount.</p>
      <blockquote>There is an enormous amount of excellent geospatial work happening in Africa. It just wasn't being amplified the way comparable work in Europe or North America was.</blockquote>
      <h2>What 21 Episodes Taught Me</h2>
      <p>Consistency is the hardest part of any independent media project. Life - an MSc, internships, moving countries - competes with a production schedule. The episodes I'm most proud of are the ones that required the most preparation: the Spatial SQL conversation with Matt Forrest, the OpenAerialMap episode with HOT, the Digital Earth Africa platform introduction.</p>
      <ul>
        <li>The GIS community in Africa is deeply connected internationally - guests consistently led to other guests across the continent</li>
        <li>Technical topics attract a smaller but more engaged audience than career and community episodes</li>
        <li>Building a Django-backed website for the podcast was a project in itself - and taught me more about web development than any course did</li>
      </ul>
      <h2>What's Next</h2>
      <p>Season 4 is in planning. I want to do more deep-dive technical episodes - bringing in researchers working on specific datasets, methods, and tools - alongside the broader community conversations. If you're doing interesting geospatial work in or about Africa, I'd love to hear from you.</p>
    `
  },
  {
    slug:"dggs-and-the-future-of-spatial-data",
    date:"Jan 2024", dateSort:"2024-01-01",
    tags:["GIS","Data Science","Software & Tools"],
    title:"What is DGGS and Why Should Geospatial Analysts Care?",
    excerpt:"Discrete Global Grid Systems are quietly reshaping how geospatial data is indexed, stored, and queried at global scale. Here's what they are and why they matter.",
    readTime:8,
    content:`
      <p>If you've spent time in the geospatial world, you're used to data organised around rectangular grids, vector polygons, or point clouds. DGGS - Discrete Global Grid Systems - offer something fundamentally different: a globally consistent, hierarchical spatial index that covers the entire Earth without the distortions and edge effects that plague traditional projections and grids.</p>
      <h2>The Problem DGGS Solves</h2>
      <p>Traditional spatial data architectures were designed for regional or national scale. When you try to work at global scale - integrating data from multiple satellite sensors, multiple projections, multiple resolutions - the seams show. Tiles don't align, projections distort, queries become expensive. DGGS was designed for a world where global-scale spatial analysis is routine.</p>
      <h2>How It Works</h2>
      <p>A DGGS divides the Earth's surface into a hierarchy of discrete cells - typically hexagons or triangles - that tessellate without gaps or overlaps at each resolution level. Each cell has a unique identifier, and cells at different resolutions nest consistently. This makes multi-resolution analysis, data aggregation, and spatial joins fundamentally simpler operations than in traditional grid or vector systems.</p>
      <blockquote>Think of DGGS like a postal code system for the entire planet - but hierarchical, globally consistent, and designed for computation rather than human readability.</blockquote>
      <h2>Real-World Applications</h2>
      <ul>
        <li>H3 (Uber's hexagonal DGGS) is now widely used for mobility analytics, logistics, and urban data aggregation</li>
        <li>ISEA3H and rHEALPix are used in global environmental monitoring and satellite data integration</li>
        <li>Digital Earth Australia and Digital Earth Africa use DGGS concepts to provide consistent analysis-ready data</li>
      </ul>
      <h2>Getting Started</h2>
      <p>The easiest entry point is H3-pandas - a Python library that bridges the H3 DGGS with the pandas/GeoPandas ecosystem. For global remote sensing applications, the OGC DGGS standard and associated open implementations are the more rigorous starting point. At Geolynx, I work directly on DGGS platform advocacy - helping developers and analysts understand and adopt these standards.</p>
    `
  },
];

/* ─── PUBLICATIONS ─── */
const PUBLICATIONS = [
  {
    year:2025, type:"MSc Thesis",
    title:"A Novel Multi-Variate Drought Index Based on GRACE TWS, Precipitation, Evapotranspiration, and Soil Moisture for Drought Monitoring in the Greater Horn of Africa",
    authors:"<strong>Iniobong Benson</strong>",
    venue:"University of Twente / ITC - GEM Erasmus+ MSc Thesis, 2025",
    links:[{label:"Full Thesis",url:"https://purl.utwente.nl/essays/108070"}]
  },
  {
    year:2021, type:"Preprint",
    title:"Flood Susceptibility Mapping of Internally Displaced Person Camps in Maiduguri, Borno State, Nigeria",
    authors:"Ogunwumi, T., Njoku, C., Uzoezie, A., & <strong>Benson, I.</strong>",
    venue:"Research Square - Preprint, 2021",
    links:[{label:"DOI",url:"https://doi.org/10.21203/rs.3.rs-1721944/v1"}]
  },
];

/* ─── EDUCATION ─── */
const EDUCATION = [
  {
    period:"2023 – 2025", short:"MSc",
    role:"MSc in Geo-information Science and Earth Observation for Environmental Modelling and Management (GEM Erasmus+)",
    place:"University of Tartu, Estonia & ITC, University of Twente, The Netherlands",
    bullets:[
      "Erasmus+ Scholarship recipient",
      "Thesis: A Novel Multi-Variate Drought Index Based on GRACE TWS, Precipitation, Evapotranspiration, and Soil Moisture for Drought Monitoring in the Greater Horn of Africa",
      "Developed the GHDI - a probabilistic copula-based drought index; validated using FEWS NET and compared with SPI and ENSO across timescales",
      '<a href="https://purl.utwente.nl/essays/108070" target="_blank" style="color:var(--accent)">Read thesis →</a>',
    ]
  },
  {
    period:"2022 – 2023", short:"Dip.",
    role:"Diploma in Backend Engineering",
    place:"Altschool Africa, Nigeria",
    bullets:["Diploma in Backend Engineering (2023)"]
  },
  {
    period:"2022", short:"Dip.",
    role:"Fullstack Developer Nanodegree",
    place:"Udacity, USA",
    bullets:["Udacity Fullstack Developer Nanodegree Scholarship (2022)"]
  },
  {
    period:"2014 – 2019", short:"BSc",
    role:"BSc in Geoinformatics and Surveying",
    place:"University of Uyo, Nigeria",
    bullets:[
      "Thesis: A Web-based Tourism Information System Using GIS for Uyo Metropolis",
      '<a href="https://touruyo.github.io" target="_blank" style="color:var(--accent)">View project →</a>',
    ]
  },
];

/* ─── EXPERIENCE ─── */
const EXPERIENCE = [
  {
    period:"Sep 2025 – Present", short:"Advocate",
    role:"DGGS & Geospatial Data Platform Advocate",
    place:"Geolynx OÜ · Tartu, Estonia",
    bullets:[
      "Develop technical resources including Python notebooks, QGIS tutorials, and API documentation to support developers and GIS analysts",
      "Produce promotional content (blogs, social media) to highlight platform features, datasets, and partnerships",
    ]
  },
  {
    period:"Jun 2024 – Aug 2024", short:"Intern",
    role:"Geospatial Data Science Intern",
    place:"Deltares · Delft, The Netherlands",
    bullets:[
      "Developed a validation framework for Delft3D Flexible Mesh (FM) ocean models using in situ data",
      "Processed, analysed, and visualised hydrodynamic datasets",
      "Integrated geospatial workflows into hydrodynamic modelling pipelines",
    ]
  },
  {
    period:"Mar 2023 – Jul 2023", short:"GIS Spec.",
    role:"GIS Specialist",
    place:"ipNX Nigeria Ltd · Nigeria",
    bullets:[
      "Designed and optimised enterprise geospatial databases",
      "Implemented network routing optimisation for fibre optic systems",
      "Conducted advanced spatial analyses for infrastructure planning",
    ]
  },
  {
    period:"Nov 2021 – Feb 2023", short:"Lead GIS",
    role:"Lead GIS Analyst",
    place:"Kyle Christian Nigeria Ltd · Nigeria",
    bullets:[
      "Automated workflows with Python, significantly reducing processing time",
      "Built and deployed ArcGIS Field Apps for property data digitisation",
      "Processed LiDAR data to generate elevation and topographic outputs",
    ]
  },
  {
    period:"Jun 2020 – Oct 2020", short:"GIS Tech.",
    role:"GIS Technician",
    place:"Global Education Infrastructure Service LLC",
    bullets:[
      "Integrated field-collected data for unified geospatial databases",
      "Produced demographic and allocation maps for 50+ communities",
    ]
  },
];

/* ─── CV SKILLS ─── */
const CV_SKILLS = [
  { label:"GIS & Earth Observation",    chips:["QGIS","ArcGIS","Google Earth Engine","SNAP","GDAL / OGR","Delft3D FM"] },
  { label:"Programming & Data Science", chips:["Python","R","GeoPandas","Rasterio","xarray","Django","PostgreSQL"] },
  { label:"Satellite & Sensor Data",    chips:["Sentinel-1 SAR","Sentinel-2","Landsat 8/9","MODIS","GRACE TWS","SRTM DEM"] },
  { label:"Hydrology & Climate",        chips:["Copula Modelling","Drought Indices","FEWS NET","SPI","Hydrodynamic Modelling"] },
];



/* ── SVG ICONS ── */
const ICONS = {
  twitter:  `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.854L1.757 2.25H8.21l4.262 5.634 5.772-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github:   `<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  email:    `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  researchgate:`<svg viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.108 12.108 0 0 0-.198.809l-.013.055c-.361 1.521-.71 3.001-2.085 4.079C12.947 8.47 11.5 9.19 10.5 9.5c-.346.108-.645.22-.893.34-.246.118-.51.27-.77.459-.544.382-1.037.932-1.388 1.642-.35.71-.533 1.541-.533 2.477 0 1.2.3 2.295.88 3.11.58.82 1.404 1.365 2.445 1.365 1.035 0 1.91-.434 2.457-1.14.547-.707.75-1.604.75-2.502v-.27a3.45 3.45 0 0 1-.694.084 4.48 4.48 0 0 1-.587-.038v.224c0 .646-.126 1.273-.407 1.698-.28.425-.66.655-1.119.655-.505 0-.888-.29-1.177-.776-.29-.486-.44-1.133-.44-1.88 0-.73.14-1.36.4-1.857.26-.498.622-.843 1.117-.843.327 0 .614.102.86.28.246.178.466.427.654.737l.553-.435c-.252-.386-.572-.7-.953-.936a2.475 2.475 0 0 0-1.314-.358c-.762 0-1.425.333-1.957.917-.53.584-.879 1.37-1.015 2.262a7.093 7.093 0 0 0-.06.941c0 .913.176 1.74.524 2.386.348.646.884 1.077 1.608 1.077.8 0 1.395-.43 1.785-1.067.39-.636.567-1.467.567-2.31v-.093c.18.022.363.033.55.033.384 0 .764-.05 1.136-.148l-.012.1c-.057.543-.154 1.067-.36 1.51-.33.7-.869 1.165-1.783 1.165-1.012 0-1.748-.534-2.243-1.351-.494-.817-.7-1.91-.7-3.069 0-.881.175-1.7.516-2.397.34-.697.825-1.246 1.405-1.607.29-.181.564-.307.842-.408.98-.348 2.24-.98 3.474-2.007 1.574-1.295 1.987-3.073 2.365-4.67l.013-.055c.04-.162.084-.333.133-.499.19-.626.473-1.054.857-1.312.384-.257.88-.385 1.505-.385.454 0 .898.094 1.32.265v-.765A4.87 4.87 0 0 0 19.586 0z"/></svg>`,
  orcid:    `<svg viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.972-2.484 3.972-3.722 0-2.016-1.284-3.722-3.972-3.722h-2.297z"/></svg>`,
};

/* ── ACTIVE NAV HIGHLIGHT ──
   Each page sets window.CURRENT_PAGE before loading shared.js
──────────────────────────────────────────────────────────── */
function highlightNav(){
  const page = window.CURRENT_PAGE || 'home';
  document.querySelectorAll('[data-page]').forEach(el=>{
    el.classList.toggle('active', el.dataset.page === page);
  });
}

/* ── SOCIAL ICONS HELPER ── */
function socialIconsHTML(cls, social){
  let h = '';
  if(social.twitter)     h += `<a href="${social.twitter}"     class="${cls}" title="Twitter / X" target="_blank" rel="noopener">${ICONS.twitter}</a>`;
  if(social.linkedin)    h += `<a href="${social.linkedin}"    class="${cls}" title="LinkedIn"      target="_blank" rel="noopener">${ICONS.linkedin}</a>`;
  if(social.github)      h += `<a href="${social.github}"      class="${cls}" title="GitHub"        target="_blank" rel="noopener">${ICONS.github}</a>`;
  if(social.researchgate)h += `<a href="${social.researchgate}"class="${cls}" title="ResearchGate"  target="_blank" rel="noopener">${ICONS.researchgate}</a>`;
  if(social.orcid)       h += `<a href="${social.orcid}"       class="${cls}" title="ORCID"         target="_blank" rel="noopener">${ICONS.orcid}</a>`;
  h += `<a href="mailto:${ME.email}" class="${cls}" title="Email">${ICONS.email}</a>`;
  return h;
}

/* ── TAG PILLS ── */
function tagsHTML(tags){ return tags.map(t=>`<span class="tag">${t}</span>`).join(''); }

/* ── PROJECT CARD ── */
function projCardHTML(p, large=''){
  const imgHTML = p.img
    ? `<img src="${p.img}" alt="${p.title}" loading="lazy">`
    : '';
  return `<div class="pcard ${large}" onclick="${p.url?`window.open('${p.url}','_blank')`:''}">
    <div class="pcard__top"><div class="pcard__geo"></div>${imgHTML}<span class="pcard__icon">${p.icon}</span></div>
    <div class="pcard__body">
      <div class="pcard__status">● ${p.status}</div>
      <div class="pcard__title">${p.title}</div>
      <div class="pcard__desc">${p.desc}</div>
      <div class="pcard__tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
    </div>
  </div>`;
}

/* ── EPISODE ROW (home pod strip) ── */
function epRowHTML(e){
  return `<div class="ep-row" onclick="window.open('${e.url||'#'}','_blank')">
    <div class="ep-row__num">EP ${String(e.num).padStart(2,'0')}</div>
    <div><div class="ep-row__date">${e.date}</div><div class="ep-row__title">${e.title}</div><div class="ep-row__desc">${e.desc}</div></div>
    <div class="ep-play">▶</div>
  </div>`;
}

/* ── BLOG CARD (home) ── */
function blogCardHTML(p){
  return `<div class="bcard"><div class="bcard__inner" onclick="window.location='blog.html#${p.slug}'" style="cursor:pointer">
    <div class="bcard__date"><strong>${p.date.split(' ')[0]}</strong>${p.date.split(' ')[1]}</div>
    <div><div class="bcard__tags">${tagsHTML(p.tags)}</div>
    <div class="bcard__title">${p.title}</div>
    <div class="bcard__exc">${p.excerpt}</div>
    <div class="bcard__meta"><span class="bcard__rt">${p.readTime} min read</span><span class="bcard__rd">Read →</span></div></div>
  </div></div>`;
}

/* ── RENDER HOME ── */
function renderHome(){
  const heroTag  = document.getElementById('hero-tag');
  const heroName = document.getElementById('hero-name');
  if(heroTag) heroTag.textContent = ME.subtitle;
  if(heroName){
    const prefix = ME.name.replace(ME.nameItalic,'');
    heroName.innerHTML = prefix + `<em>${ME.nameItalic}</em>`;
  }
  document.getElementById('hero-sub').textContent  = ME.tagline;
  document.getElementById('hero-desc').innerHTML   = ME.intro;

  // Skills
  document.getElementById('skills-grid').innerHTML = SKILLS.map(s=>`
    <div class="skill-block">
      <div class="skill-block__icon">${s.icon}</div>
      <div class="skill-block__name">${s.name}</div>
      <div class="skill-block__tags">${s.tags.map(t=>`<span class="skill-block__tag">${t}</span>`).join('')}</div>
    </div>`).join('');

  // Featured projects
  document.getElementById('home-projects').innerHTML = FEATURED_PROJECTS.map(p=>projCardHTML(p)).join('');

  // Latest 3 episodes
  document.getElementById('home-episodes').innerHTML = EPISODES.slice(0,3).map(e=>epRowHTML(e)).join('');

  // Latest 3 blog posts
  const sorted = [...POSTS].sort((a,b)=>b.dateSort.localeCompare(a.dateSort));
  document.getElementById('home-blog').innerHTML = sorted.slice(0,3).map(p=>blogCardHTML(p)).join('');
}

/* ── RENDER ABOUT ── */
function renderAbout(){
  document.getElementById('sb-name').textContent = ME.fullName;

  // Profile photo - real image if set, initials fallback otherwise
  const avatarEl = document.querySelector('.avatar');
  if(ME.photo){
    avatarEl.innerHTML = `<img src="${ME.photo}" alt="${ME.fullName}">`;
  } else {
    avatarEl.innerHTML = `<div class="avatar__init">IB</div>`;
  }

  document.getElementById('sb-info').innerHTML = `
    <div class="sb__info-item"><span class="sb__info-icon">📍</span><span>Worldwide; Tartu, Estonia</span></div>
    <div class="sb__info-item"><span class="sb__info-icon">🎓</span><span>MSc - University of Tartu & ITC Twente (GEM Erasmus+)</span></div>
    <div class="sb__info-item"><span class="sb__info-icon">💼</span><span>Geospatial Advocate - Remote</span></div>
    <div class="sb__info-item"><span class="sb__info-icon">🎙️</span><span>Founder & Host - Geospatially Africa</span></div>
    <div class="sb__info-item"><span class="sb__info-icon">✉️</span><span>${ME.email}</span></div>`;
  document.getElementById('sb-socials').innerHTML = socialIconsHTML('sicon-lg', SOCIAL);
  document.getElementById('cv-link').href = ME.cv_url;

  document.getElementById('cv-education').innerHTML = EDUCATION.map(e=>`
    <div class="cv-entry">
      <div class="cv-entry__period"><span class="cv-entry__year">${e.period}</span>${e.short}</div>
      <div><div class="cv-entry__role">${e.role}</div><div class="cv-entry__place">${e.place}</div>
      <ul class="cv-entry__bullets">${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div>
    </div>`).join('');

  document.getElementById('cv-experience').innerHTML = EXPERIENCE.map(e=>`
    <div class="cv-entry">
      <div class="cv-entry__period"><span class="cv-entry__year">${e.period}</span>${e.short}</div>
      <div><div class="cv-entry__role">${e.role}</div><div class="cv-entry__place">${e.place}</div>
      <ul class="cv-entry__bullets">${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div>
    </div>`).join('');

  document.getElementById('cv-skills').innerHTML = CV_SKILLS.map(s=>`
    <div class="skills-block">
      <div class="skills-block__label">${s.label}</div>
      <div class="chips">${s.chips.map(c=>`<span class="chip">${c}</span>`).join('')}</div>
    </div>`).join('');

  // Photo grid
  const gridEl = document.getElementById('about-photo-grid');
  if(gridEl){
    gridEl.innerHTML = ABOUT_PHOTOS.map(p=>{
      const sizeClass = p.size ? `photo-grid__item--${p.size}` : '';
      if(p.url){
        return `<div class="photo-grid__item ${sizeClass}">
          <img src="${p.url}" alt="${p.caption||''}" loading="lazy">
          ${p.caption ? `<div class="photo-grid__item__cap">${p.caption}</div>` : ''}
        </div>`;
      } else {
        return `<div class="photo-grid__item ${sizeClass}">
          <div class="photo-grid__item__ph">
            <span>📷</span>
            <p>${p.caption||'Add photo'}</p>
          </div>
        </div>`;
      }
    }).join('');
  }
}

/* ── RENDER BLOG LIST ── */
let activeBlogTag = 'all';
function renderBlogList(){
  const allTags = ['all',...new Set(POSTS.flatMap(p=>p.tags))];
  document.getElementById('blog-filters').innerHTML = allTags.map(t=>
    `<button class="fbtn ${t===activeBlogTag?'active':''}" onclick="setBlogTag('${t}')">${t==='all'?'All':t}</button>`
  ).join('');

  const sorted = [...POSTS].sort((a,b)=>b.dateSort.localeCompare(a.dateSort));
  const filtered = activeBlogTag==='all' ? sorted : sorted.filter(p=>p.tags.includes(activeBlogTag));
  document.getElementById('blog-full-list').innerHTML = filtered.map(p=>`
    <div class="bitem" data-slug="${p.slug}" style="cursor:pointer">
      <div class="bitem__date"><strong>${p.date.split(' ')[0]}</strong>${p.date.split(' ')[1]}</div>
      <div>
        <div class="bitem__tags">${tagsHTML(p.tags)}</div>
        <div class="bitem__title">${p.title}</div>
        <div class="bitem__exc">${p.excerpt}</div>
        <div class="bitem__meta"><span>${p.readTime} min read</span><span class="bitem__rd">Read →</span></div>
      </div>
    </div>`).join('');
}
function setBlogTag(tag){ activeBlogTag=tag; renderBlogList(); }

/* ── RENDER POST ── */
function renderPost(slug){
  const post = POSTS.find(p=>p.slug===slug);
  if(!post) return;
  document.getElementById('post-tags').innerHTML  = tagsHTML(post.tags);
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-meta').innerHTML  = `<span>${post.date}</span><span>${post.readTime} min read</span>`;
  document.getElementById('post-content').innerHTML = post.content;

  // Prev / next
  const sorted = [...POSTS].sort((a,b)=>b.dateSort.localeCompare(a.dateSort));
  const idx    = sorted.findIndex(p=>p.slug===slug);
  const prev   = sorted[idx+1];
  const next   = sorted[idx-1];
  // Expose nav helper globally so inline onclick can reach it
  window._navToPost = slug => { if(typeof openPost==='function'){ openPost(slug); } else { window.location='blog.html#'+slug; } };
  document.getElementById('post-nav').innerHTML =
    (prev ? `<div class="pnav-item" onclick="window._navToPost('${prev.slug}')" style="cursor:pointer"><div class="pnav-dir">← Previous</div><div class="pnav-title">${prev.title}</div></div>` : '<div></div>') +
    (next ? `<div class="pnav-item pnav-item--next" onclick="window._navToPost('${next.slug}')" style="cursor:pointer"><div class="pnav-dir">Next →</div><div class="pnav-title">${next.title}</div></div>` : '');

  // TOC
  setTimeout(()=>{
    const headings = document.querySelectorAll('.post-content h2');
    const tocList  = document.getElementById('toc-list');
    const tocCard  = document.getElementById('toc-card');
    if(!tocList || !tocCard) return;
    tocList.innerHTML = '';
    const NAV_H = 70; // px — nav height + breathing room
    headings.forEach((h,i)=>{
      h.id = 's'+i;
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.textContent = h.textContent;
      a.href = '#';
      a.addEventListener('click', ev=>{
        ev.preventDefault();
        // Remove active from all, mark this one
        tocList.querySelectorAll('a').forEach(x=>x.classList.remove('toc-active'));
        a.classList.add('toc-active');
        // Scroll so heading sits just below the nav bar
        const top = h.getBoundingClientRect().top + window.scrollY - NAV_H;
        window.scrollTo({ top, behavior:'smooth' });
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });
    tocCard.style.display = headings.length > 1 ? '' : 'none';

    // Highlight active TOC item on scroll
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const idx = [...headings].indexOf(entry.target);
          tocList.querySelectorAll('a').forEach((a,i)=>a.classList.toggle('toc-active', i===idx));
        }
      });
    }, { rootMargin: `-${NAV_H}px 0px -60% 0px` });
    headings.forEach(h=>observer.observe(h));
  }, 80);
}

/* ── RENDER PUBLICATIONS ── */
function renderPublications(){
  const years = [...new Set(PUBLICATIONS.map(p=>p.year))].sort((a,b)=>b-a);
  document.getElementById('pub-list').innerHTML = years.map(yr=>{
    const pubs = PUBLICATIONS.filter(p=>p.year===yr);
    return `<div class="pub-year-group">
      <div class="pub-year">${yr}</div>
      ${pubs.map(p=>`<div class="pub-item">
        <div class="pub-item__line"></div>
        <div>
          <div class="pub-item__type">${p.type}</div>
          <div class="pub-item__title">${p.title}</div>
          <p class="pub-item__authors">${p.authors}</p>
          <p class="pub-item__venue">${p.venue}</p>
          <div class="pub-item__links">${p.links.map(l=>`<a class="pub-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}</div>
        </div>
      </div>`).join('')}
    </div>`;
  }).join('');
}

/* ── RENDER PROJECTS ── */
let activeProjFilter = 'all';
function renderProjects(){
  const statuses = ['all',...new Set(ALL_PROJECTS.map(p=>p.status.split('-')[0].trim().toLowerCase()))];
  document.getElementById('proj-filters').innerHTML = statuses.map(s=>
    `<button class="fbtn ${s===activeProjFilter?'active':''}" onclick="setProjFilter('${s}')">${s==='all'?'All':s.charAt(0).toUpperCase()+s.slice(1)}</button>`
  ).join('');
  const filtered = activeProjFilter==='all' ? ALL_PROJECTS : ALL_PROJECTS.filter(p=>p.status.toLowerCase().includes(activeProjFilter));
  document.getElementById('proj-full-grid').innerHTML = filtered.map(p=>projCardHTML(p,'pcard-lg')).join('');
}
function setProjFilter(f){ activeProjFilter=f; renderProjects(); }

/* ── RENDER PODCAST ── */
function renderPodcast(){
  const links = [];
  if(PODCAST.spotify) links.push(`<a class="lbtn" href="${PODCAST.spotify}" target="_blank" rel="noopener">🎵 Spotify</a>`);
  if(PODCAST.apple)   links.push(`<a class="lbtn" href="${PODCAST.apple}"   target="_blank" rel="noopener">🎧 Apple Podcasts</a>`);
  if(PODCAST.rss)     links.push(`<a class="lbtn" href="${PODCAST.rss}"     target="_blank" rel="noopener">📻 RSS</a>`);
  document.getElementById('listen-links').innerHTML = links.join('');

  document.getElementById('ep-full-list').innerHTML = EPISODES.map(e=>`
    <div class="ep-full-row">
      <div class="ep-full-row__num">EP ${String(e.num).padStart(2,'0')}</div>
      <div>
        <div class="ep-full-row__date">${e.date}</div>
        <div class="ep-full-row__title">${e.title}</div>
        <div class="ep-full-row__desc">${e.desc}</div>
      </div>
      <a class="ep-full-play" href="${e.url||'#'}" target="_blank" rel="noopener" aria-label="Listen to episode ${e.num}">▶</a>
    </div>`).join('');
}

/* ── RENDER CONTACT ── */
function renderContact(){
  document.getElementById('contact-links').innerHTML = [
    {icon:ICONS.email,    label:'Email',        val:ME.email,                         href:`mailto:${ME.email}`},
    {icon:ICONS.twitter,  label:'Twitter / X',  val:'@linibenson',                    href:SOCIAL.twitter},
    {icon:ICONS.linkedin, label:'LinkedIn',      val:'linkedin.com/in/linibenson',     href:SOCIAL.linkedin},
    {icon:ICONS.github,   label:'GitHub',        val:'github.com/linibensonjr',        href:SOCIAL.github},
  ].map(c=>`<a class="clink" href="${c.href}" target="_blank" rel="noopener">
    <div class="clink__icon">${c.icon}</div>
    <div><div class="clink__label">${c.label}</div><div class="clink__val">${c.val}</div></div>
  </a>`).join('');
}

/* ── CONTACT FORM ── */
function submitForm(){
  const name    = document.getElementById('c-name').value.trim();
  const email   = document.getElementById('c-email').value.trim();
  const message = document.getElementById('c-message').value.trim();
  if(!name || !email || !message){ alert('Please fill in name, email, and message.'); return; }
  // Opens default mail client - replace with fetch() to a backend/Formspree endpoint
  const subject = document.getElementById('c-subject').value.trim() || 'Portfolio enquiry';
  window.location.href = `mailto:${ME.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
  document.getElementById('success-msg').classList.add('show');
}

/* ── MOBILE DRAWER ── */
function toggleDrawer(){
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('nav-drawer');
  burger.classList.toggle('open');
  drawer.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}
function closeDrawer(){
  document.getElementById('burger').classList.remove('open');
  document.getElementById('nav-drawer').classList.remove('open');
  document.body.style.overflow = '';
}
/* Close drawer on outside tap */
document.addEventListener('click', e => {
  const drawer = document.getElementById('nav-drawer');
  const burger = document.getElementById('burger');
  if(drawer.classList.contains('open') && !drawer.contains(e.target) && !burger.contains(e.target)){
    closeDrawer();
  }
});

/* ── RENDER NAV SOCIALS & FOOTER ── */
function renderGlobals(){
  document.getElementById('nav-socials').innerHTML  = socialIconsHTML('sicon', SOCIAL);
  document.getElementById('drawer-socials').innerHTML = socialIconsHTML('sicon-lg', SOCIAL);
  document.getElementById('footer-socials').innerHTML = [
    {k:'twitter',v:SOCIAL.twitter},{k:'linkedin',v:SOCIAL.linkedin},{k:'github',v:SOCIAL.github}
  ].filter(s=>s.v).map(s=>`<a class="footer__si" href="${s.v}" target="_blank" rel="noopener">${ICONS[s.k]}</a>`).join('')
    + `<a class="footer__si" href="mailto:${ME.email}">${ICONS.email}</a>`;
  document.getElementById('footer-copy').textContent = `© ${new Date().getFullYear()} Iniobong Benson · Geospatially Africa`;
  highlightNav();
}

/* ── SEO: INJECT JSON-LD STRUCTURED DATA ── */
function renderSEO(){
  const url = SITE_URL;

  /* ── Person schema ──────────────────────────────────────────
     Tells Google who you are. Powers the knowledge panel that
     can appear when someone searches your name directly.
  ────────────────────────────────────────────────────────────*/
  document.getElementById('jsonld-person').textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["Person", "Researcher"],
    "name": ME.fullName,
    "alternateName": ME.name,
    "url": url,
    "email": ME.email,
    "jobTitle": ME.jobTitle,
    "description": ME.description,
    "knowsAbout": [
      "Geospatial Science", "Remote Sensing", "Geographic Information Systems",
      "Spatial Data Science", "Earth Observation", "Africa Geography",
      "Land Cover Change Detection", "Satellite Imagery Analysis",
      "Google Earth Engine", "QGIS", "Python", "R"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": ME.university
    },
    "homeLocation": {
      "@type": "Place",
      "name": ME.location
    },
    "sameAs": ME.sameAs,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  });

  /* ── PodcastSeries schema ───────────────────────────────────
     Helps Google show your podcast in search results and
     enables rich results like episode cards in Google Search.
     Spotify and Apple also use schema.org signals.
  ────────────────────────────────────────────────────────────*/
  document.getElementById('jsonld-podcast').textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "Geospatially Africa",
    "description": "A podcast exploring the power of geospatial science in understanding Africa - from urban growth and climate change to land use and infrastructure. Conversations with researchers, practitioners, and innovators shaping the continent's spatial story.",
    "url": url + "#podcast",
    "author": {
      "@type": "Person",
      "name": ME.fullName,
      "url": url
    },
    "inLanguage": "en",
    "keywords": "geospatial, Africa, GIS, remote sensing, mapping, spatial data, podcast",
    "webFeed": PODCAST.rss || undefined,
    "episode": EPISODES.map(e => ({
      "@type": "PodcastEpisode",
      "name": e.title,
      "description": e.desc,
      "episodeNumber": e.num,
      "datePublished": e.date,
      "url": e.url || url + "#podcast"
    }))
  });

  /* ── WebSite schema ─────────────────────────────────────────
     Enables Google's sitelinks search box - the search field
     that sometimes appears under your site in search results.
  ────────────────────────────────────────────────────────────*/
  document.getElementById('jsonld-website').textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": ME.name + " - Geospatial Researcher",
    "url": url,
    "description": ME.description,
    "author": {
      "@type": "Person",
      "name": ME.fullName
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": url + "?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  /* ── Dynamic <title> and <meta> per active section ──────────
     JS-routed sites need this - Google sees whatever the page
     title says, so we update it as the user navigates.
     This also means if Google indexes a shared link that lands
     on a specific "page", the title is accurate.
  ────────────────────────────────────────────────────────────*/
  const pageMeta = {
    home:         { title: `${ME.name} - Geospatial PhD Researcher, Analyst & Podcast Host`,         desc: ME.description },
    about:        { title: `About ${ME.name} - Geospatial Researcher & CV`,                          desc: `CV and background of ${ME.name}, geospatial PhD candidate and analyst specialising in remote sensing and GIS applied to Africa.` },
    projects:     { title: `Projects - ${ME.name}`,                                                   desc: `Geospatial research and analysis projects by ${ME.name}, covering remote sensing, land cover change, urban heat islands, and more.` },
    publications: { title: `Publications - ${ME.name}`,                                               desc: `Peer-reviewed journal articles, conference papers, and technical reports in geospatial science by ${ME.name}.` },
    blog:         { title: `Blog - ${ME.name}`,                                                       desc: `Essays and field notes on geospatial methods, remote sensing, open data, and mapping Africa, by ${ME.name}.` },
    podcast:      { title: `Geospatially Africa Podcast - ${ME.name}`,                                desc: `Geospatially Africa is a podcast by ${ME.name} exploring geospatial science, mapping, and spatial data across the African continent.` },
    contact:      { title: `Contact ${ME.name} - Geospatial Researcher`,                              desc: `Get in touch with ${ME.name} for research collaborations, podcast enquiries, or geospatial consulting.` },
  };

  /* Hook into nav() to update <title> and <meta> on each navigation */
  const _origNav = window.nav;
  window.nav = function(page, data){
    _origNav(page, data);
    const m = pageMeta[page] || pageMeta.home;
    document.title = m.title;
    document.querySelector('meta[name="description"]').setAttribute('content', m.desc);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', m.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', m.desc);
  };
}

/* Bootstrap is called per-page inline */
