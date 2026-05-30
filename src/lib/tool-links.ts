// Centralized tool URLs. Replace these placeholder values with real links when available.
export const toolLinks = {
  founderTraits: "#foundertraits-link",
  pickOne: "#pickone-link",
  packConcept: "#packconcept-link",
} as const;

export type ToolKey = keyof typeof toolLinks;
