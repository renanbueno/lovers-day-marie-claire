// Photo manifest — all paths point to files inside /public.
// Filenames preserved as uploaded by the user.

export const START_PHOTOS = [
  "/images/start/whatsapp_image_2026-06-09_at_21.45.25.jpeg",
  "/images/start/whatsapp_image_2026-06-11_at_20.07.14_2.jpeg",
];

export const TRAVEL_PHOTOS = [
  "/images/travel/whatsapp_image_2026-06-09_at_21.45.26_3.jpeg",
  "/images/travel/whatsapp_image_2026-06-11_at_20.07.06.jpeg",
  "/images/travel/whatsapp_image_2026-06-11_at_20.07.06_2.jpeg",
  "/images/travel/whatsapp_image_2026-06-11_at_20.07.07.jpeg",
  "/images/travel/whatsapp_image_2026-06-11_at_20.07.07_1.jpeg",
  "/images/travel/whatsapp_image_2026-06-11_at_20.07.07_2.jpeg",
  "/images/travel/whatsapp_image_2026-06-11_at_20.07.09_1.jpeg",
  "/images/travel/whatsapp_image_2026-06-11_at_20.07.13.jpeg",
  "/images/travel/whatsapp_image_2026-06-11_at_20.07.14.jpeg",
];

export const TOGETHER_PHOTOS = [
  "/images/together/whatsapp_image_2026-06-09_at_21.45.26.jpeg",
  "/images/together/whatsapp_image_2026-06-09_at_21.45.26_1.jpeg",
  "/images/together/whatsapp_image_2026-06-09_at_21.45.26_2.jpeg",
  "/images/together/whatsapp_image_2026-06-09_at_21.46.42.jpeg",
  "/images/together/whatsapp_image_2026-06-09_at_21.51.34_8.jpeg",
  "/images/together/whatsapp_image_2026-06-11_at_20.40.54.jpeg",
  "/images/together/whatsapp_image_2026-06-11_at_20.40.55.jpeg",
];

export const BEACH_PHOTOS = [
  "/images/beach/whatsapp_image_2026-06-09_at_21.45.27.jpeg",
  "/images/beach/whatsapp_image_2026-06-09_at_21.45.27_1.jpeg",
  "/images/beach/whatsapp_image_2026-06-09_at_21.51.34_6.jpeg",
  "/images/beach/whatsapp_image_2026-06-11_at_20.07.05.jpeg",
  "/images/beach/whatsapp_image_2026-06-11_at_20.07.10.jpeg",
  "/images/beach/whatsapp_image_2026-06-11_at_20.07.10_1.jpeg",
];

export const ROMANCE_PHOTOS = [
  "/images/romance/whatsapp_image_2026-06-11_at_20.07.06_1.jpeg",
  "/images/romance/whatsapp_image_2026-06-11_at_20.07.09.jpeg",
  "/images/romance/whatsapp_image_2026-06-11_at_20.07.11.jpeg",
  "/images/romance/whatsapp_image_2026-06-11_at_20.07.11_3.jpeg",
  "/images/romance/whatsapp_image_2026-06-11_at_20.07.11_4.jpeg",
  "/images/romance/whatsapp_image_2026-06-11_at_20.07.13_1.jpeg",
  "/images/romance/whatsapp_image_2026-06-11_at_20.07.14_1.jpeg",
];

// Audio tracks per slide. null = no music (envelope).
export const SLIDE_AUDIO = {
  0: null, // envelope (silent)
  1: "/audio/alianca_1.mp3", // cover ("Aliança" — abertura)
  2: "/audio/ben_e._king_-_stand_by_me_audio_0.mp3", // intro
  3: "/audio/tribalistas_-_velha_infancia.mp3", // stats
  4: "/audio/aonde_quer_que_eu_va.mp3", // travel (Paralamas)
  5: "/audio/miguel_-_sure_thing_official_video_0.mp3", // quiz
  6: "/audio/harry_styles_-_sign_of_the_times_official_video_0.mp3", // together
  7: "/audio/miguel_-_sure_thing_official_video_0.mp3", // interactive (continues from quiz vibe)
  8: "/audio/aonde_quer_que_eu_va.mp3", // beach (continues from travel)
  9: "/audio/jeff_buckley_-_lover_you_should've_come_over_audio_4.mp3", // romance
  10: "/audio/jeff_buckley_-_lover_you_should've_come_over_audio_4.mp3", // message (continues romance)
  11: "/audio/coldplay_-_sparks_lyrics_0.mp3", // end (Sparks - Coldplay)
};
