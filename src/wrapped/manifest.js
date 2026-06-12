// Photo manifest — all paths point to files inside /public.

export const START_PHOTOS = [
  "images/start/whatsapp_image_2026-06-11_at_20.07.14_2.jpeg", // portrait — usado no IntroSlide
];

export const TRAVEL_PHOTOS = [
  "images/travel/whatsapp_image_2026-06-09_at_21.45.26_3.jpeg",
  "images/travel/whatsapp_image_2026-06-11_at_20.07.06.jpeg",
  "images/travel/whatsapp_image_2026-06-11_at_20.07.06_2.jpeg",
  "images/travel/whatsapp_image_2026-06-11_at_20.07.07.jpeg",
  "images/travel/whatsapp_image_2026-06-11_at_20.07.07_1.jpeg",
  "images/travel/whatsapp_image_2026-06-11_at_20.07.07_2.jpeg",
  "images/travel/whatsapp_image_2026-06-11_at_20.07.09_1.jpeg",
  "images/travel/whatsapp_image_2026-06-11_at_20.07.13.jpeg",
  "images/travel/whatsapp_image_2026-06-11_at_20.07.14.jpeg",
];

export const TOGETHER_PHOTOS = [
  "images/together/whatsapp_image_2026-06-09_at_21.45.26.jpeg",
  "images/together/whatsapp_image_2026-06-09_at_21.45.26_1.jpeg",
  "images/together/whatsapp_image_2026-06-09_at_21.45.26_2.jpeg",
  "images/together/whatsapp_image_2026-06-09_at_21.46.42.jpeg",
  "images/together/whatsapp_image_2026-06-09_at_21.51.34_8.jpeg",
  "images/together/whatsapp_image_2026-06-11_at_20.40.54.jpeg",
  "images/together/whatsapp_image_2026-06-11_at_20.40.55.jpeg",
];

export const BEACH_PHOTOS = [
  "images/beach/whatsapp_image_2026-06-09_at_21.45.27.jpeg",
  "images/beach/whatsapp_image_2026-06-09_at_21.45.27_1.jpeg",
  "images/beach/whatsapp_image_2026-06-09_at_21.51.34_6.jpeg",
  "images/beach/whatsapp_image_2026-06-11_at_20.07.05.jpeg",
  "images/beach/whatsapp_image_2026-06-11_at_20.07.10.jpeg",
  "images/beach/whatsapp_image_2026-06-11_at_20.07.10_1.jpeg",
];

export const ROMANCE_PHOTOS = [
  "images/romance/whatsapp_image_2026-06-11_at_20.07.06_1.jpeg",
  "images/romance/whatsapp_image_2026-06-11_at_20.07.09.jpeg",
  "images/romance/whatsapp_image_2026-06-11_at_20.07.11.jpeg",
  "images/romance/whatsapp_image_2026-06-11_at_20.07.11_3.jpeg",
  "images/romance/whatsapp_image_2026-06-11_at_20.07.11_4.jpeg",
  "images/romance/whatsapp_image_2026-06-11_at_20.07.13_1.jpeg",
  "images/romance/whatsapp_image_2026-06-11_at_20.07.14_1.jpeg",
];

// ───────────────────────────────────────────────────────────────────────────────
// Trilha sonora por slide — agora com título visível tipo Instagram.
// ───────────────────────────────────────────────────────────────────────────────
export const SONGS = {
  sombr: {
    url: "audio/sombr_back_to_friends.mp3",
    title: "back to friends",
    artist: "sombr",
  },
  alianca: {
    url: "audio/alianca_1.mp3",
    title: "Aliança",
    artist: "Tribalistas",
  },
  standByMe: {
    url: "audio/ben_e._king_-_stand_by_me_audio_0.mp3",
    title: "Stand By Me",
    artist: "Ben E. King",
  },
  velhaInfancia: {
    url: "audio/tribalistas_-_velha_infancia.mp3",
    title: "Velha Infância",
    artist: "Tribalistas",
  },
  aondeQuer: {
    url: "audio/aonde_quer_que_eu_va.mp3",
    title: "Aonde Quer Que Eu Vá",
    artist: "Os Paralamas do Sucesso",
  },
  sureThing: {
    url: "audio/miguel_-_sure_thing_official_video_0.mp3",
    title: "Sure Thing",
    artist: "Miguel",
  },
  signOfTheTimes: {
    url: "audio/harry_styles_-_sign_of_the_times_official_video_0.mp3",
    title: "Sign of the Times",
    artist: "Harry Styles",
  },
  lover: {
    url: "audio/jeff_buckley_-_lover_you_should've_come_over_audio_4.mp3",
    title: "Lover, You Should've Come Over",
    artist: "Jeff Buckley",
  },
  sparks: {
    url: "audio/coldplay_-_sparks_lyrics_0.mp3",
    title: "Sparks",
    artist: "Coldplay",
  },
  chasingPavements: {
    url: "audio/adele_-_chasing_pavements_0.mp3",
    title: "Chasing Pavements",
    artist: "Adele",
  },
  selfAware: {
    url: "audio/temper_city_-_self_aware_official_video.mp3",
    title: "Self Aware",
    artist: "Temper City",
  },
};

// Slide → song key. null = no music.
export const SLIDE_SONG_KEY = {
  0: null,            // Envelope (silent)
  1: "sombr",         // Cover
  2: "alianca",       // Intro (onde tudo começou)
  3: "standByMe",     // Stats
  4: "chasingPavements", // Travel
  5: "sureThing",     // Quiz
  6: "velhaInfancia", // Together
  7: "signOfTheTimes",// Interactive
  8: "aondeQuer",     // Beach (continua de Travel)
  9: "lover",         // Romance
  10: "selfAware",    // Message
  11: "sparks",       // End
};

// Duração visual da barra de progresso (segundos) por slide.
// Ao terminar, a barra para em 100% e ESPERA o usuário interagir.
export const SLIDE_DURATIONS = {
  1: 30,   // Cover
  2: 30,   // Intro
  3: 30,   // Stats
  4: 30,   // Travel
  5: 30,   // Quiz
  6: 30,   // Together
  7: 30,   // Interactive
  8: 30,   // Beach
  9: 30,   // Romance
  10: 30,  // Message
};

// Conveniência
export const SLIDE_AUDIO = Object.fromEntries(
  Object.entries(SLIDE_SONG_KEY).map(([k, v]) => [k, v ? SONGS[v].url : null]),
);

export const SLIDE_SONG = Object.fromEntries(
  Object.entries(SLIDE_SONG_KEY).map(([k, v]) => [k, v ? SONGS[v] : null]),
);
