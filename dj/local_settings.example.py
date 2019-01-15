import sys
import os


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LOCAL_APPS = [
    'webpack_loader'
]

# Webpack loader
# https://github.com/owais/django-webpack-loader
WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(BASE_DIR, 'ux', 'config', 'webpack-stats.json'),
    }
}
