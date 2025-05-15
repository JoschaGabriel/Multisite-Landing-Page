const linkElement = document.querySelector('#hotline'); 
const linkElementTollfree = document.querySelector('#tollfree');
const linkElementShare = document.querySelector('#share'); 

      linkElement.addEventListener('click', (event) => {
        if (window.innerWidth > 800) {
          // If screen width is greater than 800px
          event.preventDefault(); // Prevent default link behavior
          navigator.clipboard.writeText(linkElement.href)
            .then(() => {
              alert('Hotline Number copied to clipboard!'); 
            })
            .catch(err => {
              console.error('Failed to copy: ', err);
              alert('Failed to copy link to clipboard.'); 
            });
        } else {
          // If screen width is less than or equal to 800px
          // Allow default link behavior (open in new tab)
        }
      });

      linkElementShare.addEventListener('click', (event) => {
        if (window.innerWidth > 100) {
          // If screen width is greater than 800px
          event.preventDefault(); // Prevent default link behavior
          navigator.clipboard.writeText(linkElementShare.href)
            .then(() => {
              alert('Multipaga landing page link copied to clipboard!'); 
            })
            .catch(err => {
              console.error('Failed to copy: ', err);
              alert('Failed to copy link to clipboard.'); 
            });
        } else {
          // If screen width is less than or equal to 800px
          // Allow default link behavior (open in new tab)
        }
      });

      linkElementTollfree.addEventListener('click', (event) => {
          if (window.innerWidth > 800) {
            // If screen width is greater than 800px
            event.preventDefault(); // Prevent default link behavior
            navigator.clipboard.writeText(linkElementTollfree.href)
              .then(() => {
                alert('Tollfree number copied to clipboard!'); 
              })
              .catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy link to clipboard.'); 
              });
          } else {
            // If screen width is less than or equal to 800px
            // Allow default link behavior (open in new tab)
          }
        });