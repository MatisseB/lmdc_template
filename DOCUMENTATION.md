# Le Monde de Camille - Publii Theme Documentation

## Overview

Le Monde de Camille is a modern, clean, and responsive Publii theme designed to recreate the original Lemondedecamille WordPress website. This theme provides a professional blog layout with excellent typography, responsive design, and extensive customization options.

## Features

### Core Features
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Design**: Clean and minimalistic with attention to typography and spacing
- **SEO Optimized**: Built with SEO best practices in mind
- **Fast Loading**: Minimal CSS and optimized assets for quick page loads
- **Accessible**: Follows web accessibility standards

### Supported Publii Features
- Block Editor support
- Tag pages with images
- Author pages with images
- Search functionality
- Custom error pages (404)
- Custom comments support
- Embed consents
- Multiple menu positions (main menu and footer menu)
- Related posts
- Responsive images
- Custom HTML injection points

### Layout Options
- **Grid-based layout**: Uses CSS Grid for modern, flexible layouts
- **Sidebar**: Configurable sidebar with selected posts, featured posts, and authors
- **Customizable widths**: Adjust main content and sidebar widths through theme settings

## Installation

### Method 1: Direct Installation
1. Download the theme folder
2. Open Publii application
3. Go to **Tools → Themes**
4. Click **Add theme** button
5. Select the downloaded theme folder
6. Activate the theme from **Site Settings → Theme**

### Method 2: From GitHub
1. Clone or download the repository
2. Copy the theme folder to your Publii themes directory
3. Restart Publii
4. Activate the theme from **Site Settings → Theme**

## Configuration

### Theme Settings

The theme can be configured through Publii's interface under **Site Settings → Theme**.

#### Layout Settings
- **Main Width**: Default is 1200px - Controls the maximum width of the main content area
- **Sidebar Width**: Default is 320px - Controls the width of the sidebar

#### Sidebar Settings

**Selected Posts**
- **Source**: Choose a tag to display posts from
- **Number of posts**: Control how many posts to display (default: 3)

**Authors Section**
- **On / Off**: Enable or disable the authors section
- **Number of authors**: Display 1-10 authors (default: 5)

#### Fonts
- **Font size**: Adjust the root font size (1rem - 3rem, step 0.05)

#### Additional Settings
- **Logo Upload**: Upload a custom logo (recommended size: max height 60px)
- **Favicon Upload**: Upload a favicon file (16x16 pixels recommended)
- **Favicon Extension**: Choose between .ico or .png format

### Menu Configuration

The theme supports two menu positions:

1. **Main Menu**: Displayed in the header navigation
2. **Footer Menu**: Displayed in the footer area

To configure menus:
1. Go to **Menus** in Publii
2. Create or edit a menu
3. Assign it to either "Main menu" or "Footer menu" position

### Posts Per Page

Configure the number of posts displayed on different pages:
- **Posts per page**: Homepage listing (default: 12)
- **Tags posts per page**: Tag archive pages (default: 12)
- **Authors posts per page**: Author archive pages (default: 12)

### Post Options

Each post can be configured with:
- **Display Author Bio**: Enable/disable author biography section
- **Featured Image**: Add a featured image that displays at the top of posts
- **Main Tag**: Select a primary tag for the post
- **Excerpt**: Custom excerpt or auto-generated from content

### Page Options

Pages support the following options:
- **Display Author Bio**: Show/hide author information
- **Display Child Pages**: Show/hide subpages list

## Design Customization

### Color Scheme

The theme uses CSS variables for easy color customization. Main colors are defined in `assets/css/style.css`:

```css
:root {
    --primary-color: #2c3e50;     /* Dark blue for headings and main elements */
    --secondary-color: #e74c3c;   /* Red for accents and hover states */
    --text-color: #333;           /* Dark gray for body text */
    --light-bg: #f8f9fa;          /* Light gray for backgrounds */
    --border-color: #e1e8ed;      /* Light gray for borders */
}
```

To customize colors:
1. Open `assets/css/style.css`
2. Modify the CSS variables in the `:root` section
3. Save and regenerate your site

### Typography

The theme uses a system font stack for optimal performance:
```css
--font-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

Font sizes are:
- **h1**: 2.5rem
- **h2**: 2rem
- **h3**: 1.5rem
- **h4**: 1.25rem
- **h5**: 1.1rem
- **h6**: 1rem
- **Body**: 1rem (adjustable via theme settings)

### Custom CSS

To add custom CSS:
1. Go to **Site Settings → Custom CSS**
2. Add your custom styles
3. These will be appended to the main stylesheet

## Template Files

### Core Templates
- **index.hbs**: Homepage with post listing
- **post.hbs**: Single post template
- **page.hbs**: Single page template
- **404.hbs**: Error page
- **search.hbs**: Search results page
- **tag.hbs**: Tag archive page
- **tags.hbs**: All tags listing page
- **author.hbs**: Author archive page

### Partials
- **partials/head.hbs**: HTML head section
- **partials/navbar.hbs**: Header and navigation
- **partials/menu.hbs**: Menu structure (recursive for submenus)
- **partials/sidebar.hbs**: Sidebar content
- **partials/pagination.hbs**: Pagination controls
- **partials/footer.hbs**: Footer section
- **partials/subpages-list.hbs**: Child pages list

## Responsive Breakpoints

The theme uses the following breakpoints:
- **Desktop**: 1024px and above (full grid layout)
- **Tablet**: 768px - 1023px (stacked layout)
- **Mobile**: Below 768px (single column layout)

## Browser Support

The theme is tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

### Optimization Features
- CSS Grid for efficient layouts
- Lazy loading for images
- Responsive images with srcset
- Minimal JavaScript
- System fonts (no external font loading)
- Optimized asset loading

## Troubleshooting

### Sidebar not showing
- Check if you have assigned content to sidebar sections in theme settings
- Ensure authors section is enabled if you want to show authors

### Menu not displaying
- Go to **Menus** and ensure you've assigned a menu to the "Main menu" position
- Check that your menu has items added to it

### Images not loading
- Verify that responsive images are enabled in **Site Settings → Website Speed**
- Check image file paths and permissions

### Styling issues
- Clear browser cache and regenerate the site
- Check for Custom CSS that might be conflicting
- Verify theme files are not corrupted

## Credits

- **Base Theme**: Publii Blank Theme by TidyCustoms
- **Developer**: Matisse Brard
- **Original Inspiration**: Lemondedecamille website

## License

MIT License - Feel free to modify and use this theme for your projects.

## Support

For issues, questions, or contributions:
- GitHub Repository: https://github.com/MatisseB/lmdc_template
- Publii Documentation: https://getpublii.com/docs/

## Changelog

### Version 1.0.0 (2025-12-12)
- Initial release
- Modern responsive design
- Full Publii feature support
- Custom color scheme
- Optimized performance
- Comprehensive documentation
