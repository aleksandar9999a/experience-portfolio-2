export const fields = {
    '.file-field': {
        'position': 'absolute',
        'top': '0',
        'left': '30%',
        'width': '202px',
        'height': '45px',
        'opacity': '0',
        'cursor': 'pointer',
        'z-index': '1'
    },

    '.file-field ~ label': {
        'position': 'absolute',
        'top': '0',
        'left': '30%',
        'height': '13px',
        'width': '130px',
        'cursor': 'pointer',
        'z-index': '0',
        'color': '#08fdd8',
        'font-size': '11px',
        'letter-spacing': '3px',
        'border': '1px solid #08fdd8',
        'border-radius': '4px',
        'background': 'transparent',
        'text-transform': 'uppercase',
        'padding': '15px 35px',
        'transition': 'box-shadow .15s',
    },

    '.file-field:hover ~ label': {
        'box-shadow': '1px 1px 20px #08fdd841'
    },

    '.field': {
        'display': 'flex',
        'border': '1px solid transparent',
        'background': '#2b2b2b',
        'color': 'white',
        'width': '100%',
        'font-size': '16px',
        'padding': '20px',
        'transition': 'border-color .15s',
        'outline': 'none',
    },

    '.field--textarea': {
        'height': '150px',
        'padding': '20px 20px'
    },

    '.field:focus': {
        'border-color': '#08fdd8'
    },

    '.field:focus ~ label, .field:valid ~ label': {
        'top': '-15px',
        'left': '10px',
        'color': '#08fdd8'
    },

    'label': {
        'position': 'absolute',
        'top': '27px',
        'left': '21px',
        'color': '#fff',
        'transition': 'top .1s, left .1s, color .1s'
    }
}