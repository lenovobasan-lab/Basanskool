// Editorial School Journal style reminder: keep content configurable, direct, and warm; use one source of truth for every school-specific string and image.

export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const schoolConfig = {
  name: "Shree Rastriya Basic School",
  shortName: "RBS",
  iemisCode: "IEMIS CODE: 030340003",
  tagline: "Learn • Lead • Succeed",
  motto: "Quality Education • Character Development • Community Service",
  logo: assetUrl("hero/IMG_2880.jpeg"),
  coverImage: assetUrl("hero/cover.png"),
  location: "Suryodaya Municipality-9,Ramfok, Ilam, Koshi, Nepal",
  phone: "+977-9816027097",
  email: "hello@shreerastriyabasicschool.edu.np",
  enrollmentFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfE3znN80ugIzFRhhNWyNfhLW6LLrsdEphd-_rY7QauW8zsfg/viewform",
  social: {
    facebook: "https://facebook.com/shreerastriyabasicschool",
    youtube: "https://youtube.com/@shreerastriyabasicschool",
    whatsapp: "https://wa.me/9779845123456",
  },
  description:
    "Shree Rastriya Basic School is a learning community in Ramfok helping young people build knowledge, character, and a useful sense of place.",
};

export type SchoolConfig = typeof schoolConfig;
