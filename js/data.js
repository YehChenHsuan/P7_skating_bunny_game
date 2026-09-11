/**
 * ALICE ESL Phonics P7 - 小兔冰上拼讀大冒險題庫
 * 課本學習範圍：Page 04 - 12
 * 主題：Classroom Rules & R-Controlled Vowels
 */

window.BOOK_ID = "P7";
const P7_VOCABULARY = [
  {
    "id": "alphabet",
    "word": "alphabet",
    "zh": "alphabet",
    "image": "P7_flashcards_images/P7_alphabet.webp",
    "audioEn": "P7_flashcards_audios/P7_alphabet.mp3",
    "audioZh": "P7_flashcards_audios/P7_alphabet_zh.mp3"
  },
  {
    "id": "be quiet",
    "word": "be quiet",
    "zh": "be quiet",
    "image": "P7_flashcards_images/P7_be quiet.webp",
    "audioEn": "P7_flashcards_audios/P7_be quiet.mp3",
    "audioZh": "P7_flashcards_audios/P7_be quiet_zh.mp3"
  },
  {
    "id": "bird",
    "word": "bird",
    "zh": "bird",
    "image": "P7_flashcards_images/P7_bird.webp",
    "audioEn": "P7_flashcards_audios/P7_bird.mp3",
    "audioZh": "P7_flashcards_audios/P7_bird_zh.mp3"
  },
  {
    "id": "board",
    "word": "board",
    "zh": "board",
    "image": "P7_flashcards_images/P7_board.webp",
    "audioEn": "P7_flashcards_audios/P7_board.mp3",
    "audioZh": "P7_flashcards_audios/P7_board_zh.mp3"
  },
  {
    "id": "bookcase",
    "word": "bookcase",
    "zh": "bookcase",
    "image": "P7_flashcards_images/P7_bookcase.webp",
    "audioEn": "P7_flashcards_audios/P7_bookcase.mp3",
    "audioZh": "P7_flashcards_audios/P7_bookcase_zh.mp3"
  },
  {
    "id": "books",
    "word": "books",
    "zh": "books",
    "image": "P7_flashcards_images/P7_books.webp",
    "audioEn": "P7_flashcards_audios/P7_books.mp3",
    "audioZh": "P7_flashcards_audios/P7_books_zh.mp3"
  },
  {
    "id": "car",
    "word": "car",
    "zh": "car",
    "image": "P7_flashcards_images/P7_car.webp",
    "audioEn": "P7_flashcards_audios/P7_car.mp3",
    "audioZh": "P7_flashcards_audios/P7_car_zh.mp3"
  },
  {
    "id": "chair",
    "word": "chair",
    "zh": "chair",
    "image": "P7_flashcards_images/P7_chair.webp",
    "audioEn": "P7_flashcards_audios/P7_chair.mp3",
    "audioZh": "P7_flashcards_audios/P7_chair_zh.mp3"
  },
  {
    "id": "church",
    "word": "church",
    "zh": "church",
    "image": "P7_flashcards_images/P7_church.webp",
    "audioEn": "P7_flashcards_audios/P7_church.mp3",
    "audioZh": "P7_flashcards_audios/P7_church_zh.mp3"
  },
  {
    "id": "close book",
    "word": "close book",
    "zh": "close book",
    "image": "P7_flashcards_images/P7_close book.webp",
    "audioEn": "P7_flashcards_audios/P7_close book.mp3",
    "audioZh": "P7_flashcards_audios/P7_close book_zh.mp3"
  },
  {
    "id": "corn",
    "word": "corn",
    "zh": "corn",
    "image": "P7_flashcards_images/P7_corn.webp",
    "audioEn": "P7_flashcards_audios/P7_corn.mp3",
    "audioZh": "P7_flashcards_audios/P7_corn_zh.mp3"
  },
  {
    "id": "desk",
    "word": "desk",
    "zh": "desk",
    "image": "P7_flashcards_images/P7_desk.webp",
    "audioEn": "P7_flashcards_audios/P7_desk.mp3",
    "audioZh": "P7_flashcards_audios/P7_desk_zh.mp3"
  },
  {
    "id": "dolphin",
    "word": "dolphin",
    "zh": "dolphin",
    "image": "P7_flashcards_images/P7_dolphin.webp",
    "audioEn": "P7_flashcards_audios/P7_dolphin.mp3",
    "audioZh": "P7_flashcards_audios/P7_dolphin_zh.mp3"
  },
  {
    "id": "door",
    "word": "door",
    "zh": "door",
    "image": "P7_flashcards_images/P7_door.webp",
    "audioEn": "P7_flashcards_audios/P7_door.mp3",
    "audioZh": "P7_flashcards_audios/P7_door_zh.mp3"
  },
  {
    "id": "doorbell",
    "word": "doorbell",
    "zh": "doorbell",
    "image": "P7_flashcards_images/P7_doorbell.webp",
    "audioEn": "P7_flashcards_audios/P7_doorbell.mp3",
    "audioZh": "P7_flashcards_audios/P7_doorbell_zh.mp3"
  },
  {
    "id": "elephant",
    "word": "elephant",
    "zh": "elephant",
    "image": "P7_flashcards_images/P7_elephant.webp",
    "audioEn": "P7_flashcards_audios/P7_elephant.mp3",
    "audioZh": "P7_flashcards_audios/P7_elephant_zh.mp3"
  },
  {
    "id": "eraser",
    "word": "eraser",
    "zh": "eraser",
    "image": "P7_flashcards_images/P7_eraser.webp",
    "audioEn": "P7_flashcards_audios/P7_eraser.mp3",
    "audioZh": "P7_flashcards_audios/P7_eraser_zh.mp3"
  },
  {
    "id": "far",
    "word": "far",
    "zh": "far",
    "image": "P7_flashcards_images/P7_far.webp",
    "audioEn": "P7_flashcards_audios/P7_far.mp3",
    "audioZh": "P7_flashcards_audios/P7_far_zh.mp3"
  },
  {
    "id": "first",
    "word": "first",
    "zh": "first",
    "image": "P7_flashcards_images/P7_first.webp",
    "audioEn": "P7_flashcards_audios/P7_first.mp3",
    "audioZh": "P7_flashcards_audios/P7_first_zh.mp3"
  },
  {
    "id": "floor",
    "word": "floor",
    "zh": "floor",
    "image": "P7_flashcards_images/P7_floor.webp",
    "audioEn": "P7_flashcards_audios/P7_floor.mp3",
    "audioZh": "P7_flashcards_audios/P7_floor_zh.mp3"
  },
  {
    "id": "forty",
    "word": "forty",
    "zh": "forty",
    "image": "P7_flashcards_images/P7_forty.webp",
    "audioEn": "P7_flashcards_audios/P7_forty.mp3",
    "audioZh": "P7_flashcards_audios/P7_forty_zh.mp3"
  },
  {
    "id": "girl",
    "word": "girl",
    "zh": "girl",
    "image": "P7_flashcards_images/P7_girl.webp",
    "audioEn": "P7_flashcards_audios/P7_girl.mp3",
    "audioZh": "P7_flashcards_audios/P7_girl_zh.mp3"
  },
  {
    "id": "glue",
    "word": "glue",
    "zh": "glue",
    "image": "P7_flashcards_images/P7_glue.webp",
    "audioEn": "P7_flashcards_audios/P7_glue.mp3",
    "audioZh": "P7_flashcards_audios/P7_glue_zh.mp3"
  },
  {
    "id": "graph",
    "word": "graph",
    "zh": "graph",
    "image": "P7_flashcards_images/P7_graph.webp",
    "audioEn": "P7_flashcards_audios/P7_graph.mp3",
    "audioZh": "P7_flashcards_audios/P7_graph_zh.mp3"
  },
  {
    "id": "hard",
    "word": "hard",
    "zh": "hard",
    "image": "P7_flashcards_images/P7_hard.webp",
    "audioEn": "P7_flashcards_audios/P7_hard.mp3",
    "audioZh": "P7_flashcards_audios/P7_hard_zh.mp3"
  },
  {
    "id": "horse",
    "word": "horse",
    "zh": "horse",
    "image": "P7_flashcards_images/P7_horse.webp",
    "audioEn": "P7_flashcards_audios/P7_horse.mp3",
    "audioZh": "P7_flashcards_audios/P7_horse_zh.mp3"
  },
  {
    "id": "jar",
    "word": "jar",
    "zh": "jar",
    "image": "P7_flashcards_images/P7_jar.webp",
    "audioEn": "P7_flashcards_audios/P7_jar.mp3",
    "audioZh": "P7_flashcards_audios/P7_jar_zh.mp3"
  },
  {
    "id": "knee",
    "word": "knee",
    "zh": "knee",
    "image": "P7_flashcards_images/P7_knee.webp",
    "audioEn": "P7_flashcards_audios/P7_knee.mp3",
    "audioZh": "P7_flashcards_audios/P7_knee_zh.mp3"
  },
  {
    "id": "knife",
    "word": "knife",
    "zh": "knife",
    "image": "P7_flashcards_images/P7_knife.webp",
    "audioEn": "P7_flashcards_audios/P7_knife.mp3",
    "audioZh": "P7_flashcards_audios/P7_knife_zh.mp3"
  },
  {
    "id": "knight",
    "word": "knight",
    "zh": "knight",
    "image": "P7_flashcards_images/P7_knight.webp",
    "audioEn": "P7_flashcards_audios/P7_knight.mp3",
    "audioZh": "P7_flashcards_audios/P7_knight_zh.mp3"
  },
  {
    "id": "knock",
    "word": "knock",
    "zh": "knock",
    "image": "P7_flashcards_images/P7_knock.webp",
    "audioEn": "P7_flashcards_audios/P7_knock.mp3",
    "audioZh": "P7_flashcards_audios/P7_knock_zh.mp3"
  },
  {
    "id": "knot",
    "word": "knot",
    "zh": "knot",
    "image": "P7_flashcards_images/P7_knot.webp",
    "audioEn": "P7_flashcards_audios/P7_knot.mp3",
    "audioZh": "P7_flashcards_audios/P7_knot_zh.mp3"
  },
  {
    "id": "know",
    "word": "know",
    "zh": "know",
    "image": "P7_flashcards_images/P7_know.webp",
    "audioEn": "P7_flashcards_audios/P7_know.mp3",
    "audioZh": "P7_flashcards_audios/P7_know_zh.mp3"
  },
  {
    "id": "letter",
    "word": "letter",
    "zh": "letter",
    "image": "P7_flashcards_images/P7_letter.webp",
    "audioEn": "P7_flashcards_audios/P7_letter.mp3",
    "audioZh": "P7_flashcards_audios/P7_letter_zh.mp3"
  },
  {
    "id": "listen",
    "word": "listen",
    "zh": "listen",
    "image": "P7_flashcards_images/P7_listen.webp",
    "audioEn": "P7_flashcards_audios/P7_listen.mp3",
    "audioZh": "P7_flashcards_audios/P7_listen_zh.mp3"
  },
  {
    "id": "make a line",
    "word": "make a line",
    "zh": "make a line",
    "image": "P7_flashcards_images/P7_make a line.webp",
    "audioEn": "P7_flashcards_audios/P7_make a line.mp3",
    "audioZh": "P7_flashcards_audios/P7_make a line_zh.mp3"
  },
  {
    "id": "marker",
    "word": "marker",
    "zh": "marker",
    "image": "P7_flashcards_images/P7_marker.webp",
    "audioEn": "P7_flashcards_audios/P7_marker.mp3",
    "audioZh": "P7_flashcards_audios/P7_marker_zh.mp3"
  },
  {
    "id": "moor",
    "word": "moor",
    "zh": "moor",
    "image": "P7_flashcards_images/P7_moor.webp",
    "audioEn": "P7_flashcards_audios/P7_moor.mp3",
    "audioZh": "P7_flashcards_audios/P7_moor_zh.mp3"
  },
  {
    "id": "morning",
    "word": "morning",
    "zh": "morning",
    "image": "P7_flashcards_images/P7_morning.webp",
    "audioEn": "P7_flashcards_audios/P7_morning.mp3",
    "audioZh": "P7_flashcards_audios/P7_morning_zh.mp3"
  },
  {
    "id": "mother",
    "word": "mother",
    "zh": "mother",
    "image": "P7_flashcards_images/P7_mother.webp",
    "audioEn": "P7_flashcards_audios/P7_mother.mp3",
    "audioZh": "P7_flashcards_audios/P7_mother_zh.mp3"
  },
  {
    "id": "nurse",
    "word": "nurse",
    "zh": "nurse",
    "image": "P7_flashcards_images/P7_nurse.webp",
    "audioEn": "P7_flashcards_audios/P7_nurse.mp3",
    "audioZh": "P7_flashcards_audios/P7_nurse_zh.mp3"
  },
  {
    "id": "open book",
    "word": "open book",
    "zh": "open book",
    "image": "P7_flashcards_images/P7_open book.webp",
    "audioEn": "P7_flashcards_audios/P7_open book.mp3",
    "audioZh": "P7_flashcards_audios/P7_open book_zh.mp3"
  },
  {
    "id": "orange",
    "word": "orange",
    "zh": "orange",
    "image": "P7_flashcards_images/P7_orange.webp",
    "audioEn": "P7_flashcards_audios/P7_orange.mp3",
    "audioZh": "P7_flashcards_audios/P7_orange_zh.mp3"
  },
  {
    "id": "outdoor",
    "word": "outdoor",
    "zh": "outdoor",
    "image": "P7_flashcards_images/P7_outdoor.webp",
    "audioEn": "P7_flashcards_audios/P7_outdoor.mp3",
    "audioZh": "P7_flashcards_audios/P7_outdoor_zh.mp3"
  },
  {
    "id": "park",
    "word": "park",
    "zh": "park",
    "image": "P7_flashcards_images/P7_park.webp",
    "audioEn": "P7_flashcards_audios/P7_park.mp3",
    "audioZh": "P7_flashcards_audios/P7_park_zh.mp3"
  },
  {
    "id": "pen",
    "word": "pen",
    "zh": "pen",
    "image": "P7_flashcards_images/P7_pen.webp",
    "audioEn": "P7_flashcards_audios/P7_pen.mp3",
    "audioZh": "P7_flashcards_audios/P7_pen_zh.mp3"
  },
  {
    "id": "pencil",
    "word": "pencil",
    "zh": "pencil",
    "image": "P7_flashcards_images/P7_pencil.webp",
    "audioEn": "P7_flashcards_audios/P7_pencil.mp3",
    "audioZh": "P7_flashcards_audios/P7_pencil_zh.mp3"
  },
  {
    "id": "pharmacy",
    "word": "pharmacy",
    "zh": "pharmacy",
    "image": "P7_flashcards_images/P7_pharmacy.webp",
    "audioEn": "P7_flashcards_audios/P7_pharmacy.mp3",
    "audioZh": "P7_flashcards_audios/P7_pharmacy_zh.mp3"
  },
  {
    "id": "poor",
    "word": "poor",
    "zh": "poor",
    "image": "P7_flashcards_images/P7_poor.webp",
    "audioEn": "P7_flashcards_audios/P7_poor.mp3",
    "audioZh": "P7_flashcards_audios/P7_poor_zh.mp3"
  },
  {
    "id": "purple",
    "word": "purple",
    "zh": "purple",
    "image": "P7_flashcards_images/P7_purple.webp",
    "audioEn": "P7_flashcards_audios/P7_purple.mp3",
    "audioZh": "P7_flashcards_audios/P7_purple_zh.mp3"
  },
  {
    "id": "purse",
    "word": "purse",
    "zh": "purse",
    "image": "P7_flashcards_images/P7_purse.webp",
    "audioEn": "P7_flashcards_audios/P7_purse.mp3",
    "audioZh": "P7_flashcards_audios/P7_purse_zh.mp3"
  },
  {
    "id": "question mark",
    "word": "question mark",
    "zh": "question mark",
    "image": "P7_flashcards_images/P7_question mark.webp",
    "audioEn": "P7_flashcards_audios/P7_question mark.mp3",
    "audioZh": "P7_flashcards_audios/P7_question mark_zh.mp3"
  },
  {
    "id": "raise hand",
    "word": "raise hand",
    "zh": "raise hand",
    "image": "P7_flashcards_images/P7_raise hand.webp",
    "audioEn": "P7_flashcards_audios/P7_raise hand.mp3",
    "audioZh": "P7_flashcards_audios/P7_raise hand_zh.mp3"
  },
  {
    "id": "ruler",
    "word": "ruler",
    "zh": "ruler",
    "image": "P7_flashcards_images/P7_ruler.webp",
    "audioEn": "P7_flashcards_audios/P7_ruler.mp3",
    "audioZh": "P7_flashcards_audios/P7_ruler_zh.mp3"
  },
  {
    "id": "shirt",
    "word": "shirt",
    "zh": "shirt",
    "image": "P7_flashcards_images/P7_shirt.webp",
    "audioEn": "P7_flashcards_audios/P7_shirt.mp3",
    "audioZh": "P7_flashcards_audios/P7_shirt_zh.mp3"
  },
  {
    "id": "sit down",
    "word": "sit down",
    "zh": "sit down",
    "image": "P7_flashcards_images/P7_sit down.webp",
    "audioEn": "P7_flashcards_audios/P7_sit down.mp3",
    "audioZh": "P7_flashcards_audios/P7_sit down_zh.mp3"
  },
  {
    "id": "skirt",
    "word": "skirt",
    "zh": "skirt",
    "image": "P7_flashcards_images/P7_skirt.webp",
    "audioEn": "P7_flashcards_audios/P7_skirt.mp3",
    "audioZh": "P7_flashcards_audios/P7_skirt_zh.mp3"
  },
  {
    "id": "stand up",
    "word": "stand up",
    "zh": "stand up",
    "image": "P7_flashcards_images/P7_stand up.webp",
    "audioEn": "P7_flashcards_audios/P7_stand up.mp3",
    "audioZh": "P7_flashcards_audios/P7_stand up_zh.mp3"
  },
  {
    "id": "stir",
    "word": "stir",
    "zh": "stir",
    "image": "P7_flashcards_images/P7_stir.webp",
    "audioEn": "P7_flashcards_audios/P7_stir.mp3",
    "audioZh": "P7_flashcards_audios/P7_stir_zh.mp3"
  },
  {
    "id": "store",
    "word": "store",
    "zh": "store",
    "image": "P7_flashcards_images/P7_store.webp",
    "audioEn": "P7_flashcards_audios/P7_store.mp3",
    "audioZh": "P7_flashcards_audios/P7_store_zh.mp3"
  },
  {
    "id": "summer",
    "word": "summer",
    "zh": "summer",
    "image": "P7_flashcards_images/P7_summer.webp",
    "audioEn": "P7_flashcards_audios/P7_summer.mp3",
    "audioZh": "P7_flashcards_audios/P7_summer_zh.mp3"
  },
  {
    "id": "surf",
    "word": "surf",
    "zh": "surf",
    "image": "P7_flashcards_images/P7_surf.webp",
    "audioEn": "P7_flashcards_audios/P7_surf.mp3",
    "audioZh": "P7_flashcards_audios/P7_surf_zh.mp3"
  },
  {
    "id": "telephone",
    "word": "telephone",
    "zh": "telephone",
    "image": "P7_flashcards_images/P7_telephone.webp",
    "audioEn": "P7_flashcards_audios/P7_telephone.mp3",
    "audioZh": "P7_flashcards_audios/P7_telephone_zh.mp3"
  },
  {
    "id": "tower",
    "word": "tower",
    "zh": "tower",
    "image": "P7_flashcards_images/P7_tower.webp",
    "audioEn": "P7_flashcards_audios/P7_tower.mp3",
    "audioZh": "P7_flashcards_audios/P7_tower_zh.mp3"
  },
  {
    "id": "winter",
    "word": "winter",
    "zh": "winter",
    "image": "P7_flashcards_images/P7_winter.webp",
    "audioEn": "P7_flashcards_audios/P7_winter.mp3",
    "audioZh": "P7_flashcards_audios/P7_winter_zh.mp3"
  },
  {
    "id": "wrap",
    "word": "wrap",
    "zh": "wrap",
    "image": "P7_flashcards_images/P7_wrap.webp",
    "audioEn": "P7_flashcards_audios/P7_wrap.mp3",
    "audioZh": "P7_flashcards_audios/P7_wrap_zh.mp3"
  },
  {
    "id": "wreath",
    "word": "wreath",
    "zh": "wreath",
    "image": "P7_flashcards_images/P7_wreath.webp",
    "audioEn": "P7_flashcards_audios/P7_wreath.mp3",
    "audioZh": "P7_flashcards_audios/P7_wreath_zh.mp3"
  },
  {
    "id": "wrinkle",
    "word": "wrinkle",
    "zh": "wrinkle",
    "image": "P7_flashcards_images/P7_wrinkle.webp",
    "audioEn": "P7_flashcards_audios/P7_wrinkle.mp3",
    "audioZh": "P7_flashcards_audios/P7_wrinkle_zh.mp3"
  },
  {
    "id": "wrist",
    "word": "wrist",
    "zh": "wrist",
    "image": "P7_flashcards_images/P7_wrist.webp",
    "audioEn": "P7_flashcards_audios/P7_wrist.mp3",
    "audioZh": "P7_flashcards_audios/P7_wrist_zh.mp3"
  },
  {
    "id": "write",
    "word": "write",
    "zh": "write",
    "image": "P7_flashcards_images/P7_write.webp",
    "audioEn": "P7_flashcards_audios/P7_write.mp3",
    "audioZh": "P7_flashcards_audios/P7_write_zh.mp3"
  },
  {
    "id": "wrong",
    "word": "wrong",
    "zh": "wrong",
    "image": "P7_flashcards_images/P7_wrong.webp",
    "audioEn": "P7_flashcards_audios/P7_wrong.mp3",
    "audioZh": "P7_flashcards_audios/P7_wrong_zh.mp3"
  },
  {
    "id": "yogurt",
    "word": "yogurt",
    "zh": "yogurt",
    "image": "P7_flashcards_images/P7_yogurt.webp",
    "audioEn": "P7_flashcards_audios/P7_yogurt.mp3",
    "audioZh": "P7_flashcards_audios/P7_yogurt_zh.mp3"
  },
  {
    "id": "you",
    "word": "you",
    "zh": "you",
    "image": "P7_flashcards_images/P7_you.webp",
    "audioEn": "P7_flashcards_audios/P7_you.mp3",
    "audioZh": "P7_flashcards_audios/P7_you_zh.mp3"
  }
];

// 自然發音/首音分組（對應課本 Page 04 - 12）
const PHONICS_GROUPS = {
  "ar": [
    "car",
    "far",
    "hard",
    "jar",
    "park"
  ],
  "er": [
    "letter",
    "mother",
    "ruler",
    "summer",
    "tower",
    "winter",
    "eraser",
    "marker"
  ],
  "ir_ur": [
    "bird",
    "girl",
    "stir",
    "nurse",
    "purple",
    "purse",
    "surf"
  ]
};

// 課文動作與問答情境題庫
const ANIMAL_ACTION_QUESTIONS = [
  {
    "sentence": "The teacher says: Please stand up and sing.",
    "question": "What does the teacher say?",
    "ttsPrompt": "The teacher says: Please stand up and sing. What does the teacher say?",
    "options": [
      "stand up",
      "sit down",
      "be quiet"
    ],
    "correct": "stand up"
  },
  {
    "sentence": "Please sit down on your wooden chair.",
    "question": "Where should you sit down?",
    "ttsPrompt": "Please sit down on your wooden chair. Where should you sit down?",
    "options": [
      "chair",
      "desk",
      "door"
    ],
    "correct": "chair"
  },
  {
    "sentence": "Be quiet when reading a story in the library.",
    "question": "What is the classroom rule?",
    "ttsPrompt": "Be quiet when reading a story in the library. What is the rule?",
    "options": [
      "be quiet",
      "stand up",
      "make a line"
    ],
    "correct": "be quiet"
  },
  {
    "sentence": "Use your yellow ruler to measure the long line.",
    "question": "What tool do you use to measure?",
    "ttsPrompt": "Use your yellow ruler to measure the long line. What tool do you use?",
    "options": [
      "ruler",
      "eraser",
      "pen"
    ],
    "correct": "ruler"
  },
  {
    "sentence": "Open your book and look at the lesson.",
    "question": "What should you open?",
    "ttsPrompt": "Open your book and look at the lesson. What should you open?",
    "options": [
      "open book",
      "close book",
      "raise hand"
    ],
    "correct": "open book"
  }
];

// 全域掛載相容變數
if (typeof window !== "undefined") {
  window.P1_VOCABULARY = P7_VOCABULARY;
  window.P7_VOCABULARY = P7_VOCABULARY;
  window.PHONICS_GROUPS = PHONICS_GROUPS;
  window.ANIMAL_ACTION_QUESTIONS = ANIMAL_ACTION_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_VOCABULARY: P7_VOCABULARY,
    P7_VOCABULARY,
    PHONICS_GROUPS,
    ANIMAL_ACTION_QUESTIONS
  };
}
