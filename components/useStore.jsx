import { create } from "zustand";

const PortfolioStore = create((set, get) => ({
    theme: false, // true for light mode, false for dark mode
    toggle: () => set((state) => ({ theme: !state.theme })),


}));

export default PortfolioStore;