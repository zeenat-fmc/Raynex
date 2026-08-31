export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  /** Optional image path. Leave empty to show the placeholder graphic. */
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
export const products: Product[] = [
  {
    id: "product-01",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
  {
    id: "product-02",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
  {
    id: "product-03",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
  {
    id: "product-04",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
  {
    id: "product-05",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
  {
    id: "product-06",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
  {
    id: "product-07",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
  {
    id: "product-08",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
  {
    id: "product-09",
    name: "[Product Name]",
    category: "[Category]",
    description: "[Short product description goes here — one or two sentences on what this fixture is and where it's used.]",
  },
];

export type Application = {
  id: string;
  name: string;
};

export const applications: Application[] = [
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "retail", name: "Retail" },
  { id: "hospitality", name: "Hospitality" },
  { id: "offices", name: "Offices" },
  { id: "architectural", name: "Architectural Projects" },
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
  { label: "Address", value: "[Company Address]" },
  { label: "Phone", value: "[Phone Number]" },
  { label: "Email", value: "[Email Address]" },
  { label: "Business Hours", value: "[Business Hours]" },
];
