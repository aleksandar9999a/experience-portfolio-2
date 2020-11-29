import { Injectable } from "exf-ts";

@Injectable()
export default class Styles {
  buttons = {
    'button': {
        'height': '50px',
        'color': '#08fdd8',
        'font-size': '11px',
        'letter-spacing': '3px',
        'border': '1px solid #08fdd8',
        'border-radius': '4px',
        'background': 'transparent',
        'text-transform': 'uppercase',
        'padding': '15px 35px',
        'transition': 'box-shadow .15s',
        'cursor': 'pointer'
    },

    'button:hover': {
        'box-shadow': '1px 1px 20px #08fdd841'
    },

    'a': {
        'color': 'inherit',
        'font-size': '16px',
        'transition': 'opacity .1s'
    },

    'a:hover': {
        'opacity': '0.8'
    },

    '.link': {
        'padding': '15px 35px',
        'transition': 'transform .15s',
        'font-size': '11px',
        'margin-right': '25px',
        'text-transform': 'uppercase',
        'display': 'inline-block'
    },

    '.link:hover': {
        'transform': 'scale(1.03)',
    }
  }

  fields = {
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
        'border': '1px solid transparent',
        'background': '#2b2b2b',
        'color': 'white',
        'width': '100%',
        'font-size': '16px',
        'padding': '20px',
        'transition': 'border-color .15s',
        'outline': 'none',
        'box-sizing': 'border-box'
    },

    '.field--textarea': {
        'min-height': '150px',
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

  forms = {
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

  sectionPrimary = {
    'display': 'flex',
    'justify-content': 'center',
    'text-align': 'center',

    'h2': {
        'font-size': '40px',
        'color': '#08fdd8'
    },

    '.section__inner': {
        'margin-top': '50px',
        'width': '100%',
        'height': '100%'
    },

    '.section__head': {
        'max-width': '70vw',
        'margin': '0 auto 80px',
        'color': '#fff'
    },

    '.section__body': {
        'margin': 'auto',
        'display': 'flex',
        'justify-content': 'center',
        'max-width': '100vw'
    },

    'exf-timeline': {
        'max-width': '100%'
    }
  }
}