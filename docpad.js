// DocPad Configuration File
// http://docpad.org/docs/config

// Define the DocPad Configuration
var docpadConfig = {
    localeCode: 'en',
    enableUnlistedPlugins: false,
    enabledPlugins: {
        eco: true,
        livereload: false,
        frontend: true,
        marked: true,
        partials: true
    },
    templateData: {
        site: {
            name: "WebPlatform",
            title_append: " · WebPlatform.org",
            tagline: "Your Web, documented",
            url: "http://www.webplatform.org",
            title: "Web Platform Docs"
        }
    },
    port: 9003
};

// Export the DocPad Configuration
module.exports = docpadConfig;
