# GreenSpring Website

A sleek, professional website for GreenSpring Management & Marketing consulting firm.

## Project Structure

```
Green Spring Website/
├── index.html              # Homepage
├── about.html              # About page  
├── services.html           # Services page
├── case-studies.html       # Case studies/results page
├── contact.html            # Contact page
├── styles/
│   └── main.css           # Main stylesheet with GreenSpring branding
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # All image assets
│   ├── greenspring-logo.png
│   ├── john-leone-linkedin.jpeg
│   └── seaview-linkedin-banner.jpeg
├── docs/                  # Documentation and reference files
│   ├── project-discovery.md
│   ├── linkedin-profile.md
│   └── file-organization.md
└── README.md              # This file
```

## Design Features

### Branding
- **Colors**: Black (#0a0a0a), Green (#22c55e), Blue (#3b82f6)
- **Typography**: Inter font family for modern, clean look
- **Theme**: Circular design elements throughout
- **Logo**: GreenSpring logo with gradient circle design

### Key Design Elements
- Animated circular elements in hero section
- Gradient text effects for emphasis
- Card-based layouts with subtle shadows
- Responsive grid systems
- Smooth scrolling navigation
- Counter animations for statistics
- Professional color scheme with dark theme

### Pages Included
1. **Homepage** (`index.html`)
   - Hero section with animated circles
   - Services overview
   - Results/testimonials preview
   - Call-to-action sections

2. **About Page** (`about.html`)
   - Personal story section
   - Philosophy and approach
   - Credentials and achievements
   - Mission and values

3. **Contact Page** (`contact.html`)
   - Comprehensive contact form
   - Contact information
   - FAQ section
   - Response expectations

## Technical Features

### CSS Features
- CSS Grid and Flexbox layouts
- CSS custom properties (variables) for consistent theming
- Smooth animations and transitions
- Mobile-first responsive design
- Modern CSS techniques (backdrop-filter, gradients)

### JavaScript Features
- Mobile navigation toggle
- Smooth scrolling between sections
- Scroll-based navbar effects
- Intersection Observer for scroll animations
- Counter animations for statistics
- Form handling (placeholder)
- Performance optimizations with debouncing

## Next Steps

### Content Needed
- [ ] Actual business credentials and achievements
- [ ] Client testimonials and case studies
- [ ] Professional headshots and company photos
- [ ] Specific service descriptions
- [ ] Actual contact information

### Additional Pages to Create
- [ ] `services.html` - Detailed service offerings
- [ ] `case-studies.html` - Success stories and results
- [ ] `resources.html` - Blog/insights (optional)

### Technical Enhancements
- [ ] Add GreenSpring logo to images folder
- [ ] Implement contact form backend
- [ ] Add calendar booking integration
- [ ] Optimize images for web
- [ ] Add meta tags for SEO
- [ ] Set up analytics tracking

### Hosting Setup

#### GitHub Pages Deployment
This project is configured for GitHub Pages hosting:

1. **Create GitHub Repository**
   ```bash
   # After creating repo on GitHub, add remote origin
   git remote add origin https://github.com/YOUR_USERNAME/greenspring-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save settings

3. **Custom Domain Setup** (Optional)
   - Add CNAME file with your domain
   - Configure DNS settings at your domain registrar
   - Point to: `YOUR_USERNAME.github.io`

#### Alternative Hosting Options
- **Netlify** - Drag and drop deployment or Git integration
- **Vercel** - Connect GitHub repository for automatic deployments  
- **Cloudflare Pages** - Git integration with global CDN

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## Git Workflow

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit: GreenSpring website with responsive design and branding"
```

### Regular Development
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### GitHub Pages Deployment
- Automatic deployment on push to main branch
- Live site available at: `https://YOUR_USERNAME.github.io/greenspring-website/`
- Custom domain supported via CNAME file

## Development
To work on this project locally:
1. Open the files in VS Code or your preferred editor
2. Use Live Server extension for local development
3. Make changes to HTML, CSS, and JS files as needed
4. Test across different screen sizes

## Assets Used
- `images/john-leone-linkedin.jpeg` - Professional headshot
- `images/seaview-linkedin-banner.jpeg` - Background/workspace image
- `images/greenspring-logo.png` - Main logo (PNG format)
- `images/greenspring-favicon.jpeg` - Favicon for browser tabs
- `docs/linkedin-profile.md` - Source data for content population

## Color Palette
- **Primary Green**: #22c55e
- **Primary Blue**: #3b82f6  
- **Dark Background**: #0a0a0a
- **Dark Secondary**: #1a1a1a
- **Text Primary**: #ffffff
- **Text Secondary**: #a1a1aa
- **Text Muted**: #71717a