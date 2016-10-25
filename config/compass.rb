require 'compass-flexbox'

# Environment by default is "devevelopment", unless you -e production
# FireSASS is enabled by default, unless you ^

css_dir = "src/files/assets/css"
images_dir = "src/files/assets"
javascripts_dir = "src/files/assets/js"
relative_assets = false
prefered_syntax = :scss

firesass = (environment == :production) ? false : :true
output_style = (environment == :production) ? :compressed : :compact
add_import_path = File.expand_path(File.join(File.dirname(__FILE__), "src", "files", "assets", "bower_components"))
