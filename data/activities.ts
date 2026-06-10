import type { GalleryFrame } from "@/components/ui/GalleryDetail";

/** Content for a single-leaf activity GalleryDetail page. */
export interface ActivitySection {
  title: string;
  intro: string;
  frames: GalleryFrame[];
}

const IMG = "/assets/placeholder.jpg";

/** Culturals leaf — /activities/culturals */

export const culturals = {
  title: "Cultural Activities",

  intro:
    "Celebrating creativity, traditions, and talents through vibrant cultural events conducted for both kindergarten and higher secondary students.",

  kidsFrames: [
    {
      image: "/assets/culturals/kids_annual_day.jpg",
      caption: "Kids Annual Day Celebration",
      date: "21 Dec 2025",
      time: "6:00 PM",
    },
    {
      image: "/assets/culturals/kids_independence_day.jpg",
      caption: "Kids Independence Day Celebration",
      date: "15 Aug 2025",
      time: "9:00 AM",
    },
    {
      image: "/assets/culturals/kids_pongal.jpg",
      caption: "Kids Pongal Festival",
      date: "15 Jan 2026",
      time: "10:00 AM",
    },
  ],

  seniorFrames: [
    {
      image: "/assets/culturals/senior_annual_day.jpg",
      caption: "Higher Secondary Annual Day",
      date: "21 Dec 2025",
      time: "6:30 PM",
    },
    {
      image: "/assets/culturals/senior_independence_day.jpg",
      caption: "Higher Secondary Independence Day",
      date: "15 Aug 2025",
      time: "8:30 AM",
    },
    {
      image: "/assets/culturals/senior_pongal.jpg",
      caption: "Higher Secondary Pongal Celebration",
      date: "15 Jan 2026",
      time: "10:30 AM",
    },
  ],
};

/** Sports leaf — /activities/sports */
export const sports: ActivitySection = {
  title: "Sports & Physical Activities",
  intro:
    "Athletics, team games and the annual sports meet that build fitness and team spirit.",
  frames: [
    { image: IMG, caption: "Annual Sports Meet", date: "07 Feb 2026", time: "8:00 AM" },
    { image: IMG, caption: "Inter-house football final", date: "23 Nov 2025", time: "3:30 PM" },
    { image: IMG, caption: "District athletics meet", date: "11 Oct 2025", time: "7:00 AM" },
  ],
};

/** Extra Curricular Activities — /activities/extracurricular */
export const extracurricular: ActivitySection = {
  title: "Extra Curricular Activities",
  intro:
    "Encouraging students to discover their talents and develop confidence through music, dance, arts, fitness, and traditional activities.",

  frames: [
    {
      image: "/assets/extracurricular/keyboard_vocal.jpg",
      caption: "Keyboard & Vocal Training",
      date: "Every Week",
      time: "After School Hours",
    },
    {
      image: "/assets/extracurricular/classical_dance.jpg",
      caption: "Classical Dance",
      date: "Every Week",
      time: "After School Hours",
    },
    {
      image: "/assets/extracurricular/western_dance.jpg",
      caption: "Western Dance",
      date: "Every Week",
      time: "After School Hours",
    },
    {
      image: "/assets/extracurricular/yoga.jpg",
      caption: "Yoga",
      date: "Every Week",
      time: "Morning Session",
    },
    {
      image: "/assets/extracurricular/silambam.jpg",
      caption: "Silambam",
      date: "Every Week",
      time: "Evening Session",
    },
    {
      image: "/assets/extracurricular/art_craft.jpg",
      caption: "Art & Craft",
      date: "Every Week",
      time: "Activity Period",
    },
  ],
};