# Installation Guide - Le Monde de Camille Theme

## Quick Start

### Prerequisites
- Publii application installed on your computer
- Download: https://getpublii.com/download/

### Installation Steps

#### Option 1: Download and Install (Recommended)

1. **Download the theme**
   - Download the complete theme folder

2. **Open Publii**
   - Launch the Publii application on your computer

3. **Access Theme Manager**
   - Click the three dots (⋮) in the top-right corner
   - Select **Themes**

4. **Add the theme**
   - Click the **+ Add theme** button
   - Navigate to and select the downloaded theme folder
   - Publii will automatically install the theme

5. **Activate the theme**
   - Go to **Site Settings** (left sidebar)
   - Click on **Theme**
   - Select "Le Monde de Camille" from the dropdown
   - Click **Save settings**

6. **Generate your site**
   - Click **Preview your changes** to see the theme in action
   - When satisfied, click **Sync your website** to publish

#### Option 2: Manual Installation

1. **Locate Publii themes folder**
   - **Windows**: `C:\Users\[username]\Documents\Publii\sites\[site-name]\input\themes\`
   - **macOS**: `~/Documents/Publii/sites/[site-name]/input/themes/`
   - **Linux**: `~/Documents/Publii/sites/[site-name]/input/themes/`

2. **Copy theme folder**
   - Copy the entire theme folder to the themes directory

3. **Restart Publii**
   - Close and reopen Publii application

4. **Activate the theme**
   - Follow steps 5-6 from Option 1 above

## Initial Configuration

After installing the theme, configure these essential settings:

### 1. Upload a Logo (Optional)
- Go to **Site Settings → Theme → General**
- Scroll to **Website logo**
- Upload your logo (recommended max height: 60px)

### 2. Configure Menus
- Go to **Menus** in the left sidebar
- Create a new menu or edit existing
- Add menu items (pages, links, etc.)
- Assign the menu to **Main menu** position
- Save changes

### 3. Set Up Sidebar
- Go to **Site Settings → Theme → Sidebar**
- Configure **Selected Posts** (choose a tag)
- Enable/disable **Authors section**
- Adjust **Number of authors** to display

### 4. Adjust Layout (Optional)
- Go to **Site Settings → Theme → Layout**
- Adjust **Main width** (default: 1200px)
- Adjust **Sidebar width** (default: 320px)

### 5. Customize Colors (Advanced)
- Navigate to `assets/css/style.css`
- Modify CSS variables in the `:root` section
- Save and regenerate your site

## Verification

To verify the theme is working correctly:

1. **Preview the site**
   - Click **Preview your changes** button
   - Check that the theme displays correctly
   - Test navigation, sidebar, and footer

2. **Create test content**
   - Create a test post with featured image
   - Add tags and author information
   - Preview to ensure everything displays properly

3. **Test responsive design**
   - Resize browser window
   - Check mobile and tablet views
   - Verify navigation works on all screen sizes

## Troubleshooting

### Theme doesn't appear in list
- Ensure theme folder is in correct directory
- Restart Publii application
- Check folder permissions

### Styling looks broken
- Clear browser cache
- Regenerate site (click Sync)
- Check for conflicting Custom CSS

### Images not displaying
- Enable responsive images in **Site Settings → Website Speed**
- Verify image files are uploaded correctly
- Check file permissions

## Next Steps

After successful installation:

1. **Review the [DOCUMENTATION.md](DOCUMENTATION.md)** for detailed customization options
2. **Create your content** (posts and pages)
3. **Customize the theme** to match your brand
4. **Test thoroughly** before publishing
5. **Sync your website** to go live

## Support

For help with installation or configuration:
- Check the full documentation: [DOCUMENTATION.md](DOCUMENTATION.md)
- Visit Publii docs: https://getpublii.com/docs/
- GitHub Issues: https://github.com/MatisseB/lmdc_template/issues

## Updates

To update the theme:
1. Download the latest version
2. Back up your current theme (if customized)
3. Replace the theme folder
4. Restart Publii
5. Regenerate your site
