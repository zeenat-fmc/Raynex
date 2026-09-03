export type Product = {
  id: string;
  srNo: number;
  name: string;
  articleNo: string;
  category: string;
  description: string;
  image?: string;
};

/**
 * RAYNEX LED Downlight Collection
 * Total Products: 9
 */
export const products: Product[] = [
  {
    id: "product-01",
    srNo: 36,
    name: "12W White Smart Multi-Colour Option",
    articleNo: "HMBRGXQD",
    category: "Downlights",
    description:
      "12W white recessed LED downlight with multi-colour functionality, designed for versatile residential and commercial lighting applications.",
    image: "/products/1.png",
  },

  {
    id: "product-02",
    srNo: 33,
    name: "MAX 12W White Cup",
    articleNo: "NSMAX-WH",
    category: "Downlights",
    description:
      "Compact 12W recessed LED downlight with a clean white cup design, suitable for homes, offices and retail spaces.",
    image: "/products/2.png",
  },

  {
    id: "product-03",
    srNo: 35,
    name: "12W BrightWhite Cup New Model",
    articleNo: "HMBXQD",
    category: "Downlights",
    description:
      "12W recessed LED downlight featuring an upgraded BrightWhite reflector cup for improved brightness and uniform light distribution.",
    image: "/products/3.png",
  },

  {
    id: "product-04",
    srNo: 32,
    name: "Maserati - 12W Matte Black Cup",
    articleNo: "MSLDXQD-BK",
    category: "Downlights",
    description:
      "12W recessed LED downlight with a distinctive matte black cup, designed for modern interiors requiring focused illumination and reduced glare.",
    image: "/products/4.png",
  },

  {
    id: "product-05",
    srNo: 37,
    name: "Igor 12W White Cup",
    articleNo: "BSGY",
    category: "Downlights",
    description:
      "12W white recessed downlight with a precision-designed cup for controlled illumination, suitable for residential, retail and architectural applications.",
    image: "/products/05.png",
  },

  {
    id: "product-06",
    srNo: 38,
    name: "PG 10W White + Transparent Cup (Orange Spring)",
    articleNo: "PG",
    category: "Downlights",
    description:
      "10W recessed LED downlight with a white housing, transparent cup and signature orange spring mechanism for secure installation.",
    image: "/products/06.png",
  },

  {
    id: "product-07",
    srNo: 39,
    name: "AY 7W White Cup",
    articleNo: "AY",
    category: "Downlights",
    description:
      "Compact 7W white recessed LED downlight designed for smaller spaces, corridors, closets and low-ceiling applications.",
    image: "/products/07.png",
  },

  {
    id: "product-08",
    srNo: 40,
    name: "MY 24W White Cup, 5-Inch Opening (135mm)",
    articleNo: "MY-WH",
    category: "Downlights",
    description:
      "High-output 24W recessed LED downlight with a white cup and 5-inch opening, designed for larger residential and commercial spaces.",
    image: "/products/08.png",
  },

  {
    id: "product-09",
    srNo: 42,
    name: "RF 24W White Cup, 4-Inch Opening (105mm)",
    articleNo: "RF-WH",
    category: "Downlights",
    description:
      "Compact 24W recessed LED downlight with a white cup and 4-inch opening, providing strong illumination from a smaller ceiling cutout.",
    image: "/products/09.png",
  },
];
export type Application = {
  img: string | undefined;
  id: string;
  name: string;
  description?: string;
  image?: string;
};

export const applications: Application[] = [
  {
    id: "residential",
    name: "Residential",
    image: "/brand/res.png",
    description: "Warm, livable light for homes - from everyday rooms to considered architectural moments.",
    img: undefined
  },
  {
    id: "commercial",
    name: "Commercial",
    image: "/brand/com.png",
    description: "Consistent, dependable lighting built for spaces that run long hours, every day of the week.",
    img: undefined
  },
  {
    id: "retail",
    name: "Retail",
    image: "/brand/retail.png",
    description: "Light that shapes how products and spaces are seen, without overpowering them.",
    img: undefined
  },
  {
    id: "hospitality",
    name: "Hospitality",
    image: "/brand/bou.png",
    description: "Mood and comfort for hotels, restaurants, and spaces guests are meant to linger in.",
    img: undefined
  },
  {
    id: "offices",
    name: "Offices",
    image: "/brand/ofc.png",
    description: "Even, glare-controlled light suited to focused work and long occupancy.",
    img: undefined
  },
  {
    id: "architectural",
    name: "Architectural Projects",
    image: "/brand/arc.png",
    description: "Fixtures selected to support a design intent, not compete with it.",
    img: undefined
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
// export const projects: Project[] = [
//   {
//     id: "project-01",
//     name: "[Project Name]",
//     location: "[City, Country]",
//     category: "Residential",
//     description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
//   },
//   {
//     id: "project-02",
//     name: "[Project Name]",
//     location: "[City, Country]",
//     category: "Hospitality",
//     description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
//   },
//   {
//     id: "project-03",
//     name: "[Project Name]",
//     location: "[City, Country]",
//     category: "Retail",
//     description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
//   },
//   {
//     id: "project-04",
//     name: "[Project Name]",
//     location: "[City, Country]",
//     category: "Offices",
//     description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
//   },
//   {
//     id: "project-05",
//     name: "[Project Name]",
//     location: "[City, Country]",
//     category: "Commercial",
//     description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
//   },
//   {
//     id: "project-06",
//     name: "[Project Name]",
//     location: "[City, Country]",
//     category: "Architectural",
//     description: "[Short project description - the brief, the approach, and the RAYNEX fixtures used.]",
//   },
// ];
export const projects: Project[] = [
  {
    id: "project-01",
    name: "Modern Residence",
    location: "Islamabad, Pakistan",
    category: "Residential",
    description:
      "A contemporary residential project designed with clean architectural lines and warm, balanced lighting. RAYNEX downlights were used to create comfortable illumination across living areas, bedrooms, and circulation spaces.",
     image: "/brand/res.png",
  },

  {
    id: "project-02",
    name: "Luxury Boutique Hotel",
    location: "Lahore, Pakistan",
    category: "Hospitality",
    description:
      "A refined hospitality space where lighting plays an important role in creating a welcoming atmosphere. RAYNEX fixtures provide focused illumination throughout guest areas, corridors, and common spaces.",
    image: "/brand/bou.png",
  },

  {
    id: "project-03",
    name: "Premium Retail Store",
    location: "Karachi, Pakistan",
    category: "Retail",
    description:
      "A modern retail environment designed to keep products visually prominent. Carefully positioned RAYNEX downlights deliver focused, consistent illumination while maintaining a clean ceiling aesthetic.",
    image: "/brand/retail.png",
  },

  {
    id: "project-04",
    name: "Corporate Office",
    location: "Islamabad, Pakistan",
    category: "Offices",
    description:
      "A contemporary workplace designed around productivity, comfort, and visual clarity. RAYNEX lighting solutions provide even illumination across workstations, meeting rooms, and shared spaces.",
    image: "/brand/ofc.png",
  },

  {
    id: "project-05",
    name: "Commercial Development",
    location: "Rawalpindi, Pakistan",
    category: "Commercial",
    description:
      "A large-scale commercial environment requiring dependable lighting across multiple functional areas. RAYNEX fixtures were selected for their clean appearance, efficiency, and consistent performance.",
    image: "/brand/com.png",
  },

  {
    id: "project-06",
    name: "Architectural Residence",
    location: "Lahore, Pakistan",
    category: "Architectural",
    description:
      "An architectural lighting project focused on enhancing the character of the space without overwhelming the design. RAYNEX downlights were integrated into the architecture to highlight key details and surfaces.",
    image: "/brand/arc.png",
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
  { label: "Address", value: "Opposite Gate No.4 - DHA Phase 2, GT Road, Islamabad, Pakistan" },
  { label: "Phone", value: "+92342-7043613" },
  { label: "Email", value: "info@raynex.com" },
  // { label: "Business Hours", value: "[Business Hours]" },
];
