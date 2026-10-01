import { useId, useState } from "react";

// Open/closed state for a "Read more" style section, plus the id that ties the button to the
// section it controls (for screen readers).
export const useDisclosure = () => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return { open, panelId, toggle: () => setOpen((value) => !value) };
};
