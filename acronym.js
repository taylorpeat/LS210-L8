function acronym(string) {
  return string.replace(/\b[a-z]+[:,]?[-\s]?/gi, function(let) {
    return let[0].toUpperCase();
  });
}

acronym('Portable Network Graphics');                 // "PNG"
acronym('First In, First Out');                       // "FIFO"
acronym('PHP: HyperText Preprocessor');               // "PHP"
acronym('Complementary metal-oxide semiconductor');   // "CMOS"
acronym('Hyper-text Markup Language');                // "HTML"