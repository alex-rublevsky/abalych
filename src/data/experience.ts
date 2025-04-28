export interface ExperienceData {
sections: ExperienceSection[];
}

interface ExperienceSection {
  title: string;
  entries: ExperienceEntry[];
}

export interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  description?: string;
  logo?: string;
  largeLogo?: boolean;
}

export const experienceData: ExperienceData = {
  sections: [
    {
      title: "Professional Experience",
      entries: [
        {
          date: "Jan 2024 – April 2024",
          title: "Medical Research Volunteer",
          company: "Canadian centre for clinical trials (at Wilderman Medical Clinic)",
          description: "Collection, systematization, and entry of research data into databases in accordance with clinical trial protocols. Conducting scientific literature searches through academic search engines to support research projects. Working with the Accuro EMR electronic medical system to retrieve and verify patient data"
        },
        {
          date: "September 2019 - May 2020",
          title: "Directed research in Neuropharmacology",
          company: "Reaviz Medical University",
          description: "The impact of the adaptogen of plant origin Rhodiola rosea on resistance of rats to stress conditions",
          logo: "logos/reaviz.png",
          largeLogo: true
        },
        {
          date: "December 2024 - Current",
          title: "Technical support specialist",
          company: "MTRC"
        },
        {
          date: "June 2024 — September 2024",
          title: "Chinese Tea Practicioner",
          company: "Mostik Teahouse",
          logo: "logos/mostik.webp",
          description: `• Conducted traditional Chinese tea ceremonies, educating participants on cultural practices and increasing attendee engagement
          • Operated effectively in a fast-paced festival environment, managing up to 70 orders per hour while ensuring high standards of service
          • Provided expert recommendations on 30+ varieties of tea and contributed to a 20% increase in customer satisfaction ratings based on post-event feedback
          • Trained a team of 3 new staff members in ceremony preparation techniques and proper teaware handling`,
          largeLogo: true
        },
       
      ]
    },
    {
      title: "Education",
      entries: [
        {
          date: "Graduation 2025",
          title: "Bachelor of Science (B.Sc.) in Biology Candidate",
          company: "Trent University",
          
          logo: "logos/trent.png"
        },
        {
          date: "Graduation 2020",
          title: "With Honors Diploma in General Studies",
          company: "Samara Medical-Technical Lyceum",
          logo: "logos/smtl.svg",
          largeLogo: true
        
        }
      ]
    },
    {
      title: "Certifications",
      entries: [
        {
          date: "March 2025",
          title: "First Aid & CPR/AED Level C",
          company: "Canadian Red Cross",
          logo: "logos/red-cross.svg",
          
        },
        {
          date: "February 2024",
          title: "Mental Health First Aid",
          company: "Mental Health Commission of Canada (MHCC)",
          logo: "logos/mhcc.svg",
          largeLogo: true
        
        },
      
{
  date: "February 2024",
  title: "Nonviolent Crisis Intervention Training",
  company: "Crisis Prevention Institute, Peterborough, ON",
  logo: "logos/cpi.png",
},
{
  date: "November 2023",
  title: "Understanding Opioids - Methods for Prevention & Response",
  company: "Peterborough Drug Strategy, Peterborough, ON",
  logo: "logos/drug-strategy.png",
  largeLogo: true
}

      ]
    },
   
  ]
}