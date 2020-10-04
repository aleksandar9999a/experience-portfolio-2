export const forms = {
    '.form__inner': {
        'max-width': '500px',
        'margin': '0 auto'
    },

    '.form__controls': {
        'position': 'relative',
        'padding': '10px 0'
    },

    '.form__row + .form__row': {
        'margin-top': '20px'
    },

    '.form__actions': {
        'margin': '40px 0'
    },

    '.form__images': {
        'display': 'flex',
        'flex-wrap': 'wrap',
        'justify-content': 'center',
    },

    '.form__tile': {
        'width': '140px',
        'height': '140px',
        'position': 'relative',

        'img': {
            'height': '100%',
            'width': '100%',
            'object-fit': 'cover'
        },

        '.form__image': {
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '0',
            'z-index': '2',
            'transition': 'opacity .1s',
        },

        '.form__image-actions': {
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '0',
            'z-index': '1',
            'transition': 'opacity .1s, z-index .1s',
            'opacity': '0',

            'button': {
                'margin': '20px 0 0',
                'padding': '15px',
                'height': '40px',
            }
        }
    },

    '.form__tile:hover': {
        '.form__image-actions': {
            'z-index': '3',
            'opacity': '1'
        },

        '.form__image': {
            'opacity': '0.5'
        },
    }
}