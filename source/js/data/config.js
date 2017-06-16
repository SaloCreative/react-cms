let BASE = 'http://local.api.salocreative.co.uk';

if (process.env.NODE_ENV === 'production') {
    BASE = 'http://api.salocreative.co.uk';
}

if (process.env.NODE_ENV === 'staging') {
    BASE = 'http://staging.api.salocreative.co.uk';
}

export const config = {
    SITE_TITLE: 'Salo Creative CMS',
    BASE_URL: BASE,
    MEDIA_DIRECTORY: 'assets/',
    MEDIA_URL: `${ BASE }/assets/`,
    API_URL: `${ BASE }/api/v1/`,
    API_VERSION: '1',
    DIMENSION_TYPES: {
        'Measurement': 1,
        'Weight': 2
    }
};