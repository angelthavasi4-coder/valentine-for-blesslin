# Be My Valentine Website 💕

A beautiful, interactive Valentine's Day website to ask your special someone to be your Valentine!

## Features

✨ **Interactive Elements:**
- Fun button animations (the "No" button runs away!)
- Growing "Yes" button with each "No" attempt
- Confetti celebration when they say yes
- Floating hearts background
- Clickable envelope with love letter
- Photo gallery with reveal animations
- Easter egg surprises
- Future date ideas
- Background music support

💖 **Beautiful Design:**
- Smooth animations
- Romantic color scheme
- Mobile responsive
- Custom fonts from Google Fonts

## Files Included

1. **index.html** - Main HTML structure
2. **styles.css** - All styling and animations
3. **script.js** - Interactive JavaScript functionality
4. **README.md** - This file

## Setup Instructions

### Option 1: Simple Local Hosting

1. **Download all files** to a folder on your computer
2. **Add your photos** (optional):
   - Name your photos: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg`
   - Place them in the same folder as the HTML file
3. **Add background music** (optional):
   - Add a file named `background-music.mp3` in the same folder
   - Or remove the audio element from the HTML if you don't want music
4. **Open** `index.html` in your web browser

### Option 2: Host Online (Free Options)

#### **GitHub Pages** (Recommended)
1. Create a GitHub account at https://github.com
2. Create a new repository
3. Upload all files (index.html, styles.css, script.js, and your photos)
4. Go to Settings → Pages
5. Select "main" branch and click Save
6. Your site will be live at `https://yourusername.github.io/repositoryname`

#### **Netlify** (Easiest)
1. Go to https://netlify.com
2. Drag and drop your folder
3. Get instant live URL

#### **Vercel**
1. Go to https://vercel.com
2. Import your project from GitHub or upload directly
3. Deploy with one click

### Option 3: Use a Simple Web Server

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

## Customization Guide

### 1. Personalize the Text

**In `index.html`:**
- Line 26: Change "Hey Blesslin!" to your partner's name
- Lines 91-99: Edit the love letter content
- Line 241: Change "Your Angel Gundu" to your name

### 2. Add Your Photos

Replace the placeholder photos with your own:
- `photo1.jpg` - Unforgettable Day
- `photo2.jpg` - Best Day Ever
- `photo3.jpg` - Making Memories
- `photo4.jpg` - Made For Each Other
- `photo5.jpg` - Fun Times Together
- `photo6.jpg` - Perfect Together

Each photo should ideally be:
- **Size:** 800x800 pixels (square format works best)
- **Format:** JPG or PNG
- **File size:** Under 500KB for faster loading

### 3. Change Colors

**In `styles.css`** (lines 8-14), modify the color variables:

```css
:root {
    --pink: #FFB3D9;        /* Main pink
    --soft-pink: #FFE5F1;   /* Light pink background
    --coral: #FF8FAB;       /* Coral accent
    --beige: #FFF5E4;       /* Beige background
    --soft-red: #FF6B9D;    /* Red/pink for headings
    --cream: #FFFEF9;       /* Cream for cards
    --text: #5A4A4A;        /* Text color
}
```

### 4. Add Background Music

1. Find a romantic song (ensure you have rights to use it)
2. Convert to MP3 format
3. Name it `background-music.mp3`
4. Place in the same folder as index.html

**Free music resources:**
- YouTube Audio Library
- Free Music Archive
- Incompetech

### 5. Customize Date Ideas

**In `index.html`** (lines 157-187), edit the date ideas:

```html
<div class="date-item">
    <div class="icon">🍕</div>
    <h4>Your Custom Title</h4>
    <p>Your description</p>
</div>
```

### 6. Change Easter Egg Messages

**In `index.html`** (lines 197-199):

```html
<div class="surprise-message" id="surprise1">Your custom message! 🌟</div>
```

## Browser Compatibility

✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

## Tips for Best Results

1. **Test on mobile** - Many people will view on phones
2. **Compress photos** - Use tools like TinyPNG to reduce file sizes
3. **Preview before sharing** - Make sure everything works
4. **Share the link** - Send via text, email, or social media

## Troubleshooting

**Photos not showing?**
- Check file names match exactly (case-sensitive)
- Ensure photos are in the same folder as index.html

**Music not playing?**
- Most browsers block autoplay - users need to click the 🎵 button
- Ensure the music file is named correctly
- Check the file format is MP3

**Animations not smooth?**
- Try a different browser
- Check internet connection if hosted online

## License

Feel free to use and modify this for your personal Valentine's Day! 💕

## Credits

Made with love using:
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Righteous, DM Sans, Fredoka)

---

**Happy Valentine's Day! 💖**

Made with ❤️ for spreading love and joy!
