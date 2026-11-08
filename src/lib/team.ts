export type TeamMemberPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  photo?: TeamMemberPhoto;
};

export const reneMerino: TeamMember = {
  slug: "rene-merino",
  name: "Rene Merino",
  role: "Crew Lead",
  bio: [
    "Rene grew up in the DMV and has spent more than 15 years painting homes and businesses and leading painting crews.",
    "He brings that hands-on experience to PaintSwitch projects across the area.",
  ],
};

export const teamMembers: readonly TeamMember[] = [reneMerino];

export function initials(name: string) {
  return name
    .split(/\s+/u)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function buildTeamJsonLd() {
  const url = "https://paintswitch.com/about";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#about-page`,
        url,
        name: "Our Team | PaintSwitch",
        about: { "@id": "https://paintswitch.com/#organization" },
      },
      ...teamMembers.map((member) => ({
        "@type": "Person",
        "@id": `${url}#${member.slug}`,
        name: member.name,
        jobTitle: member.role,
        description: member.bio.join(" "),
        ...(member.photo ? { image: `https://paintswitch.com${member.photo.src}` } : {}),
        worksFor: { "@id": "https://paintswitch.com/#organization" },
      })),
    ],
  };
}
