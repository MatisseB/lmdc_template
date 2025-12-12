# Quick Reference Guide - Le Monde de Camille Theme

This guide provides quick answers to common tasks and questions.

## Table of Contents
- [Theme Settings](#theme-settings)
- [Customization](#customization)
- [Content Management](#content-management)
- [Troubleshooting](#troubleshooting)

---

## Theme Settings

### How to access theme settings?
**Path**: Site Settings → Theme

### Change logo
1. Go to **Site Settings → Theme → General**
2. Scroll to **Website logo**
3. Click upload and select your logo file
4. Recommended: max height 60px, transparent PNG

### Change colors
1. Open `assets/css/style.css`
2. Find the `:root` section (around line 2-10)
3. Modify these variables:
   - `--primary-color`: Main color for headings
   - `--secondary-color`: Accent color for links/hover
   - `--text-color`: Body text color
   - `--light-bg`: Background color for sidebar
   - `--border-color`: Border lines color
4. Save and regenerate your site

### Adjust layout width
1. Go to **Site Settings → Theme → Layout**
2. Modify:
   - **Main width**: Default 1200px (main content area)
   - **Sidebar width**: Default 320px (sidebar area)
3. Save settings

### Change font size
1. Go to **Site Settings → Theme → Fonts**
2. Adjust **Font size** slider (1 - 3rem)
3. Default is 1rem
4. Save settings

---

## Customization

### Add custom CSS
1. Go to **Site Settings → Custom CSS**
2. Add your CSS rules
3. Example:
   ```css
   .post-title {
       color: #ff0000;
   }
   ```
4. Save and regenerate

### Create a menu
1. Go to **Menus** (left sidebar)
2. Click **+ New Menu**
3. Add menu items (pages, tags, custom links)
4. Assign to position:
   - **Main menu**: Header navigation
   - **Footer menu**: Footer links
5. Save menu

### Configure sidebar
1. Go to **Site Settings → Theme → Sidebar**
2. Settings:
   - **Selected Posts Source**: Choose a tag to display posts from
   - **Number of posts**: How many to show (default: 3)
   - **Authors On/Off**: Enable/disable authors section
   - **Number of authors**: Display 1-10 authors (default: 5)

### Upload favicon
1. Go to **Site Settings → Theme → Additional**
2. Click **Upload favicon file**
3. Upload your favicon (16x16px recommended)
4. Select **Favicon extension** (.ico or .png)
5. Save settings

---

## Content Management

### Create a new post
1. Click **Posts** in left sidebar
2. Click **+ New Post**
3. Fill in:
   - Title
   - Content (use block editor)
   - Featured image (recommended)
   - Tags
   - Main tag (for display)
4. Save or publish

### Add featured image to post
1. Open/create a post
2. In right sidebar, find **Featured image**
3. Click **Select image** or drag & drop
4. Add caption and credits (optional)
5. Save post

### Create a page
1. Click **Pages** in left sidebar
2. Click **+ New Page**
3. Fill in title and content
4. Configure page options:
   - Display author bio
   - Display child pages
5. Save or publish

### Create author bio
1. Go to **Settings → Authors**
2. Select or create an author
3. Fill in:
   - Name
   - Avatar (upload image)
   - Bio/Description
   - Website URL
4. Save author

### Add tags
1. When creating/editing a post
2. In right sidebar, find **Tags**
3. Type tag name and press Enter
4. Select a **Main tag** for primary display
5. Save post

---

## Troubleshooting

### Theme doesn't show up
**Solution**:
- Ensure theme folder is in correct directory
- Restart Publii application
- Check folder has all required files (config.json, etc.)

### Menu not displaying
**Solution**:
- Go to **Menus** and create a menu
- Add menu items
- Assign menu to "Main menu" position
- Save menu and regenerate site

### Sidebar is empty
**Solution**:
- Go to **Site Settings → Theme → Sidebar**
- Select a tag for "Selected Posts"
- Enable "Authors" section
- Save settings and regenerate

### Images not loading
**Solution**:
- Enable **Responsive images** in Site Settings → Website Speed
- Check image file formats (JPG, PNG, GIF supported)
- Verify images are uploaded correctly
- Clear cache and regenerate

### Styling looks broken
**Solution**:
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Click **Preview your changes** to regenerate
- Check for Custom CSS conflicts
- Verify style.css file exists in assets/css/

### Featured image not showing
**Solution**:
- Ensure image is uploaded in post settings
- Check if featured image is selected
- Verify responsive images are enabled
- Check file permissions

### Search not working
**Solution**:
- Ensure **Search page** is created (Site Settings → Features)
- Enable search in theme config
- Install search plugin if using custom search
- Regenerate site

### Footer menu missing
**Solution**:
- Create a menu in **Menus**
- Add menu items
- Assign to **Footer menu** position
- Save and regenerate

---

## Quick Commands

### Preview changes
Click **Preview your changes** button (top right)

### Publish site
Click **Sync your website** button (top right)

### Regenerate site
1. Click preview or sync
2. Publii regenerates all files
3. Changes take effect

### View generated HTML
1. After preview/sync
2. Navigate to: `Documents/Publii/sites/[site-name]/preview/` (or `output/`)
3. Open HTML files in browser

---

## Common CSS Customizations

### Change link color
```css
a {
    color: #your-color;
}
a:hover {
    color: #your-hover-color;
}
```

### Change heading fonts
```css
h1, h2, h3, h4, h5, h6 {
    font-family: 'Your Font', sans-serif;
}
```

### Hide sidebar on mobile
```css
@media (max-width: 768px) {
    aside {
        display: none;
    }
}
```

### Change button style
```css
.button {
    background: #your-color;
    border-radius: 20px;
}
```

---

## Keyboard Shortcuts (Publii)

- `Ctrl/Cmd + S`: Save post/page
- `Ctrl/Cmd + P`: Preview changes
- `Ctrl/Cmd + E`: Edit selected post
- `Ctrl/Cmd + N`: New post

---

## Resources

- **Full Documentation**: [DOCUMENTATION.md](DOCUMENTATION.md)
- **Installation Guide**: [INSTALL.md](INSTALL.md)
- **Publii Docs**: https://getpublii.com/docs/
- **Theme Support**: https://github.com/MatisseB/lmdc_template/issues

---

## Need More Help?

1. Check the [full documentation](DOCUMENTATION.md)
2. Search [Publii forums](https://forum.getpublii.com/)
3. Open an [issue on GitHub](https://github.com/MatisseB/lmdc_template/issues)
4. Review [Publii's documentation](https://getpublii.com/docs/)

---

**Last Updated**: December 12, 2025  
**Version**: 1.0.0
