var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



/* GET home page. */



const userSchema = new mongoose.Schema({
  id: Number,
  bookname: String,
  author: String,
  image: String,
  link: String
})

const book = mongoose.model('book', userSchema)


router.get('/', function(req, res, next) {
  book.find({}, (err, books)=>{
    if (err){
      return res.status(500).json({message: err})
    }
    else if(books.length === 0){
      return res.status(404).json({message: 'No book found'})
    }
    else{
      return res.status(200).send(books)
    }
  })
 });

 /* Post user login details */










/* Find Books */




/* Add New Book. */

// book.create({
//   id: 1,
//   bookname: "One Last Stop",
//   author: "Casey McQuiston",
//   image: "https://images-na.ssl-images-amazon.com/images/I/41uORm5aOQS._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/1250244498/ref=s9_acsd_hps_bw_c2_x_0_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=ARA36EXCVDQF06YMBE21&pf_rd_t=101&pf_rd_p=471146b1-73a8-45e2-aa6e-e79125421657&pf_rd_i=283155"
// });

// book.create({
//   id: 2,
//   bookname: "Haven Point: A NovelHaven Point: A Novel",
//   author: "Virginia Hume",
//   image: "https://images-na.ssl-images-amazon.com/images/I/51n4vZzOsSS._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/1250266521/ref=s9_acsd_hps_bw_c2_x_2_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=ARA36EXCVDQF06YMBE21&pf_rd_t=101&pf_rd_p=471146b1-73a8-45e2-aa6e-e79125421657&pf_rd_i=283155"
// });

// book.create({
//   id: 3,
//   bookname: "Ridgeline: A Novel Hardcover",
//   author: "Michael Punke",
//   image: "https://images-na.ssl-images-amazon.com/images/I/41HbeJH0GtL._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/1250310466/ref=s9_acsd_hps_bw_c2_x_4_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=ARA36EXCVDQF06YMBE21&pf_rd_t=101&pf_rd_p=471146b1-73a8-45e2-aa6e-e79125421657&pf_rd_i=283155"
// });


// book.create({
//   id: 4,
//   bookname: "Malibu Rising: A Novel",
//   author: "Taylor Jenkins Reid",
//   image: "https://images-na.ssl-images-amazon.com/images/I/518bm5DN-VS._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/1524798657/ref=s9_acsd_ri_bw_c2_x_4_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-10&pf_rd_r=ARA36EXCVDQF06YMBE21&pf_rd_t=101&pf_rd_p=ec1034ac-997c-47fd-8075-3a3a4b4c3aa3&pf_rd_i=283155"
// });

// book.create({
//   id: 5,
//   bookname: "Oh, the Places You'll GO!",
//   author: "Dr. Seuss",
//   image: "https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/0679805273/ref=s9_acsd_ri_bw_c2_x_1_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-12&pf_rd_r=ARA36EXCVDQF06YMBE21&pf_rd_t=101&pf_rd_p=912614e3-2b52-463a-bdbb-07c9749935a7&pf_rd_i=283155"
// });

// book.create({
//   id: 6,
//   bookname: "Goodnight Moon",
//   author: "Margaret Wise Brown, Clement Hurd",
//   image: "https://images-na.ssl-images-amazon.com/images/I/51Ix49rxgtL._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/0694003611/ref=s9_acsd_ri_bw_c2_x_2_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-12&pf_rd_r=ARA36EXCVDQF06YMBE21&pf_rd_t=101&pf_rd_p=912614e3-2b52-463a-bdbb-07c9749935a7&pf_rd_i=283155"
// });


// book.create({
//   id: 7,
//   bookname: "One Two Three: A Novel",
//   author: "Laurie Frankel",
//   image: "https://images-na.ssl-images-amazon.com/images/I/41R4c7vmMXS._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/1250236770/ref=s9_acsd_hps_bw_c2_x_7_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=ARA36EXCVDQF06YMBE21&pf_rd_t=101&pf_rd_p=471146b1-73a8-45e2-aa6e-e79125421657&pf_rd_i=283155"
// });

// book.create({
//   id: 8,
//   bookname: "Ariadne: A Novel",
//   author: "Jennifer Saint",
//   image: "https://images-na.ssl-images-amazon.com/images/I/41AvaBmddFL._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/125077358X/ref=s9_acsd_hps_bw_c2_x_8_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=CJGV5RBZC89MX8NEC1RZ&pf_rd_t=101&pf_rd_p=471146b1-73a8-45e2-aa6e-e79125421657&pf_rd_i=283155"
// });

// book.create({
//   id: 9,
//   bookname: "She Memes Well: Essays",
//   author: "Quinta Brunson",
//   image: "https://images-na.ssl-images-amazon.com/images/I/51Nc6fgrLsL._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/1328638987/ref=s9_acsd_hps_bw_c2_x_9_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=CJGV5RBZC89MX8NEC1RZ&pf_rd_t=101&pf_rd_p=471146b1-73a8-45e2-aa6e-e79125421657&pf_rd_i=283155"
// });

// book.create({
//   id: 10,
//   bookname: "The Japanese Art of the CocktailThe Japanese Art of the Cocktail",
//   author: "Masahiro Urushido, Michael Anstendig",
//   image: "https://images-na.ssl-images-amazon.com/images/I/516mR2BJoUL._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/0358362024/ref=s9_acsd_hps_bw_c2_x_11_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=MTR9TFMPXY1MDZ45ZW6E&pf_rd_t=101&pf_rd_p=471146b1-73a8-45e2-aa6e-e79125421657&pf_rd_i=283155"
// });

// book.create({
//   id: 11,
//   bookname: "The Last Thing He Told Me: A Novel",
//   author: "Laura Dave",
//   image: "https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/1501171348/ref=s9_acsd_ri_bw_c2_x_6_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-10&pf_rd_r=MTR9TFMPXY1MDZ45ZW6E&pf_rd_t=101&pf_rd_p=ec1034ac-997c-47fd-8075-3a3a4b4c3aa3&pf_rd_i=283155"
// });

// book.create({
//   id: 12,
//   bookname: "In: A Graphic Novel",
//   author: "MWill McPhail",
//   image: "https://images-na.ssl-images-amazon.com/images/I/41xQGlxsUrL._AC_SX184_.jpg",
//   link: "https://www.amazon.com/dp/1250310466/ref=s9_acsd_hps_bw_c2_x_4_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=ARA36EXCVDQF06YMBE21&pf_rd_t=101&pf_rd_p=471146b1-73a8-45e2-aa6e-e79125421657&pf_rd_i=283155"
// });

module.exports = router;
