function scrollToCTA() {
      const ctaSection = document.getElementById('cta');
  ctaSection.scrollIntoView({ behavior: 'smooth' });
}


// function scrollToCTA() {
//   const ctaSection = document.getElementById('cta');
//   ctaSection.scrollIntoView({ behavior: 'smooth' });
// }


function interactArrow() {
  const arrow = document.querySelector('.down-arrow');
  
  // Optional: visual feedback
  arrow.style.transform = 'scale(1.3)';
  setTimeout(() => {
    arrow.style.transform = '';
  }, 300);

  // Scroll to CTA button (self-reference in this case)
  const button = document.querySelector('.cta-button');
  if (button) {
    button.scrollIntoView({ behavior: 'smooth' });
  }
}


function scrollToCTA() {
  const cta = document.getElementById('cta');
  if (cta) {
    cta.scrollIntoView({ behavior: 'smooth' });
  }
}
