/*
 * Custom function used to generate the output of the theme variables; more about it can be found at https://getpublii.com/dev/theme-variables/
 */

var generateThemeVariables = function(params) {
   let output = '';

      output += ` 
         :root {
             --main-width:   ${params.mainWidth};
             --sidebar-width:  ${params.sidebarWidth};
             --primary-color: #2c3e50;
             --secondary-color: #e74c3c;
             --text-color: #333;
             --light-bg: #f8f9fa;
             --border-color: #e1e8ed;
             --font-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
         }`;  

   return output;
}

module.exports = generateThemeVariables;