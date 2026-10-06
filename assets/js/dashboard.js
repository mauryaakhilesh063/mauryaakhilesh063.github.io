const projects = [
  {
    id: 'clos-integration',
    category: 'Fintech',
    title: 'CLOS Integration Project – Newgen',
    summary: 'End-to-end banking workflow automation for commercial loan origination and verification.',
    image: 'assets/images/project1.png',
    overview: [
      'Newgen\'s Commercial Loan Origination System (CLOS) helps banks manage the complete commercial loan lifecycle from lead creation to disbursement.',
      'The platform includes onboarding, KYC, credit verification, underwriting, approval workflows, documentation, and CBS integration.'
    ],
    role: [
      'Designed and developed Spring Boot microservices for loan origination and credit verification workflows.',
      'Led external credit bureau API integrations for real-time verification and compliance checks.',
      'Optimized SQL queries and indexing to reduce response time by 35%.',
      'Handled production incidents and root-cause analysis for banking system stability.'
    ],
    highlights: [
      'Improved turnaround time by 35% through automation of manual underwriting steps.',
      'Integrated REST APIs for real-time credit checks and document verification.',
      'Built scalable, modular services to support enterprise lending operations.'
    ],
    tech: ['React', 'HTML/CSS', 'JavaScript', 'Java', 'Spring Boot'],
    impact: 'The project reduced loan processing time, improved operational efficiency, and delivered a better experience for internal teams and external applicants.'
  },
  {
    id: 'customer-onboarding',
    category: 'Banking',
    title: 'Customer Onboarding Workflow',
    summary: 'Digitized onboarding journeys for faster customer verification and data validation.',
    image: 'assets/images/work1.jpg',
    overview: [
      'Built a streamlined workflow for customer onboarding, KYC validation, CIF setup, and document tracking.',
      'The solution improved data consistency and reduced manual intervention across the approval process.'
    ],
    role: [
      'Worked closely with business teams to map onboarding journeys and identify bottlenecks.',
      'Developed reusable validation logic for customer information and compliance checks.',
      'Collaborated with QA and support teams to reduce onboarding defects and improve turnaround.'
    ],
    highlights: [
      'Minimized manual onboarding errors through validation at key checkpoints.',
      'Improved traceability for customer records and documentation.',
      'Enabled better visibility for support and operations teams.'
    ],
    tech: ['Java', 'Spring Boot', 'JavaScript', 'REST APIs'],
    impact: 'The workflow reduced processing delays and made the customer onboarding journey faster and more reliable.'
  },
  {
    id: 'credit-verification',
    category: 'Risk & Compliance',
    title: 'Credit Verification Platform',
    summary: 'Automated bureau checks and verification status tracking for faster loan readiness.',
    image: 'assets/images/work2.jpg',
    overview: [
      'Built an automated verification layer for credit risk checks and document validation before sanctioning loans.',
      'The solution connected multiple downstream systems to ensure timely and accurate policy enforcement.'
    ],
    role: [
      'Designed workflow logic for bureau calls, response handling, and downstream alerts.',
      'Improved API integration reliability and error logging for faster RCA and support resolution.',
      'Worked on high-availability patterns to support banking operations during peak hours.'
    ],
    highlights: [
      'Reduced verification turnaround time for internal teams and credit officers.',
      'Improved visibility of success and failure states across verification stages.',
      'Helped teams take quicker decisions with cleaner operational data.'
    ],
    tech: ['Java', 'Spring Boot', 'SQL', 'REST Integration'],
    impact: 'The platform improved compliance confidence and reduced the time required to finalize lending decisions.'
  }
];

function renderProjectCards() {
  const projectGrid = document.getElementById('projectGrid');
  if (!projectGrid) return;

  projectGrid.innerHTML = projects.map((project) => `
    <button class="project__card" type="button" data-project-id="${project.id}" aria-label="Open ${project.title}">
      <img src="${project.image}" alt="${project.title}" class="project__card-image" />
      <div class="project__card-body">
        <span class="project__card-tag">${project.category}</span>
        <h3 class="project__card-title">${project.title}</h3>
        <p class="project__card-summary">${project.summary}</p>
        <div class="project__card-meta">
          <span>View details</span>
          <span>→</span>
        </div>
      </div>
    </button>
  `).join('');

  projectGrid.querySelectorAll('.project__card').forEach((card) => {
    card.addEventListener('click', () => openProjectDetail(card.dataset.projectId));
  });
}

function openProjectDetail(projectId) {
  const project = projects.find((item) => item.id === projectId);
  const detail = document.getElementById('projectDetail');
  const detailContent = document.getElementById('projectDetailContent');

  if (!project || !detail || !detailContent) return;

  detailContent.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project__detail-image" />
    <h3 class="project__detail-title">${project.title}</h3>
    <p class="project__card-summary">${project.summary}</p>

    <h4 class="project__detail-subtitle">Overview</h4>
    <ul class="project__detail-list">
      ${project.overview.map((item) => `<li>${item}</li>`).join('')}
    </ul>

    <h4 class="project__detail-subtitle">My Role</h4>
    <ul class="project__detail-list">
      ${project.role.map((item) => `<li>${item}</li>`).join('')}
    </ul>

    <h4 class="project__detail-subtitle">Key Highlights</h4>
    <ul class="project__detail-list">
      ${project.highlights.map((item) => `<li>${item}</li>`).join('')}
    </ul>

    <h4 class="project__detail-subtitle">Tech Stack</h4>
    <ul class="project__detail-list">
      ${project.tech.map((item) => `<li>${item}</li>`).join('')}
    </ul>

    <h4 class="project__detail-subtitle">Impact</h4>
    <p class="project__detail-impact">${project.impact}</p>
  `;

  detail.classList.add('is-visible');
  detail.setAttribute('aria-hidden', 'false');
}

function closeProjectDetail() {
  const detail = document.getElementById('projectDetail');
  if (!detail) return;

  detail.classList.remove('is-visible');
  detail.setAttribute('aria-hidden', 'true');
}

function downloadCv(){
  const link = document.createElement('a');
    link.href = 'assets/pdf/akhil_Resume.pdf'; // your PDF path
    link.download = 'Akhilesh_CV.pdf';         // desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

function submitContact(){
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

 // Simple email validation pattern
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '' || message === '') {
    alert('Please Fill Out All Fields Before Submitting.');
    return false;
  }

  if (!emailPattern.test(email)) {
    alert('Please Enter a Valid Email Address.');
    return false;
  }

  alert('Thank you for your message! '+name+' I will get back to you soon.');
  return true; 
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();

  const closeButton = document.getElementById('closeProjectDetail');
  if (closeButton) {
    closeButton.addEventListener('click', closeProjectDetail);
  }

  const detail = document.getElementById('projectDetail');
  if (detail) {
    detail.addEventListener('click', (event) => {
      if (event.target === detail) {
        closeProjectDetail();
      }
    });
  }
});