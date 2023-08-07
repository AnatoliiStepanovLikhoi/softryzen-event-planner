import { create } from "zustand";

const useEventStore = create((set) => ({
  items: [
    // {
    //   id: 1,
    //   title: "The Beatles party",
    //   description: "This event for all people",
    //   selectDate: "15/10/2023",
    //   selectTime: "18:00",
    //   location: "Kharkiv,Mysonositskya str",
    //   category: "Art",
    //   addPicture: "",
    //   priority: "high",
    // },
  ],
  isLoading: false,
  error: null,
  filterValue: "",
  setFilterValue: (value) => set({ filterValue: value }),

  fetchEvents: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        "https://6468ba5260c8cb9a2cb077de.mockapi.io/api/events"
      );
      const data = await response.json();
      set({ items: data, isLoading: false, error: null });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },

  addEvent: (event) => {
    set((state) => ({
      items: [...state.items, event],
    }));
  },
}));

export default useEventStore;
