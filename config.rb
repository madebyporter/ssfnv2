require 'slim'

###
# Page options, layouts, aliases and proxies
###

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy '/this-page-has-no-template.html', '/template-file.html', locals: {
#  which_fake_page: 'Rendering a fake page with a local variable' }

###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
  # activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     'Helping'
#   end
# end

activate :directory_indexes

# activate :blog do |blog|
#   blog.name = "journal"
#   blog.prefix = "journal"
#   blog.permalink = "{category}/{title}"
#   blog.layout = "journal_layout"
#   blog.summary_separator = /SPLIT_SUMMARY_BEFORE_THIS/
#   blog.default_extension = ".markdown.slim"
# end

# activate :blog do |blog|
#   blog.name = "projects"
#   blog.prefix = "projects"
#   blog.permalink = "{category}/{title}"
#   blog.layout = "projects_layout"
#   blog.summary_separator = /SPLIT_SUMMARY_BEFORE_THIS/
#   blog.default_extension = ".markdown.slim"
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
