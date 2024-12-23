// Random name using Math methods

let myFriends = [
  'Adam',
  'Ali',
  'Mohammed',
  'Youssef',
  'Omar',
  'Fatima',
  'Malak',
  'Jana',
  'Nour',
  'Amina',
  'Nefertiti',
  'Cleopatra',
  'Tutankhamun',
  'Isis',
  'Osiris',
  'Cairo',
  'Nile',
  'Alexandria',
  'Giza',
  'Luxor',
  'أدم',
  'علي',
  'محمد',
  'يوسف',
  'عمر',
  'فاطمة',
  'ملك',
  'جانا',
  'نور',
  'أمينة',
  'نفرتيتي',
  'كليوباترا',
  'توت عنخ آمون',
  'إيزيس',
  'أوزوريس',
];


let result = Math.floor(Math.random() * myFriends.length);

console.log(myFriends[result]);
