# 🚀 Quick Start Guide - Portfolio Website

## 📋 Prerequisites
- Node.js installed (v18 or higher recommended)
- npm (comes with Node.js)

## 🏃‍♂️ Running the Portfolio

### Local Development
```bash
# Start the development server
npm run dev
```
- Open your browser to `http://localhost:5173`
- Hot reload enabled - changes appear instantly!

### Production Build
```bash
# Build for production
npm run build
```
- Creates optimized files in the `dist/` folder
- Ready for deployment!

### Preview Production Build
```bash
# Preview the production build locally
npm run preview
```

## 🌐 Deploying to GitHub Pages

### First Time Setup
1. Make sure your GitHub repository is set up
2. Update `package.json` homepage field (already set to your repo)

### Deploy
```bash
# Build and deploy to GitHub Pages
npm run deploy
```
- Automatically builds and pushes to `gh-pages` branch
- Your site will be live at: `https://abhi9yadav.github.io/portfolio`

## 📁 Project Structure

```
portfolio_web/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx       # About section with typewriter effect
│   │   ├── ContactSection.jsx     # Contact information with all details
│   │   ├── CustomCursor.jsx       # Custom cursor with glow
│   │   ├── EducationSection.jsx   # Education & coding profiles (NEW!)
│   │   ├── Footer.jsx             # Enhanced footer
│   │   ├── HomeSection.jsx        # Hero section with contact pills
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── Portfolio.jsx          # Main portfolio wrapper
│   │   ├── ProjectsSection.jsx    # Projects showcase
│   │   └── SkillsSection.jsx      # Skills constellation
│   ├── constants/
│   │   └── themes.js              # Theme configurations
│   ├── hooks/
│   │   ├── useIntersectionObserver.js
│   │   └── useParticles.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Global styles & animations
├── public/
│   └── (your images here)
├── dist/                          # Production build (generated)
├── package.json
└── vite.config.js
```

## 🎨 Customization Guide

### Update Personal Info
Edit these files to update your information:

#### 1. Contact Information
- **File**: `src/components/HomeSection.jsx` (lines with phone & email)
- **File**: `src/components/ContactSection.jsx` (contact cards section)

#### 2. About Content
- **File**: `src/components/AboutSection.jsx`
- Update the `fullText` variable with your bio

#### 3. Projects
- **File**: `src/components/ProjectsSection.jsx`
- Modify the `projects` array with your project details

#### 4. Education & Coding Profiles
- **File**: `src/components/EducationSection.jsx`
- Update `education` and `codingProfiles` arrays

#### 5. Skills
- **File**: `src/components/SkillsSection.jsx`
- Modify the `skills` array

### Change Colors/Theme
- **File**: `src/constants/themes.js`
- Modify existing themes or add new ones

### Add New Sections
1. Create new component in `src/components/`
2. Import in `src/components/Portfolio.jsx`
3. Add ref and visibility state
4. Add to sections array
5. Add to useIntersectionObserver hook
6. Render in main component

## 🎯 Key Features Included

✅ **Hero Section** with animated badges and contact pills
✅ **About Section** with typewriter effect and robot animation
✅ **Skills Section** with physics-based constellation
✅ **Projects Section** with detailed cards and tech badges
✅ **Education Section** with academic journey
✅ **Coding Profiles** with LeetCode, Codeforces, GFG
✅ **Contact Section** with multiple contact methods
✅ **Custom Cursor** with glow effects
✅ **Smooth Animations** throughout
✅ **Responsive Design** for all devices
✅ **Custom Scrollbar** with gradient
✅ **Theme Switcher** (if enabled in navbar)

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1024px

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall dependencies
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Port Already in Use
```bash
# Kill the process using port 5173 or use a different port
npm run dev -- --port 3000
```

### Images Not Loading
- Ensure images are in the `public/` folder
- Use absolute paths: `/image.png` not `./image.png`
- Or import in component: `import image from '../assets/image.png'`

## 🔗 Important URLs

- **Development**: http://localhost:5173
- **GitHub Pages**: https://abhi9yadav.github.io/portfolio
- **GitHub Repo**: https://github.com/abhi9yadav/portfolio

## 💡 Tips

1. **Regular Commits**: Commit changes frequently to track progress
2. **Test Builds**: Run `npm run build` before deploying
3. **Image Optimization**: Compress images before adding to reduce load time
4. **SEO**: Update meta tags in `index.html` for better SEO
5. **Analytics**: Consider adding Google Analytics for visitor tracking

## 📧 Your Contact Info (Quick Reference)

- 📞 Primary: +91-9555235711
- 📞 Secondary: +91-8004803820
- 🎓 College: abhinav.20233011@mnnit.ac.in
- ✉️ Personal: abhinav.yadav.mnnit@gmail.com
- 💼 GitHub: https://github.com/abhi9yadav
- 🔗 LinkedIn: https://www.linkedin.com/in/abhinav-yadav-724b76291

## 🎓 Coding Profiles

- 💻 LeetCode: acb_abhi9 (2011 max rating)
- ⚔️ Codeforces: abhinav_yadav_cse (1209 max rating)
- 🚀 Total: 800+ problems solved

## 🚀 Next Steps

1. ✅ Run `npm run dev` to see your portfolio locally
2. ✅ Make any personal customizations you want
3. ✅ Test on different screen sizes
4. ✅ Build with `npm run build`
5. ✅ Deploy with `npm run deploy`
6. ✅ Share your portfolio link!

---

**Need help?** Check the main documentation in `PORTFOLIO_UPDATES.md` or reach out!

**Happy coding!** 🎉✨
