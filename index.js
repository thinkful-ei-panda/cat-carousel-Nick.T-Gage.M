// eslint-disable-next-line strict
$('.thumbnail').on('click', e => {
  // this is what we had before the solve,
  //$('.hero img').attr('src', e.target);

  const imgSrc = $(e.currentTarget).find('img').attr('src');  
  const imgAlt = $(e.currentTarget).find('img').attr('alt');
 
 $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
});
