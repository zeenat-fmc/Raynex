// export type Product = {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   /** Optional image path. Leave empty to show the placeholder graphic. */
//   image?: string;
// };
export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  articleNo?: string;
  image?: string;
};
/**
 * RAYNEX product catalogue — exactly 9 products.
 *
 * This is the ONLY file you need to edit to update product content.
 * Replace `name`, `category`, `description`, and add an `image` path
 * (e.g. "/products/recessed-downlight.jpg") once real photography
 * and copy are available.
 */
// export const products: Product[] = [
//   {
//     id: "product-01",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
//   {
//     id: "product-02",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
//   {
//     id: "product-03",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
//   {
//     id: "product-04",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
//   {
//     id: "product-05",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
//   {
//     id: "product-06",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
//   {
//     id: "product-07",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
//   {
//     id: "product-08",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
//   {
//     id: "product-09",
//     name: "[Product Name]",
//     category: "[Category]",
//     description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
//   },
// ];
export const products: Product[] = [
  {
    id: "product-01",
    name: "Maserati 12W Matte Black Cup",
    category: "Downlights",
    description:
      "12W recessed downlight featuring a matte black cup design, suitable for modern residential and commercial interiors.",
  },
  {
    id: "product-02",
    name: "12W White Cup",
    category: "Downlights",
    description:
      "12W recessed LED downlight with a clean white cup finish, designed for practical and consistent everyday illumination.",
  },
  {
    id: "product-03",
    name: "12W Bright White Cup - New Model",
    category: "Downlights",
    description:
      "12W recessed downlight with a bright white cup and updated housing design for clean architectural installations.",
  },
  {
    id: "product-04",
    name: "12W White",
    category: "Downlights",
    description:
      "12W white recessed LED downlight designed for clean, efficient illumination across residential and commercial spaces.",
  },
  {
    id: "product-05",
    name: "12W White Cup Color",
    category: "Downlights",
    description:
      "12W recessed downlight with a white cup finish, offering a compact and versatile lighting solution for interior applications.",
  },
  {
    id: "product-06",
    name: "10W White with Transparent Cup & Orange Spring",
    category: "Downlights",
    description:
      "10W recessed downlight with a white finish, transparent cup and orange spring mechanism for secure installation.",
  },
  {
    id: "product-07",
    name: "7W White Cup",
    category: "Downlights",
    description:
      "Compact 7W recessed LED downlight with a white cup design, ideal for focused and energy-efficient indoor lighting.",
  },
  {
    id: "product-08",
    name: "24W White Cup - 5-inch Opening",
    category: "Downlights",
    description:
      "24W recessed downlight with a white cup, designed for a 5-inch opening and approximately 135mm overall size.",
  },
  {
    id: "product-09",
    name: "24W White Cup - 4-inch Opening",
    category: "Downlights",
    description:
      "24W recessed downlight with a white cup, designed for a 4-inch opening and approximately 105mm overall size.",
  },
];
export type Application = {
  id: string;
  name: string;
  description?: string;
};

export const applications: Application[] = [
  {
    id: "residential",
    name: "Residential",
    description: "Warm, livable light for homes - from everyday rooms to considered architectural moments.",
  },
  {
    id: "commercial",
    name: "Commercial",
    description: "Consistent, dependable lighting built for spaces that run long hours, every day of the week.",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Light that shapes how products and spaces are seen, without overpowering them.",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description: "Mood and comfort for hotels, restaurants, and spaces guests are meant to linger in.",
  },
  {
    id: "offices",
    name: "Offices",
    description: "Even, glare-controlled light suited to focused work and long occupancy.",
  },
  {
    id: "architectural",
    name: "Architectural Projects",
    description: "Fixtures selected to support a design intent, not compete with it.",
  },
];

export type Project = {
  id: string;
  name: string;
  location: string;
  category: string;
  description: string;
  image?: string;
};

/**
 * Sample project / case-study entries. Replace with real project names,
 * locations, and photography once available — same pattern as `products`.
 */
export const projects: Project[] = [
  {
    id: "project-01",
    name: "[Project Name]",
    location: "[City, Country]",
    category: "Residential",
    description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
  },
  {
    id: "project-02",
    name: "[Project Name]",
    location: "[City, Country]",
    category: "Hospitality",
    description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
  },
  {
    id: "project-03",
    name: "[Project Name]",
    location: "[City, Country]",
    category: "Retail",
    description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
  },
  {
    id: "project-04",
    name: "[Project Name]",
    location: "[City, Country]",
    category: "Offices",
    description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
  },
  {
    id: "project-05",
    name: "[Project Name]",
    location: "[City, Country]",
    category: "Commercial",
    description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
  },
  {
    id: "project-06",
    name: "[Project Name]",
    location: "[City, Country]",
    category: "Architectural",
    description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
  },
];

export type GalleryImage = {
  id: string;
  caption: string;
  image?: string;
};

/** Lighting-inspiration gallery — a looser, image-first showcase. */
export const galleryImages: GalleryImage[] = [
  { id: "gallery-01", caption: "Warm & Welcoming" },
  { id: "gallery-02", caption: "Modern & Elegant" },
  { id: "gallery-03", caption: "Focused & Functional" },
  { id: "gallery-04", caption: "Luxury & Comfort" },
  { id: "gallery-05", caption: "Architectural Detail" },
  { id: "gallery-06", caption: "Ambient Living" },
  { id: "gallery-07", caption: "Statement Lighting" },
  { id: "gallery-08", caption: "Everyday Spaces" },
];

export type Benefit = {
  id: string;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    id: "quality",
    title: "Quality",
    description: "Every fixture is built to a consistent standard, checked before it ever reaches a project site.",
  },
  {
    id: "performance",
    title: "Reliable Performance",
    description: "Engineered to perform night after night, in the spaces that depend on it most.",
  },
  {
    id: "efficiency",
    title: "Energy Efficiency",
    description: "Considered output and consumption, so good light doesn't come at the cost of a good bill.",
  },
  {
    id: "design",
    title: "Modern Design",
    description: "Clean forms that sit quietly in a space, or make a quiet statement of their own.",
  },
  {
    id: "durability",
    title: "Durable Construction",
    description: "Materials and assembly chosen to hold up under real, everyday use.",
  },
  {
    id: "solutions",
    title: "Professional Lighting Solutions",
    description: "From single fixtures to full-space plans, support built around the way projects actually run.",
  },
];

export type ContactDetail = {
  label: string;
  value: string;
};

export const contactDetails: ContactDetail[] = [
  { label: "Address", value: "Opposit Gate No.4 - DHA Phase 2, GT Road, Islamabad, Pakistan" },
  { label: "Phone", value: "(+92) 342-7043613" },
  { label: "Email", value: "info@raynex.com" },
  // { label: "Business Hours", value: "[Business Hours]" },
];
