/* ==========================================================================
   JAIN UNIVERSITY AI — KNOWLEDGE BASE
   --------------------------------------------------------------------------
   This is a plain, self-contained JavaScript data file. It holds every
   answer the chatbot gives. There is NO external API call and NO internet
   connection needed to run the chatbot — this file IS the knowledge base.

   Sourced from publicly available information (Jain University's own site
   and education/admission portals) as of July 2026. Fees, cutoffs and
   placement numbers change every year, so always confirm exact current
   figures with the admissions office before making a decision — contact
   details are in the CONTACT topic below.

   HOW TO EDIT THIS FILE:
   - Each item in TOPICS below is one subject the bot can answer about.
   - "keywords"  = the words the bot listens for in a student's question.
   - "answer"    = exactly what the bot replies, word for word.
   - To add a new topic, copy one of the blocks and change the values.
   - To update a fact (e.g. new fee amount), just edit the text in "answer".
   - Do not remove the commas between blocks, or the file will break.
   ========================================================================== */

const JAIN_UNIVERSITY_DATA = {

  collegeName: "Jain University",
  fullName: "JAIN (Deemed-to-be University), Bengaluru",

  // Used by the chatbot whenever it needs to hand the student off to a person
  contact: {
    address: "JAIN Knowledge Campus, #44/4, District Fund Road, Jayanagar 9th Block, Bengaluru, Karnataka - 560069",
    phone: "+91-80-6927 9444  /  +91 73376 18222",
    emailUG: "enquiry.ug@jainuniversity.ac.in",
    emailPG: "enquiry.pg@jainuniversity.ac.in",
    emailIntl: "admissions.intl@jainuniversity.ac.in",
    website: "https://www.jainuniversity.ac.in"
  },

  // Pre-set questions shown as quick-tap chips, and the keyword-matching
  // knowledge base the bot searches through for free-typed questions.
  topics: [
    {
      id: "about",
      label: "About the University",
      icon: "🎓",
      keywords: ["about", "history", "when", "established", "founded", "accreditation",
        "naac", "nirf", "ranking", "rank", "campuses", "recognised", "recognized", "ugc", "deemed", "jgi"],
      question: "Tell me about Jain University.",
      answer:
        "JAIN (Deemed-to-be University) was established in 1990 and is based in Bengaluru, Karnataka, under the JGI Group.\n\n" +
        "• Status: UGC-recognised Deemed-to-be-University, NAAC A++ accredited, ISO 21001:2018 certified.\n" +
        "• NIRF 2025: #62 in the University category, #84 in Engineering, #73 in Management (overall band 101-150).\n" +
        "• Scale: 500+ programmes across 17 streams, spread over roughly ten campuses, with 21,000+ students from 50+ countries and about 1,370 faculty members.\n" +
        "• Streams: Engineering, Management, Commerce, Computer Applications, Science, Design, Law, Humanities and Allied Healthcare."
    },
    {
      id: "admissions",
      label: "Admissions",
      icon: "📝",
      keywords: ["admission", "admissions", "apply", "application", "eligibility", "eligible",
        "jet", "entrance", "join", "criteria", "documents", "process", "how to get in"],
      question: "What is the admission process and eligibility criteria?",
      answer:
        "• Entrance exam: JET (Jain Entrance Test) is the university's own test, used for most UG and PG programmes.\n" +
        "• B.Tech also accepts JEE Main, KCET, COMEDK or Uni-GAUGE scores directly for counselling — no separate JET needed.\n" +
        "• MBA accepts CAT / XAT / CMAT / GMAT / NMAT / MAT scores in place of the JET written test.\n" +
        "• M.Tech accepts GATE scores.\n" +
        "• Eligibility (UG): Class 12 pass with minimum 50% aggregate (45% for SC/ST); subject requirements vary by programme (e.g. Physics-Chemistry-Maths for engineering).\n" +
        "• Eligibility (PG): Bachelor's degree with minimum 55% (50% for SC/ST) in a relevant discipline.\n" +
        "• Steps: online application → JET or accepted exam score → merit list / counselling → document verification → fee payment → admission confirmed.\n" +
        "• Documents needed: Class 10 & 12 mark sheets, transfer & migration certificates, entrance scorecard, passport photo, government photo ID.\n\n" +
        "Some programmes also include an essay, presentation or personal interview round. Exact dates change every year — confirm the current admission calendar with the admissions office."
    },
    {
      id: "fees",
      label: "Fees & Scholarships",
      icon: "💰",
      keywords: ["fee", "fees", "cost", "price", "tuition", "scholarship", "scholarships",
        "financial aid", "afford", "payment", "installment", "expensive"],
      question: "What are the fees and is financial aid available?",
      answer:
        "Approximate yearly tuition — always confirm exact figures with admissions, as these change every year:\n\n" +
        "• B.Tech CSE & specialisations: ₹3.9-5.9 lakh/year (~₹15.6-23.6 lakh total for 4 years); Aerospace ~₹5.15 lakh/year; other branches (Mechanical, Civil, EEE, ECE) ~₹2-3.2 lakh/year.\n" +
        "• MBA (CMS Business School): ₹4.5-5.75 lakh/year.\n" +
        "• MCA: ₹2.7-2.9 lakh/year.  M.Tech: ~₹2.2 lakh/year.\n" +
        "• BCA (Honours): ₹2.6-3.2 lakh/year.  B.Com (Honours): ₹1.8-2.35 lakh/year.\n" +
        "• B.Sc programmes: ₹1.25-2.9 lakh/year.  Design (B.Des/BFA): up to ₹3.5 lakh/year.\n" +
        "• Allied Healthcare (Physiotherapy, Medical Lab Tech, etc.): ₹1.8-2.5 lakh/year.\n" +
        "• Plus a one-time registration fee, usually ₹25,000-30,000.\n" +
        "• Hostel: ₹1.8-2.2 lakh/year (room + food), plus a refundable ₹10,000 caution deposit.\n\n" +
        "Scholarships available: Medha (academic merit), Eklavya (sports), Natyaswara (music & dance), Atharva (literature), Dyumna (differently-abled students) and Samasti (need-based aid)."
    },
    {
      id: "courses",
      label: "Courses & Departments",
      icon: "📚",
      keywords: ["course", "courses", "programme", "program", "programmes", "programs", "branch",
        "branches", "department", "specialization", "specialisation", "btech", "mba", "bca",
        "mca", "bcom", "bba", "degree", "stream", "subjects"],
      question: "What courses and departments are offered?",
      answer:
        "Jain University offers 500+ programmes across 17 streams. Popular options:\n\n" +
        "• Engineering (B.Tech, 4 yrs): CSE (AI/ML, Cyber Security, Cloud), Aerospace, Robotics, ECE, EEE (incl. Electric Vehicles), Mechanical, Civil, Information Science. PG: M.Tech in AI, Data Science, Cyber Security, Computer Science.\n" +
        "• Management: BBA (Finance, HR, Entrepreneurship, Marketing); MBA via CMS Business School, 13 specialisations (Finance, Marketing, Business Analytics, Digital Business, Logistics & Supply Chain, and more).\n" +
        "• Commerce: B.Com (Honours) — Finance, Banking, Business Analytics, Logistics; M.Com.\n" +
        "• Computer Applications: BCA (Honours) — AI, Cloud Computing, Data Analytics, Cybersecurity; MCA — AI & ML, Information Security, Storage & Cloud.\n" +
        "• Science: B.Sc/M.Sc in Data Science & Analytics, Computer Science, Biotechnology, Forensic Science, Clinical Psychology and more.\n" +
        "• Design: B.Des, BFA; M.Des in Product Design / UX (portfolio + entrance test).\n" +
        "• Law: BA LLB (integrated), LLM.\n" +
        "• Allied Healthcare: Physiotherapy, Medical Lab Technology, Nutrition & Dietetics, Optometry, Medical Imaging.\n" +
        "• Online/Distance (JAIN Online & CDOE): BBA, B.Com, BCA, BA, MBA, MCA, M.Com, MA and more, for flexible learning."
    },
    {
      id: "hostel",
      label: "Hostel & Campus",
      icon: "🏠",
      keywords: ["hostel", "accommodation", "room", "stay", "campus life", "facilities",
        "library", "sports", "wifi", "mess", "food", "canteen", "cafeteria", "dormitory"],
      question: "Tell me about hostel life and campus facilities.",
      answer:
        "• Hostels: separate blocks for men and women, with AC and non-AC room options (2-sharing / 3-sharing), Wi-Fi and food/mess included.\n" +
        "• Hostel fee: roughly ₹1.8-2.2 lakh/year, plus a refundable caution deposit of ₹10,000.\n" +
        "• Both on-campus and off-campus accommodation options are available.\n" +
        "• Campus facilities generally include a central library, department labs, a sports complex, cafeteria, an on-campus medical/first-aid centre, and campus transport.\n" +
        "• Note: engineering students are usually based at the dedicated Kanakapura-area engineering campus, while management and several other programmes run from the Jayanagar / JAIN Knowledge Campus — worth confirming which campus applies to your specific programme."
    },
    {
      id: "exams",
      label: "Exams & Entrance Tests",
      icon: "📋",
      keywords: ["exam", "exams", "semester", "result", "results", "test", "jet exam",
        "attendance", "revaluation", "backlog", "marks"],
      question: "How do semester exams and entrance tests work?",
      answer:
        "• JET (Jain Entrance Test) is conducted online in computer-based, remote-proctored mode. Depending on the programme, it can include a written test plus essay writing, a presentation and a personal interview.\n" +
        "• Regular semester exams run on a credit-based system with internal assessments plus end-semester exams; exact weightage and attendance requirements are set by each school, so confirm current rules with your department or registrar.\n" +
        "• Results are published on the student portal, and revaluation or supplementary/backlog exam options are available if needed."
    },
    {
      id: "placements",
      label: "Placements & Careers",
      icon: "💼",
      keywords: ["placement", "placements", "job", "jobs", "career", "careers", "package",
        "salary", "recruiter", "recruiters", "internship", "company", "companies", "lpa"],
      question: "What is the placement record and career support like?",
      answer:
        "Faculty of Engineering & Technology, 2025 batch:\n" +
        "• About 90% of B.Tech students placed; average package around ₹8 LPA.\n" +
        "• Highest domestic package ₹58-60 LPA (₹81.25 LPA for an international offer).\n" +
        "• 3,000+ companies visited campus, generating 2,500+ job offers.\n" +
        "• Top recruiters: Amazon, Google, Microsoft, Meta, PwC, Morgan Stanley, D.E. Shaw, JP Morgan, Deloitte, TCS, Samsung, Siemens, Schneider Electric, Saint-Gobain, and more.\n\n" +
        "MBA (CMS Business School): average package around ₹6.2 LPA, with top recruiters including PwC, Amazon and D.E. Shaw.\n\n" +
        "A dedicated placement cell supports resume building, aptitude training and mock interviews from the pre-final year onward. Treat all figures as recent-year data — ask the placement office for the current year's verified numbers."
    },
    {
      id: "contact",
      label: "Contact & Visit",
      icon: "📞",
      keywords: ["contact", "phone", "email", "address", "visit", "location", "reach",
        "call", "helpline", "where", "map"],
      question: "How can I contact the university or visit the campus?",
      answer:
        "📍 JAIN Knowledge Campus, #44/4, District Fund Road, Jayanagar 9th Block, Bengaluru, Karnataka - 560069\n" +
        "📞 +91-80-6927 9444  /  +91 73376 18222\n" +
        "✉️ UG admissions: enquiry.ug@jainuniversity.ac.in\n" +
        "✉️ PG admissions: enquiry.pg@jainuniversity.ac.in\n" +
        "✉️ International admissions: admissions.intl@jainuniversity.ac.in\n" +
        "🌐 https://www.jainuniversity.ac.in\n\n" +
        "It's best to call or email ahead to book a campus visit or counselling appointment."
    }
  ]
};

// Make the data available to the browser-loaded chatbot script.
if (typeof window !== "undefined") {
  window.JAIN_UNIVERSITY_DATA = JAIN_UNIVERSITY_DATA;
}
// Also export it in case anyone wants to reuse this data file in Node.
if (typeof module !== "undefined" && module.exports) {
  module.exports = JAIN_UNIVERSITY_DATA;
}
