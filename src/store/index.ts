import { create } from 'zustand';
import type { User, Event, Challenge } from '../types';

interface AppState {
  user: User | null;
  events: Event[];
  challenges: Challenge[];
  isDarkMode: boolean;
  setUser: (user: User | null) => void;
  toggleDarkMode: () => void;
  addEvent: (event: Event) => void;
  joinEvent: (eventId: string, userId: string) => void;
  addChallenge: (challenge: Challenge) => void;
  joinChallenge: (challengeId: string, userId: string) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  events: [],
  challenges: [],
  isDarkMode: false,
  setUser: (user) => set({ user }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  joinEvent: (eventId, userId) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === eventId
          ? { ...event, participants: [...event.participants, userId] }
          : event
      ),
    })),
  addChallenge: (challenge) =>
    set((state) => ({ challenges: [...state.challenges, challenge] })),
  joinChallenge: (challengeId, userId) =>
    set((state) => ({
      challenges: state.challenges.map((challenge) =>
        challenge.id === challengeId
          ? { ...challenge, participants: [...challenge.participants, userId] }
          : challenge
      ),
    })),
}));