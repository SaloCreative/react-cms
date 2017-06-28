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

export const themeColours = {
    salo_primary: '#2d323f',
    salo_dark_blue: '#5264AE',
    salo_blue: '#00B5D2',
    salo_green: '#23cf70',
    salo_red: '#ed5565',
    lightest_grey: '#f2f2f2',
    light_grey: '#ebebeb',
    grey: '#d1d3d4',
    dark_grey: '#757575'

};

export const paginationStyles = {
    colour: '#333',
    activeColour: '#FFF',
    background: themeColours.light_grey,
    highlightBackground: themeColours.grey,
    activeBackground: themeColours.salo_blue
};