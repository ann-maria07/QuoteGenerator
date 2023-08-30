const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The greatest wealth is to live content with little. - Plato",
    "The best way to predict the future is to create it. - Peter Drucker",
    "It always seems impossible until it is done. - Nelson Mandela",
    "The future depends on what you do today. - Mahatma Gandhi",
    "If you're going through hell, keep going. - Winston Churchill",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Don't count the days, make the days count. - Muhammad Ali",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "The secret to getting ahead is getting started. - Mark Twain",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only thing standing between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The harder I work, the luckier I get. - Samuel Goldwyn",
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only source of knowledge is experience. - Albert Einstein",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The mind is everything. What you think you become. - Buddha",
    "Life is about making an impact, not making an income. - Kevin Kruse",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "If you really look closely, most overnight successes took a long time. - Steve Jobs",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
    "Great things never came from comfort zones. - Neil Strauss"
    // Add more quotes here
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  const quoteElement = document.getElementById("quote");
  const generateButton = document.getElementById("generate-btn");
  
  generateButton.addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
  });
  