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
      title: "Experience",
      entries: [
        {
          date: "Jan 2024 – April 2024",
          title: "Medical Research Volunteer",
          company: "Canadian centre for clinical trials (at Wilderman Medical Clinic)",
          description: `Collection, systematization, and entry of research data into databases in accordance with clinical trial protocols
          Conducting scientific literature searches through academic search engines to support research projects
          Working with the Accuro EMR electronic medical system to retrieve and verify patient data`,
        },
        {
          date: "September 2019 - May 2020",
          title: "Laboratory and Vivarium Assistant",
          company: "Reaviz Medical University",
          description: `Directed research in Neuropharmacology: the impact of the adaptogen of plant origin <em>Rhodiola rosea</em> on resistance of rats to stress conditions`,
          logo: "logos/reaviz.webp",
          largeLogo: true
        },
        {
          date: "December 2024 - Current",
          title: "Technical support specialist",
          company: "MTRC"
        },
        {
          date: "June 2024 — September 2024",
          title: "Chinese Tea Practitioner",
          company: "Mosteaque Teahouse",
          logo: "logos/mostik.webp",
          description: `Conducted traditional Chinese tea ceremonies, educating participants on cultural practices and increasing attendee engagement. Operated effectively in a fast-paced festival environment`,
          largeLogo: true
        },
        {
          date: "May 2022 — July 2022",
          title: "Turtle Crossing Guard",
          company: "The Land Between Charity",
          logo: "logos/the-land-between.webp", //TODO: fix logo bg
          description: `Recorded occurrences for conservation and road mortality mitigation projects`,
          largeLogo: true

        },
         {
          date: "Sept 2022 — April 2023",
          title: "Outreach Officer",
          company: "Trent University Russian-Speaking Association",
          logo: "logos/trent-russian-association.webp",
          description: `Spokesperson and promoter of the student association`,
          largeLogo: true
        },
         {
          date: "May 2024",
          title: "Route Marshal Volunteer at Walk a Mile in Her Shoes“ Event",
          company: "YWCA Peterborough",
          logo: "logos/walk-a-mile.png",
          largeLogo: true
        },
       
      ]
    },
    {
      title: "Education",
      entries: [
        {
          date: "Graduation 2025",
          title: "Bachelor of Science (BSc) in Biology",
          company: "Trent University",
          description: `Key courses: behavioural ecology, environmental toxicology, organic chemistry, fisheries assessment and management`,
          logo: "logos/trent.png"
        },
        {
          date: "Graduation 2020",
          title: "With Honors Diploma in General Studies",
          company: "Samara Medical-Technical Lyceum",
          logo: "logos/smtl.svg",
          description: `Directed research in Psychology: formation of psychological complexes in cybercommunicatively dependent teenagers
Work was presented on XI All-Russian conference of students "National heritage of Russia" of the forum "APK - Youth, Science, Innovation"`,
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
  logo: "logos/drug-strategy.webp",
  largeLogo: true
}

      ]
    }
  ]
}