document.addEventListener('DOMContentLoaded', function() {
  // Preloader
  const preloader = document.querySelector('.preloader');
  
  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1500);

  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
  });

  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('toggle');
    });
  });

  // Sticky Header
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Animate on Scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const animateOnScroll = () => {
    animateElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load

  // Feature Cards Animation
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate');
    }, index * 200);
  });

  // Book Search Functionality (Catalog Page)
  const searchInput = document.querySelector('.search-bar input');
  const bookCards = document.querySelectorAll('.book-card');
  
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      
      bookCards.forEach(card => {
        const title = card.querySelector('.book-content h3').textContent.toLowerCase();
        const author = card.querySelector('.book-author').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || author.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Contact Form Submission
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = contactForm.querySelector('input[name="name"]').value;
      const email = contactForm.querySelector('input[name="email"]').value;
      const message = contactForm.querySelector('textarea[name="message"]').value;
      
      // Here you would typically send the data to a server
      console.log({ name, email, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // 3D Book Hover Effect
  const books3d = document.querySelectorAll('.book-3d');
  
  books3d.forEach(book => {
    book.addEventListener('mousemove', (e) => {
      const rect = book.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleY = (x - centerX) / 20;
      const angleX = (centerY - y) / 20;
      
      book.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg)`;
    });
    
    book.addEventListener('mouseleave', () => {
      book.style.transform = 'rotateY(0) rotateX(0)';
    });
  });

  // Event Countdown Timer
  const eventDates = document.querySelectorAll('.event-date');
  
  if (eventDates.length > 0) {
    eventDates.forEach(eventDate => {
      const dateText = eventDate.textContent;
      const eventDateObj = new Date(dateText);
      const today = new Date();
      
      if (eventDateObj > today) {
        const diffTime = eventDateObj - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        eventDate.innerHTML += `<span class="countdown"> (in ${diffDays} days)</span>`;
      } else {
        eventDate.innerHTML += '<span class="countdown"> (Past Event)</span>';
      }
    });
  }

  // Image Modal for Gallery
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.querySelector('img').src;
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <img src="${imgSrc}" alt="Library Image">
        </div>
      `;
      
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
      
      modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = 'auto';
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.remove();
          document.body.style.overflow = 'auto';
        }
      });
    });
  });
});

// Add some dynamic content to the catalog page
function generateBookCards() {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      description: "A portrait of the Jazz Age in all of its decadence and excess, Gatsby captured the spirit of the author's generation and earned itself a permanent place in American mythology.",
      category: "Classic"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960.",
      category: "Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      description: "Nineteen Eighty-Four is a dystopian novel by English writer George Orwell published in 1949. The novel is set in Airstrip One, a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance and public manipulation.",
      category: "Dystopian"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      description: "Pride and Prejudice is a romantic novel by Jane Austen, first published in 1813. The story charts the emotional development of the protagonist, Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential.",
      category: "Romance"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      description: "The Hobbit is a fantasy novel and children's book by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
      category: "Fantasy"
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 3,
      description: "Moby-Dick is an 1851 novel by Herman Melville. The story tells the adventures of the wandering sailor Ishmael and his voyage on the whaling ship Pequod, commanded by Captain Ahab.",
      category: "Adventure"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      description: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945-1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst and alienation, and as a critique on superficiality in society.",
      category: "Coming-of-age"
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      description: "Brave New World is a dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist.",
      category: "Dystopian"
    }
  ];

  const catalogGrid = document.querySelector('.catalog-grid');
  
  if (catalogGrid) {
    books.forEach(book => {
      const ratingStars = '★'.repeat(book.rating) + '☆'.repeat(5 - book.rating);
      
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card animate-on-scroll';
      bookCard.innerHTML = `
        <div class="book-cover">
          <img src="${book.cover}" alt="${book.title}">
          <span class="book-badge">${book.category}</span>
        </div>
        <div class="book-content">
          <h3>${book.title}</h3>
          <p class="book-author">By ${book.author}</p>
          <p class="book-rating">${ratingStars}</p>
          <p class="book-desc">${book.description}</p>
          <a href="#" class="btn">Borrow</a>
        </div>
      `;
      
      catalogGrid.appendChild(bookCard);
    });
    


// Improved Search Functionality
function setupSearch() {
  const searchInput = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');
  const catalogGrid = document.querySelector('.catalog-grid');
  
  if (!searchInput || !catalogGrid) return;

  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const bookCards = document.querySelectorAll('.book-card');
    let hasResults = false;

    // Remove any existing no-results message
    const existingMessage = catalogGrid.querySelector('.no-results-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    if (searchTerm === '') {
      // Show all books if search is empty
      bookCards.forEach(card => {
        card.style.display = 'block';
      });
      catalogGrid.style.minHeight = '';
      return;
    }

    bookCards.forEach(card => {
      const title = card.querySelector('.book-content h3').textContent.toLowerCase();
      const author = card.querySelector('.book-author').textContent.toLowerCase();
      const desc = card.querySelector('.book-desc')?.textContent.toLowerCase() || '';
      const category = card.querySelector('.book-badge').textContent.toLowerCase();
      
      if (title.includes(searchTerm) || 
          author.includes(searchTerm) || 
          desc.includes(searchTerm) || 
          category.includes(searchTerm)) {
        card.style.display = 'block';
        hasResults = true;
      } else {
        card.style.display = 'none';
      }
    });

    // Show message if no results found
    if (!hasResults) {
      const message = document.createElement('p');
      message.className = 'no-results-message';
      message.textContent = 'No books found matching your search. Try different keywords.';
      message.style.textAlign = 'center';
      message.style.gridColumn = '1 / -1';
      message.style.padding = '2rem';
      message.style.color = 'var(--dark-brown)';
      catalogGrid.style.minHeight = '200px';
      catalogGrid.appendChild(message);
    } else {
      catalogGrid.style.minHeight = '';
    }
  }

  // Search on button click
  searchButton.addEventListener('click', performSearch);
  
  // Search on Enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // Initial search in case page loads with search term
  if (searchInput.value) {
    performSearch();
  }
}

// Call this function after generating book cards
function generateBookCards() {
  // ... (your existing book card generation code)

  // After book cards are generated, set up search
  setupSearch();
  
  // ... (rest of your existing code)
}

    
    // Re-initialize animate on scroll for new elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const animateOnScroll = () => {
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  }
}

// Call the function to generate book cards when the page loads
window.onload = generateBookCards;


// Countdown Timer Function
function startCountdown(targetId, targetDateStr) {
  const boxPrefix = id => `${id}-${targetId}`;
  const countdownId = `calendar-countdown-${targetId}`;

  function flip(boxId, value) {
    const box = document.getElementById(boxId);
    if (!box) return;
    const front = box.querySelector(".flip-front span");
    const back = box.querySelector(".flip-back span");

    back.textContent = value;
    box.querySelector(".flip-inner").style.transform = "rotateX(180deg)";
    setTimeout(() => {
      front.textContent = value;
      box.querySelector(".flip-inner").style.transform = "rotateX(0deg)";
    }, 300);
  }

  function updateCountdown() {
    const now = new Date();
    const target = new Date(targetDateStr);
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById(countdownId).innerHTML = "<p>Event Started!</p>";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    flip(boxPrefix("box-days"), d);
    flip(boxPrefix("box-hours"), h);
    flip(boxPrefix("box-minutes"), m);
    flip(boxPrefix("box-seconds"), s);
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Initialize countdowns for each event
document.addEventListener("DOMContentLoaded", function() {
  startCountdown("1", "April 22, 2025 10:00:00"); // Storytime event
  // Add more events as needed
});


// Enhanced FAQ functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isOpen = question.classList.contains('active');
    
    // Close all other FAQs
    faqQuestions.forEach(q => {
      if (q !== question) {
        q.classList.remove('active');
        q.nextElementSibling.style.maxHeight = null;
      }
    });
    
    // Toggle current FAQ
    question.classList.toggle('active');
    
    if (isOpen) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Open FAQ if URL has hash matching question ID
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const targetQuestion = document.querySelector(window.location.hash);
    if (targetQuestion && targetQuestion.classList.contains('faq-question')) {
      targetQuestion.click();
      setTimeout(() => {
        targetQuestion.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});



// Enhanced 3D Book Interaction
const books3d = document.querySelectorAll('.book-3d');

books3d.forEach(book => {
  book.addEventListener('mousemove', (e) => {
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    const rotateY = (x - centerX) / 20;
    const rotateX = (centerY - y) / 20;
    
    // Apply the rotation with perspective
    book.style.transform = `perspective(2000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });
  
  book.addEventListener('mouseleave', () => {
    // Smooth return to original position
    book.style.transition = 'transform 0.5s ease';
    book.style.transform = 'perspective(2000px) rotateY(0) rotateX(0)';
    
    // Remove transition after animation completes
    setTimeout(() => {
      book.style.transition = '';
    }, 500);
  });
});

// Function to fetch random featured book
function fetchRandomFeaturedBook() {
  const popularBooks = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      cover: "https://i.pinimg.com/736x/ee/c3/7c/eec37c45c2b005f960546946d242308a.jpg",
      description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from work, and Alicia shoots him five times in the face and then never speaks another word.",
      opening: "Alicia Berenson was thirty-three years old when she killed her husband...",
      rating: "★★★★☆",
      genre: "Psychological Thriller"
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      cover: "https://i.pinimg.com/736x/96/16/3e/96163ed69acef92e4efaea8cf1fc3bd1.jpg",
      description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
      opening: "Marsh is not swamp. Marsh is a space of light, where grass grows in water...",
      rating: "★★★★★",
      genre: "Literary Fiction"
    },
    {
      title: "Educated",
      author: "Tara Westover",
      cover: "https://i.pinimg.com/736x/00/cf/87/00cf87842a7d812210fb6d3069a9da0c.jpg",
      description: "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
      opening: "I'm standing on the red railway car that sits abandoned next to the barn...",
      rating: "★★★★★",
      genre: "Memoir"
    }
  ];

  const randomBook = popularBooks[Math.floor(Math.random() * popularBooks.length)];
  
  // Update the DOM with the random book
  document.querySelector('.book-cover-img').src = randomBook.cover;
  document.querySelector('.book-cover-img').alt = `${randomBook.title} Cover`;
  document.querySelector('.book-details h3').textContent = randomBook.title;
  document.querySelector('.book-details .author').textContent = `by ${randomBook.author}`;
  document.querySelector('.book-details .description').textContent = randomBook.description;
  document.querySelector('.first-page h3').textContent = randomBook.title;
  document.querySelector('.first-page p:first-of-type').textContent = `by ${randomBook.author}`;
  document.querySelector('.opening-line').textContent = randomBook.opening;
  document.querySelector('.rating').textContent = randomBook.rating;
  document.querySelector('.genre').textContent = randomBook.genre;
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', fetchRandomFeaturedBook);

