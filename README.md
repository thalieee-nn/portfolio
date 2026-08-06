# Seanella Rose Cuenco — Portfolio Website

A personal portfolio website showcasing projects, technical skills, and professional information for Seanella Rose Cuenco, a Bachelor of Science in Information Technology student with a focus on Network and Security.

## 🌐 Live Preview

You can view the portfolio by opening `index.html` in your web browser, or by deploying it to GitHub Pages.

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Complete portfolio (HTML, CSS, and JS all in one file)
├── images/            # Project images and photos
│   ├── Pfp for home and about page.jpg
│   ├── Acadex Project.png
│   ├── Hiraya Project.png
│   ├── Petpalace project.png
│   ├── Portfolio Project.png
│   ├── RPG project.jpg
│   ├── CCNA Certificate.png
│   ├── (College) uc-logo.png
│   ├── (Highschool) SciHigh-logo.jpg
│   └── (Elementary) Easter-logo.jpg
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow for auto-deployment
└── README.md           # This file
```

## 🚀 Features

- **Single-Page Application Design**: Smooth navigation between Home, Gallery, and About sections
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Project Gallery**: Filterable project gallery showcasing coding projects, designs, and certificates
- **Contact Form**: Front-end contact form (ready for backend integration)
- **Accessibility**: Semantic HTML, proper ARIA labels, and keyboard navigation support

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom CSS with CSS variables for theming
- **JavaScript (Vanilla)**: No frameworks, plain JavaScript for functionality
- **Google Fonts**: Poppins and JetBrains Mono for typography

## 📦 Installation & Usage

1. **Clone or download this repository**
   ```bash
   git clone [repository-url]
   cd portfolio-website
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server in VS Code

3. **Deploy to GitHub Pages (Automatic)**
   - Push the repository to GitHub
   - The `.github/workflows/deploy.yml` workflow will automatically deploy to GitHub Pages
   - Go to Settings > Pages to see your deployed site
   - Your site will be live at `https://[username].github.io/repository-name`

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root{
  --bg:#ffffff;
  --bg-soft:#FFF6F9;
  --pink:#F8BBD0;
  --pink-dark:#F48FB1;
  --pink-deep:#EC7BA0;
  --ink:#2A2A2E;
  /* ... more variables */
}
```

### Updating Content
- **Personal Info**: Edit content in `index.html` (hero section, about section)
- **Projects**: Update project cards in the Home and Gallery sections
- **Skills**: Modify the Technical Skills section
- **Education**: Update the Education cards
- **Contact**: Change email, social links, and form fields

### Adding/Removing Projects
To add a new project to the gallery:
```html
<div class="project-card reveal in-view" data-category="coding">
  <div class="project-thumb-wrap">
    <img src="images/your-image.png" alt="Project Name">
  </div>
  <div class="project-body">
    <h3>Project Name</h3>
    <p>Project description here.</p>
  </div>
</div>
```

## 📧 Contact Form

The contact form is currently a front-end placeholder. To make it functional, integrate with one of these services:

- **Formspree**: Easy form backend for static sites
- **EmailJS**: Send emails directly from JavaScript
- **Netlify Forms**: Built-in form handling for Netlify deployments
- **Custom Backend**: Connect to your own server-side API

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Seanella Rose Cuenco**
- Bachelor of Science in Information Technology
- Major: Network and Security
- University of the Cordilleras

---

Built with ❤️ using HTML, CSS, and vanilla JavaScript.